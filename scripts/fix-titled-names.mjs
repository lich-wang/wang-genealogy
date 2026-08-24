// Record people under the name they had, not the title they were given.
//
// Imports take whatever label a source publishes, and for emperors, empresses
// and consorts that label is a temple name or a posthumous title: 漢成帝,
// 孝景王皇后, 呼韓邪單于. Those are not names. Where a source states the actual
// name (Wikidata P1477 / P1559 / an alias beginning with the recorded family
// name, or CBDB's ChName), this rewrites `name.primary` to it and keeps the
// title as a `name.alias`, so nothing becomes unfindable.
//
// The rewrite is a normal claim revision through the API: the previous value
// stays in the claim's history. Where no source states a personal name, the
// title is left alone and reported — inventing one is not an option.
//
// Usage:
//   node scripts/fix-titled-names.mjs [--dry-run] [--local]
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD

import { detectScript } from '../packages/i18n/src/script.ts';
import { basicInfo as cbdbBasicInfo, cleanName, fetchPerson } from './lib/cbdb.mjs';
import { d1Query } from './lib/d1.mjs';
import { TITLE_PATTERN, personalNameCandidates, pickPersonalName } from './lib/wikidata.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const EMAIL = process.env.IMPORTER_EMAIL;
const PASSWORD = process.env.IMPORTER_PASSWORD;
const dryRun = flag('--dry-run');
const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};

if (!dryRun && (!EMAIL || !PASSWORD)) {
  console.error('set IMPORTER_EMAIL and IMPORTER_PASSWORD');
  process.exit(2);
}

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
  const json = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const err = new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
    err.status = res.status;
    err.code = json.error;
    throw err;
  }
  return json;
}

// --- find the titled records ------------------------------------------------

const rows = d1Query(
  `SELECT c.id AS claim_id, c.current_revision AS revision,
          json_extract(c.value_json, '$.text') AS name,
          p.id AS person_id,
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
            WHERE cs.claim_id = c.id AND s.external_identifier IS NOT NULL) AS identifiers
     FROM claim c JOIN person p ON p.id = c.subject_person_id
    WHERE c.predicate = 'name.primary'
      AND p.status = 'active'
      AND c.status <> 'retracted'`,
  { ...d1, label: 'names' },
);

const titled = rows
  .filter((r) => r.name && TITLE_PATTERN.test(r.name))
  .map((r) => {
    const ids = (r.identifiers ?? '').split(',').filter(Boolean);
    return {
      ...r,
      qid: ids.find((id) => /^Q\d+$/.test(id)) ?? null,
      cbdb: (ids.find((id) => /^CBDB[:=]?\s*\d+$/i.test(id)) ?? '').replace(/\D/g, '').replace(/^0+/, '') || null,
    };
  });

console.log(`公开人物 ${rows.length} 人，其中 ${titled.length} 条以称号入库。`);
if (titled.length === 0) process.exit(0);

// --- ask the sources for the actual name ------------------------------------

const candidates = await personalNameCandidates(titled.filter((t) => t.qid).map((t) => t.qid));

const plan = [];
for (const record of titled) {
  let personal = pickPersonalName(record.qid ? candidates.get(record.qid) : null);
  let via = personal ? '维基数据' : null;
  if (!personal && record.cbdb) {
    const info = cbdbBasicInfo(await fetchPerson(record.cbdb));
    const chName = cleanName(info?.name ?? '');
    if (chName && !TITLE_PATTERN.test(chName) && chName !== record.name) {
      personal = chName;
      via = 'CBDB';
    }
  }
  if (personal && personal !== record.name) plan.push({ ...record, personal, via });
  else if (!personal) plan.push({ ...record, personal: null, via: null });
}

const fixable = plan.filter((p) => p.personal);
const unresolved = plan.filter((p) => !p.personal);

console.log(`\n可更正为本名 ${fixable.length} 条：`);
for (const p of fixable) console.log(`  ${p.name} → ${p.personal}（${p.via}）`);
console.log(`\n来源未给出本名，保留称号 ${unresolved.length} 条：`);
console.log('  ' + unresolved.map((p) => p.name).join('、'));

if (dryRun) {
  console.log('\n--dry-run：未执行。');
  process.exit(0);
}

// --- rewrite ----------------------------------------------------------------

({ token } = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD }));

let renamed = 0;
let aliased = 0;
for (const record of fixable) {
  // The sources backing the name claim also back the title as an alias.
  const claim = await api('GET', `/claims/${record.claim_id}`);
  const sources = (claim.sources ?? []).map((s) => ({
    source_id: s.source_id,
    stance: 'supports',
    ...(s.locator ? { locator: s.locator } : {}),
  }));

  try {
    await api('POST', `/claims/${record.claim_id}/revisions`, {
      expected_revision: record.revision,
      patch: {
        value: { text: record.personal, language: detectScript(record.personal) ?? 'zh-Hans' },
      },
      change_summary: `更正为本名（原记为称号「${record.name}」，据${record.via}）`,
    });
    renamed += 1;
  } catch (e) {
    console.error(`  ! ${record.name} 更名失败: ${e.code ?? e.message}`);
    continue;
  }

  // Keep the title reachable: it is how most readers know the person.
  try {
    const alias = await api('POST', `/persons/${record.person_id}/claims`, {
      claim_kind: 'property',
      predicate: 'name.alias',
      value: { text: record.name, language: detectScript(record.name) ?? 'zh-Hans' },
      confidence: 'high',
      sources,
      change_summary: '称号/庙号改记为异名',
    });
    aliased += 1;
    await api('POST', `/claims/${alias.claim_id}/revisions`, {
      expected_revision: 1,
      patch: { status: 'accepted' },
      change_summary: '导入：核对来源后采纳',
    }).catch(() => {});
  } catch (e) {
    console.error(`  ! ${record.name} 异名写入失败: ${e.code ?? e.message}`);
  }
  console.log(`~ ${record.name} → ${record.personal}`);
}

console.log(`\n完成：更名 ${renamed} 条，称号转为异名 ${aliased} 条，保留称号 ${unresolved.length} 条。`);
