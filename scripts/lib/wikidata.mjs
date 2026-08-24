// Wikidata access for the kinship pipeline.
//
// Only reads. Everything here returns plain data for fetch-kinship.mjs to shape
// into a plan; nothing is written to the database from this module.

const ENDPOINT = 'https://query.wikidata.org/sparql';
const USER_AGENT = 'wang-genealogy-kinship/0.2 (https://wang-genealogy-web.pages.dev)';

/**
 * Kinship statements we read, and what each says about the other person.
 *
 * Wikidata frequently records a link on one side only — an item lists its
 * children while those children say nothing about their father — so every
 * property is read in both directions. The `r` suffix means the statement lives
 * on the *other* item and points back at the person being expanded.
 *
 * Siblings are traversed but never stored: this model has no sibling predicate,
 * and a sibling is worth reaching because their parents are the person's parents
 * too, which is a link we *can* record.
 */
export const KINSHIP_PROPERTIES = {
  P22: { label: '父', otherIs: 'parent' },
  P25: { label: '母', otherIs: 'parent' },
  P40: { label: '子女', otherIs: 'child' },
  P26: { label: '配偶', otherIs: 'spouse' },
  P22r: { label: '之父', otherIs: 'child' },
  P25r: { label: '之母', otherIs: 'child' },
  P40r: { label: '之子女', otherIs: 'parent' },
  P26r: { label: '之配偶', otherIs: 'spouse' },
  P3373: { label: '兄弟姊妹', otherIs: 'sibling' },
  P3373r: { label: '兄弟姊妹', otherIs: 'sibling' },
};

/** The property as it should be cited: the reverse marker is ours, not Wikidata's. */
export const citationProperty = (key) => key.replace(/r$/, '');

export const qidOf = (uri) => uri.split('/').pop();

/** Wikidata item for the 王 family name (P734), the authoritative surname test. */
export const WANG_FAMILY_NAME_QID = 'Q804943';

/** CBDB ids are zero-padded to 7 digits in Wikidata (P497). */
export const padCbdb = (id) => String(id).replace(/\D/g, '').padStart(7, '0');
export const unpadCbdb = (id) => String(id).replace(/\D/g, '').replace(/^0+/, '');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** The public endpoint throttles and occasionally drops connections; retry. */
export async function sparql(query, attempts = 4) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          accept: 'application/sparql-results+json',
          'content-type': 'application/x-www-form-urlencoded',
          'user-agent': USER_AGENT,
        },
        body: new URLSearchParams({ query }),
      });
      if (res.ok) return (await res.json()).results.bindings;
      lastError = new Error(`wikidata query failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
      // 4xx other than rate limiting will not get better by waiting.
      if (res.status < 500 && res.status !== 429) throw lastError;
    } catch (err) {
      lastError = err;
    }
    if (attempt < attempts) await sleep(2000 * attempt);
  }
  throw lastError ?? new Error('wikidata query failed');
}

/** Everything we want to know about one item, before it is folded into a plan. */
export function blankFacts(qid) {
  return {
    qid,
    cbdb: null,
    family_name: null,
    labels: {},
    descriptions: {},
    countries: new Set(),
    zh_wikipedia: null,
    birth: null,
    death: null,
  };
}

/**
 * The OPTIONAL block used for any item variable. Optional multi-valued fields
 * produce a cross product, so callers fold several rows into one facts object
 * with absorbFacts.
 */
export const factsPattern = (v) => `
  OPTIONAL { ?${v} rdfs:label ?labelHans FILTER(lang(?labelHans) IN ("zh-cn", "zh-hans")) }
  OPTIONAL { ?${v} rdfs:label ?labelZh FILTER(lang(?labelZh) = "zh") }
  OPTIONAL { ?${v} rdfs:label ?labelHant FILTER(lang(?labelHant) IN ("zh-hant", "zh-tw", "zh-hk")) }
  OPTIONAL { ?${v} rdfs:label ?labelEn FILTER(lang(?labelEn) = "en") }
  OPTIONAL { ?${v} schema:description ?descZh FILTER(lang(?descZh) IN ("zh", "zh-cn", "zh-hans", "zh-hant", "zh-tw")) }
  OPTIONAL { ?${v} schema:description ?descEn FILTER(lang(?descEn) = "en") }
  OPTIONAL { ?${v} p:P569/psv:P569 [ wikibase:timeValue ?birth; wikibase:timePrecision ?birthPrecision ] }
  OPTIONAL { ?${v} p:P570/psv:P570 [ wikibase:timeValue ?death; wikibase:timePrecision ?deathPrecision ] }
  OPTIONAL { ?${v} wdt:P497 ?cbdbId }
  OPTIONAL { ?${v} wdt:P734 ?familyName }
  OPTIONAL { ?${v} wdt:P27 ?country.
             OPTIONAL { ?country rdfs:label ?countryZh FILTER(lang(?countryZh) IN ("zh", "zh-cn", "zh-hans")) }
             OPTIONAL { ?country rdfs:label ?countryEn FILTER(lang(?countryEn) = "en") } }
  OPTIONAL { ?zhwiki schema:about ?${v}; schema:isPartOf <https://zh.wikipedia.org/> }`;

export function absorbFacts(facts, b) {
  const put = (bag, field, value) => {
    if (value && !bag[field]) bag[field] = value;
  };
  put(facts.labels, 'hans', b.labelHans?.value);
  put(facts.labels, 'zh', b.labelZh?.value);
  put(facts.labels, 'hant', b.labelHant?.value);
  put(facts.labels, 'en', b.labelEn?.value);
  put(facts.descriptions, 'zh', b.descZh?.value);
  put(facts.descriptions, 'en', b.descEn?.value);
  if (b.countryZh?.value) facts.countries.add(b.countryZh.value);
  if (b.countryEn?.value) facts.countries.add(b.countryEn.value);
  if (b.zhwiki?.value) facts.zh_wikipedia ??= b.zhwiki.value;
  if (b.cbdbId?.value) facts.cbdb ??= unpadCbdb(b.cbdbId.value);
  if (b.familyName?.value) facts.family_name ??= qidOf(b.familyName.value);
  if (b.birth?.value) {
    facts.birth ??= { value: b.birth.value, precision: Number(b.birthPrecision?.value ?? 9) };
  }
  if (b.death?.value) {
    facts.death ??= { value: b.death.value, precision: Number(b.deathPrecision?.value ?? 9) };
  }
}

/** Facts for a set of items, in chunks so the query stays inside URL/time limits. */
export async function factsFor(qids, chunkSize = 60) {
  const out = new Map();
  for (let i = 0; i < qids.length; i += chunkSize) {
    const chunk = qids.slice(i, i + chunkSize);
    const bindings = await sparql(`
SELECT ?p ?labelHans ?labelZh ?labelHant ?labelEn ?descZh ?descEn
       ?birth ?birthPrecision ?death ?deathPrecision ?cbdbId ?familyName ?countryZh ?countryEn ?zhwiki
WHERE {
  VALUES ?p { ${chunk.map((q) => `wd:${q}`).join(' ')} }
  ${factsPattern('p')}
}`);
    for (const b of bindings) {
      const id = qidOf(b.p.value);
      if (!out.has(id)) out.set(id, blankFacts(id));
      absorbFacts(out.get(id), b);
    }
  }
  return out;
}

/** Kinship statements (P22/P25/P40/P26) for a set of items, with relative facts. */
export async function kinshipFor(qids, chunkSize = 40) {
  const out = [];
  for (let i = 0; i < qids.length; i += chunkSize) {
    const chunk = qids.slice(i, i + chunkSize);
    const grouped = new Map();
    const bindings = await sparql(`
SELECT ?p ?rel ?other ?labelHans ?labelZh ?labelHant ?labelEn ?descZh ?descEn
       ?birth ?birthPrecision ?death ?deathPrecision ?cbdbId ?familyName ?countryZh ?countryEn ?zhwiki
WHERE {
  VALUES ?p { ${chunk.map((q) => `wd:${q}`).join(' ')} }
  { ?p wdt:P22 ?other. BIND("P22" AS ?rel) }
  UNION { ?p wdt:P25 ?other. BIND("P25" AS ?rel) }
  UNION { ?p wdt:P40 ?other. BIND("P40" AS ?rel) }
  UNION { ?p wdt:P26 ?other. BIND("P26" AS ?rel) }
  UNION { ?p wdt:P3373 ?other. BIND("P3373" AS ?rel) }
  UNION { ?other wdt:P22 ?p. BIND("P22r" AS ?rel) }
  UNION { ?other wdt:P25 ?p. BIND("P25r" AS ?rel) }
  UNION { ?other wdt:P40 ?p. BIND("P40r" AS ?rel) }
  UNION { ?other wdt:P26 ?p. BIND("P26r" AS ?rel) }
  UNION { ?other wdt:P3373 ?p. BIND("P3373r" AS ?rel) }
  ${factsPattern('other')}
}`);
    for (const b of bindings) {
      const key = `${qidOf(b.p.value)}|${b.rel.value}|${qidOf(b.other.value)}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          subject_qid: qidOf(b.p.value),
          property: b.rel.value,
          facts: blankFacts(qidOf(b.other.value)),
        });
      }
      absorbFacts(grouped.get(key).facts, b);
    }
    out.push(...grouped.values());
  }
  return out;
}

/** Which Wikidata items carry these CBDB ids — the bridge between the two sources. */
export async function qidsByCbdb(cbdbIds, chunkSize = 80) {
  const out = new Map();
  const ids = [...new Set(cbdbIds.map(unpadCbdb).filter(Boolean))];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    const values = chunk.map((id) => `"${padCbdb(id)}"`).join(' ');
    const bindings = await sparql(`
SELECT ?p ?cbdbId WHERE {
  VALUES ?cbdbId { ${values} }
  ?p wdt:P497 ?cbdbId.
}`);
    for (const b of bindings) out.set(unpadCbdb(b.cbdbId.value), qidOf(b.p.value));
  }
  return out;
}

// --- interpreting values ----------------------------------------------------

/** Signed year of a Wikidata time value, or NaN. */
export function yearOf(time) {
  const match = /^([+-]?)(\d{4,})-/.exec(time.value);
  if (!match) return Number.NaN;
  const year = Number(match[2]);
  return match[1] === '-' ? -year : year;
}

/** Wikidata time value -> the original-text form this project stores. */
export function formatWikidataTime(time) {
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

/** A date claim payload, or null when the value is too coarse to render. */
export function dateClaim(property, time) {
  const original_text = formatWikidataTime(time);
  if (!original_text) return null;
  const precision = PRECISION_LABEL[time.precision] ?? `wikibase:${time.precision}`;
  return {
    original_text,
    calendar_note: `维基数据 ${property} 结构化日期，精度：${precision}`,
  };
}

/** Preferred stored name: whichever label Wikidata publishes, never converted. */
export function pickName(facts) {
  return facts.labels.hans ?? facts.labels.zh ?? facts.labels.hant ?? facts.labels.en ?? null;
}

/**
 * Personal names behind a title. Records like 漢成帝 or 孝景王皇后 are temple or
 * posthumous titles, not names; Wikidata usually keeps the actual name in
 * P1477 (birth name), P1559 (name in native language) or an alias.
 */
export async function personalNameCandidates(qids, chunkSize = 40) {
  const out = new Map();
  for (let i = 0; i < qids.length; i += chunkSize) {
    const chunk = qids.slice(i, i + chunkSize);
    const bindings = await sparql(`
SELECT ?p ?birthName ?nativeName ?alias ?familyLabel ?givenLabel WHERE {
  VALUES ?p { ${chunk.map((q) => `wd:${q}`).join(' ')} }
  OPTIONAL { ?p wdt:P1477 ?birthName }
  OPTIONAL { ?p wdt:P1559 ?nativeName }
  OPTIONAL { ?p skos:altLabel ?alias FILTER(lang(?alias) IN ("zh", "zh-cn", "zh-hans", "zh-hant", "zh-tw")) }
  OPTIONAL { ?p wdt:P734/rdfs:label ?familyLabel FILTER(lang(?familyLabel) IN ("zh", "zh-cn", "zh-hans")) }
  OPTIONAL { ?p wdt:P735/rdfs:label ?givenLabel FILTER(lang(?givenLabel) IN ("zh", "zh-cn", "zh-hans")) }
}`);
    for (const b of bindings) {
      const id = qidOf(b.p.value);
      const entry = out.get(id) ?? {
        birth_name: null,
        native_name: null,
        family: null,
        given: null,
        aliases: new Set(),
      };
      entry.birth_name ??= b.birthName?.value ?? null;
      entry.native_name ??= b.nativeName?.value ?? null;
      entry.family ??= b.familyLabel?.value ?? null;
      entry.given ??= b.givenLabel?.value ?? null;
      if (b.alias?.value) entry.aliases.add(b.alias.value);
      out.set(id, entry);
    }
  }
  return out;
}

/** Titles and honorifics that are not personal names. */
export const TITLE_PATTERN =
  /(皇后|皇太后|太后|太子|公主|單于|单于|王后|婕妤|美人|夫人|貴妃|贵妃|昭儀|昭仪|室主|皇帝|大帝|世祖|太祖|高祖|中宗|.帝$|府君$)/;

/**
 * Pick the personal name a source actually states, or null when it only knows
 * the title. Never composes a name that no source writes.
 */
export function pickPersonalName(candidate) {
  if (!candidate) return null;
  const usable = (value) =>
    typeof value === 'string' &&
    value.length >= 2 &&
    value.length <= 6 &&
    !TITLE_PATTERN.test(value) &&
    /[\u3400-\u9fff]/.test(value);

  if (usable(candidate.birth_name)) return candidate.birth_name;
  if (usable(candidate.native_name)) return candidate.native_name;
  const family = candidate.family;
  if (family) {
    // An alias beginning with the recorded family name is the personal name in
    // nearly every case (漢成帝 → 劉驁); titles do not begin with it.
    const alias = [...candidate.aliases]
      .filter((a) => a.startsWith(family) && usable(a))
      .sort((a, b) => a.length - b.length)[0];
    if (alias) return alias;
    if (candidate.given && usable(family + candidate.given)) return family + candidate.given;
  }
  return null;
}
