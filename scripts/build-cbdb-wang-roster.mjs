#!/usr/bin/env node

/**
 * Build reviewable, import-kinship-compatible shards from an official CBDB
 * SQLite release. This is an offline read: it never touches project D1.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const cbdbPath = resolve(option('--cbdb', ''));
const snapshotPath = resolve(option('--snapshot', ''));
const output = resolve(option('--out-dir', 'scripts/generated/cbdb-wang-10000'));
const target = Math.max(1, Number(option('--target-new', '7329')));
const shardSize = Math.min(1000, Math.max(100, Number(option('--shard-size', '1000'))));
const release = option('--release', 'CBDB 2026-08-29');
const excludePlans = args.flatMap((value, index) => value === '--exclude-plan' && args[index + 1] ? [resolve(args[index + 1])] : []);
if (!cbdbPath || !snapshotPath) throw new Error('usage: --cbdb <official.sqlite3> --snapshot <project.sqlite>');

function query(database, sql) {
  const body = execFileSync('sqlite3', ['-json', database, sql], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  return body.trim() ? JSON.parse(body) : [];
}

const existing = query(snapshotPath, `
  SELECT p.id,
         json_extract(c.value_json, '$.text') AS name,
         group_concat(DISTINCT s.external_identifier) AS identifiers
    FROM person p
    LEFT JOIN claim c ON c.subject_person_id=p.id AND c.predicate='name.primary'
      AND c.status NOT IN ('retracted','superseded')
    LEFT JOIN claim_source cs ON cs.claim_id=c.id
    LEFT JOIN source s ON s.id=cs.source_id
   WHERE p.status<>'merged'
   GROUP BY p.id, c.id`);
const excludedNames = new Set(existing.map((row) => foldKey(row.name)).filter(Boolean));
for (const row of query(snapshotPath, `
  SELECT json_extract(value_json, '$.text') AS name
    FROM claim
   WHERE predicate LIKE 'name.%' AND status NOT IN ('retracted','superseded')`)) {
  if (row.name) excludedNames.add(foldKey(row.name));
}
const excludedCbdb = new Set(query(snapshotPath, `
  SELECT DISTINCT replace(external_identifier, 'CBDB:', '') AS id
    FROM source
   WHERE external_identifier LIKE 'CBDB:%'`)
  .map((row) => String(row.id).replace(/^0+/, '')));
for (const row of existing) {
  for (const identifier of String(row.identifiers ?? '').split(',')) {
    const match = /^CBDB[:=]?\s*(\d+)$/i.exec(identifier);
    if (match) excludedCbdb.add(match[1].replace(/^0+/, ''));
  }
}
for (const path of excludePlans) {
  const plan = JSON.parse(readFileSync(path, 'utf8'));
  for (const person of plan.persons ?? []) {
    for (const claim of person.claims ?? []) {
      if (claim.predicate?.startsWith('name.') && claim.value?.text) excludedNames.add(foldKey(claim.value.text));
    }
    if (person.name?.text) excludedNames.add(foldKey(person.name.text));
    if (person.cbdb) excludedCbdb.add(String(person.cbdb).replace(/^0+/, ''));
  }
}

const rows = query(cbdbPath, `
  SELECT b.c_personid AS id, b.c_name_chn AS name, b.c_birthyear AS birth_year,
         b.c_deathyear AS death_year, b.c_index_year AS index_year,
         d.c_dynasty_chn AS dynasty, d.c_start AS dynasty_start, d.c_end AS dynasty_end
    FROM BIOG_MAIN b
    LEFT JOIN DYNASTIES d ON d.c_dy=b.c_dy
   WHERE b.c_surname_chn='王' AND b.c_name_chn LIKE '王%'
   ORDER BY
     CASE WHEN b.c_deathyear IS NOT NULL AND b.c_deathyear<>0 AND b.c_deathyear<1950 THEN 0
          WHEN b.c_birthyear IS NOT NULL AND b.c_birthyear<>0 AND b.c_birthyear<1850 THEN 1
          WHEN d.c_dynasty_chn IS NOT NULL AND d.c_end<1950 THEN 2 ELSE 3 END,
     b.c_personid`);

const byFoldedName = new Map();
for (const row of rows) {
  const folded = foldKey(row.name);
  byFoldedName.set(folded, [...(byFoldedName.get(folded) ?? []), row]);
}
const aliasesByPerson = new Map();
for (const row of query(cbdbPath, `
  SELECT c_personid AS id, c_alt_name_chn AS name
    FROM ALTNAME_DATA
   WHERE c_alt_name_chn IS NOT NULL AND trim(c_alt_name_chn)<>''`)) {
  aliasesByPerson.set(String(row.id), [...(aliasesByPerson.get(String(row.id)) ?? []), row.name]);
}
const personIdsByPrimaryName = new Map();
for (const row of rows) {
  const folded = foldKey(row.name);
  personIdsByPrimaryName.set(folded, [...(personIdsByPrimaryName.get(folded) ?? []), String(row.id)]);
}
const ambiguousAliasIds = new Set();
for (const [id, aliases] of aliasesByPerson) {
  for (const alias of aliases) {
    if (!/^王[\p{Script=Han}·]{1,8}$/u.test(alias) || alias === '王氏') continue;
    for (const otherId of personIdsByPrimaryName.get(foldKey(alias)) ?? []) {
      if (otherId !== id) { ambiguousAliasIds.add(id); ambiguousAliasIds.add(otherId); }
    }
  }
}

const skipped = [];
const accepted = [];
const validName = (name) => /^王[\p{Script=Han}·]{1,8}$/u.test(name) && !/^(王氏|王某|王不详|王不詳|王未知)$/u.test(name);
for (const row of rows) {
  const id = String(row.id);
  const folded = foldKey(row.name);
  let reason = null;
  if (excludedCbdb.has(id)) reason = 'existing_cbdb_id';
  else if (excludedNames.has(folded)) reason = 'existing_or_prior_plan_name';
  else if (!validName(row.name)) reason = 'invalid_or_placeholder_name';
  else if ((byFoldedName.get(folded)?.length ?? 0) > 1) reason = 'same_name_multiple_cbdb_ids';
  else if ((aliasesByPerson.get(id) ?? []).some((name) => /^王[\p{Script=Han}·]{1,8}$/u.test(name) && name !== '王氏' && excludedNames.has(foldKey(name)))) reason = 'alias_matches_existing_person';
  else if (ambiguousAliasIds.has(id)) reason = 'alias_matches_another_cbdb_primary_name';
  else if (row.birth_year && row.death_year && Number(row.birth_year) > Number(row.death_year)) reason = 'birth_after_death';
  else if (row.birth_year && row.death_year && Number(row.death_year) - Number(row.birth_year) > 120) reason = 'lifespan_over_120';

  const death = Number(row.death_year) || null;
  const birth = Number(row.birth_year) || null;
  const dynastyEnd = Number(row.dynasty_end) || null;
  let historicity = null;
  if (death !== null && death < 1950) historicity = { kind: 'cbdb_death_year', detail: `CBDB 卒年 = ${death}` };
  else if (birth !== null && birth < 1850) historicity = { kind: 'cbdb_birth_year', detail: `CBDB 生年 = ${birth}` };
  else if (row.dynasty && dynastyEnd !== null && dynastyEnd < 1950) historicity = { kind: 'cbdb_dynasty', detail: `CBDB 朝代 = ${row.dynasty}` };
  else if (!reason) reason = 'insufficient_historical_period_evidence';
  if (reason) {
    skipped.push({ key: `cbdb:${id}`, cbdb: id, name: row.name, reason });
    continue;
  }
  accepted.push({ ...row, id, birth, death, historicity });
  if (accepted.length >= target) break;
}

const yearValue = (year, field) => ({
  date: {
    original_text: year < 0 ? `前${Math.abs(year)}年` : `${year}年`,
    calendar_note: `CBDB ${field}字段，精度：年`,
  },
});
const personOf = (row) => {
  const key = `cbdb:${row.id}`;
  const claims = [{
    predicate: 'name.primary',
    value: { text: row.name, language: detectScript(row.name) ?? 'zh-Hant' },
    confidence: 'high', source_keys: [key], change_summary: `CBDB 明确记录的王姓历史人物（${row.id}）`,
  }];
  if (row.birth !== null) claims.push({ predicate: 'birth.date', value: yearValue(row.birth, '生年'), confidence: 'medium', source_keys: [key], change_summary: 'CBDB 生年' });
  if (row.death !== null) claims.push({ predicate: 'death.date', value: yearValue(row.death, '卒年'), confidence: 'medium', source_keys: [key], change_summary: 'CBDB 卒年' });
  if (row.dynasty) claims.push({ predicate: 'bio.summary', value: { text: `CBDB 记载为${row.dynasty}人物`, language: 'zh-Hans' }, confidence: 'medium', source_keys: [key], change_summary: 'CBDB 朝代归属' });
  return { key, qid: null, cbdb: row.id, hop: 0, name: claims[0].value, spouse_only: false, claims, historicity: row.historicity, source_keys: [key] };
};
const sourceOf = (row) => ({
  key: `cbdb:${row.id}`, kind: 'cbdb', source_type: 'api_record',
  title: `中国历代人物传记资料库：${row.name}（CBDB ${row.id}）`,
  creator: 'China Biographical Database (CBDB)',
  publisher: 'Harvard University / Academia Sinica / Peking University',
  license_code: 'CC-BY-NC-SA-4.0',
  canonical_url: `https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=${row.id}&o=json`,
  external_identifier: `CBDB:${row.id}`,
  metadata_json: { source_release: release },
});

mkdirSync(output, { recursive: true });
const manifest = { schema_version: 1, source_release: release, target_new: target, accepted: accepted.length, skipped: skipped.length, shards: [] };
for (let offset = 0; offset < accepted.length; offset += shardSize) {
  const members = accepted.slice(offset, offset + shardSize);
  const name = `cbdb-wang-${String(offset / shardSize + 1).padStart(2, '0')}.json`;
  const plan = {
    generated_from: ['cbdb-official-sqlite', release], hops: 0, max_new: members.length,
    capped_relationships: 0, expanded_keys: [], identity_merges: [], name_collisions: [],
    skipped: offset === 0 ? skipped : [], unmapped_cbdb_relations: [],
    sources: members.map(sourceOf), persons: members.map(personOf), edges: [],
  };
  writeFileSync(resolve(output, name), `${JSON.stringify(plan, null, 2)}\n`);
  manifest.shards.push({ file: name, people: members.length, sources: members.length, relationships: 0 });
}
writeFileSync(resolve(output, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest));
