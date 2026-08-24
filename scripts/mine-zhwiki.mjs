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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import {
  ZHWIKI_SOURCE_TEMPLATE,
  articlePlainText,
  articleUrl,
  fetchWikitext,
  linkTargetsByName,
  mineArticle,
  mineIndentedGenealogy,
  mineListLines,
  qidsByTitle,
  verifyRelation,
  zhwikiTitlesByQid,
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
// `--dump DIR` writes the articles as plain text for a reader (a subagent) and
// stops; `--candidates FILE` folds what that reader found back in, after every
// relation has been re-checked against the article. `--frontier` narrows the
// article list to persons whose parents we do not have, which is where a new
// generation can actually come from.
const dumpDir = option('--dump', null);
const candidatesPath = option('--candidates', null);
const frontierOnly = flag('--frontier');

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
              AND s.external_identifier IS NOT NULL) AS identifiers,
          EXISTS(SELECT 1 FROM claim k
                  WHERE k.object_person_id = p.id
                    AND k.predicate = 'kinship.parent_of'
                    AND k.status NOT IN ('retracted', 'superseded')) AS has_parent
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
const titlesByQid = await zhwikiTitlesByQid([...personByQid.keys()]);
const personTitles = [...titlesByQid.values()];
console.error(`其中 ${personTitles.length} 人有中文维基百科条目`);

// The frontier is whoever we hold without a parent: their article is the one
// that can name a generation we do not have. Everyone else is already linked
// upward, so re-reading them mostly re-finds what is already stored.
const frontierTitles = frontierOnly
  ? [...titlesByQid]
      .filter(([qid]) => {
        const row = personByQid.get(qid);
        return row && row.status === 'active' && !Number(row.has_parent);
      })
      .map(([, title]) => title)
  : personTitles;
if (frontierOnly) console.error(`其中 ${frontierTitles.length} 人尚无父母记录（前沿）`);

const articles = [...new Set([...CLAN_ARTICLES, ...frontierTitles])].slice(
  0,
  limit > 0 ? limit : undefined,
);

// --- hand the articles to a reader ------------------------------------------

if (dumpDir) {
  mkdirSync(dumpDir, { recursive: true });
  const manifest = [];
  for (const [i, title] of articles.entries()) {
    const wikitext = await fetchWikitext(title);
    if (!wikitext) continue;
    const plain = articlePlainText(wikitext);
    // A biography's kinship is stated in the lead and the early life; the tail
    // is bibliography and honours. Trimming keeps a batch inside one context.
    const body = plain.slice(0, 9000);
    const file = `${String(i).padStart(4, '0')}.txt`;
    writeFileSync(join(dumpDir, file), `# ${title}\n\n${body}\n`, 'utf8');
    manifest.push({ file, title, chars: body.length });
    if ((i + 1) % 50 === 0) console.error(`  已导出 ${i + 1}/${articles.length}`);
  }
  writeFileSync(join(dumpDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.error(`导出 ${manifest.length} 篇条目到 ${dumpDir}`);
  process.exit(0);
}

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
console.error(`正则挖掘出 ${candidates.length} 条候选关系（含重复）`);

// --- fold in what a reader found, after checking every word of it ------------

if (candidatesPath) {
  const reported = JSON.parse(readFileSync(candidatesPath, 'utf8'));
  const rejected = new Map();
  let accepted = 0;
  for (const article of reported) {
    const wikitext = await fetchWikitext(article.article);
    if (!wikitext) {
      rejected.set('no_article', (rejected.get('no_article') ?? 0) + (article.relations?.length ?? 0));
      continue;
    }
    const context = {
      title: article.article,
      plain: articlePlainText(wikitext),
      links: linkTargetsByName(wikitext),
    };
    for (const relation of article.relations ?? []) {
      const checked = verifyRelation(relation, context);
      if (!checked.ok) {
        rejected.set(checked.reason, (rejected.get(checked.reason) ?? 0) + 1);
        continue;
      }
      accepted += 1;
      candidates.push({
        source_title: article.article,
        a: { title: checked.subject_title, name: checked.subject_name },
        b: { title: checked.other_title, name: checked.other_name },
        role: checked.other_is,
        term: `条文识读（${relation.term ?? checked.other_is}）`,
        generations: checked.generations,
        quotation: checked.quotation,
      });
    }
  }
  console.error(
    `条文识读采纳 ${accepted} 条，驳回 ${[...rejected.values()].reduce((a, b) => a + b, 0)} 条` +
      (rejected.size ? `（${[...rejected].map(([r, n]) => `${r}×${n}`).join('、')}）` : ''),
  );
}

// --- resolve identities -----------------------------------------------------

const linkTitles = new Set();
for (const c of candidates) {
  for (const side of [c.a, c.b]) if (side.title) linkTitles.add(side.title);
}
const qidByTitle = await qidsByTitle([...linkTitles]);
console.error(`解析出 ${qidByTitle.size}/${linkTitles.size} 个条目的维基数据标识`);

// The same person reached twice — once as a wiki link, once as plain text in a
// list line — would otherwise get two keys and be planned as two persons. Fold
// the plain mention onto the linked one, but only when the name resolves to a
// single article: 王彬 names seven different men, and guessing which is meant
// would invent an identity rather than recover one.
const qidByFoldedName = new Map();
for (const [title, qid] of qidByTitle) {
  const key = foldKey(title.replace(/\s*\([^)]*\)\s*$/, '').trim());
  if (!qidByFoldedName.has(key)) qidByFoldedName.set(key, qid);
  else if (qidByFoldedName.get(key) !== qid) qidByFoldedName.set(key, null);
}

const unresolved = new Map();
const ambiguous = new Map();

/** Existing person, a planned new person, or null when we cannot tell who. */
function resolve(side) {
  const name = (side.name ?? side.title ?? '').replace(/\s*\([^)]*\)\s*$/, '').trim();
  const qid =
    (side.title ? (qidByTitle.get(side.title) ?? null) : null) ??
    (name ? (qidByFoldedName.get(foldKey(name)) ?? null) : null);
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
  else if (candidate.role === 'descendant') [kind, first, second] = ['ancestor', a, b];
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

// A non-王 person stays only as the other half of a marriage to a 王 person.
// The marriage counts whether it turns up in this run's edges or is already
// stored: 郗璿 is in scope because she is 王羲之's wife, and that stays true on
// a run that happens not to re-mine the marriage itself.
const marriedToWang = new Set();
for (const edge of edges.values()) {
  if (edge.kind !== 'spouse') continue;
  if (isWangName(edge.a_name) !== isWangName(edge.b_name)) {
    marriedToWang.add(isWangName(edge.a_name) ? edge.b_key : edge.a_key);
  }
}
for (const row of d1Query(
  `SELECT c.subject_person_id AS a, c.object_person_id AS b
     FROM claim c
    WHERE c.predicate = 'kinship.spouse_of'
      AND c.status NOT IN ('retracted', 'superseded')`,
  { ...d1, label: 'spouses' },
)) {
  const names = [row.a, row.b].map((id) => rows.find((r) => r.person_id === id)?.name ?? '');
  if (isWangName(names[0]) !== isWangName(names[1])) {
    marriedToWang.add(`db:${isWangName(names[0]) ? row.b : row.a}`);
  }
}

for (const [key, person] of [...newPersons]) {
  if (isWangName(person.name.text) || marriedToWang.has(key)) continue;
  newPersons.delete(key);
  skipped.push({ key, name: person.name.text, reason: 'not_wang_surname', detail: '非王姓且无与王姓的婚姻关系' });
}

// Scope, applied to the plan itself rather than left to a later pass: an edge
// is kept only when both ends belong here. Without this, following a 王 person
// into their in-laws walks straight into the 劉 and 司馬 imperial lines —
// 王娡 to 漢武帝 to his sons — which is what the collection boundary exists to
// prevent, and no amount of correct sourcing makes those records in scope.
const outOfScopeEdges = [];
const planEdges = [...edges.values()].filter((edge) => {
  const ends =
    edge.kind === 'spouse'
      ? [
          [edge.a_key, edge.a_name],
          [edge.b_key, edge.b_name],
        ]
      : [
          [edge.parent_key, edge.parent_name],
          [edge.child_key, edge.child_name],
        ];
  if (!ends.every(([key]) => key.startsWith('db:') || newPersons.has(key))) return false;
  // A marriage needs only one 王 end — that is what puts the other half in
  // scope. Descent needs both: being married to a 王 person buys the marriage
  // and nothing else, so 漢武帝, who married a 王夫人, still does not bring his
  // father and his sons along with him.
  const kept =
    edge.kind === 'spouse'
      ? ends.some(([, name]) => isWangName(name))
      : ends.every(([, name]) => isWangName(name));
  if (!kept) outOfScopeEdges.push(`${ends[0][1]}${edge.kind === 'spouse' ? '⇄' : '→'}${ends[1][1]}`);
  return kept;
});
if (outOfScopeEdges.length) {
  skipped.push({
    key: null,
    name: null,
    reason: 'edge_out_of_scope',
    detail:
      `${outOfScopeEdges.length} 条关系越出收录范围，不入库` +
      '（世系关系要求两端都是王姓；婚姻关系要求至少一端是王姓）：' +
      `${outOfScopeEdges.slice(0, 8).join('、')}${outOfScopeEdges.length > 8 ? '…' : ''}`,
  });
}

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
