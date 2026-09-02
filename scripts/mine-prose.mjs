// Mine kinship out of *prose* — Chinese Wikipedia and the standard histories —
// and write an import plan.
//
// One round, run repeatedly:
//
//   node scripts/mine-prose.mjs --frontier --dump /tmp/pages     # pages out
//   …hand /tmp/pages to readers, collect their JSON…
//   node scripts/mine-prose.mjs --frontier --candidates all.json # plan in
//   node scripts/import-kinship.mjs --plan scripts/kinship-data.json
//
//   [--corpus zhwiki,wikisource] [--limit 0] [--reread] [--local]
//
// The frontier is whoever has an unknown side — no parent recorded, or no child
// recorded. Those are the people whose page can name a generation the database
// does not have; someone already linked both ways mostly re-yields what is
// stored. Pages read in an earlier round are remembered in
// scripts/.cache/pages-read.json and skipped, so a round only pays for
// something new. Nothing here creates a person twice: identity is resolved
// against the database first, and `import-kinship.mjs` matches on re-runs.
//
// Two corpora, because they say different things. Wikipedia carries what a
// modern editor knows, in prose Wikidata never captured. Wikisource carries the
// histories themselves — 晉書 卷八十 *is* 王羲之's biography, and states three
// generations in its first sentence, with the surname dropped after the first
// mention. The regex miner reads neither; a language model reads both, and
// everything it reports is re-checked against the page before it is believed.
//
// Every claim keeps the sentence it came from as the citation's quotation, so a
// reader can check the wording without leaving the page. Nothing is inferred
// from proximity.
//
// Scope is the same as everywhere else: 王-surname persons, plus non-王 spouses
// of theirs, and nobody else.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import { isWangScopeName } from './lib/scope.mjs';
import {
  WIKISOURCE_SOURCE_TEMPLATE,
  biographyChapters,
  chapterPlainText,
  fetchWikisource,
  wikisourceUrl,
} from './lib/wikisource.mjs';
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
// Which of the two open corpora to read. Wikipedia carries what a modern
// editor knows; Wikisource carries the histories themselves, which state
// kinship the regex miner cannot see — no links to anchor on, and the surname
// dropped once the subject is named.
const corpora = option('--corpus', 'zhwiki,wikisource').split(',').map((s) => s.trim());
// Pages read in an earlier run are skipped, so each round only spends a reader
// on something new. `--reread` ignores that record.
const reread = flag('--reread');
// `--pages FILE` reads an explicit list (`corpus:title`, one per line) instead
// of deriving one from the frontier. The frontier can only ask about people the
// database already holds; a clan chart names people it does not, and this is
// how those get read in.
const pagesPath = option('--pages', null);
// `--chart FILE` folds in what `mine-chart.mjs` traced off a rendered genealogy
// diagram. Those relations skip the reader's gate because no reader was
// involved: they come from the lines drawn on the page, read geometrically.
const chartPath = option('--chart', null);

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

const isWangName = isWangScopeName;

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
                    AND k.predicate IN ('kinship.parent_of','kinship.father_of','kinship.mother_of')
                    AND k.status NOT IN ('retracted', 'superseded')) AS has_parent,
          EXISTS(SELECT 1 FROM claim k
                  WHERE k.subject_person_id = p.id
                    AND k.predicate IN ('kinship.parent_of','kinship.father_of','kinship.mother_of')
                    AND k.status NOT IN ('retracted', 'superseded')) AS has_child,
          (SELECT group_concat(json_extract(a.value_json, '$.text'), '') FROM claim a
             WHERE a.subject_person_id = p.id
               AND a.predicate IN ('name.alias', 'name.courtesy')
               AND a.status NOT IN ('retracted', 'superseded')) AS aliases
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
  // Indexed under every name the record answers to, not just the primary one.
  // A source writes 「太子晋」 for the man this database records as 姬晋, and
  // matching on the primary name alone would file him a second time under the
  // title the policy deliberately keeps out of `name.primary`.
  for (const text of [row.name, ...(row.aliases ?? '').split('\u001f').filter(Boolean)]) {
    if (!text) continue;
    const key = foldKey(text);
    const list = personsByFolded.get(key) ?? [];
    if (!list.includes(row)) personsByFolded.set(key, [...list, row]);
  }
}
console.error(`库中 ${rows.length} 条人物记录，其中 ${personByQid.size} 条带维基数据标识`);

// Article titles to read: everyone we hold who has a zh-wiki article, plus the
// clan articles.
const titlesByQid = await zhwikiTitlesByQid([...personByQid.keys()]);
const personTitles = [...titlesByQid.values()];
console.error(`其中 ${personTitles.length} 人有中文维基百科条目`);

// The frontier is whoever has an unknown side: no parent recorded (nothing
// above them) or no child recorded (nothing below). Those are the pages that
// can name a generation we do not have; someone linked in both directions
// mostly re-yields what is already stored.
const frontier = [...titlesByQid]
  .map(([qid, title]) => ({ row: personByQid.get(qid), title }))
  .filter(({ row }) => row && row.status === 'active')
  .filter(({ row }) => !frontierOnly || !Number(row.has_parent) || !Number(row.has_child));
if (frontierOnly) {
  const up = frontier.filter(({ row }) => !Number(row.has_parent)).length;
  const down = frontier.filter(({ row }) => !Number(row.has_child)).length;
  console.error(`前沿 ${frontier.length} 人：缺上一代 ${up}、缺下一代 ${down}`);
}

/** Pages already handed to a reader, so a round only pays for something new. */
const READ_FILE = new URL('.cache/pages-read.json', import.meta.url).pathname;
// Folding a reader's findings back in has to see the same pages the reader
// saw — including the ones the dump step has already marked read — or the
// pattern miner runs against an empty list and contributes nothing.
const alreadyRead = new Set(
  !reread && !candidatesPath && existsSync(READ_FILE)
    ? JSON.parse(readFileSync(READ_FILE, 'utf8')).pages ?? []
    : [],
);

/** {corpus, title, subject} — the pages this round would read. */
const pages = [];
const seenPage = new Set();
const addPage = (corpus, title, subject) => {
  const key = `${corpus}:${title}`;
  if (seenPage.has(key) || alreadyRead.has(key)) return;
  seenPage.add(key);
  pages.push({ corpus, title, subject, key });
};

if (pagesPath) {
  for (const line of readFileSync(pagesPath, 'utf8').split('\n')) {
    const entry = line.trim();
    if (!entry || entry.startsWith('#')) continue;
    const [head, ...rest] = entry.split(':');
    const known = head === 'zhwiki' || head === 'wikisource';
    addPage(known ? head : 'zhwiki', known ? rest.join(':') : entry, null);
  }
  console.error(`按清单待读 ${pages.length} 页`);
}
if (!pagesPath && corpora.includes('zhwiki')) {
  for (const title of CLAN_ARTICLES) addPage('zhwiki', title, null);
  for (const { title, row } of frontier) addPage('zhwiki', title, row.name);
}
if (!pagesPath && corpora.includes('wikisource')) {
  const wanted = frontier.filter(({ row }) => row.name && isWangName(row.name));
  console.error(`维基文库：为 ${wanted.length} 人检索正史列传…`);
  let done = 0;
  for (const { row } of wanted) {
    for (const chapter of await biographyChapters(row.name, { limit: 2 })) {
      addPage('wikisource', chapter, row.name);
    }
    if ((done += 1) % 50 === 0) console.error(`  已检索 ${done}/${wanted.length}`);
  }
}

const articles = pages.slice(0, limit > 0 ? limit : undefined);
console.error(`本轮待读 ${articles.length} 页（已读过 ${alreadyRead.size} 页，跳过）`);

// --- hand the articles to a reader ------------------------------------------

/** A page's wikitext and reader-facing text, whichever corpus it came from. */
async function readPage(page) {
  if (page.corpus === 'wikisource') {
    const raw = await fetchWikisource(page.title);
    return raw ? { raw, plain: chapterPlainText(raw) } : null;
  }
  const raw = await fetchWikitext(page.title);
  return raw ? { raw, plain: articlePlainText(raw) } : null;
}

if (dumpDir) {
  mkdirSync(dumpDir, { recursive: true });
  const manifest = [];
  for (const [i, page] of articles.entries()) {
    const text = await readPage(page);
    if (!text) continue;
    // A biography states kinship in its opening; the tail is bibliography and
    // honours. Trimming keeps a batch inside one reader's context.
    const body = text.plain.slice(0, 9000);
    const file = `${String(i).padStart(4, '0')}.txt`;
    const header = page.subject ? `# ${page.title}\n（本页要找的人物：${page.subject}）` : `# ${page.title}`;
    writeFileSync(join(dumpDir, file), `${header}\n\n${body}\n`, 'utf8');
    manifest.push({ file, title: page.title, corpus: page.corpus, subject: page.subject, chars: body.length });
    if ((i + 1) % 50 === 0) console.error(`  已导出 ${i + 1}/${articles.length}`);
  }
  writeFileSync(join(dumpDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  // Recorded now rather than after the import: a page whose reader found
  // nothing has still been read, and re-reading it next round would cost the
  // same and find the same nothing.
  //
  // Merged with what is on disk, not with the set this run started from —
  // `--reread` deliberately empties that set, and writing it back would erase
  // every page an earlier round had recorded.
  const onDisk = existsSync(READ_FILE)
    ? (JSON.parse(readFileSync(READ_FILE, 'utf8')).pages ?? [])
    : [];
  mkdirSync(dirname(READ_FILE), { recursive: true });
  writeFileSync(
    READ_FILE,
    JSON.stringify({
      pages: [...new Set([...onDisk, ...manifest.map((m) => `${m.corpus}:${m.title}`)])].sort(),
    }),
    'utf8',
  );
  console.error(`导出 ${manifest.length} 页到 ${dumpDir}（已记入已读）`);
  process.exit(0);
}

// --- mine -------------------------------------------------------------------

/** {subjectTitle|name, otherTitle|name, kind, term, quotation, sourceTitle} */
const candidates = [];
let read = 0;
// Only Wikipedia is mined by pattern: the patterns anchor on wiki links and on
// an infobox, and a Tang history has neither.
for (const { title } of articles.filter((p) => p.corpus === 'zhwiki')) {
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

// --- fold in what was traced off a rendered chart ---------------------------

if (chartPath) {
  let added = 0;
  for (const chart of JSON.parse(readFileSync(chartPath, 'utf8'))) {
    // A chart that draws two boxes reading 王瑜 is telling you there are two men
    // called 王瑜, and matching either one to the single 王瑜 already in the
    // database by name welds strangers together — three of the chart's boxes
    // ended up as one record that way, with three fathers. A box with its own
    // article is still safe: the article is the identity. A box without one
    // whose name is shared goes to the same place every other unresolved
    // namesake goes, which is a human's desk.
    const boxes = new Map();
    for (const rel of chart.relations ?? []) {
      for (const [name, title] of [
        [rel.subject, rel.subject_title],
        [rel.other, rel.other_title],
      ]) {
        if (!name) continue;
        const seen = boxes.get(name) ?? new Set();
        seen.add(title ?? '');
        boxes.set(name, seen);
      }
    }
    const shared = (name, title) => (boxes.get(name)?.size ?? 0) > 1 && !title;

    for (const rel of chart.relations ?? []) {
      if (!rel.subject || !rel.other) continue;
      candidates.push({
        source_corpus: 'zhwiki',
        source_title: chart.article,
        a: {
          title: rel.subject_title ?? null,
          name: rel.subject,
          shared_name_in_source: shared(rel.subject, rel.subject_title),
        },
        b: {
          title: rel.other_title ?? null,
          name: rel.other,
          shared_name_in_source: shared(rel.other, rel.other_title),
        },
        role: rel.other_is ?? 'child',
        term: rel.term ?? '世系圖',
        generations: null,
        // A diagram states a relation without stating a sentence. What is
        // recorded is what the chart shows, so a reader knows to go and look
        // at it rather than hunt the page for wording that is not there.
        quotation: `${chart.article} ${rel.term ?? '世系圖'}：${rel.subject} → ${rel.other}`,
      });
      added += 1;
    }
  }
  console.error(`世系图追踪采纳 ${added} 条`);
}

// --- fold in what a reader found, after checking every word of it ------------

if (candidatesPath) {
  const reported = JSON.parse(readFileSync(candidatesPath, 'utf8'));

  // The dump's manifest is the authority on what each page actually was. A
  // reader asked to echo the page title sometimes echoes the file name instead,
  // and a title taken on trust would be looked up on the wrong site — or on no
  // site at all.
  const manifestPath = join(dirname(candidatesPath), 'manifest.json');
  const pageByRef = new Map();
  if (existsSync(manifestPath)) {
    for (const m of JSON.parse(readFileSync(manifestPath, 'utf8'))) {
      pageByRef.set(m.file, { corpus: m.corpus, title: m.title });
      pageByRef.set(m.title, { corpus: m.corpus, title: m.title });
    }
  }

  const rejected = new Map();
  let accepted = 0;
  for (const article of reported) {
    const known = pageByRef.get(article.article);
    const corpus = known?.corpus ?? (article.corpus === 'wikisource' ? 'wikisource' : 'zhwiki');
    const page = { corpus, title: known?.title ?? article.article };
    const text = await readPage(page);
    if (!text) {
      rejected.set('no_article', (rejected.get('no_article') ?? 0) + (article.relations?.length ?? 0));
      continue;
    }
    const context = {
      title: page.title,
      plain: text.plain,
      links: corpus === 'zhwiki' ? linkTargetsByName(text.raw) : new Map(),
      // 「祖正，尚書郎。父曠，淮南太守」— a history drops the surname once the
      // subject is named. Wikipedia does not, so the allowance is scoped here.
      // A clan table names nobody in full at all —「生賁，為中大夫。賁生渝」— so
      // when a reader says which surname the whole page is about, that is what
      // completes both ends.
      impliedSurname: article.surname || corpus === 'wikisource',
    };
    for (const relation of article.relations ?? []) {
      const checked = verifyRelation(relation, context);
      if (!checked.ok) {
        rejected.set(checked.reason, (rejected.get(checked.reason) ?? 0) + 1);
        continue;
      }
      accepted += 1;
      candidates.push({
        source_corpus: corpus,
        source_title: page.title,
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
/**
 * Kinship already recorded, as an undirected neighbour map. Used to tell
 * namesakes apart: see `resolve`.
 */
const relatives = new Map();
for (const row of d1Query(
  `SELECT subject_person_id AS a, object_person_id AS b FROM claim
    WHERE claim_kind = 'relationship' AND status NOT IN ('retracted', 'superseded')`,
  { ...d1, label: 'kinship' },
)) {
  for (const [x, y] of [
    [row.a, row.b],
    [row.b, row.a],
  ]) {
    if (!x || !y) continue;
    relatives.set(x, (relatives.get(x) ?? new Set()).add(y));
  }
}

/**
 * Which of several namesakes the source means, judged by the company they keep.
 *
 * 王棱's article says he is 「王览之孙，国子祭酒王琛之子」. Two men called 王琛 are
 * on file and the sentence links neither, so the name alone cannot choose —
 * but only one of them is 王览's son, and 王览 is already recorded as 王棱's
 * forebear. A namesake who shares a relative with the person at the other end
 * of the very relation being read is the one the source is talking about.
 *
 * Only ever used to break a tie, and only when it breaks it outright: if two
 * candidates both fit, or none does, the relation is still skipped for a human.
 */
function narrowByKin(matches, contextId) {
  if (!contextId) return null;
  const near = new Set([contextId, ...(relatives.get(contextId) ?? [])]);
  const fits = matches.filter((m) => {
    const kin = relatives.get(m.person_id) ?? new Set();
    return [...kin].some((id) => near.has(id));
  });
  return fits.length === 1 ? fits[0] : null;
}

function resolve(side, contextId = null) {
  const name = (side.name ?? side.title ?? '').replace(/\s*\([^)]*\)\s*$/, '').trim();
  const qid =
    (side.title ? (qidByTitle.get(side.title) ?? null) : null) ??
    (name ? (qidByFoldedName.get(foldKey(name)) ?? null) : null);
  if (qid && personByQid.has(qid)) {
    return { kind: 'existing', person_id: personByQid.get(qid).person_id, qid, name: personByQid.get(qid).name };
  }
  // The source itself says this name stands for more than one person and gave
  // this one no article to tell them apart. Neither a name match nor a fresh
  // record is honest here, so it joins the namesakes awaiting judgement.
  if (side.shared_name_in_source && !qid) return { kind: 'ambiguous', name };
  if (name) {
    const matches = personsByFolded.get(foldKey(name)) ?? [];
    if (matches.length === 1) {
      return { kind: 'existing', person_id: matches[0].person_id, qid, name: matches[0].name };
    }
    if (matches.length > 1) {
      const narrowed = narrowByKin(matches, contextId);
      if (narrowed) {
        return { kind: 'existing', person_id: narrowed.person_id, qid, name: narrowed.name };
      }
      // Not counted yet: the other end of this relation may still identify
      // them. The caller reports it if that fails too.
      return { kind: 'ambiguous', name };
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

// A source per page, per corpus. The two carry different licences in principle
// and different claims in practice — 晉書 saying 王羲之's father was 王曠 is the
// Tang record, not a Wikipedia editor's summary of it — so they are cited apart.
const sourceKey = (corpus, title) => `${corpus}:${title}`;
function noteSource(corpus, title) {
  const key = sourceKey(corpus, title);
  if (sources.has(key)) return key;
  sources.set(
    key,
    corpus === 'wikisource'
      ? {
          key,
          kind: 'wikisource',
          ...WIKISOURCE_SOURCE_TEMPLATE,
          title: `中文维基文库：${title}`,
          canonical_url: wikisourceUrl(title),
          external_identifier: null,
          metadata_json: null,
        }
      : {
          key,
          kind: 'zhwiki',
          ...ZHWIKI_SOURCE_TEMPLATE,
          title: `中文维基百科：${title}`,
          canonical_url: articleUrl(title),
          external_identifier: null,
          metadata_json: null,
        },
  );
  return key;
}

const nodeKey = (r) => (r.kind === 'existing' ? `db:${r.person_id}` : r.qid ? `wd:${r.qid}` : `name:${r.name}`);

for (const candidate of candidates) {
  let a = resolve(candidate.a);
  let b = resolve(candidate.b);
  // One resolved end is context for the other: a namesake is told apart by
  // whether they are related to the person the source pairs them with.
  if (a?.kind === 'ambiguous' && b?.kind === 'existing') a = resolve(candidate.a, b.person_id);
  if (b?.kind === 'ambiguous' && a?.kind === 'existing') b = resolve(candidate.b, a.person_id);
  for (const side of [a, b]) {
    if (side?.kind === 'ambiguous') ambiguous.set(side.name, (ambiguous.get(side.name) ?? 0) + 1);
  }
  if (!a || !b || a.kind === 'ambiguous' || b.kind === 'ambiguous') continue;
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
          source_keys: [noteSource(candidate.source_corpus ?? "zhwiki", candidate.source_title)],
          change_summary: '据中文维基百科条文补录亲属人物',
        },
      ],
      historicity: {
        kind: 'adjacent_to_historical_person',
        detail: `中文维基百科《${candidate.source_title}》记其与已收录历史人物为直系亲属：${candidate.quotation.slice(0, 80)}`,
      },
      source_keys: [noteSource(candidate.source_corpus ?? "zhwiki", candidate.source_title)],
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
  if (!edge.citations.some((c) => c.source_key === sourceKey(candidate.source_corpus ?? "zhwiki", candidate.source_title) && c.locator === locator)) {
    edge.citations.push({
      source_key: noteSource(candidate.source_corpus ?? "zhwiki", candidate.source_title),
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
