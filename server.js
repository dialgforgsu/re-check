import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.resolve(__dirname, 'recheck.sqlite');

const PRODUCTS_DEF = [
  { id:'flyway-desktop', name:'Flyway Desktop', urls:['https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html'] },
  { id:'flyway-cli', name:'Flyway CLI', urls:['https://documentation.red-gate.com/fd/release-notes-for-flyway-engine-179732572.html'] },
  { id:'monitor', name:'Redgate Monitor', urls:['https://documentation.red-gate.com/monitor14/redgate-monitor-14-1+-release-notes-317489801.html'] },
  { id:'clone', name:'SQL Clone', urls:['https://documentation.red-gate.com/clone/release-notes-and-other-versions/sql-clone-5-release-notes'] },
  { id:'sqlprompt', name:'SQL Prompt', urls:['https://documentation.red-gate.com/sp/release-notes-and-other-versions/sql-prompt-11-3-release-notes'] },
  { id:'sqlcmp', name:'SQL Compare', urls:['https://documentation.red-gate.com/sc/release-notes-and-other-versions/sql-compare-16-0-release-notes'] },
  { id:'sqldcmp', name:'SQL Data Compare', urls:['https://documentation.red-gate.com/sdc/release-notes-and-other-versions/sql-data-compare-16-0-release-notes'] },
  { id:'tdm', name:'Test Data Manager', urls:[
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/subsetting/subsetter-release-notes',
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/anonymization/anonymize-release-notes',
      'https://documentation.red-gate.com/testdatamanager/graphical-user-interface-gui/gui-release-notes',
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/using-workflows-rgworkflow/workflows-release-notes'
    ] }
];

const JINA_HEADERS = {
  'Accept': 'text/plain',
  'X-Return-Format': 'markdown',
  'X-No-Cache': 'true',
  'X-With-Links-Summary': 'false',
  'X-Target-Selector': '#main-content, .wiki-content, .confluence-information-macro, #content, article, main, [data-testid="wiki-content"], .page-body',
  'X-Remove-Selector': '#sidebar, .ia-splitter-left, .ia-fixed-sidebar, [data-type="aside"], .navColumn, .pageSection, #navigation, .aui-sidebar, .page-sidebar, .side-bar, nav, footer, #breadcrumb-section, .breadcrumb-container, [aria-label="Page tree"], [aria-label="navigation"], .theme-navigation, .toc-macro, .panel, .columnLayout'
};

let db;

async function openDb(){
  if(db) return db;
  db = await open({ filename: DB_FILE, driver: sqlite3.Database });
  await db.exec('PRAGMA journal_mode = WAL;');
  await db.exec('CREATE TABLE IF NOT EXISTS source_snapshots (url TEXT PRIMARY KEY, productId TEXT, hash TEXT, lastFetchedAt INTEGER, lastChangedAt INTEGER, rawBody TEXT)');
  return db;
}

function sha256(input){
  return crypto.createHash('sha256').update(input, 'utf8').digest('hex');
}

async function fetchSourceContent(url){
  const strategies = [
    async () => {
      const res = await fetch(`https://r.jina.ai/${url}`, { headers: JINA_HEADERS, cache:'no-store', signal:AbortSignal.timeout(30000) });
      if(res.ok){ const text = await res.text(); if(text && text.length > 200) return text; }
      throw new Error('Jina no content');
    },
    async () => {
      const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { cache:'no-store', signal:AbortSignal.timeout(20000) });
      if(res.ok){ const j = await res.json(); if(j?.contents && j.contents.length > 200) return j.contents; }
      throw new Error('Allorigins no content');
    },
    async () => {
      const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`, { cache:'no-store', signal:AbortSignal.timeout(20000) });
      if(res.ok){ const text = await res.text(); if(text && text.length > 200) return text; }
      throw new Error('Corsproxy no content');
    }
  ];

  let lastError;
  for(const fn of strategies){
    try{ return await fn(); } catch(e){ lastError = e; }
  }
  throw new Error(lastError?.message || 'Fetch failed');
}

async function upsertSourceSnapshot(productId, url, rawBody){
  const hash = sha256(rawBody);
  const now = Date.now();
  const existing = await db.get('SELECT hash FROM source_snapshots WHERE url = ?', [url]);

  if(existing?.hash === hash){
    await db.run('UPDATE source_snapshots SET lastFetchedAt=?, productId=? WHERE url=?', [now, productId, url]);
    return {changed:false};
  }

  if(existing){
    await db.run('UPDATE source_snapshots SET hash=?, lastFetchedAt=?, lastChangedAt=?, rawBody=?, productId=? WHERE url=?', [hash, now, now, rawBody, productId, url]);
  } else {
    await db.run('INSERT INTO source_snapshots(url, productId, hash, lastFetchedAt, lastChangedAt, rawBody) VALUES(?,?,?,?,?,?)', [url, productId, hash, now, now, rawBody]);
  }

  return {changed:true};
}

async function fetchProduct(productId){
  const product = PRODUCTS_DEF.find(p=>p.id===productId);
  if(!product) throw new Error('Unknown product');

  const statuses = [];
  for(const url of product.urls){
    try{
      const raw = await fetchSourceContent(url);
      const up = await upsertSourceSnapshot(productId, url, raw);
      statuses.push({url, status: up.changed ? 'updated' : 'unchanged'});
    } catch(e){
      statuses.push({url, status:'error', message:e.message});
    }
  }
  return statuses;
}

const app = express();
app.use(express.json());
app.use((req,res,next)=>{ res.set('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000 ws://localhost:3000 https://clients4.google.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none';"); next(); });
app.use(express.static(path.join(__dirname)));
app.get('/', (req,res)=>res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api/products', (req,res)=>res.json(PRODUCTS_DEF));
app.get('/api/status', async (req,res)=>{ await openDb(); const rows = await db.all('SELECT * FROM source_snapshots ORDER BY lastFetchedAt DESC'); res.json(rows); });
app.get('/api/fetch/:productId', async (req,res)=>{ try{ await openDb(); const result = await fetchProduct(req.params.productId); res.json({productId:req.params.productId, result}); } catch(e){ res.status(400).json({error:e.message}); } });
app.get('/api/raw/:productId', async (req,res)=>{ await openDb(); const rows = await db.all('SELECT url, rawBody, lastChangedAt, lastFetchedAt FROM source_snapshots WHERE productId = ?', [req.params.productId]); res.json(rows); });

const PORT = 3000;
openDb().then(()=>app.listen(PORT, ()=>console.log(`Server listening on http://localhost:${PORT}`))).catch(err=>{ console.error('DB init failed', err); process.exit(1); });
