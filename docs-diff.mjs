// docs-diff.mjs — compute what changed between two versions of a product,
// using the already-parsed release_notes.md (same data the web app reads).
//
// Usage:
//   node docs-diff.mjs --list
//   node docs-diff.mjs --product sqlprompt --from 11.3.0 --to 11.3.9
//   node docs-diff.mjs --product sqlprompt --from 11.3.0 --to 11.3.9 --format json
//
// Exposed for reuse (e.g. by server.js or a future API endpoint):
//   import { computeDiff, toMarkdown } from './docs-diff.mjs';

import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS_DEF, parseReleaseNotesFile, dateToSortNum } from './check_updates.mjs';

const TYPE_LABEL = {
  feature: 'New Features',
  fix: 'Bug Fixes',
  breaking: '⚡ Breaking Changes',
  security: '🔒 Security Fixes',
  improvement: 'Improvements',
};

/** All parsed releases for a product, deduped by version, newest first. */
export function getProductReleases(productId) {
  const blocks = parseReleaseNotesFile(); // url -> { productId, releases }
  const byVer = new Map();

  for (const { productId: pid, releases } of Object.values(blocks)) {
    if (pid !== productId) continue;
    for (const r of releases) {
      if (!byVer.has(r.version)) {
        byVer.set(r.version, { ...r, changes: [...r.changes] });
        continue;
      }
      const existing = byVer.get(r.version);
      const seen = new Set(existing.changes.map(c => c.text));
      for (const c of r.changes) if (!seen.has(c.text)) { seen.add(c.text); existing.changes.push(c); }
      if (!existing.date && r.date) existing.date = r.date;
    }
  }

  return [...byVer.values()].sort((a, b) => dateToSortNum(b.date) - dateToSortNum(a.date));
}

/**
 * Diff all changes introduced strictly after `fromVersion` up to and including `toVersion`.
 * Order of from/to doesn't matter — the older one is always treated as the baseline.
 */
export function computeDiff(productId, fromVersion, toVersion) {
  const product = PRODUCTS_DEF.find(p => p.id === productId);
  if (!product) {
    throw new Error(`Unknown product "${productId}". Known products: ${PRODUCTS_DEF.map(p => p.id).join(', ')}`);
  }

  const list = getProductReleases(productId);
  if (!list.length) throw new Error(`No release notes found for "${productId}" in release_notes.md`);

  let fromIdx = list.findIndex(r => r.version === fromVersion);
  let toIdx = list.findIndex(r => r.version === toVersion);
  const known = () => list.map(r => r.version).join(', ');
  if (fromIdx < 0) throw new Error(`Version "${fromVersion}" not found for ${product.name}. Known versions: ${known()}`);
  if (toIdx < 0) throw new Error(`Version "${toVersion}" not found for ${product.name}. Known versions: ${known()}`);

  let from = fromVersion, to = toVersion;
  if (fromIdx < toIdx) { // fromIdx is "newer" (lower index) than toIdx — swap so `from` is the older baseline
    [fromIdx, toIdx] = [toIdx, fromIdx];
    [from, to] = [to, from];
  }

  const span = list.slice(toIdx, fromIdx); // `to` (inclusive) .. just newer than `from` (exclusive)

  const byType = {};
  for (const rel of span) {
    for (const c of rel.changes) {
      (byType[c.type] ||= []).push({ ...c, version: rel.version, date: rel.date });
    }
  }

  return {
    product: product.name,
    productId,
    from,
    to,
    same: from === to,
    versionsCompared: span.map(r => r.version),
    totalChanges: span.reduce((n, r) => n + r.changes.length, 0),
    breaking: byType.breaking || [],
    security: byType.security || [],
    byType,
    span,
  };
}

export function toMarkdown(diff) {
  if (diff.same) {
    return `# ${diff.product}: ${diff.from}\n\nSame version selected on both sides — nothing to compare.\n`;
  }

  let md = `# ${diff.product}: ${diff.from} → ${diff.to}\n\n`;
  md += `Comparing **${diff.versionsCompared.length}** version(s), **${diff.totalChanges}** total change(s).\n\n`;

  const flagged = [...diff.breaking, ...diff.security];
  md += `## ⚠️ Needs attention\n\n`;
  md += flagged.length
    ? flagged.map(c => `- **[${c.type}]** (v${c.version}) ${c.text}`).join('\n') + '\n\n'
    : '_No breaking or security changes between these versions._\n\n';

  for (const rel of diff.span) {
    md += `## ${rel.version}${rel.date ? ' — ' + rel.date : ''}\n\n`;
    const bySection = {};
    for (const c of rel.changes) (bySection[TYPE_LABEL[c.type] || 'Changes'] ||= []).push(c.text);
    for (const [label, items] of Object.entries(bySection)) {
      md += `**${label}**\n`;
      items.forEach(t => { md += `- ${t}\n`; });
      md += '\n';
    }
  }
  return md;
}

// Allow running directly:
//   node docs-diff.mjs --list
//   node docs-diff.mjs --product <id> --from <version> --to <version> [--format md|json]
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const get = flag => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; };

  if (args.includes('--list')) {
    for (const p of PRODUCTS_DEF) {
      const versions = getProductReleases(p.id).map(r => r.version);
      console.log(`${p.id} (${p.name}): ${versions.join(', ') || '(none tracked yet)'}`);
    }
    process.exit(0);
  }

  const productId = get('--product');
  const from = get('--from');
  const to = get('--to');
  const format = get('--format') || 'md';

  if (!productId || !from || !to) {
    console.error('Usage: node docs-diff.mjs --product <id> --from <version> --to <version> [--format md|json]');
    console.error('       node docs-diff.mjs --list');
    process.exit(1);
  }

  try {
    const diff = computeDiff(productId, from, to);
    console.log(format === 'json' ? JSON.stringify(diff, null, 2) : toMarkdown(diff));
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
}
