import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const DB_FILE    = path.resolve(__dirname, 'recheck.sqlite');
const RN_FILE    = path.resolve(__dirname, 'release_notes.md');

const PRODUCTS_DEF = [
  { id:'flyway-desktop', name:'Flyway Desktop',      urls:['https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html'] },
  { id:'flyway-cli',     name:'Flyway CLI',           urls:['https://documentation.red-gate.com/fd/release-notes-for-flyway-engine-179732572.html'] },
  { id:'monitor',        name:'Redgate Monitor',      urls:['https://documentation.red-gate.com/monitor14/redgate-monitor-14-1+-release-notes-317489801.html'] },
  { id:'clone',          name:'SQL Clone',            urls:['https://documentation.red-gate.com/clone/release-notes-and-other-versions/sql-clone-5-release-notes'] },
  { id:'sqlprompt',      name:'SQL Prompt',           urls:['https://documentation.red-gate.com/sp/release-notes-and-other-versions/sql-prompt-11-3-release-notes'] },
  { id:'sqlcmp',         name:'SQL Compare',          urls:['https://documentation.red-gate.com/sc/release-notes-and-other-versions/sql-compare-16-0-release-notes'] },
  { id:'sqldcmp',        name:'SQL Data Compare',     urls:['https://documentation.red-gate.com/sdc/release-notes-and-other-versions/sql-data-compare-16-0-release-notes'] },
  { id:'tdm',            name:'Test Data Manager',    urls:[
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/subsetting/subsetter-release-notes',
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/anonymization/anonymize-release-notes',
      'https://documentation.red-gate.com/testdatamanager/graphical-user-interface-gui/gui-release-notes',
      'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/using-workflows-rgworkflow/workflows-release-notes',
  ] }
];

// Build a flat URL→productId lookup
const URL_TO_PRODUCT = {};
PRODUCTS_DEF.forEach(p => p.urls.forEach(u => { URL_TO_PRODUCT[u] = p.id; }));

const JINA_HEADERS = {
  'Accept': 'text/plain',
  'X-Return-Format': 'markdown',
  'X-No-Cache': 'true',
  'X-With-Links-Summary': 'false',
  'X-Target-Selector': '#main-content, .wiki-content, .confluence-information-macro, #content, article, main, [data-testid="wiki-content"], .page-body',
  'X-Remove-Selector': '#sidebar, .ia-splitter-left, .ia-fixed-sidebar, [data-type="aside"], .navColumn, .pageSection, #navigation, .aui-sidebar, .page-sidebar, .side-bar, nav, footer, #breadcrumb-section, .breadcrumb-container, [aria-label="Page tree"], [aria-label="navigation"], .theme-navigation, .toc-macro, .panel, .columnLayout'
};

/* ─────────────────────────────────────────────
   PARSER
───────────────────────────────────────────── */
const VER_RE  = /\b(\d+\.\d+(?:\.\d+){0,3}(?:[-.]?(?:beta|rc|alpha|preview)\s*\d*)?)\b/i;
const DATE_RE = /((?:\d{1,2}(?:st|nd|rd|th)?\s+)?(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)[\s,\.]+(?:\d{1,2}(?:st|nd|rd|th)?[,\s]+)?\d{4}|\d{4}[-\/]\d{2}[-\/]\d{2}|\d{1,2}[-\/]\d{1,2}[-\/]\d{4})/i;
const NOISE_RE = /^(skip to|on this page|table of contents|contents|navigation|edit this page|copy link|print\s*$|share\s*$|send feedback|last modified|created by|owned by|labels:|space:|home\s*$|search\s*$|log in|sign in|sign up|×\s*$|close\s*$|menu\s*$|breadcrumb|was this helpful|yes\s*$|no\s*$|page last updated|published\s+\d)/i;
const GLOBAL_IGNORE = [
  /^internal\s+(fix(es)?\s+and\s+improvement|updates?|changes?)\.?$/i,
  /^internal\s+(fix|improvement)\.?$/i,
  /^internal fixes and improvements\.?$/i,
  /^this release of sql clone includes/i,
  /^this release includes/i,
  /frequent\s+updates?\s+release/i,
];
const SQLPROMPT_IGNORE = [/^internal\s+library\s+updates?\.?$/i];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function isNoise(l){ return l.length < 3 || NOISE_RE.test(l) || /^https?:\/\/\S+$/.test(l) || /^\|[-:\s|]+\|$/.test(l); }
function isRcVersion(v){ return /^v?\d+\.\d+[\d.]*-rc\d+$/i.test(v); }
function hasDay(d){ return /\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(d) || /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}[,\s]/i.test(d); }

function normaliseDate(raw){
  if(!raw) return '';
  raw = raw.trim().replace(/\s+/g,' ');
  const iso = raw.match(/^(\d{4})[-\/](\d{2})[-\/](\d{2})$/);
  if(iso){ const mn = MONTHS[parseInt(iso[2],10)-1]; return mn ? `${parseInt(iso[3],10)} ${mn} ${iso[1]}` : raw; }
  return raw;
}

function isIgnored(text, productId){
  if(GLOBAL_IGNORE.some(re => re.test(text))) return true;
  if(productId === 'sqlprompt' && SQLPROMPT_IGNORE.some(re => re.test(text))) return true;
  return false;
}

function cleanMd(l){
  return l
    .replace(/^#{1,6}\s+/,'').replace(/^[-*•·▪▸›▶]\s+/,'').replace(/^\d+[.):;\s]\s+/,'')
    .replace(/\*\*([^*]+)\*\*/g,'$1').replace(/\*([^*]+)\*/g,'$1')
    .replace(/__([^_]+)__/g,'$1').replace(/_([^_]+)_/g,'$1')
    .replace(/`([^`]+)`/g,'$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\[([^\]]+)\]\[[^\]]*\]/g,'$1')
    .trim();
}

function isVersionHeader(line){
  if(!line || line.length > 180) return false;
  if(!VER_RE.test(line)) return false;
  if(/^https?:\/\/\S+$/.test(line)) return false;
  if(/\.jar|\.zip|\.war|\.tar/.test(line) && !/^#/.test(line)) return false;
  if(line.split(/\s+/).length > 20) return false;
  if(/^#{1,5}\s/.test(line)){
    if(/\d+\.\d+[\d.]*\+/.test(line)) return false;
    if(/[-–]\s*product\s+documentation/i.test(line)) return false;
    if(/^#{1,2}\s+\S.+?\s+v?\d+\.\d+\s+release\s+notes?\s*$/i.test(line)) return false;
    return true;
  }
  if(/^\*{1,2}[^*]+\*{1,2}$/.test(line.trim())) return true;
  if(/^version\s+\d/i.test(line.trim())) return true;
  if(/^v?\d+\.\d+[\d.]*\s*([-–(]|$)/i.test(line.trim())) return true;
  if(/release[sd]?\s+(notes\s+)?(?:for\s+)?v?\d/i.test(line)) return true;
  if(/^[a-z][a-z ]+\s+v?\d+\.\d+/i.test(line.trim()) && line.trim().length < 90) return true;
  return false;
}

function classifyChange(text){
  const lo = text.toLowerCase();
  if(/\b(break(ing)?|remov(ed?|ing)|drop(ped|ping)?|deprecat|no longer support|incompatible)\b/.test(lo)) return 'breaking';
  if(/\b(secur|cve-|vulnerab|patch|exploit)\b/.test(lo)) return 'security';
  if(/\b(add(ed?|s|ing)?|new\b|introduc|creat(ed?|ing)?|support(s|ed|ing)?|enabl(ed?|ing)?|allow(s|ed|ing)?|implement(ed?|s|ing)?|now\s+support)\b/.test(lo)) return 'feature';
  if(/\b(fix(ed?|es|ing)?|resolv(ed?|ing)?|correct(ed?|ing)?|repai(r|red)|address(ed?|ing)?|prevent(ed?|ing)?)\b/.test(lo)) return 'fix';
  return 'improvement';
}

function parseReleaseNotes(text, productId, sourceUrl){
  const lines  = text.split('\n');
  const result = [];
  const seen   = new Set();
  let cur      = null;
  let curSec   = '';

  for(let i = 0; i < lines.length; i++){
    const raw = lines[i], line = raw.trim();
    if(!line || isNoise(line)) continue;

    if(isVersionHeader(line)){
      if(cur && cur.changes.length > 0 && result.length < 50) result.push(cur);
      if(result.length >= 50) break;
      const vm = line.match(VER_RE), dm = line.match(DATE_RE), ver = vm?.[1]?.trim();
      if(!ver || seen.has(ver) || isRcVersion(ver)){ cur = null; continue; }
      seen.add(ver);
      let date = dm ? normaliseDate(dm[0]) : '';
      if(!date || !hasDay(date)){
        for(let j = i+1; j < Math.min(i+11, lines.length); j++){
          const a = lines[j].trim();
          if(!a || isNoise(a)) continue;
          const dm2 = a.match(DATE_RE);
          if(dm2 && a.length < 120){ const norm = normaliseDate(dm2[0]); if(hasDay(norm)){date=norm;break;} else if(!date) date=norm; }
        }
      }
      cur = { version: ver, date, changes: [], docsUrl: sourceUrl };
      curSec = '';
      continue;
    }

    if(!cur) continue;

    if(/^#{1,6}\s/.test(line) || /^\*{1,2}[^*]+\*{1,2}$/.test(line.trim())){
      const clean = cleanMd(line);
      if(isIgnored(clean, productId)){ curSec = '__ignore__'; continue; }
      curSec = clean; continue;
    }
    if(curSec === '__ignore__') continue;

    if(/^[-*•·▪▸›▶]\s+/.test(line) || /^\d+[.)]\s+/.test(line)){
      const text = cleanMd(line);
      if(text.length > 4 && text.length < 700 && !isIgnored(text, productId))
        cur.changes.push({ type: classifyChange(text), text });
      continue;
    }
  }
  if(cur && cur.changes.length > 0 && result.length < 50) result.push(cur);
  return result;
}

/* ─────────────────────────────────────────────
   RELEASE NOTES FILE  (release_notes.md)
───────────────────────────────────────────── */

/**
 * Parse release_notes.md into a map of url → { productId, releases[] }
 */
function parseReleaseNotesFile(){
  if(!fs.existsSync(RN_FILE)) return {};
  const content = fs.readFileSync(RN_FILE, 'utf8');
  const blocks  = content.split('---PRODUCT---').slice(1);
  const result  = {};
  for(const block of blocks){
    const sourceMatch = block.match(/<!--\s*source:\s*(https?:\/\/[^\s>]+)/);
    if(!sourceMatch) continue;
    const url = sourceMatch[1].trim();
    const productId = URL_TO_PRODUCT[url];
    if(!productId) continue;
    const releases = parseReleaseNotes(block, productId, url);
    result[url] = { productId, releases };
  }
  return result;
}

/**
 * Convert a list of release objects back to Markdown to append to the file.
 */
function releasesToMarkdown(releases){
  const TYPE_LABEL = { feature:'New Features', fix:'Bug Fixes', breaking:'Breaking Changes', security:'Security Fixes', improvement:'Improvements' };
  return releases.map(r => {
    const bySection = {};
    r.changes.forEach(c => {
      const lbl = TYPE_LABEL[c.type] || 'Changes';
      (bySection[lbl] = bySection[lbl] || []).push(c.text);
    });
    const dateStr = r.date || '';
    let md = `\n## ${r.version}${dateStr ? ' — ' + dateStr : ''}\n`;
    for(const [lbl, items] of Object.entries(bySection)){
      md += `\n### ${lbl}\n`;
      items.forEach(t => { md += `- ${t}\n`; });
    }
    return md;
  }).join('');
}

/**
 * Insert new releases into the right block in release_notes.md, update the
 * <!-- fetched: ... | latest: ... --> header comment, and save the file.
 */
function appendToReleaseNotesFile(url, newReleases){
  if(!newReleases.length || !fs.existsSync(RN_FILE)) return;
  let content = fs.readFileSync(RN_FILE, 'utf8');

  // Find the block for this URL
  const urlEscaped  = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blockStart  = content.search(new RegExp(`<!--\\s*source:\\s*${urlEscaped}`));
  if(blockStart < 0){ console.warn(`[file] no block found for ${url}`); return; }

  // Find the end of the comment header section (last <!-- ... --> line before first ##)
  const afterHeader = content.indexOf('\n## ', blockStart);
  if(afterHeader < 0){ console.warn(`[file] no ## heading found after source block for ${url}`); return; }

  const newMd = releasesToMarkdown(newReleases);
  const latest = newReleases[0];
  const now    = new Date().toISOString().slice(0,10);

  // Update the <!-- fetched: ... | latest: ... --> comment
  let updated = content.replace(
    /(<!-- fetched:)[^>]*(-->)/,
    `<!-- fetched: ${now} | latest: ${latest.version}${latest.date ? ' (' + latest.date + ')' : ''} -->`
  );

  // Insert new release markdown right before the first ## in this block
  updated = updated.slice(0, afterHeader) + newMd + updated.slice(afterHeader);
  fs.writeFileSync(RN_FILE, updated, 'utf8');
  console.log(`[file] appended ${newReleases.length} release(s) to ${url}`);
}

/* ─────────────────────────────────────────────
   DATABASE
───────────────────────────────────────────── */
let db;

async function openDb(){
  if(db) return db;
  db = await open({ filename: DB_FILE, driver: sqlite3.Database });
  await db.exec('PRAGMA journal_mode = WAL;');
  await db.exec(`CREATE TABLE IF NOT EXISTS source_snapshots (
    url TEXT PRIMARY KEY, productId TEXT, hash TEXT,
    lastFetchedAt INTEGER, lastChangedAt INTEGER, rawBody TEXT
  )`);
  await db.exec(`CREATE TABLE IF NOT EXISTS parsed_releases (
    productId TEXT NOT NULL,
    sourceUrl TEXT NOT NULL,
    version   TEXT NOT NULL,
    date      TEXT,
    changesJson TEXT,
    docsUrl   TEXT,
    sortOrder INTEGER DEFAULT 0,
    firstSeenAt INTEGER,
    updatedAt   INTEGER,
    PRIMARY KEY (productId, sourceUrl, version)
  )`);
  return db;
}

function sha256(input){ return crypto.createHash('sha256').update(input,'utf8').digest('hex'); }

async function storeReleases(productId, sourceUrl, releases){
  const now = Date.now();
  for(let i = 0; i < releases.length; i++){
    const r = releases[i];
    await db.run(
      `INSERT OR IGNORE INTO parsed_releases(productId,sourceUrl,version,date,changesJson,docsUrl,sortOrder,firstSeenAt,updatedAt)
       VALUES(?,?,?,?,?,?,?,?,?)`,
      [productId, sourceUrl, r.version, r.date, JSON.stringify(r.changes), r.docsUrl, i, now, now]
    );
  }
}

/**
 * One-time seed: parse release_notes.md and populate parsed_releases.
 * Runs on every startup but INSERT OR IGNORE prevents duplicates.
 */
async function seedFromFile(){
  const blocks = parseReleaseNotesFile();
  let count = 0;
  for(const [url, { productId, releases }] of Object.entries(blocks)){
    await storeReleases(productId, url, releases);
    count += releases.length;
  }
  console.log(`[seed] loaded ${count} release(s) from release_notes.md`);
}

/* ─────────────────────────────────────────────
   LIVE FETCH + INCREMENTAL CHECK
───────────────────────────────────────────── */
async function fetchSourceContent(url){
  const strategies = [
    async () => {
      const res = await fetch(`https://r.jina.ai/${url}`, { headers: JINA_HEADERS, cache:'no-store', signal: AbortSignal.timeout(30000) });
      if(res.ok){ const t = await res.text(); if(t && t.length > 200) return t; }
      throw new Error('Jina no content');
    },
    async () => {
      const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { cache:'no-store', signal: AbortSignal.timeout(20000) });
      if(res.ok){ const j = await res.json(); if(j?.contents && j.contents.length > 200) return j.contents; }
      throw new Error('Allorigins no content');
    },
    async () => {
      const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`, { cache:'no-store', signal: AbortSignal.timeout(20000) });
      if(res.ok){ const t = await res.text(); if(t && t.length > 200) return t; }
      throw new Error('Corsproxy no content');
    }
  ];
  let lastError;
  for(const fn of strategies){ try{ return await fn(); } catch(e){ lastError = e; } }
  throw new Error(lastError?.message || 'Fetch failed');
}

/**
 * Fetch a single URL, check its hash, parse, find new versions, persist.
 * Returns { url, upToDate, newVersions[] }
 */
async function checkUrl(productId, url){
  const raw  = await fetchSourceContent(url);
  const hash = sha256(raw);

  const snap = await db.get('SELECT hash FROM source_snapshots WHERE url=?', [url]);

  // Update snapshot table
  const now = Date.now();
  if(snap){
    if(snap.hash !== hash){
      await db.run('UPDATE source_snapshots SET hash=?,lastFetchedAt=?,lastChangedAt=?,rawBody=?,productId=? WHERE url=?', [hash,now,now,raw,productId,url]);
    } else {
      await db.run('UPDATE source_snapshots SET lastFetchedAt=?,productId=? WHERE url=?', [now,productId,url]);
    }
  } else {
    await db.run('INSERT INTO source_snapshots(url,productId,hash,lastFetchedAt,lastChangedAt,rawBody) VALUES(?,?,?,?,?,?)', [url,productId,hash,now,now,raw]);
  }

  // Hash unchanged → definitely nothing new
  if(snap && snap.hash === hash) return { url, upToDate: true, newVersions: [] };

  // Parse live content
  const liveReleases = parseReleaseNotes(raw, productId, url);

  // Get versions we already know about
  const known = await db.all('SELECT version FROM parsed_releases WHERE productId=? AND sourceUrl=?', [productId, url]);
  const knownSet = new Set(known.map(r => r.version));

  // Find releases whose version we haven't seen before
  const newReleases = liveReleases.filter(r => !knownSet.has(r.version));

  if(!newReleases.length) return { url, upToDate: true, newVersions: [] };

  // Persist new releases, prepend to file
  await storeReleases(productId, url, newReleases);
  appendToReleaseNotesFile(url, newReleases);

  console.log(`[check] ${productId} (${url.split('/').pop()}): ${newReleases.length} new version(s) — ${newReleases.map(r=>r.version).join(', ')}`);
  return { url, upToDate: false, newVersions: newReleases.map(r => r.version) };
}

/**
 * Check all URLs for a product. Returns { upToDate, newVersions[] }
 */
async function checkProduct(productId){
  const product = PRODUCTS_DEF.find(p => p.id === productId);
  if(!product) throw new Error('Unknown product');

  const results = [];
  for(const url of product.urls){
    try{
      results.push(await checkUrl(productId, url));
    } catch(e){
      results.push({ url, upToDate: false, error: e.message, newVersions: [] });
    }
  }

  const allUpToDate  = results.every(r => r.upToDate);
  const allNewVers   = results.flatMap(r => r.newVersions);
  return { upToDate: allUpToDate, newVersions: allNewVers, urlResults: results };
}

/* ─────────────────────────────────────────────
   EXPRESS
───────────────────────────────────────────── */
const app = express();
app.use(express.json());
app.use((req,res,next)=>{
  res.set('Content-Security-Policy',"default-src 'self'; connect-src 'self' http://localhost:3000 ws://localhost:3000 https://clients4.google.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none';");
  next();
});
app.use(express.static(path.join(__dirname)));
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'index.html')));

app.get('/api/products', (req,res) => res.json(PRODUCTS_DEF));

// Serves the full parsed contents of release_notes.md directly — no DB, always works.
// Shape: { [productId]: [ { sourceUrl, version, date, docsUrl, changes[] } ] }
app.get('/api/snapshot', (req,res) => {
  const blocks = parseReleaseNotesFile();
  const out = {};
  for(const [url, { productId, releases }] of Object.entries(blocks)){
    if(!out[productId]) out[productId] = [];
    releases.forEach(r => out[productId].push({
      sourceUrl: url,
      version:   r.version,
      date:      r.date,
      docsUrl:   r.docsUrl,
      changes:   r.changes,
    }));
  }
  res.json(out);
});

// Returns pre-parsed releases for a product from the persistent DB (seeded from release_notes.md)
app.get('/api/releases/:productId', async (req,res) => {
  await openDb();
  const rows = await db.all(
    `SELECT sourceUrl, version, date, changesJson, docsUrl
     FROM parsed_releases WHERE productId=? ORDER BY sortOrder ASC`,
    [req.params.productId]
  );
  res.json(rows.map(r => ({
    sourceUrl: r.sourceUrl,
    version:   r.version,
    date:      r.date,
    docsUrl:   r.docsUrl,
    changes:   JSON.parse(r.changesJson || '[]'),
  })));
});

// Incremental check: fetch live pages, compare to DB, return only what's new
app.get('/api/check/:productId', async (req,res) => {
  try{
    await openDb();
    const result = await checkProduct(req.params.productId);
    res.json({ productId: req.params.productId, ...result });
  } catch(e){ res.status(400).json({ error: e.message }); }
});

// Status / debug endpoints
app.get('/api/status', async (req,res) => {
  await openDb();
  const rows = await db.all('SELECT * FROM source_snapshots ORDER BY lastFetchedAt DESC');
  res.json(rows);
});
app.get('/api/raw/:productId', async (req,res) => {
  await openDb();
  const rows = await db.all('SELECT url, rawBody, lastChangedAt, lastFetchedAt FROM source_snapshots WHERE productId=?', [req.params.productId]);
  res.json(rows);
});

const PORT = 3000;
openDb()
  .then(() => seedFromFile())
  .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
  .catch(err => { console.error('DB init failed', err); process.exit(1); });
