#!/usr/bin/env node

// Build a reviewable plan of deceased Wang-surname people who are not yet in
// the database. This complements kinship expansion: a historically notable
// person may have no parent/child statements linking them to the current graph.
//
// Usage: node scripts/fetch-wang-historical-roster.mjs [--max-new 250]
//        [--out scripts/wang-historical-roster.json] [--local]

// The roster gate is deliberately strict: Wikidata must identify the item as a
// human, assign family name 王, provide a death date, and publish a Chinese name
// beginning with 王. No inference from occupations, relatives, or Latin
// transliteration is accepted.

import { writeFileSync } from 'node:fs';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import { dateClaim, factsFor, pickName, WANG_FAMILY_NAME_QID } from './lib/wikidata.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const maxNew = Math.max(1, Number(option('--max-new', '250')));
const offset = Math.max(0, Number(option('--offset', '0')));
const outPath = option('--out', new URL('wang-historical-roster.json', import.meta.url).pathname);
const d1 = { database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'), remote: !flag('--local') };

const existing = new Set(d1Query(
  `SELECT DISTINCT s.external_identifier AS qid
     FROM source s JOIN claim_source cs ON cs.source_id=s.id JOIN claim c ON c.id=cs.claim_id
    WHERE c.predicate='name.primary' AND s.external_identifier GLOB 'Q[0-9]*'`,
  { ...d1, label: 'existing Wikidata identities' },
).map((row) => row.qid));
const existingNames = new Set(d1Query(
  `SELECT json_extract(c.value_json,'$.text') AS name
     FROM claim c JOIN person p ON p.id=c.subject_person_id
    WHERE c.predicate='name.primary' AND c.status NOT IN ('retracted','superseded') AND p.status<>'merged'`,
  { ...d1, label: 'existing names' },
).map((row) => foldKey(row.name)).filter(Boolean));

const query = `SELECT DISTINCT ?person WHERE {
  ?person wdt:P31 wd:Q5; wdt:P734 wd:${WANG_FAMILY_NAME_QID}; wdt:P570 ?death; rdfs:label ?label.
  FILTER(YEAR(?death) < 1950)
  FILTER(LANG(?label) IN ("zh", "zh-hans", "zh-hant"))
  FILTER(STRSTARTS(STR(?label), "王"))
} ORDER BY ?person LIMIT ${maxNew * 4} OFFSET ${offset}`;
const response = await fetch('https://query.wikidata.org/sparql?' + new URLSearchParams({ query, format: 'json' }), {
  headers: { 'user-agent': 'wang-genealogy/0.1 (public historical-data importer)' },
});
if (!response.ok) throw new Error(`WDQS ${response.status}: ${(await response.text()).slice(0, 300)}`);
const bindings = (await response.json()).results?.bindings ?? [];
const qids = [...new Set(bindings.map((b) => /Q\d+$/.exec(b.person.value)?.[0]).filter(Boolean))]
  .filter((qid) => !existing.has(qid));
const facts = await factsFor(qids);

const people = [];
for (const qid of qids) {
  if (people.length >= maxNew) break;
  const f = facts.get(qid);
  const name = f && pickName(f);
  const death = f?.death && dateClaim('P570', f.death);
  if (!name?.startsWith('王') || !death || f.family_name !== WANG_FAMILY_NAME_QID || existingNames.has(foldKey(name))) continue;
  const sourceKey = `wd:${qid}`;
  const claims = [{
    predicate: 'name.primary',
    value: { text: name, language: detectScript(name) ?? 'zh-Hans' },
    confidence: 'high',
    source_keys: [sourceKey],
    change_summary: `维基数据明确标识为王姓历史人物（${qid}）`,
  }];
  if (f.birth) {
    const birth = dateClaim('P569', f.birth);
    if (birth) claims.push({ predicate: 'birth.date', value: { date: birth }, confidence: 'high', source_keys: [sourceKey], change_summary: '据维基数据结构化日期补录生年' });
  }
  claims.push({ predicate: 'death.date', value: { date: death }, confidence: 'high', source_keys: [sourceKey], change_summary: '据维基数据结构化日期补录卒年' });
  if (f.descriptions.zh) claims.push({ predicate: 'bio.summary', value: { text: f.descriptions.zh, language: detectScript(f.descriptions.zh) ?? 'zh-Hans' }, confidence: 'medium', source_keys: [sourceKey], change_summary: '据维基数据中文描述补录' });
  people.push({
    key: sourceKey,
    qid,
    cbdb: f.cbdb ?? null,
    hop: 0,
    name: claims[0].value,
    spouse_only: false,
    claims,
    historicity: { kind: 'death_date', detail: `维基数据 P570 = ${death.original_text}` },
    source_keys: [sourceKey],
  });
}

const sources = people.map((person) => ({
  key: person.key,
  kind: 'wikidata',
  source_type: 'api_record',
  title: `维基数据：${person.name.text}（${person.qid}）`,
  creator: '维基数据贡献者',
  publisher: 'Wikimedia Foundation',
  license_code: 'CC0-1.0',
  canonical_url: `https://www.wikidata.org/wiki/${person.qid}`,
  external_identifier: person.qid,
}));
const plan = {
  generated_from: ['wikidata-deceased-wang-roster'],
  hops: 0,
  max_new: maxNew,
  capped_relationships: 0,
  expanded_keys: [],
  identity_merges: [],
  name_collisions: [],
  skipped: [],
  unmapped_cbdb_relations: [],
  sources,
  persons: people,
  edges: [],
};
writeFileSync(outPath, JSON.stringify(plan, null, 2) + '\n');
console.log(`WDQS 候选 ${bindings.length}，库外标识 ${qids.length}，计划新增 ${people.length}`);
console.log(`written to ${outPath}`);
