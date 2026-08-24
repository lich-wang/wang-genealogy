// Mine kinship out of Chinese Wikipedia *prose* and write an import plan.
//
//   node scripts/mine-zhwiki.mjs [--articles 王姓,琅邪王氏,…] [--limit 0]
//                                [--out scripts/kinship-data.json] [--local]
//
// Wikidata is tidy but thin: most 王-surname articles state a father, a son or a
// marriage in a sentence and never as a structured statement. This reads the
// articles of everyone already in the database — plus the clan articles, whose
// indented genealogies are the actual family trees — and turns what they say
// into the same plan shape `import-kinship.mjs` already applies.
//
// Every claim keeps the sentence it came from as the citation's quotation, so a
// reader can check the wording without leaving the page. Nothing is inferred
// from proximity: a relation counts only when a kinship word attaches it to a
// linked person (see scripts/lib/zhwiki.mjs for how fragments are attributed).
//
// Scope is the same as everywhere else: 王-surname persons, plus non-王 spouses
// of theirs, and nobody else.

import { readFileSync, writeFileSync } from 'node:fs';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import {
  ZHWIKI_SOURCE_TEMPLATE,
  articleUrl,
  fetchWikitext,
  mineArticle,
  mineIndentedGenealogy,
  mineListLines,
  qidsByTitle,
} from './lib/zhwiki.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};
const outPath = option('--out', new URL('kinship-data.json', import.meta.url).pathname);
const limit = Number(option('--limit', '0'));

/** Clan articles: their indented lists are family trees, not prose. */
const CLAN_ARTICLES = option(
  '--articles',
  [
    '琅邪王氏',
    '太原王氏',
    '三槐王氏',
    '开闽王氏',
    '余姚王氏',
    '琅邪王氏世系圖',
    '王姓',
    '太子晋',
  ].join(','),
).split(',');

const isWangName = (name) =>
  typeof name === 'string' && (name.startsWith('王') || /王(皇后|皇太后|太后|夫人|氏|美人|婕妤|后)/.test(name));

// --- who we already have ----------------------------------------------------

const rows = d1Query(
  `SELECT p.id AS person_id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name,
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c2 ON c2.id = cs.claim_id
            WHERE c2.subject_person_id = p.id
              AND c2.predicate = 'name.primary'
              AND s.external_identifier IS NOT NULL) AS identifiers
     FROM person p
    WHERE p.status <> 'merged'`,
  { ...d1, label: 'roster' },
);

const personByQid = new Map();
const personsByFolded = new Map();
const statusById = new Map();
for (const row of rows) {
  statusById.set(row.person_id, row.status);
  for (const id of (row.identifiers ?? '').split(',').filter(Boolean)) {
    if (/^Q\d+$/.test(id)) personByQid.set(id, row);
  }
  if (row.name) {
    const key = foldKey(row.name);
    personsByFolded.set(key, [...(personsByFolded.get(key) ?? []), row]);
  }
}
console.error(`库中 ${rows.length} 条人物记录，其中 ${personByQid.size} 条带维基数据标识`);

// Article titles to read: everyone we hold who has a zh-wiki article, plus the
// clan articles.
const qids = [...personByQid.keys()];
const titlesByQid = new Map();
for (let i = 0; i < qids.length; i += 60) {
  const chunk = qids.slice(i, i + 60);
  const url =
    'https://www.wikidata.org/w/api.php?action=wbgetentities&props=sitelinks&format=json&ids=' +
    chunk.join('|');
  const res = await fetch(url, { headers: { 'user-agent': 'wang-genealogy-kinship/0.3' } });
  if (!res.ok) continue;
  const data = await res.json();
  for (const [qid, entity] of Object.entries(data.entities ?? {})) {
    const title = entity.sitelinks?.zhwiki?.title;
    if (title) titlesByQid.set(qid, title);
  }
}
const personTitles = [...titlesByQid.values()];
console.error(`其中 ${personTitles.length} 人有中文维基百科条目`);

const articles = [...new Set([...CLAN_ARTICLES, ...personTitles])].slice(
  0,
  limit > 0 ? limit : undefined,
);

// --- mine -------------------------------------------------------------------

/** {subjectTitle|name, otherTitle|name, kind, term, quotation, sourceTitle} */
const candidates = [];
let read = 0;
for (const title of articles) {
  const wikitext = await fetchWikitext(title);
  read += 1;
  if (read % 100 === 0) console.error(`  已读 ${read}/${articles.length} 篇`);
  if (!wikitext) continue;

  for (const rel of mineArticle(title, wikitext)) {
    candidates.push({
      source_title: title,
      a: { title, name: null },
      b: { title: rel.other_title, name: null },
      // `otherIs` describes b relative to a (the article's subject).
      role: rel.otherIs,
      term: rel.term,
      generations: rel.generations,
      quotation: rel.quotation,
    });
  }

  for (const rel of mineListLines(title, wikitext)) {
    candidates.push({
      source_title: title,
      a: { title: rel.other_title, name: rel.other_name },
      b: { title: rel.entry_title, name: rel.entry_name },
      // `entryIs` describes b (the list entry) relative to a (the person named
      // in the line, or the article's subject when it names nobody).
      role: rel.entryIs,
      term: rel.term,
      generations: null,
      quotation: rel.quotation,
    });
  }

  for (const rel of mineIndentedGenealogy(title, wikitext)) {
    candidates.push({
      source_title: title,
      a: { title: rel.parent.target, name: rel.parent.shown },
      b: { title: rel.child.target, name: rel.child.shown },
      role: 'child',
      term: `世系缩进（${rel.section ?? '未分节'}）`,
      generations: null,
      quotation: rel.quotation,
    });
  }
}
console.error(`挖掘出 ${candidates.length} 条候选关系（含重复）`);

// --- resolve identities -----------------------------------------------------

const linkTitles = new Set();
for (const c of candidates) {
  for (const side of [c.a, c.b]) if (side.title) linkTitles.add(side.title);
}
const qidByTitle = await qidsByTitle([...linkTitles]);
console.error(`解析出 ${qidByTitle.size}/${linkTitles.size} 个条目的维基数据标识`);

const unresolved = new Map();
const ambiguous = new Map();

/** Existing person, a planned new person, or null when we cannot tell who. */
function resolve(side) {
  const qid = side.title ? (qidByTitle.get(side.title) ?? null) : null;
  const name = (side.name ?? side.title ?? '').replace(/\s*\([^)]*\)\s*$/, '').trim();
  if (qid && personByQid.has(qid)) {
    return { kind: 'existing', person_id: personByQid.get(qid).person_id, qid, name: personByQid.get(qid).name };
  }
  if (name) {
    const matches = personsByFolded.get(foldKey(name)) ?? [];
    if (matches.length === 1) {
      return { kind: 'existing', person_id: matches[0].person_id, qid, name: matches[0].name };
    }
    if (matches.length > 1) {
      ambiguous.set(name, (ambiguous.get(name) ?? 0) + 1);
      return null;
    }
  }
  if (!name) return null;
  if (!isWangName(name)) {
    unresolved.set(name, (unresolved.get(name) ?? 0) + 1);
    return { kind: 'new', qid, name, out_of_scope: true };
  }
  return { kind: 'new', qid, name };
}

const newPersons = new Map();
const edges = new Map();
const sources = new Map();
const skipped = [];

const sourceKey = (title) => `zhwiki:${title}`;
function noteSource(title) {
  if (sources.has(sourceKey(title))) return sourceKey(title);
  sources.set(sourceKey(title), {
    key: sourceKey(title),
    kind: 'zhwiki',
    ...ZHWIKI_SOURCE_TEMPLATE,
    title: `中文维基百科：${title}`,
    canonical_url: articleUrl(title),
    external_identifier: null,
    metadata_json: null,
  });
  return sourceKey(title);
}

const nodeKey = (r) => (r.kind === 'existing' ? `db:${r.person_id}` : r.qid ? `wd:${r.qid}` : `name:${r.name}`);

for (const candidate of candidates) {
  const a = resolve(candidate.a);
  const b = resolve(candidate.b);
  if (!a || !b) continue;
  if (a.out_of_scope || b.out_of_scope) {
    // Spouses are the one exception, handled after the edges are known.
    if (candidate.role !== 'spouse') continue;
  }
  if (nodeKey(a) === nodeKey(b)) continue;
  if (statusById.get(a.person_id) === 'suppressed' || statusById.get(b.person_id) === 'suppressed') continue;

  // Orient: parent/ancestor first.
  let kind;
  let first;
  let second;
  if (candidate.role === 'parent') [kind, first, second] = ['parent', b, a];
  else if (candidate.role === 'child') [kind, first, second] = ['parent', a, b];
  else if (candidate.role === 'ancestor') [kind, first, second] = ['ancestor', b, a];
  else if (candidate.role === 'spouse') [kind, first, second] = ['spouse', a, b];
  else continue;

  for (const person of [first, second]) {
    if (person.kind !== 'new' || newPersons.has(nodeKey(person))) continue;
    newPersons.set(nodeKey(person), {
      key: nodeKey(person),
      qid: person.qid,
      cbdb: null,
      hop: 1,
      name: { text: person.name, language: detectScript(person.name) ?? 'zh-Hans' },
      spouse_only: false,
      relationship_only: !isWangName(person.name),
      out_of_scope: Boolean(person.out_of_scope),
      claims: [
        {
          predicate: 'name.primary',
          value: { text: person.name, language: detectScript(person.name) ?? 'zh-Hans' },
          confidence: 'medium',
          source_keys: [noteSource(candidate.source_title)],
          change_summary: '据中文维基百科条文补录亲属人物',
        },
      ],
      historicity: {
        kind: 'adjacent_to_historical_person',
        detail: `中文维基百科《${candidate.source_title}》记其与已收录历史人物为直系亲属：${candidate.quotation.slice(0, 80)}`,
      },
      source_keys: [noteSource(candidate.source_title)],
    });
  }

  const key =
    kind === 'spouse'
      ? `spouse|${[nodeKey(first), nodeKey(second)].sort().join('|')}`
      : `${kind}|${nodeKey(first)}|${nodeKey(second)}`;
  const edge =
    edges.get(key) ??
    (() => {
      const created = {
        kind,
        ...(kind === 'spouse'
          ? { a_key: nodeKey(first), b_key: nodeKey(second), a_name: first.name, b_name: second.name }
          : {
              parent_key: nodeKey(first),
              child_key: nodeKey(second),
              parent_name: first.name,
              child_name: second.name,
            }),
        parent_person_id: kind !== 'spouse' ? first.person_id : undefined,
        child_person_id: kind !== 'spouse' ? second.person_id : undefined,
        a_person_id: kind === 'spouse' ? first.person_id : undefined,
        b_person_id: kind === 'spouse' ? second.person_id : undefined,
        citations: [],
      };
      edges.set(key, created);
      return created;
    })();
  const locator = candidate.generations
    ? `条文：${candidate.term}（${candidate.generations}世）`
    : `条文：${candidate.term}`;
  if (!edge.citations.some((c) => c.source_key === sourceKey(candidate.source_title) && c.locator === locator)) {
    edge.citations.push({
      source_key: noteSource(candidate.source_title),
      locator,
      note: null,
      quotation: candidate.quotation,
    });
  }
}

// A non-王 person stays only if a marriage to a 王 person is among the edges.
const marriedToWang = new Set();
for (const edge of edges.values()) {
  if (edge.kind !== 'spouse') continue;
  const names = [edge.a_name, edge.b_name];
  if (isWangName(names[0]) !== isWangName(names[1])) {
    marriedToWang.add(isWangName(names[0]) ? edge.b_key : edge.a_key);
  }
}
for (const [key, person] of [...newPersons]) {
  if (isWangName(person.name.text) || marriedToWang.has(key)) continue;
  newPersons.delete(key);
  skipped.push({ key, name: person.name.text, reason: 'not_wang_surname', detail: '非王姓且无与王姓的婚姻关系' });
}
const planEdges = [...edges.values()].filter((edge) => {
  const keys = edge.kind === 'spouse' ? [edge.a_key, edge.b_key] : [edge.parent_key, edge.child_key];
  return keys.every((key) => !key.startsWith('db:') ? newPersons.has(key) : true);
});

const plan = {
  generated_from: ['zhwiki-prose'],
  hops: 1,
  max_new: newPersons.size,
  capped_relationships: 0,
  expanded_keys: [],
  sources: [...sources.values()],
  persons: [...newPersons.values()],
  edges: planEdges,
  identity_merges: [],
  name_collisions: [],
  unmapped_cbdb_relations: [],
  skipped,
};
writeFileSync(outPath, `${JSON.stringify(plan, null, 2)}\n`, 'utf8');

const counts = planEdges.reduce((acc, e) => ({ ...acc, [e.kind]: (acc[e.kind] ?? 0) + 1 }), {});
console.error(
  `plan: 亲子 ${counts.parent ?? 0}、配偶 ${counts.spouse ?? 0}、世系 ${counts.ancestor ?? 0} | ` +
    `新建 ${plan.persons.length} 人 | 跳过 ${skipped.length} | 同名歧义 ${ambiguous.size} 个名字`,
);
if (ambiguous.size) {
  console.error(
    '  同名歧义（未采用，需人工判断）:',
    [...ambiguous.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([n, c]) => `${n}×${c}`).join('、'),
  );
}
console.error(`written to ${outPath}`);
