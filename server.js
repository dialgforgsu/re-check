import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cron from 'node-cron';
import { runCheck } from './check_updates.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const DB_FILE      = path.resolve(__dirname, 'recheck.sqlite');
const RN_FILE      = path.resolve(__dirname, 'release_notes.md');
const RN_TEMP_FILE = path.resolve(__dirname, 'release_notes_temp.md');

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
// Applied for ALL products during parsing AND rendering on every tab.
const ALWAYS_IGNORE = [
  /^internal\s+fixes?\s+and\s+improvements?\.?$/i,
  /^internal\s+(updates?|changes?)\.?$/i,
  /^internal\s+library\s+updates?\.?$/i,
  /^internal\s+fix(es)?\.?$/i,
  /^internal\s+improvement(s)?\.?$/i,
];
const SQLPROMPT_IGNORE = [
  /^v?\d+\.\d+[\d.]*$/,  // bare version numbers like "11.3.9.22706"
];
const FLYWAY_DESKTOP_IGNORE = [
  /^flyway\s*:\s*\d+\.\d+[\d.]*(-rc\d+)?/i,
  /^electron\s*:\s*\d+\.\d+[\d.]*/i,
  /^library\s+versions?\.?$/i,
];
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
  if(ALWAYS_IGNORE.some(re => re.test(text))) return true;
  if(productId === 'sqlprompt'      && SQLPROMPT_IGNORE.some(re => re.test(text))) return true;
  if(productId === 'flyway-desktop' && FLYWAY_DESKTOP_IGNORE.some(re => re.test(text))) return true;
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
      if(cur && cur.changes.length > 0 && result.length < 150) result.push(cur);
      if(result.length >= 150) break;
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
      let text = cleanMd(line);
      // Join continuation lines — Jina often wraps long bullets without repeating the bullet prefix
      while(i + 1 < lines.length){
        const next = lines[i + 1].trim();
        if(!next) break;
        if(/^[-*•·▪▸›▶]\s+/.test(next)) break;
        if(/^\d+[.)]\s+/.test(next)) break;
        if(/^#{1,6}\s/.test(next)) break;
        if(isVersionHeader(next)) break;
        if(isNoise(next)) break;
        if(/^\*{1,2}[^*]+\*{1,2}$/.test(next)) break;
        text += ' ' + cleanMd(next);
        i++;
      }
      if(text.length > 4 && text.length < 1000 && !isIgnored(text, productId))
        cur.changes.push({ type: classifyChange(text), text });
      continue;
    }
  }
  if(cur && cur.changes.length > 0 && result.length < 150) result.push(cur);
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
      `INSERT INTO parsed_releases(productId,sourceUrl,version,date,changesJson,docsUrl,sortOrder,firstSeenAt,updatedAt)
       VALUES(?,?,?,?,?,?,?,?,?)
       ON CONFLICT(productId,sourceUrl,version) DO UPDATE SET
         changesJson=excluded.changesJson, date=excluded.date,
         sortOrder=excluded.sortOrder, updatedAt=excluded.updatedAt`,
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

// Serialize temp-file operations so concurrent product checks don't collide.
let _tempLock = Promise.resolve();
function withTempLock(fn){
  const next = _tempLock.then(fn);
  _tempLock = next.catch(()=>{});
  return next;
}

/** Build a single ---PRODUCT--- block for the temp file. */
function buildTempBlock(productId, url, releases){
  if(!releases.length) return '';
  const product = PRODUCTS_DEF.find(p => p.id === productId);
  const now     = new Date().toISOString().slice(0,10);
  const latest  = releases[0];
  let block  = `\n---PRODUCT---\n`;
      block += `# ${product.name}\n`;
      block += `<!-- source: ${url} -->\n`;
      block += `<!-- fetched: ${now} | latest: ${latest.version}${latest.date ? ' (' + latest.date + ')' : ''} -->\n`;
      block += releasesToMarkdown(releases);
  return block;
}

/**
 * For a product:
 *  1. Fetch all live pages via Jina
 *  2. Write release_notes_temp.md in the same format as release_notes.md
 *  3. Compare temp vs release_notes.md — find new versions
 *  4. If new: prepend them to release_notes.md, delete temp
 *  5. If none: delete temp, return upToDate:true
 */
/** Read ALL ## version headings from a URL's block in the raw file — not capped by parse limit. */
function knownVersionsFromFile(url){
  if(!fs.existsSync(RN_FILE)) return new Set();
  const content    = fs.readFileSync(RN_FILE, 'utf8');
  const urlEsc     = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blockStart = content.search(new RegExp(`<!--\\s*source:\\s*${urlEsc}`));
  if(blockStart < 0) return new Set();
  const blockEnd   = content.indexOf('\n---PRODUCT---', blockStart + 10);
  const block      = content.slice(blockStart, blockEnd > 0 ? blockEnd : undefined);
  const vers = new Set();
  for(const m of block.matchAll(/^## (?:Flyway\s+)?(\d+\.\d+[\d.]*)/gm)) vers.add(m[1]);
  return vers;
}

async function checkProduct(productId){
  const product = PRODUCTS_DEF.find(p => p.id === productId);
  if(!product) throw new Error('Unknown product');

  return withTempLock(async () => {
    // ── 1. Fetch live pages ──────────────────────────────────────────────
    const liveData = []; // { url, releases[] }
    for(const url of product.urls){
      try{
        const raw      = await fetchSourceContent(url);
        const releases = parseReleaseNotes(raw, productId, url);
        liveData.push({ url, releases });

        // Keep snapshot table updated for debugging
        const hash = sha256(raw);
        const now  = Date.now();
        const snap = await db.get('SELECT hash FROM source_snapshots WHERE url=?', [url]);
        if(snap){
          await db.run(
            'UPDATE source_snapshots SET hash=?,lastFetchedAt=?,lastChangedAt=?,rawBody=?,productId=? WHERE url=?',
            [hash, now, snap.hash !== hash ? now : snap.lastChangedAt, raw, productId, url]
          );
        } else {
          await db.run(
            'INSERT INTO source_snapshots(url,productId,hash,lastFetchedAt,lastChangedAt,rawBody) VALUES(?,?,?,?,?,?)',
            [url, productId, hash, now, now, raw]
          );
        }
      } catch(e){
        console.warn(`[check] fetch failed for ${url}:`, e.message);
      }
    }

    if(!liveData.length) return { upToDate: true, newVersions: [] };

    // ── 2. Write release_notes_temp.md ───────────────────────────────────
    const header   = `# Redgate Release Notes — Temp Check\n<!-- generated: ${new Date().toISOString()} -->\n`;
    const tempBody = liveData.map(d => buildTempBlock(productId, d.url, d.releases)).join('');
    fs.writeFileSync(RN_TEMP_FILE, header + tempBody, 'utf8');

    // ── 3. Compare live vs ALL version headings in file (not just parsed/capped subset) ──
    const allNewVersions = [];

    for(const { url, releases: liveReleases } of liveData){
      const knownVersions = knownVersionsFromFile(url);
      const newReleases   = liveReleases.filter(r => !knownVersions.has(r.version));

      if(newReleases.length){
        // ── 4. New versions found: add to release_notes.md ──────────────
        appendToReleaseNotesFile(url, newReleases);
        await storeReleases(productId, url, newReleases);
        allNewVersions.push(...newReleases.map(r => r.version));
        console.log(`[check] ${productId}: ${newReleases.length} new — ${newReleases.map(r=>r.version).join(', ')}`);
      }
    }

    // ── 5. Always delete temp file ───────────────────────────────────────
    try{ fs.unlinkSync(RN_TEMP_FILE); } catch{}

    if(!allNewVersions.length){
      console.log(`[check] ${productId}: no new updates`);
    }

    return { upToDate: allNewVersions.length === 0, newVersions: allNewVersions, latestDate: getMostRecentDate() };
  });
}

function dateToSortNum(dateStr){
  if(!dateStr) return 0;
  const s = dateStr.trim();
  const MAP = {january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12,jan:1,feb:2,mar:3,apr:4,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
  let m = s.match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/i);
  if(m){ const mn=MAP[m[2].toLowerCase()]; if(mn) return parseInt(m[3])*10000+mn*100+parseInt(m[1]); }
  m = s.match(/([a-z]+)\s+(\d{1,2})[,\s]+(\d{4})/i);
  if(m){ const mn=MAP[m[1].toLowerCase()]; if(mn) return parseInt(m[3])*10000+mn*100+parseInt(m[2]); }
  m = s.match(/(\d{4})[-\/](\d{2})[-\/](\d{2})/);
  if(m) return parseInt(m[1])*10000+parseInt(m[2])*100+parseInt(m[3]);
  return 0;
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
// Serve static assets but NOT index.html — that's handled below with injected data.
app.use(express.static(path.join(__dirname), { index: false }));

// Serve index.html with the release_notes.md snapshot embedded as a <script> tag
// so the client has the data immediately on load — no fetch required.
/** Return the most recent date string found across all releases in the file. */
function getMostRecentDate(){
  const blocks = parseReleaseNotesFile();
  const MONTHS_MAP = {january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12,jan:1,feb:2,mar:3,apr:4,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
  let best = 0, bestDate = '';
  for(const { releases } of Object.values(blocks)){
    for(const r of releases){
      if(!r.date) continue;
      const s = r.date.trim();
      let num = 0;
      const m1 = s.match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/i);
      if(m1){ const mn=MONTHS_MAP[m1[2].toLowerCase()]; if(mn) num=parseInt(m1[3])*10000+mn*100+parseInt(m1[1]); }
      const m2 = s.match(/([a-z]+)\s+(\d{1,2})[,\s]+(\d{4})/i);
      if(!num&&m2){ const mn=MONTHS_MAP[m2[1].toLowerCase()]; if(mn) num=parseInt(m2[3])*10000+mn*100+parseInt(m2[2]); }
      const m3 = s.match(/(\d{4})[-\/](\d{2})[-\/](\d{2})/);
      if(!num&&m3) num=parseInt(m3[1])*10000+parseInt(m3[2])*100+parseInt(m3[3]);
      if(num > best){ best=num; bestDate=r.date; }
    }
  }
  return bestDate;
}

app.get('/', (req,res) => {
  const html = fs.readFileSync(path.join(__dirname,'index.html'), 'utf8');

  const blocks = parseReleaseNotesFile();
  const snapshot = {};
  for(const [url, { productId, releases }] of Object.entries(blocks)){
    if(!snapshot[productId]) snapshot[productId] = [];
    releases.forEach(r => snapshot[productId].push({
      sourceUrl: url, version: r.version, date: r.date, docsUrl: r.docsUrl, changes: r.changes
    }));
  }
  // Sort each product's releases by date descending so file order never affects display
  for(const list of Object.values(snapshot)){
    list.sort((a,b) => dateToSortNum(b.date) - dateToSortNum(a.date));
  }

  const rnDate   = getMostRecentDate();
  const injection = `<script>window.__RN_SNAPSHOT__=${JSON.stringify(snapshot)};window.__RN_DATE__=${JSON.stringify(rnDate)};</script>`;
  const injected  = html.replace('</head>', injection + '\n</head>');
  res.setHeader('Content-Type','text/html');
  res.send(injected);
});

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
  for(const list of Object.values(out)) list.sort((a,b) => dateToSortNum(b.date) - dateToSortNum(a.date));
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

// ── CRON: check for new releases every day at 06:00 Central
cron.schedule('0 6 * * *', async () => {
  const ts = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  console.log(`[cron] 6am Central check started at ${ts}`);
  try {
    const { totalNew, results } = await runCheck({ silent: true });
    if (totalNew > 0) {
      const added = results.filter(r => r.newVersions.length > 0);
      console.log(`[cron] ${totalNew} new release(s) added:`);
      added.forEach(r => console.log(`  ${r.product}: ${r.newVersions.join(', ')}`));
    } else {
      console.log('[cron] No new updates found.');
    }
  } catch (e) {
    console.error('[cron] Check failed:', e.message);
  }
}, { timezone: 'America/Chicago' });

console.log('[cron] Daily 6am Central check scheduled.');

const PORT = 3000;
openDb()
  .then(() => seedFromFile())
  .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
  .catch(err => { console.error('DB init failed', err); process.exit(1); });
