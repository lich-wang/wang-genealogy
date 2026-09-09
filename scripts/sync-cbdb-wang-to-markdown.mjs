#!/usr/bin/env node

/**
 * Add newly eligible CBDB Wang-surname people to the Git/Markdown authority.
 * Identity is resolved solely with CBDB identifiers; names are only a safety
 * fence, never an identity match. Re-running unchanged inputs is a no-op.
 */
import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { generateId } from '../packages/domain/src/id.ts';
import { detectScript } from '../packages/i18n/src/script.ts';
import { formatPersonRecordMarkdown, parsePersonMarkdown } from './lib/person-markdown.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const database = resolve(option('--cbdb', ''));
const contentDir = resolve(option('--content', 'content/persons'));
const reportPath = resolve(option('--report', 'docs/reviews/cbdb-wang-latest-sync-2026-09.json'));
const release = option('--release', 'CBDB 2026-09-05');
const apply = flag('--apply');
if (!database) throw new Error('usage: --cbdb <official.sqlite3> [--apply]');

const query = (sql) => {
  const body = execFileSync('sqlite3', ['-json', database, sql], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  return body.trim() ? JSON.parse(body) : [];
};
const existingIds = new Set();
for (const filename of readdirSync(contentDir).filter((name) => name.endsWith('.md'))) {
  const record = parsePersonMarkdown(readFileSync(resolve(contentDir, filename), 'utf8'), filename);
  for (const property of record.properties ?? []) {
    for (const value of [property.recommended, ...(property.alternatives ?? [])].filter(Boolean)) {
      for (const reference of value.sources ?? []) {
        const match = /^CBDB:(\d+)$/.exec(reference.source?.external_identifier ?? '');
        if (match) existingIds.add(match[1].replace(/^0+/, ''));
      }
    }
  }
}

const rows = query(`
  SELECT b.c_personid AS id, b.c_name_chn AS name, b.c_birthyear AS birth_year,
         b.c_deathyear AS death_year, d.c_dynasty_chn AS dynasty, d.c_end AS dynasty_end
    FROM BIOG_MAIN b LEFT JOIN DYNASTIES d ON d.c_dy=b.c_dy
   WHERE b.c_surname_chn='王' AND b.c_name_chn LIKE '王%' ORDER BY b.c_personid`);
const skipped = {};
const skip = (reason) => { skipped[reason] = (skipped[reason] ?? 0) + 1; };
const accepted = [];
for (const row of rows) {
  const id = String(row.id).replace(/^0+/, '');
  const name = String(row.name ?? '');
  const birth = Number(row.birth_year) || null;
  const death = Number(row.death_year) || null;
  const dynastyEnd = Number(row.dynasty_end) || null;
  if (existingIds.has(id)) { skip('existing_cbdb_id'); continue; }
  if (!/^王[\p{Script=Han}·]{1,8}$/u.test(name) || /^(王氏|王某|王不详|王不詳|王未知)$/u.test(name)) { skip('invalid_or_placeholder_name'); continue; }
  if (birth && death && (birth > death || death - birth > 120)) { skip('invalid_lifespan'); continue; }
  let historicity = null;
  if (death && death < 1950) historicity = `CBDB 卒年 = ${death}`;
  else if (birth && birth < 1850) historicity = `CBDB 生年 = ${birth}`;
  else if (row.dynasty && dynastyEnd && dynastyEnd < 1950) historicity = `CBDB 朝代 = ${row.dynasty}`;
  else { skip('insufficient_historical_period_evidence'); continue; }
  accepted.push({ id, name, birth, death, dynasty: row.dynasty, historicity });
}

const newId = (entity) => generateId(entity, (length) => randomBytes(length));
const dateValue = (year, field) => ({ date: { original_text: year < 0 ? `前${Math.abs(year)}年` : `${year}年`, calendar_note: `CBDB ${field}字段，精度：年` } });
const records = accepted.map((row) => {
  const source = {
    id: newId('source'), source_type: 'api_record', title: `中国历代人物传记资料库：${row.name}（CBDB ${row.id}）`,
    creator: 'China Biographical Database (CBDB)', publisher: 'Harvard University / Academia Sinica / Peking University',
    canonical_url: `https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=${row.id}&o=json`, external_identifier: `CBDB:${row.id}`,
    license_code: 'CC-BY-NC-SA-4.0', accessed_at: new Date().toISOString(), metadata_json: { source_release: release },
  };
  const property = (predicate, value, confidence, note) => {
    const claimId = newId('claim');
    return { predicate, recommended: { claim: { id: claimId, subject_person_id: null, claim_kind: 'property', predicate, object_person_id: null, generation_count: null, parent_role: null, value_json: value, status: 'accepted', confidence, current_revision: 1 }, sources: [{ id: newId('claimSource'), claim_id: claimId, source_id: source.id, stance: 'supports', locator: predicate === 'name.primary' ? source.external_identifier : null, quotation: null, interpretation_note: note, source }], object_person: null }, alternatives: [] };
  };
  const id = newId('person');
  const properties = [property('name.primary', { text: row.name, language: detectScript(row.name) ?? 'zh-Hant' }, 'high', `CBDB 明确记录的王姓历史人物（${row.id}）`)];
  if (row.birth !== null) properties.push(property('birth.date', dateValue(row.birth, '生年'), 'medium', 'CBDB 生年'));
  if (row.death !== null) properties.push(property('death.date', dateValue(row.death, '卒年'), 'medium', 'CBDB 卒年'));
  if (row.dynasty) properties.push(property('bio.summary', { text: `CBDB 记载为${row.dynasty}人物`, language: 'zh-Hans' }, 'medium', 'CBDB 朝代归属'));
  for (const propertyRecord of properties) propertyRecord.recommended.claim.subject_person_id = id;
  return { id, body: formatPersonRecordMarkdown({ schema: 'wang-person/v1', id, status: 'active', merged_into: null, display_name: row.name, revision: 1, properties, relationships: { parents: [], children: [], adoptive_parents: [], adoptive_children: [], spouses: [], ancestors: [], descendants: [], other: [] } }) };
});
const report = { generated_at: new Date().toISOString(), source_release: release, source_database: database, source_wang_rows: rows.length, existing_cbdb_ids: existingIds.size, accepted: records.length, skipped, mode: apply ? 'apply' : 'dry-run' };
if (apply) for (const record of records) writeFileSync(resolve(contentDir, `${record.id}.md`), record.body);
if (apply || flag('--write-report')) {
  mkdirSync(resolve(reportPath, '..'), { recursive: true });
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report));
