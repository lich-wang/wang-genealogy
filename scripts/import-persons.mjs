// Import historical Wang-surname persons into the live API from a research JSON
// file. Honors all domain invariants: every claim is sourced, relationships are
// submitted in natural language and normalized server-side, dates are stored as
// original text, and persons are published only after a sourced + death-date
// claim exists.
//
// Usage: node scripts/import-persons.mjs <data.json>
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD

import { readFileSync } from 'node:fs';

const API = process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev';
const EMAIL = process.env.IMPORTER_EMAIL ?? 'wiki-importer@example.com';
// No default — pass the importer bot password via env so no credential is
// committed to the (public) repo.
const PASSWORD = process.env.IMPORTER_PASSWORD;
if (!PASSWORD) {
  console.error('set IMPORTER_PASSWORD env');
  process.exit(2);
}

const dataPath = process.argv[2];
if (!dataPath) {
  console.error('usage: node scripts/import-persons.mjs <data.json>');
  process.exit(2);
}
const people = JSON.parse(readFileSync(dataPath, 'utf8'));

let token = null;
async function api(method, path, body) {
  const res = await fetch(`${API}/api/v1${path}`, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
    err.status = res.status;
    err.json = json;
    throw err;
  }
  return json;
}

async function ensureAuth() {
  try {
    const r = await api('POST', '/auth/signup', {
      display_name: '维基导入',
      email: EMAIL,
      password: PASSWORD,
    });
    token = r.token;
    console.log('signed up importer');
  } catch (e) {
    if (e.status === 409) {
      const r = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });
      token = r.token;
      console.log('logged in importer');
    } else throw e;
  }
}

// Already-active person with this exact display name? -> skip (idempotency).
async function findActiveByName(name) {
  const r = await api('GET', `/search?q=${encodeURIComponent(name)}`);
  return (r.items ?? []).find((i) => i.display_name === name && i.status === 'active') ?? null;
}

async function acceptClaim(claimId) {
  // New claims start at revision 1; promote to accepted so summaries show them.
  await api('POST', `/claims/${claimId}/revisions`, {
    expected_revision: 1,
    patch: { status: 'accepted' },
    change_summary: '导入：核对来源后采纳',
  });
}

async function addProperty(personId, predicate, value, confidence, sourceId, summary) {
  const r = await api('POST', `/persons/${personId}/claims`, {
    claim_kind: 'property',
    predicate,
    value,
    confidence,
    sources: [{ source_id: sourceId, stance: 'supports' }],
    change_summary: summary,
  });
  await acceptClaim(r.claim_id);
  return r.claim_id;
}

const idByKey = new Map();
const sourceByKey = new Map();

async function importPerson(p) {
  const existing = await findActiveByName(p.name_zh);
  if (existing) {
    console.log(`= skip ${p.name_zh} (already active ${existing.id})`);
    idByKey.set(p.key, existing.id);
    return;
  }

  // One source per person: the cited (Chinese) Wikipedia article (CC BY-SA).
  const src = await api('POST', '/sources', {
    source_type: 'website',
    title: `中文维基百科：${p.name_zh}`,
    creator: '维基百科贡献者',
    publisher: 'Wikimedia Foundation',
    canonical_url: p.wikipedia_url,
    external_identifier: p.wikidata_id ?? undefined,
    license_code: 'CC-BY-SA-4.0',
  });
  const sourceId = src.source_id;
  sourceByKey.set(p.key, sourceId);

  // Person anchor + primary name (sourced).
  const created = await api('POST', '/persons', {
    name: {
      value: { text: p.name_zh, language: 'zh-Hans' },
      confidence: 'high',
      sources: [{ source_id: sourceId, stance: 'supports', locator: p.wikidata_id ?? undefined }],
    },
    change_summary: '导入历史人物锚点',
  });
  const personId = created.person_id;
  idByKey.set(p.key, personId);
  await acceptClaim(created.claim_id);

  const has = (t) => t && t !== '不详' && t.trim() !== '';

  if (has(p.pinyin))
    await addProperty(personId, 'name.alias', { text: p.pinyin, language: 'zh-Latn-pinyin' }, 'high', sourceId, '拼音');
  if (has(p.alias_zh))
    await addProperty(personId, 'name.alias', { text: p.alias_zh, language: 'zh-Hans' }, 'high', sourceId, '别名');
  if (has(p.birth_text))
    await addProperty(personId, 'birth.date', { date: { original_text: p.birth_text } }, 'medium', sourceId, '生年');
  // Always assert a death claim (even 不详) — these are historical, deceased figures.
  await addProperty(personId, 'death.date', { date: { original_text: has(p.death_text) ? p.death_text : '不详' } }, 'medium', sourceId, '卒年');
  if (has(p.origin_text))
    await addProperty(personId, 'place.origin', { text: p.origin_text }, 'medium', sourceId, '籍贯');
  if (has(p.bio_zh))
    await addProperty(personId, 'bio.summary', { text: String(p.bio_zh).slice(0, 480), language: 'zh-Hans' }, 'medium', sourceId, '简单生平');

  await api('POST', `/persons/${personId}/publish`, {});
  console.log(`+ ${p.name_zh} -> ${personId} (published)`);
}

async function importRelationships(p) {
  const personId = idByKey.get(p.key);
  const sourceId = sourceByKey.get(p.key);
  if (!personId || !sourceId || !Array.isArray(p.relationships)) return;
  for (const rel of p.relationships) {
    const relatedId = idByKey.get(rel.related_key);
    if (!relatedId) {
      console.log(`  ! ${p.name_zh}: missing related ${rel.related_key}`);
      continue;
    }
    try {
      await api('POST', `/persons/${personId}/relationships`, {
        relationship: rel.relationship, // parent | child | spouse (normalized server-side)
        related_person_id: relatedId,
        confidence: 'medium',
        sources: [{ source_id: sourceId, stance: 'supports' }],
        change_summary: '导入亲属关系',
      });
      console.log(`  ~ ${p.name_zh} ${rel.relationship} ${rel.related_key}`);
    } catch (e) {
      if (e.status === 409) console.log(`  ~ ${p.name_zh} ${rel.relationship} ${rel.related_key} (已存在/环，跳过)`);
      else throw e;
    }
  }
}

async function main() {
  await ensureAuth();
  console.log(`importing ${people.length} persons...`);
  for (const p of people) {
    try {
      await importPerson(p);
    } catch (e) {
      console.error(`FAILED person ${p.name_zh}: ${e.message}`);
    }
  }
  console.log('wiring relationships...');
  for (const p of people) {
    try {
      await importRelationships(p);
    } catch (e) {
      console.error(`FAILED rels ${p.name_zh}: ${e.message}`);
    }
  }
  console.log('done.');
}

await main();
