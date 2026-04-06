// check_updates.mjs — fetch all live release pages and update release_notes.md
// Run manually: node check_updates.mjs
// Also imported by server.js for the cron job.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RN_FILE   = path.resolve(__dirname, 'release_notes.md');

export const PRODUCTS_DEF = [
  { id:'flyway-desktop', name:'Flyway Desktop',   urls:['https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html'] },
  { id:'flyway-cli',     name:'Flyway CLI',        urls:['https://documentation.red-gate.com/fd/release-notes-for-flyway-engine-179732572.html'] },
  { id:'monitor',        name:'Redgate Monitor',   urls:['https://documentation.red-gate.com/monitor14/redgate-monitor-14-1+-release-notes-317489801.html'] },
  { id:'clone',          name:'SQL Clone',         urls:['https://documentation.red-gate.com/clone/release-notes-and-other-versions/sql-clone-5-release-notes'] },
  { id:'sqlprompt',      name:'SQL Prompt',        urls:['https://documentation.red-gate.com/sp/release-notes-and-other-versions/sql-prompt-11-3-release-notes'] },
  { id:'sqlcmp',         name:'SQL Compare',       urls:['https://documentation.red-gate.com/sc/release-notes-and-other-versions/sql-compare-16-0-release-notes'] },
  { id:'sqldcmp',        name:'SQL Data Compare',  urls:['https://documentation.red-gate.com/sdc/release-notes-and-other-versions/sql-data-compare-16-0-release-notes'] },
  { id:'tdm',            name:'Test Data Manager', urls:[
    'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/subsetting/subsetter-release-notes',
    'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/anonymization/anonymize-release-notes',
    'https://documentation.red-gate.com/testdatamanager/graphical-user-interface-gui/gui-release-notes',
    'https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/using-workflows-rgworkflow/workflows-release-notes',
  ]},
];

const URL_TO_PRODUCT = {};
PRODUCTS_DEF.forEach(p => p.urls.forEach(u => { URL_TO_PRODUCT[u] = p.id; }));

const JINA_HEADERS = {
  'Accept': 'text/plain',
  'X-Return-Format': 'markdown',
  'X-No-Cache': 'true',
  'X-With-Links-Summary': 'false',
  'X-Target-Selector': '#main-content, .wiki-content, #content, article, main, .page-body',
  'X-Remove-Selector': '#sidebar, .ia-splitter-left, nav, footer, .toc-macro, .navColumn, .pageSection',
};

/* ── PARSER ── */
const VER_RE  = /\b(\d+\.\d+(?:\.\d+){0,3}(?:[-.]?(?:beta|rc|alpha|preview)\s*\d*)?)\b/i;
const DATE_RE = /((?:\d{1,2}(?:st|nd|rd|th)?\s+)?(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)[\s,\.]+(?:\d{1,2}(?:st|nd|rd|th)?[,\s]+)?\d{4}|\d{4}[-\/]\d{2}[-\/]\d{2}|\d{1,2}[-\/]\d{1,2}[-\/]\d{4})/i;
const NOISE   = /^(skip to|on this page|table of contents|contents|navigation|edit this page|copy link|print\s*$|share\s*$|send feedback|last modified|created by|owned by|labels:|space:|home\s*$|search\s*$|log in|sign in|sign up|page last updated|published\s+\d)/i;
const MONTHS  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Applied for ALL products during parsing AND rendering on every tab.
const ALWAYS_IGNORE = [
  /^internal\s+fixes?\s+and\s+improvements?\.?$/i,
  /^internal\s+(updates?|changes?)\.?$/i,
  /^internal\s+library\s+updates?\.?$/i,
  /^internal\s+fix(es)?\.?$/i,
  /^internal\s+improvement(s)?\.?$/i,
  /^frequent\s+updates?\s+release/i,
  /^this release of sql clone includes/i,
  /^this release includes/i,
];
const SQLPROMPT_IGNORE = [
  /^v?\d+\.\d+[\d.]*$/,  // bare version numbers like "11.3.9.22706"
];
const FLYWAY_DESKTOP_IGNORE = [/^flyway\s*:\s*\d+\.\d+/i, /^electron\s*:\s*\d+\.\d+/i, /^library\s+versions?\.?$/i];

const isNoise  = l => l.length < 3 || NOISE.test(l) || /^https?:\/\/\S+$/.test(l);
const isRcVer  = v => /^v?\d+\.\d+[\d.]*-rc\d+$/i.test(v);
const hasDay   = d => /\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(d) || /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}[,\s]/i.test(d);

function normaliseDate(r) {
  if (!r) return '';
  r = r.trim().replace(/\s+/g, ' ');
  const iso = r.match(/^(\d{4})[-\/](\d{2})[-\/](\d{2})$/);
  if (iso) { const mn = MONTHS[parseInt(iso[2], 10) - 1]; return mn ? `${parseInt(iso[3], 10)} ${mn} ${iso[1]}` : r; }
  return r;
}

function isIgnored(text, pid) {
  if (ALWAYS_IGNORE.some(re => re.test(text))) return true;
  if (pid === 'sqlprompt'      && SQLPROMPT_IGNORE.some(re => re.test(text))) return true;
  if (pid === 'flyway-desktop' && FLYWAY_DESKTOP_IGNORE.some(re => re.test(text))) return true;
  return false;
}

function cleanMd(l) {
  return l
    .replace(/^#{1,6}\s+/, '').replace(/^[-*•·▪▸›▶]\s+/, '').replace(/^\d+[.):;\s]\s+/, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
}

function isVerHdr(line) {
  if (!line || line.length > 180) return false;
  if (!VER_RE.test(line)) return false;
  if (/^https?:\/\/\S+$/.test(line)) return false;
  if (/\.jar|\.zip|\.war|\.tar/.test(line) && !/^#/.test(line)) return false;
  if (line.split(/\s+/).length > 20) return false;
  if (/^#{1,5}\s/.test(line)) {
    if (/\d+\.\d+[\d.]*\+/.test(line)) return false;
    if (/[-]\s*product\s+documentation/i.test(line)) return false;
    if (/^#{1,2}\s+\S.+?\s+v?\d+\.\d+\s+release\s+notes?\s*$/i.test(line)) return false;
    return true;
  }
  if (/^\*{1,2}[^*]+\*{1,2}$/.test(line.trim())) return true;
  if (/^version\s+\d/i.test(line.trim())) return true;
  if (/^v?\d+\.\d+[\d.]*\s*([-–(]|$)/i.test(line.trim())) return true;
  if (/release[sd]?\s+(notes\s+)?(?:for\s+)?v?\d/i.test(line)) return true;
  if (/^[a-z][a-z ]+\s+v?\d+\.\d+/i.test(line.trim()) && line.trim().length < 90) return true;
  return false;
}

function classifyChange(t) {
  const lo = t.toLowerCase();
  if (/\b(break(ing)?|remov|drop(ped)?|deprecat|no longer support)\b/.test(lo)) return 'breaking';
  if (/\b(secur|cve-|vulnerab)\b/.test(lo)) return 'security';
  if (/\b(add(ed?|s|ing)?|new\b|introduc|support(s|ed|ing)?|enabl|allow)\b/.test(lo)) return 'feature';
  if (/\b(fix(ed?|es|ing)?|resolv|correct|repai|address)\b/.test(lo)) return 'fix';
  return 'improvement';
}

export function parseReleaseNotes(text, productId, sourceUrl) {
  const lines = text.split('\n'), result = [], seen = new Set();
  let cur = null, curSec = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || isNoise(line)) continue;
    if (isVerHdr(line)) {
      if (cur && cur.changes.length && result.length < 150) result.push(cur);
      if (result.length >= 150) break;
      const vm = line.match(VER_RE), dm = line.match(DATE_RE), ver = vm?.[1]?.trim();
      if (!ver || seen.has(ver) || isRcVer(ver)) { cur = null; continue; }
      seen.add(ver);
      let date = dm ? normaliseDate(dm[0]) : '';
      if (!date || !hasDay(date)) {
        for (let j = i + 1; j < Math.min(i + 11, lines.length); j++) {
          const a = lines[j].trim();
          if (!a || isNoise(a)) continue;
          const dm2 = a.match(DATE_RE);
          if (dm2 && a.length < 120) { const norm = normaliseDate(dm2[0]); if (hasDay(norm)) { date = norm; break; } else if (!date) date = norm; }
        }
      }
      cur = { version: ver, date, changes: [], docsUrl: sourceUrl }; curSec = ''; continue;
    }
    if (!cur) continue;
    if (/^#{1,6}\s/.test(line) || /^\*{1,2}[^*]+\*{1,2}$/.test(line.trim())) {
      const clean = cleanMd(line);
      if (isIgnored(clean, productId)) { curSec = '__ignore__'; continue; }
      curSec = clean; continue;
    }
    if (curSec === '__ignore__') continue;
    if (/^[-*\u2022\u00b7\u25aa\u25b8\u203a\u25b6]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      let bulletText = cleanMd(line);
      // Join continuation lines — Jina often wraps long bullets across multiple lines
      // without repeating the bullet prefix on continuation lines.
      while (i + 1 < lines.length) {
        const next = lines[i + 1].trim();
        if (!next) break;
        if (/^[-*\u2022\u00b7\u25aa\u25b8\u203a\u25b6]\s+/.test(next)) break;
        if (/^\d+[.)]\s+/.test(next)) break;
        if (/^#{1,6}\s/.test(next)) break;
        if (isVerHdr(next)) break;
        if (isNoise(next)) break;
        if (/^\*{1,2}[^*]+\*{1,2}$/.test(next)) break;
        bulletText += ' ' + cleanMd(next);
        i++;
      }
      if (bulletText.length > 4 && bulletText.length < 1000 && !isIgnored(bulletText, productId))
        cur.changes.push({ type: classifyChange(bulletText), text: bulletText });
    }
  }
  if (cur && cur.changes.length && result.length < 150) result.push(cur);
  return result;
}

export function parseReleaseNotesFile() {
  const content = fs.readFileSync(RN_FILE, 'utf8');
  const blocks  = content.split('---PRODUCT---').slice(1);
  const result  = {};
  for (const block of blocks) {
    const sm = block.match(/<!--\s*source:\s*(https?:\/\/[^\s>]+)/);
    if (!sm) continue;
    const url = sm[1].trim(), pid = URL_TO_PRODUCT[url];
    if (!pid) continue;
    result[url] = { productId: pid, releases: parseReleaseNotes(block, pid, url) };
  }
  return result;
}

const TYPE_LABEL = { feature:'New Features', fix:'Bug Fixes', breaking:'Breaking Changes', security:'Security Fixes', improvement:'Improvements' };

function releasesToMarkdown(releases) {
  return releases.map(r => {
    const bySec = {};
    r.changes.forEach(c => { const lbl = TYPE_LABEL[c.type] || 'Changes'; (bySec[lbl] = bySec[lbl] || []).push(c.text); });
    let md = `\n## ${r.version}${r.date ? ' — ' + r.date : ''}\n`;
    for (const [lbl, items] of Object.entries(bySec)) { md += `\n### ${lbl}\n`; items.forEach(t => { md += `- ${t}\n`; }); }
    return md;
  }).join('');
}

function appendToFile(url, newReleases) {
  const SEP    = '\n---PRODUCT---';
  let content  = fs.readFileSync(RN_FILE, 'utf8');
  const urlEsc = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts  = content.split(SEP);
  const idx    = parts.findIndex(p => new RegExp(`<!--\\s*source:\\s*${urlEsc}`, 'i').test(p));
  if (idx < 0) { console.warn(`  [warn] no block found for ${url}`); return; }

  const latest = newReleases[0];
  const now    = new Date().toISOString().slice(0, 10);

  let seg = parts[idx];
  // Update fetched/latest comment
  seg = seg.replace(
    /(<!-- fetched:)[^>]*(-->)/,
    `<!-- fetched: ${now} | latest: ${latest.version}${latest.date ? ' (' + latest.date + ')' : ''} -->`
  );
  // Prepend new releases before the first ## heading in this segment
  const firstHdr = seg.indexOf('\n## ');
  if (firstHdr < 0) { console.warn(`  [warn] no ## heading found in block for ${url}`); return; }
  parts[idx] = seg.slice(0, firstHdr) + releasesToMarkdown(newReleases) + seg.slice(firstHdr);
  fs.writeFileSync(RN_FILE, parts.join(SEP), 'utf8');
}

/**
 * Replace the ENTIRE content of a URL block in release_notes.md with freshly-parsed releases.
 * Used by rebuildProducts() to fix blocks that were built with a broken parser.
 */
function replaceBlock(url, allReleases) {
  if (!allReleases.length) return;
  let content = fs.readFileSync(RN_FILE, 'utf8');
  const urlEsc = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Split on block separators and find the exact segment that contains this URL.
  // This avoids any cross-block regex matching.
  const SEP = '\n---PRODUCT---';
  const parts = content.split(SEP);
  const idx = parts.findIndex(p => new RegExp(`<!--\\s*source:\\s*${urlEsc}`, 'i').test(p));
  if (idx < 0) { console.warn(`  [warn] no block found for ${url}`); return; }

  const latest = allReleases[0];
  const now    = new Date().toISOString().slice(0, 10);
  const product = PRODUCTS_DEF.find(p => p.urls.includes(url));

  parts[idx] = `\n# ${product?.name || url.split('/').pop()}\n`
             + `<!-- source: ${url} -->\n`
             + `<!-- fetched: ${now} | latest: ${latest.version}${latest.date ? ' (' + latest.date + ')' : ''} -->\n`
             + releasesToMarkdown(allReleases);

  fs.writeFileSync(RN_FILE, parts.join(SEP), 'utf8');
}

/**
 * Re-fetch and completely replace blocks for the given product IDs.
 * Fixes blocks built with a broken parser — use when file data is known-incomplete.
 */
export async function rebuildProducts(productIds, { silent = false } = {}) {
  for (const pid of productIds) {
    const product = PRODUCTS_DEF.find(p => p.id === pid);
    if (!product) { if (!silent) console.warn(`Unknown product: ${pid}`); continue; }

    for (const url of product.urls) {
      if (!silent) process.stdout.write(`  Rebuilding ${product.name} (${url.split('/').pop()}) … `);
      try {
        const raw      = await fetchUrl(url);
        const releases = parseReleaseNotes(raw, product.id, url);
        if (releases.length) {
          replaceBlock(url, releases);
          if (!silent) console.log(`✓ ${releases.length} releases`);
        } else {
          if (!silent) console.log('no releases parsed');
        }
      } catch (e) {
        if (!silent) console.log(`ERROR: ${e.message}`);
      }
    }
  }
  if (!silent) console.log('\nRebuild done.');
}

async function fetchUrl(url) {
  const strategies = [
    async () => {
      const r = await fetch(`https://r.jina.ai/${url}`, { headers: JINA_HEADERS, signal: AbortSignal.timeout(30000) });
      if (r.ok) { const t = await r.text(); if (t && t.length > 200) return t; } throw new Error('jina failed');
    },
    async () => {
      const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(20000) });
      if (r.ok) { const j = await r.json(); if (j?.contents && j.contents.length > 200) return j.contents; } throw new Error('allorigins failed');
    },
  ];
  let last;
  for (const fn of strategies) { try { return await fn(); } catch (e) { last = e; } }
  throw last;
}

/**
 * Check all products against live pages. Updates release_notes.md in place.
 * Returns { totalNew, results: [{ product, url, newVersions[], error? }] }
 */
/** Read ALL version strings from a URL's block in the raw file — not limited by parse cap. */
function knownVersionsFromFile(url) {
  const content  = fs.readFileSync(RN_FILE, 'utf8');
  const urlEsc   = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blockStart = content.search(new RegExp(`<!--\\s*source:\\s*${urlEsc}`));
  if (blockStart < 0) return new Set();
  const blockEnd   = content.indexOf('\n---PRODUCT---', blockStart + 10);
  const block      = content.slice(blockStart, blockEnd > 0 ? blockEnd : undefined);
  const vers = new Set();
  for (const m of block.matchAll(/^## (?:Flyway\s+)?(\d+\.\d+[\d.]*)/gm)) vers.add(m[1]);
  return vers;
}

export async function runCheck({ silent = false } = {}) {
  const results = [];
  let totalNew  = 0;

  for (const product of PRODUCTS_DEF) {
    for (const url of product.urls) {
      if (!silent) process.stdout.write(`  ${product.name} (${url.split('/').pop()}) … `);
      try {
        const raw      = await fetchUrl(url);
        const liveRels = parseReleaseNotes(raw, product.id, url);
        // Compare against ALL version headings in the file — not just the parser-capped subset
        const known    = knownVersionsFromFile(url);
        const newRels  = liveRels.filter(r => !known.has(r.version));

        if (newRels.length) {
          appendToFile(url, newRels);
          // Re-read file so next URL in same product sees the updated known set
          mainBlocks[url] = { productId: product.id, releases: liveRels };
          totalNew += newRels.length;
          if (!silent) console.log(`✓ ${newRels.length} new: ${newRels.map(r => r.version).join(', ')}`);
          results.push({ product: product.name, url, newVersions: newRels.map(r => r.version) });
        } else {
          if (!silent) console.log('up to date');
          results.push({ product: product.name, url, newVersions: [] });
        }
      } catch (e) {
        if (!silent) console.log(`ERROR: ${e.message}`);
        results.push({ product: product.name, url, newVersions: [], error: e.message });
      }
    }
  }

  if (!silent) console.log(`\nDone. ${totalNew} new release(s) added to release_notes.md.`);
  return { totalNew, results };
}

// Allow running directly:
//   node check_updates.mjs                          — check for new releases
//   node check_updates.mjs --rebuild sqlprompt monitor  — rebuild specific blocks
//   node check_updates.mjs --rebuild               — rebuild all blocks
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  if (args.includes('--rebuild')) {
    const ids = args.filter(a => !a.startsWith('--'));
    const targets = ids.length ? ids : PRODUCTS_DEF.map(p => p.id);
    console.log(`Rebuilding: ${targets.join(', ')} …\n`);
    await rebuildProducts(targets);
  } else {
    console.log('Checking all release pages …\n');
    await runCheck();
  }
}
