// Look up parent/child kinship for the persons already in the database and
// write a reviewable import plan.
//
// Reads the roster (person id + name + Wikidata QID) straight from D1, asks
// Wikidata for each person's father (P22), mother (P25) and children (P40),
// then emits scripts/kinship-data.json describing:
//
//   * `new_persons` — relatives not yet in the database, with the claims to
//     create (name, era description, birth/death when Wikidata states them);
//   * `edges` — one parent→child link per pair, with every Wikidata statement
//     that supports it as a separate citation;
//   * `skipped` — relatives deliberately left out, with the reason.
//
// Nothing is written to the database: `import-kinship.mjs` does that through the
// HTTP API so the server-side invariants run. Re-running after an import walks
// one more generation outward, because the roster is read from the database.
//
// Policy notes baked into this script:
//   * Only deceased historical persons may be published. A relative is kept
//     when Wikidata gives a death date, a birth date before 1900, a pre-modern
//     state as country of citizenship, an era in its description, or — the
//     common case for minor figures with no data of their own — when it is one
//     generation from a person who is dated to before 1900 and therefore cannot
//     itself be living. Everything else is skipped and listed.
//   * We never invent a value a source does not state — in particular no
//     "卒年：不详" placeholder claims. Coarse Wikidata precisions are kept
//     coarse ("3世纪", "前1世纪") instead of being sharpened to a year.
//   * Wikidata says "father"/"mother"; the domain model stores only
//     `kinship.parent_of`, so the specific property goes into the citation's
//     locator instead of being turned into a gendered predicate.
//   * Labels are stored exactly as Wikidata publishes them (preferring the
//     zh-cn/zh-hans label, else zh, else zh-hant) and tagged with the script we
//     detect. No simplified/traditional conversion is ever written.
//
// Usage: node scripts/fetch-kinship.mjs [--local] [--out scripts/kinship-data.json]

import { readFileSync, writeFileSync } from 'node:fs';
import { detectScript } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const database = option('--db', process.env.D1_DATABASE ?? 'wang-genealogy');
const remote = !flag('--local');
const outPath = option('--out', new URL('kinship-data.json', import.meta.url).pathname);
const USER_AGENT = 'wang-genealogy-kinship/0.1 (https://wang-genealogy-web.pages.dev)';

/** Wikidata properties we read, and what each says about the pair. */
const KINSHIP_PROPERTIES = {
  P22: { label: '父', otherIs: 'parent' },
  P25: { label: '母', otherIs: 'parent' },
  P40: { label: '子女', otherIs: 'child' },
};

/**
 * States/dynasties that place a person firmly in the past. Only consulted when
 * Wikidata has no usable dates for that person.
 */
const HISTORICAL_ERA =
  /(秦|漢|汉|魏|蜀|吳|吴|晉|晋|隋|唐|宋|遼|辽|金|元|明|清|齊|齐|梁|陳|陈|周|商|春秋|戰國|战国|匈奴|Qin|Han|Wei|Shu|Jin dynasty|Sui|Tang|Song|Liao|Yuan|Ming|Qing|Xiongnu|Three Kingdoms|Northern|Southern)/;

/**
 * A dated anchor only vouches for a neighbouring generation if the anchor's own
 * date is far enough back that a parent or child of theirs cannot be alive now:
 * a child born the year its parent died still dies within ~120 years.
 */
const ADJACENCY_CUTOFF_YEAR = 1900;

// --- 1. roster: who is already in the database, and their QID ----------------

const overrides = JSON.parse(
  readFileSync(new URL('wikidata-qid-overrides.json', import.meta.url), 'utf8'),
);
const overrideByPerson = new Map(overrides.persons.map((p) => [p.person_id, p.qid]));

const rosterRows = d1Query(
  `SELECT p.id AS person_id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name,
          (SELECT s.external_identifier FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c2 ON c2.id = cs.claim_id
            WHERE c2.subject_person_id = p.id
              AND s.external_identifier LIKE 'Q%'
            ORDER BY cs.created_at LIMIT 1) AS qid
     FROM person p
    WHERE p.status IN ('candidate', 'active')
    ORDER BY p.created_at`,
  { database, remote, label: 'roster' },
);

const roster = rosterRows.map((r) => ({
  person_id: r.person_id,
  status: r.status,
  name: r.name,
  qid: r.qid ?? overrideByPerson.get(r.person_id) ?? null,
}));

const personByQid = new Map(roster.filter((r) => r.qid).map((r) => [r.qid, r]));
const withoutQid = roster.filter((r) => !r.qid);

console.error(`roster: ${roster.length} persons, ${personByQid.size} with a Wikidata QID`);
for (const p of withoutQid) console.error(`  ! no QID, cannot expand: ${p.name} (${p.person_id})`);
if (personByQid.size === 0) {
  console.error('nothing to expand');
  process.exit(1);
}

// --- 2. ask Wikidata --------------------------------------------------------

const qid = (uri) => uri.split('/').pop();

async function sparql(query) {
  const res = await fetch('https://query.wikidata.org/sparql', {
    method: 'POST',
    headers: {
      accept: 'application/sparql-results+json',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': USER_AGENT,
    },
    body: new URLSearchParams({ query }),
  });
  if (!res.ok) {
    throw new Error(`wikidata query failed: ${res.status}\n${(await res.text()).slice(0, 800)}`);
  }
  return (await res.json()).results.bindings;
}

/** Shared shape for "what Wikidata knows about this person". */
function blankFacts(itemQid) {
  return {
    qid: itemQid,
    labels: {},
    descriptions: {},
    countries: new Set(),
    zh_wikipedia: null,
    birth: null,
    death: null,
  };
}

function absorbFacts(facts, b, prefix = '') {
  const key = (name) => `${prefix}${name}`;
  const put = (bag, field, value) => {
    if (value && !bag[field]) bag[field] = value;
  };
  put(facts.labels, 'hans', b[key('labelHans')]?.value);
  put(facts.labels, 'zh', b[key('labelZh')]?.value);
  put(facts.labels, 'hant', b[key('labelHant')]?.value);
  put(facts.labels, 'en', b[key('labelEn')]?.value);
  put(facts.descriptions, 'zh', b[key('descZh')]?.value);
  put(facts.descriptions, 'en', b[key('descEn')]?.value);
  if (b[key('countryZh')]?.value) facts.countries.add(b[key('countryZh')].value);
  if (b[key('countryEn')]?.value) facts.countries.add(b[key('countryEn')].value);
  if (b[key('zhwiki')]?.value) facts.zh_wikipedia ??= b[key('zhwiki')].value;
  if (b[key('birth')]?.value) {
    facts.birth ??= {
      value: b[key('birth')].value,
      precision: Number(b[key('birthPrecision')]?.value ?? 9),
    };
  }
  if (b[key('death')]?.value) {
    facts.death ??= {
      value: b[key('death')].value,
      precision: Number(b[key('deathPrecision')]?.value ?? 9),
    };
  }
}

/** The OPTIONAL block used for both anchors and relatives. */
const factsPattern = (v) => `
  OPTIONAL { ?${v} rdfs:label ?labelHans FILTER(lang(?labelHans) IN ("zh-cn", "zh-hans")) }
  OPTIONAL { ?${v} rdfs:label ?labelZh FILTER(lang(?labelZh) = "zh") }
  OPTIONAL { ?${v} rdfs:label ?labelHant FILTER(lang(?labelHant) IN ("zh-hant", "zh-tw", "zh-hk")) }
  OPTIONAL { ?${v} rdfs:label ?labelEn FILTER(lang(?labelEn) = "en") }
  OPTIONAL { ?${v} schema:description ?descZh FILTER(lang(?descZh) IN ("zh", "zh-cn", "zh-hans", "zh-hant", "zh-tw")) }
  OPTIONAL { ?${v} schema:description ?descEn FILTER(lang(?descEn) = "en") }
  OPTIONAL { ?${v} p:P569/psv:P569 [ wikibase:timeValue ?birth; wikibase:timePrecision ?birthPrecision ] }
  OPTIONAL { ?${v} p:P570/psv:P570 [ wikibase:timeValue ?death; wikibase:timePrecision ?deathPrecision ] }
  OPTIONAL { ?${v} wdt:P27 ?country.
             OPTIONAL { ?country rdfs:label ?countryZh FILTER(lang(?countryZh) IN ("zh", "zh-cn", "zh-hans")) }
             OPTIONAL { ?country rdfs:label ?countryEn FILTER(lang(?countryEn) = "en") } }
  OPTIONAL { ?zhwiki schema:about ?${v}; schema:isPartOf <https://zh.wikipedia.org/> }`;

const subjectValues = [...personByQid.keys()].map((q) => `wd:${q}`).join(' ');

// 2a. the anchors themselves — needed to judge whether they can vouch for a
//     relative that carries no dates of its own.
const anchorFacts = new Map();
for (const b of await sparql(`
SELECT ?p ?labelHans ?labelZh ?labelHant ?labelEn ?descZh ?descEn
       ?birth ?birthPrecision ?death ?deathPrecision ?countryZh ?countryEn ?zhwiki
WHERE {
  VALUES ?p { ${subjectValues} }
  ${factsPattern('p')}
}`)) {
  const id = qid(b.p.value);
  if (!anchorFacts.has(id)) anchorFacts.set(id, blankFacts(id));
  absorbFacts(anchorFacts.get(id), b);
}
console.error(`wikidata: facts for ${anchorFacts.size} anchors`);

// 2b. one generation up and down.
const statements = new Map();
for (const b of await sparql(`
SELECT ?p ?rel ?other ?labelHans ?labelZh ?labelHant ?labelEn ?descZh ?descEn
       ?birth ?birthPrecision ?death ?deathPrecision ?countryZh ?countryEn ?zhwiki
WHERE {
  VALUES ?p { ${subjectValues} }
  { ?p wdt:P22 ?other. BIND("P22" AS ?rel) }
  UNION { ?p wdt:P25 ?other. BIND("P25" AS ?rel) }
  UNION { ?p wdt:P40 ?other. BIND("P40" AS ?rel) }
  ${factsPattern('other')}
}`)) {
  const key = `${qid(b.p.value)}|${b.rel.value}|${qid(b.other.value)}`;
  if (!statements.has(key)) {
    statements.set(key, {
      subject_qid: qid(b.p.value),
      property: b.rel.value,
      facts: blankFacts(qid(b.other.value)),
    });
  }
  absorbFacts(statements.get(key).facts, b);
}
console.error(`wikidata: ${statements.size} kinship statements`);

// --- 3. interpreting Wikidata values ----------------------------------------

/** Signed year of a Wikidata time value, or NaN. */
function yearOf(time) {
  const match = /^([+-]?)(\d{4,})-/.exec(time.value);
  if (!match) return Number.NaN;
  const year = Number(match[2]);
  return match[1] === '-' ? -year : year;
}

/** Wikidata time value -> the original-text form this project stores. */
function formatWikidataTime(time) {
  const match = /^([+-]?)(\d{4,})-(\d{2})-(\d{2})T/.exec(time.value);
  if (!match) return null;
  const [, sign, yearRaw, month, day] = match;
  const year = Number(yearRaw);
  if (year === 0) return null;
  const era = sign === '-' ? '前' : '';
  if (time.precision >= 11) return `${era}${year}年${Number(month)}月${Number(day)}日`;
  if (time.precision === 10) return `${era}${year}年${Number(month)}月`;
  if (time.precision === 9) return `${era}${year}年`;
  if (time.precision === 8) return `${era}${Math.floor(year / 10) * 10}年代`;
  if (time.precision === 7) return `${era}${Math.floor((year - 1) / 100) + 1}世纪`;
  return null;
}

const PRECISION_LABEL = { 11: '日', 10: '月', 9: '年', 8: '年代', 7: '世纪' };

function dateClaim(property, time) {
  const original_text = formatWikidataTime(time);
  if (!original_text) return null;
  const precision = PRECISION_LABEL[time.precision] ?? `wikibase:${time.precision}`;
  return {
    original_text,
    calendar_note: `維基數據 ${property} 結構化日期，精度：${precision}`,
  };
}

/** Evidence that a person is a deceased historical figure, or null. */
function ownEvidence(facts) {
  if (facts.death) {
    return { kind: 'death_date', detail: `維基數據 P570 = ${formatWikidataTime(facts.death) ?? facts.death.value}` };
  }
  if (facts.birth && yearOf(facts.birth) < ADJACENCY_CUTOFF_YEAR) {
    return { kind: 'birth_date', detail: `維基數據 P569 = ${formatWikidataTime(facts.birth) ?? facts.birth.value}` };
  }
  const country = [...facts.countries].find((c) => HISTORICAL_ERA.test(c));
  if (country) return { kind: 'historical_country', detail: `維基數據 P27 = ${country}` };
  const description = facts.descriptions.zh ?? facts.descriptions.en ?? '';
  if (HISTORICAL_ERA.test(description)) return { kind: 'description_era', detail: description };
  return null;
}

/**
 * Whether this person is themselves placed far enough in the past to vouch for
 * a neighbouring generation. A date must clear the cutoff; an era (state of
 * citizenship or a dynasty named in the description) is enough on its own,
 * since a Qin-era general's child is not walking around today either.
 */
function vouchingEvidence(facts) {
  for (const [property, time] of [
    ['P570', facts.death],
    ['P569', facts.birth],
  ]) {
    if (time && yearOf(time) < ADJACENCY_CUTOFF_YEAR) {
      return `維基數據 ${property} = ${formatWikidataTime(time) ?? time.value}`;
    }
  }
  const country = [...facts.countries].find((c) => HISTORICAL_ERA.test(c));
  if (country) return `維基數據 P27 = ${country}`;
  const description = facts.descriptions.zh ?? facts.descriptions.en ?? '';
  if (HISTORICAL_ERA.test(description)) return `維基數據描述「${description}」`;
  return null;
}

const anchorEvidence = new Map(
  [...anchorFacts].map(([id, facts]) => [
    id,
    { evidence: ownEvidence(facts), vouches: vouchingEvidence(facts) },
  ]),
);

/** Preferred stored name: whichever label Wikidata publishes, never converted. */
function pickName(facts) {
  const text = facts.labels.hans ?? facts.labels.zh ?? facts.labels.hant ?? facts.labels.en ?? null;
  if (!text) return null;
  const han = /[㐀-鿿]/.test(text);
  return { text, language: han ? (detectScript(text) ?? 'zh-Hans') : 'en' };
}

// --- 4. shape the plan ------------------------------------------------------

const newPersons = new Map();
const edges = new Map();
const skipped = [];

const sortedStatements = [...statements.values()].sort((a, b) =>
  `${a.subject_qid}${a.property}${a.facts.qid}`.localeCompare(`${b.subject_qid}${b.property}${b.facts.qid}`),
);

for (const statement of sortedStatements) {
  const { subject_qid: subjectQid, property, facts } = statement;
  const anchor = personByQid.get(subjectQid);
  const anchorInfo = anchorEvidence.get(subjectQid);
  const existing = personByQid.get(facts.qid);
  const name = pickName(facts);
  const describe = () => ({
    subject_qid: subjectQid,
    subject_name: anchor.name,
    property,
    relative_qid: facts.qid,
    relative_name: name?.text ?? null,
  });

  if (!name) {
    skipped.push({ ...describe(), reason: 'no_label', detail: 'Wikidata 无可用名称标签' });
    continue;
  }

  if (!existing) {
    // Own evidence first; otherwise lean on the dated anchor one generation
    // away, which is what most minor relatives rely on.
    let evidence = ownEvidence(facts);
    if (!evidence && anchorInfo?.vouches) {
      const kinLabel = KINSHIP_PROPERTIES[property].otherIs === 'child' ? '其父/母' : '其子/女';
      evidence = {
        kind: 'adjacent_to_historical_person',
        detail: `${kinLabel} ${anchor.name}（${subjectQid}）：${anchorInfo.vouches}；相鄰一代不可能仍在世`,
      };
    }
    if (!evidence) {
      skipped.push({
        ...describe(),
        reason: 'not_proven_historical',
        detail: '维基数据无生卒年、无国籍、无朝代描述，相邻人物也无纪年，无法排除仍在世',
      });
      continue;
    }
    if (!newPersons.has(facts.qid)) {
      newPersons.set(facts.qid, {
        qid: facts.qid,
        name,
        description: facts.descriptions.zh
          ? { text: facts.descriptions.zh, language: detectScript(facts.descriptions.zh) ?? 'zh-Hans' }
          : facts.descriptions.en
            ? { text: facts.descriptions.en, language: 'en' }
            : null,
        birth: facts.birth ? dateClaim('P569', facts.birth) : null,
        death: facts.death ? dateClaim('P570', facts.death) : null,
        zh_wikipedia: facts.zh_wikipedia,
        historicity: evidence,
      });
    }
  }

  // Collapse mirrored statements (A P22 B and B P40 A) into one parent→child
  // edge that cites both.
  const otherIsParent = KINSHIP_PROPERTIES[property].otherIs === 'parent';
  const parentQid = otherIsParent ? facts.qid : subjectQid;
  const childQid = otherIsParent ? subjectQid : facts.qid;
  const key = `${parentQid}|${childQid}`;
  const edge = edges.get(key) ?? {
    parent_qid: parentQid,
    child_qid: childQid,
    parent_name: otherIsParent ? name.text : anchor.name,
    child_name: otherIsParent ? anchor.name : name.text,
    parent_person_id: (otherIsParent ? existing : anchor)?.person_id ?? null,
    child_person_id: (otherIsParent ? anchor : existing)?.person_id ?? null,
    citations: [],
  };
  edge.citations.push({
    // The statement lives on this item, so this item's record is the source.
    qid: subjectQid,
    property,
    locator: `${property}（${KINSHIP_PROPERTIES[property].label}）`,
  });
  edges.set(key, edge);
}

// Every Wikidata item the importer has to cite, with the name to title its
// source record. Anchors included: a P40 statement on an anchor is the evidence
// for that edge, so the anchor's item is a source too.
const referenced = new Map();
for (const person of newPersons.values()) {
  referenced.set(person.qid, { qid: person.qid, name: person.name.text, zh_wikipedia: person.zh_wikipedia });
}
for (const edge of edges.values()) {
  for (const citation of edge.citations) {
    if (referenced.has(citation.qid)) continue;
    const facts = anchorFacts.get(citation.qid);
    referenced.set(citation.qid, {
      qid: citation.qid,
      name: personByQid.get(citation.qid)?.name ?? pickName(facts ?? blankFacts(citation.qid))?.text ?? citation.qid,
      zh_wikipedia: facts?.zh_wikipedia ?? null,
    });
  }
}

const plan = {
  generated_from: 'wikidata',
  source_template: {
    source_type: 'api_record',
    license_code: 'CC0-1.0',
    creator: '維基數據貢獻者',
    publisher: 'Wikimedia Foundation',
  },
  roster_without_qid: withoutQid.map((p) => ({ person_id: p.person_id, name: p.name })),
  wikidata_items: [...referenced.values()],
  new_persons: [...newPersons.values()],
  edges: [...edges.values()],
  skipped,
};

writeFileSync(outPath, `${JSON.stringify(plan, null, 2)}\n`, 'utf8');
console.error(
  `plan: ${plan.edges.length} kinship edges, ${plan.new_persons.length} new persons, ${plan.skipped.length} skipped`,
);
console.error(`written to ${outPath}`);
