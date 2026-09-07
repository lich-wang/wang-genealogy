import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parsePersonMarkdown, formatPersonRecordMarkdown } from './lib/person-markdown.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.resolve(rootDir, valueArg('--content') ?? 'content/persons');
const cacheDir = path.resolve(rootDir, valueArg('--cache') ?? 'scripts/.cache/biographies');
const minLength = Number(valueArg('--min-length') ?? 40);
const limit = Number(valueArg('--limit') ?? Number.POSITIVE_INFINITY);
const startAfter = valueArg('--after');
const offline = process.argv.includes('--offline');
const dryRun = process.argv.includes('--dry-run');
const force = process.argv.includes('--force');
const enrich = process.argv.includes('--enrich');
const accessedAt = new Date().toISOString();
let lastFetchAt = 0;

fs.mkdirSync(cacheDir, { recursive: true });

const entries = fs.readdirSync(contentDir)
  .filter((name) => name.endsWith('.md'))
  .sort()
  .map((name) => {
    const file = path.join(contentDir, name);
    return { name, file, record: parsePersonMarkdown(fs.readFileSync(file, 'utf8'), file) };
  });
const cbdbDynasties = loadCbdbDynasties();

const candidates = entries.filter(({ name, record }) => {
  if (startAfter && name <= startAfter) return false;
  const biography = propertyItem(record, 'bio.summary');
  const summary = biography?.claim?.value_json?.text?.trim() ?? '';
  const language = biography?.claim?.value_json?.language ?? '';
  const generated = biography?.sources?.some((reference) => String(reference.interpretation_note ?? '').startsWith('自动补全人物基本介绍'));
  return force || !String(language).startsWith('zh') || unicodeLength(summary) < minLength || (enrich && generated);
}).slice(0, limit);

const identities = candidates.map(({ record }) => identityFor(record));
const qids = [...new Set(identities.map((identity) => identity.qid).filter(Boolean))];
const wikidata = await loadWikidata(qids);
const articleRequests = identities.flatMap((identity) => {
  const entity = identity.qid ? wikidata[identity.qid] : null;
  const title = identity.wikipediaTitle ?? entity?.sitelinks?.zhwiki?.title ?? null;
  return title ? [{ title, expectedQid: identity.qid }] : [];
});
const wikipedia = await loadWikipedia(articleRequests);

const counts = { scanned: entries.length, candidates: candidates.length, updated: 0, unchanged: 0, wikipedia: 0, wikidata: 0, cbdb: 0, source: 0 };
for (let index = 0; index < candidates.length; index += 1) {
  const entry = candidates[index];
  const identity = identityFor(entry.record);
  const result = biographyFor(entry.record, identity, wikidata, wikipedia);
  if (!result || unicodeLength(result.text) < minLength) {
    counts.unchanged += 1;
    continue;
  }
  const existing = propertyItem(entry.record, 'bio.summary');
  const generatedReferences = existing?.sources?.filter((reference) => String(reference.interpretation_note ?? '').startsWith('自动补全人物基本介绍')) ?? [];
  if (existing?.claim?.value_json?.text === result.text
    && generatedReferences.length === 1
    && generatedReferences[0].source_id === result.source.id) {
    counts.unchanged += 1;
    continue;
  }
  upsertBiography(entry.record, result);
  if (!dryRun) fs.writeFileSync(entry.file, formatPersonRecordMarkdown(entry.record));
  counts.updated += 1;
  counts[result.kind] += 1;
  if ((index + 1) % 250 === 0 || index + 1 === candidates.length) {
    console.error(`  人物介绍 ${index + 1}/${candidates.length}（已更新 ${counts.updated}）`);
  }
}

const finalCounts = countCoverage(dryRun ? entries.map(({ record }) => record) : readAllRecords());
const identityAudit = auditGeneratedBiographies(dryRun ? entries.map(({ record }) => record) : readAllRecords());
console.log(JSON.stringify({ ...counts, ...finalCounts, identity_audit: identityAudit, dry_run: dryRun, offline }, null, 2));

function valueArg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : null;
}

function unicodeLength(value) {
  return [...String(value ?? '').trim()].length;
}

function propertyItem(record, predicate) {
  return record.properties?.find((field) => field.predicate === predicate)?.recommended ?? null;
}

function propertyText(record, predicate) {
  const value = propertyItem(record, predicate)?.claim?.value_json;
  return value?.date?.original_text ?? value?.text ?? null;
}

function allItems(record) {
  return [
    ...(record.properties ?? []).flatMap((field) => [field.recommended, ...(field.alternatives ?? [])]).filter(Boolean),
    ...Object.values(record.relationships ?? {}).flat(),
  ];
}

function allSources(record) {
  const sources = [];
  const seen = new Set();
  for (const item of allItems(record)) {
    for (const reference of item.sources ?? []) {
      if (!reference.source || seen.has(reference.source.id)) continue;
      seen.add(reference.source.id);
      sources.push(reference.source);
    }
  }
  return sources;
}

function identityFor(record) {
  const nameSources = propertySources(record, 'name.primary');
  const fallbackSources = nameSources.length ? [] : nonBiographyPropertySources(record);
  const sources = uniqueSources([...nameSources, ...fallbackSources]);
  const qidSource = findQidSource(sources);
  const cbdbSource = findCbdbSource(sources);
  const wikiSource = findWikipediaSource(sources);
  const qid = String(qidSource?.external_identifier ?? qidSource?.canonical_url?.match(/\/wiki\/(Q\d+)$/)?.[1] ?? '') || null;
  const cbdb = String(cbdbSource?.external_identifier?.match(/CBDB:(\d+)/)?.[1] ?? cbdbSource?.canonical_url?.match(/[?&]id=(\d+)/)?.[1] ?? '') || null;
  const wikipediaTitle = wikiSource ? decodeWikipediaTitle(wikiSource.canonical_url) : null;
  return { qid, cbdb, wikipediaTitle, qidSource, cbdbSource, wikiSource, sources };
}

function nonBiographyPropertySources(record) {
  return uniqueSources((record.properties ?? [])
    .filter((field) => field.predicate !== 'bio.summary')
    .flatMap((field) => [field.recommended, ...(field.alternatives ?? [])])
    .filter(Boolean)
    .flatMap((item) => item.sources ?? [])
    .map((reference) => reference.source)
    .filter(Boolean));
}

function propertySources(record, predicate) {
  const field = record.properties?.find((item) => item.predicate === predicate);
  if (!field) return [];
  return uniqueSources([field.recommended, ...(field.alternatives ?? [])]
    .filter(Boolean)
    .flatMap((item) => item.sources ?? [])
    .map((reference) => reference.source)
    .filter(Boolean));
}

function uniqueSources(sources) {
  return [...new Map(sources.map((source) => [source.id, source])).values()];
}

function findQidSource(sources) {
  return sources.find((source) => /^Q\d+$/.test(String(source.external_identifier ?? '')))
    ?? sources.find((source) => /\/wiki\/Q\d+$/.test(String(source.canonical_url ?? '')));
}

function findCbdbSource(sources) {
  return sources.find((source) => /^CBDB:\d+$/.test(String(source.external_identifier ?? '')))
    ?? sources.find((source) => /cbdbapi\/person\.php\?id=\d+/.test(String(source.canonical_url ?? '')));
}

function findWikipediaSource(sources) {
  return sources.find((source) => String(source.canonical_url ?? '').includes('zh.wikipedia.org/wiki/'));
}

function decodeWikipediaTitle(url) {
  try {
    return decodeURIComponent(new URL(url).pathname.replace(/^\/wiki\//, '')).replaceAll('_', ' ');
  } catch {
    return null;
  }
}

async function loadWikidata(qids) {
  const file = path.join(cacheDir, 'wikidata.json');
  const cache = readJson(file, {});
  const missing = qids.filter((qid) => !(qid in cache));
  if (!offline) {
    for (let index = 0; index < missing.length; index += 50) {
      const chunk = missing.slice(index, index + 50);
      const url = 'https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=descriptions%7Csitelinks&languages=zh%7Czh-hans%7Czh-hant&sitefilter=zhwiki&ids=' + chunk.join('|');
      const data = await fetchJson(url);
      for (const qid of chunk) {
        const entity = data.entities?.[qid];
        cache[qid] = entity && !entity.missing ? {
          descriptions: entity.descriptions ?? {},
          sitelinks: entity.sitelinks ?? {},
        } : null;
      }
      writeJson(file, cache);
      console.error(`  Wikidata ${Math.min(index + 50, missing.length)}/${missing.length}`);
    }
  }
  return cache;
}

async function loadWikipedia(requests) {
  const file = path.join(cacheDir, 'wikipedia.json');
  const cache = readJson(file, {});
  const unique = new Map();
  for (const request of requests) {
    if (!unique.has(request.title)) unique.set(request.title, request);
  }
  const missing = [...unique.values()].filter(({ title }) => !(title in cache));
  if (!offline) {
    for (let index = 0; index < missing.length; index += 20) {
      const chunk = missing.slice(index, index + 20);
      const url = 'https://zh.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=extracts%7Cpageprops&exintro=1&explaintext=1&titles=' + encodeURIComponent(chunk.map(({ title }) => title).join('|'));
      const data = await fetchJson(url);
      const normalized = new Map();
      for (const item of [...(data.query?.normalized ?? []), ...(data.query?.redirects ?? [])]) normalized.set(item.from, item.to);
      const pages = new Map((data.query?.pages ?? []).map((page) => [page.title, page]));
      for (const request of chunk) {
        let title = request.title;
        while (normalized.has(title)) title = normalized.get(title);
        const page = pages.get(title);
        const actualQid = page?.pageprops?.wikibase_item ?? null;
        cache[request.title] = page && !page.missing && (!request.expectedQid || !actualQid || actualQid === request.expectedQid)
          ? { title: page.title, qid: actualQid, extract: page.extract ?? '' }
          : null;
      }
      writeJson(file, cache);
      console.error(`  中文维基 ${Math.min(index + 20, missing.length)}/${missing.length}`);
    }
  }
  return cache;
}

async function fetchJson(url, attempts = 6) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const spacing = 900 - (Date.now() - lastFetchAt);
    if (spacing > 0) await new Promise((resolve) => setTimeout(resolve, spacing));
    lastFetchAt = Date.now();
    try {
      const response = await fetch(url, { headers: { 'user-agent': 'wang-genealogy-biography-backfill/1.0' } });
      if (response.ok) return await response.json();
      lastError = new Error(`${response.status} ${(await response.text()).slice(0, 200)}`);
      const retryAfter = Number(response.headers.get('retry-after'));
      if (response.status === 429) {
        await new Promise((resolve) => setTimeout(resolve, Number.isFinite(retryAfter) ? retryAfter * 1000 : attempt * 5000));
        continue;
      }
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
  }
  throw lastError;
}

function biographyFor(record, identity, wikidata, wikipedia) {
  const name = record.display_name ?? propertyText(record, 'name.primary') ?? record.id;
  const entity = identity.qid ? wikidata[identity.qid] : null;
  const articleTitle = identity.wikipediaTitle ?? entity?.sitelinks?.zhwiki?.title ?? null;
  const cachedArticle = articleTitle ? wikipedia[articleTitle] : null;
  const article = cachedArticle && (!identity.qid || cachedArticle.qid === identity.qid) ? cachedArticle : null;
  const lead = cleanWikipediaLead(article?.extract);
  if (lead && unicodeLength(lead) >= minLength && leadMatchesName(lead, name)) {
    const text = lead.startsWith(name) ? lead : `${name}：${lead}`;
    return { text, language: languageOf(text), kind: 'wikipedia', source: wikipediaSource(article, identity.wikiSource) };
  }

  const description = pickDescription(entity);
  const dates = datePhrase(record);
  if (description && identity.qidSource) {
    const detail = `${name}${dates}，${stripTerminal(description)}。维基数据以独立条目 ${identity.qid} 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。`;
    return { text: detail, language: languageOf(detail), kind: 'wikidata', source: identity.qidSource };
  }

  if (identity.cbdb && identity.cbdbSource) {
    const cached = readJson(path.join(rootDir, 'scripts/.cache/cbdb', `${identity.cbdb}.json`), null);
    const detail = cbdbBiography(name, dates, identity.cbdb, cached, dynastyFor(record, identity.cbdb, cached));
    return { text: detail, language: languageOf(detail), kind: 'cbdb', source: identity.cbdbSource };
  }

  const source = identity.wikiSource ?? identity.qidSource ?? identity.sources[0];
  const sourceName = String(source?.title ?? '现有公开来源')
    .replace(/^(?:中文维基百科|维基数据)：/, '')
    .replace(/（Q\d+）$/, '');
  const detail = `${name}${dates}，史料所见人物。本项目依据《${sourceName}》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。`;
  return { text: detail, language: languageOf(detail), kind: 'source', source };
}

function cleanWikipediaLead(extract) {
  const text = String(extract ?? '').replace(/\s+/g, ' ').trim();
  if (!text || /可以指|消歧义|可能指/.test(text.slice(0, 80))) return null;
  const sentences = text.match(/[^。！？]+[。！？]?/g) ?? [];
  let result = '';
  for (const sentence of sentences) {
    if (unicodeLength(result + sentence) > 280 && unicodeLength(result) >= 40) break;
    result += sentence;
    if (unicodeLength(result) >= 90) break;
  }
  return result.trim() || null;
}

function pickDescription(entity) {
  const description = entity?.descriptions?.['zh-hans']?.value
    ?? entity?.descriptions?.zh?.value
    ?? entity?.descriptions?.['zh-hant']?.value
    ?? null;
  return description && /\p{Script=Han}/u.test(description) ? description : null;
}

function leadMatchesName(lead, name) {
  const normalize = (value) => String(value).replace(/[\s·・()（）]/g, '');
  const normalizedName = normalize(name).replace(/(?:西晋|東晉|东晋|南朝|北朝|明朝|清朝|宋朝|唐朝|漢朝|汉朝)$/u, '');
  return normalizedName.length > 0 && normalize(lead).slice(0, 120).includes(normalizedName);
}

function datePhrase(record) {
  const birth = propertyText(record, 'birth.date');
  const death = propertyText(record, 'death.date');
  if (birth && death) return `（${birth}—${death}）`;
  if (birth) return `（生于${birth}）`;
  if (death) return `（卒于${death}）`;
  return '';
}

function cbdbBiography(name, dates, cbdb, person, dynasty) {
  const basic = person?.BasicInfo ?? {};
  const addresses = asArray(person?.PersonAddresses?.Address).map((row) => useful(row.AddrName)).filter(Boolean);
  const statuses = asArray(person?.PersonSocialStatus?.SocialStatus).map((row) => useful(row.StatusName)).filter((value) => value && !value.startsWith('['));
  const offices = asArray(person?.PersonPostings?.Posting).map((row) => useful(row.OfficeName)).filter((value) => value && !value.includes('某') && !value.startsWith('['));
  const entries = asArray(person?.PersonEntryInfo?.Entry).map((row) => useful(row.EntryCode) ?? useful(row.EntryType)).filter(Boolean);
  const facts = [];
  if (addresses[0]) facts.push(`籍贯记录为${addresses[0]}`);
  if (statuses.length) facts.push(`身份包括${unique(statuses).slice(0, 2).join('、')}`);
  if (entries[0]) facts.push(`入仕记录为${entries[0]}`);
  if (offices.length) facts.push(`曾任${unique(offices).slice(0, 2).join('、')}`);
  const opening = `${name}${dates}，${dynasty ? `${dynasty}人物` : '史料所见人物'}。`;
  const evidence = facts.length ? `CBDB 记录其${facts.slice(0, 3).join('，')}。` : '';
  return `${opening}${evidence}中国历代人物传记资料库（CBDB）以人物编号 ${cbdb} 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。`;
}

function dynastyFor(record, cbdb, person) {
  const direct = useful(person?.BasicInfo?.Dynasty) ?? useful(propertyText(record, 'historical.period'));
  if (direct) return direct;
  for (const item of allItems(record)) {
    for (const reference of item.sources ?? []) {
      const match = String(reference.interpretation_note ?? '').match(/CBDB 朝代\s*=\s*([^｜|，。；\n]+)/);
      if (match && useful(match[1])) return match[1].trim();
    }
  }
  const current = String(propertyText(record, 'bio.summary') ?? '');
  const placeholder = current.match(/(?:CBDB 记载为|identified as a )([^人]+?)(?:人物| person)/i)?.[1];
  if (placeholder && useful(placeholder)) return placeholder.trim();
  const generated = current.match(/，([^，。；]{1,12})人物。/)?.[1];
  if (generated && generated !== '史料所见' && useful(generated)) return generated.trim();
  return cbdbDynasties.get(cbdb) ?? null;
}

function loadCbdbDynasties() {
  const result = new Map();
  const files = [
    ...fs.readdirSync(path.join(rootDir, 'scripts/generated/cbdb-wang-10000'))
      .filter((name) => /^cbdb-wang-\d+\.json$/.test(name))
      .map((name) => path.join(rootDir, 'scripts/generated/cbdb-wang-10000', name)),
    path.join(rootDir, 'scripts/luna-wang-expansion-stage2-2026-09.json'),
    ...fs.readdirSync(path.join(rootDir, 'scripts'))
      .filter((name) => /^wang-historical-roster-2026-09(?:-round\d+)?\.json$/.test(name))
      .map((name) => path.join(rootDir, 'scripts', name)),
  ];
  for (const file of files) {
    const plan = readJson(file, {});
    for (const person of plan.persons ?? []) {
      const summary = person.claims?.find((claim) => claim.predicate === 'bio.summary')?.value?.text;
      const dynasty = String(summary ?? '').match(/CBDB 记载为([^人]+)人物/)?.[1];
      if (person.cbdb && dynasty) result.set(String(person.cbdb), dynasty);
    }
  }
  return result;
}

function useful(value) {
  const text = String(value ?? '').trim();
  return text && !['0', '未詳', '[未詳]', '未知', '不詳'].includes(text) ? text : null;
}

function asArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function unique(values) {
  return [...new Set(values)];
}

function languageOf(text) {
  return /[為與後國歷學號臺萬長門開東書時]/.test(text) ? 'zh-Hant' : 'zh-Hans';
}

function wikipediaSource(article, existing) {
  if (existing) return existing;
  const url = `https://zh.wikipedia.org/wiki/${encodeURIComponent(article.title.replaceAll(' ', '_'))}`;
  return {
    id: stableId('s', url),
    source_type: 'website',
    title: `中文维基百科：${article.title}`,
    creator: '维基百科贡献者',
    publisher: 'Wikimedia Foundation',
    published_at_text: null,
    canonical_url: url,
    external_identifier: article.qid,
    license_code: 'CC-BY-SA-4.0',
    accessed_at: accessedAt,
    metadata_json: null,
  };
}

function upsertBiography(record, result) {
  let field = record.properties.find((item) => item.predicate === 'bio.summary');
  if (!field) {
    field = { predicate: 'bio.summary', recommended: null, alternatives: [] };
    record.properties.unshift(field);
  }
  const claimId = field.recommended?.claim?.id ?? stableId('c', `${record.id}:bio.summary`);
  const sourceId = result.source.id;
  const reference = {
    id: stableId('cs', `${claimId}:${sourceId}`),
    claim_id: claimId,
    source_id: sourceId,
    stance: 'supports',
    locator: result.kind === 'wikipedia' ? '导言' : result.source.external_identifier ?? null,
    quotation: result.kind === 'wikipedia' ? [...result.text].slice(0, 32).join('') : null,
    interpretation_note: `自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 ${result.kind}。`,
    source: result.source,
  };
  const existing = field.recommended;
  const sources = existing?.sources ?? [];
  const mergedSources = [...sources.filter((item) =>
    item.source_id !== sourceId
    && !String(item.interpretation_note ?? '').startsWith('自动补全人物基本介绍')),
  reference];
  field.recommended = {
    claim: {
      ...(existing?.claim ?? {}),
      id: claimId,
      subject_person_id: record.id,
      claim_kind: 'property',
      predicate: 'bio.summary',
      object_person_id: null,
      generation_count: null,
      parent_role: null,
      value_json: { text: result.text, language: result.language },
      status: existing?.claim?.status ?? 'accepted',
      confidence: existing?.claim?.confidence ?? 'medium',
      current_revision: (existing?.claim?.current_revision ?? 0) + 1,
    },
    sources: mergedSources,
    object_person: null,
  };
}

function stableId(prefix, value) {
  return `${prefix}_${crypto.createHash('sha256').update(value).digest('base64url').slice(0, 22)}`;
}

function stripTerminal(value) {
  return String(value).trim().replace(/[。！？；，]+$/u, '');
}

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value));
}

function readAllRecords() {
  return fs.readdirSync(contentDir).filter((name) => name.endsWith('.md')).map((name) => {
    const file = path.join(contentDir, name);
    return parsePersonMarkdown(fs.readFileSync(file, 'utf8'), file);
  });
}

function countCoverage(records) {
  const coverage = { missing: 0, short: 0, non_chinese: 0, good: 0 };
  for (const record of records) {
    const biography = propertyItem(record, 'bio.summary');
    const text = biography?.claim?.value_json?.text?.trim() ?? '';
    const language = biography?.claim?.value_json?.language ?? '';
    if (!text) coverage.missing += 1;
    else if (!String(language).startsWith('zh')) coverage.non_chinese += 1;
    else if (unicodeLength(text) < minLength) coverage.short += 1;
    else coverage.good += 1;
  }
  return coverage;
}

function auditGeneratedBiographies(records) {
  let checked = 0;
  for (const record of records) {
    const biography = propertyItem(record, 'bio.summary');
    const generated = biography?.sources?.find((reference) => String(reference.interpretation_note ?? '').startsWith('自动补全人物基本介绍'));
    if (!generated) continue;
    checked += 1;
    const name = record.display_name ?? propertyText(record, 'name.primary') ?? record.id;
    const text = biography.claim?.value_json?.text ?? '';
    if (!text.startsWith(name)) throw new Error(`${record.id}: 自动生成介绍没有以人物姓名开头`);
    const identity = identityFor(record);
    const sourceQid = String(generated.source?.external_identifier ?? '').match(/^Q\d+$/)?.[0] ?? null;
    if (sourceQid && identity.qid && sourceQid !== identity.qid) {
      throw new Error(`${record.id}: 介绍来源 ${sourceQid} 与姓名来源 ${identity.qid} 不一致`);
    }
  }
  return { checked, name_prefix_errors: 0, qid_mismatches: 0 };
}
