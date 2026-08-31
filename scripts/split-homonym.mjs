// Split one person record that turned out to be two people, and re-hang the
// relationships that were attached to the wrong half.
//
// Why this exists: a source like 《新唐書·宰相世系表》 writes every name as a
// single character — 錯生賁，賁生渝 — and the importer completes the surname and
// matches by name. When the same chapter names two different 王賁 seven
// generations apart, both land on one record and the line of descent folds back
// on itself. The server's cycle check catches the edge that closes the loop; it
// cannot catch the ones before it, because until the loop closes they are
// perfectly legal edges between real people.
//
// Repairing that is not a merge run backwards. A merge has a snapshot and a
// revert; this has neither, so it stays append-only in the ordinary way: the
// misattributed claim is RETRACTED (its revisions and citations stay readable),
// a new anchor is created for the person the source actually meant, and the same
// citation — same locator, same quotation — is written against the new pair. The
// evidence never changes; only which two anchors it is held to join.
//
// Every retraction names the pair it expects to find. If the database says
// otherwise the run stops before writing anything: a stale plan pointed at a
// claim that has since moved is exactly the case where blind execution does the
// most damage.
//
// A plan needs no splits. `scripts/wrong-edges.json` uses only the `retract`
// section, for the other way a mined relation goes wrong: not two people read as
// one, but one sentence read as the wrong relation — 「以弟弟王劭的儿子王謐为嗣子」
// makes 王劭 a son rather than a brother, and 「王珉早逝…由伯父王珣抚养」 makes the
// uncle who raised a boy into his father. Nothing to create, only a claim to
// withdraw and the reason it was wrong. `cite` is for the opposite case: the
// edge is right but under-documented, so it gains the sentence that says so.
//
// Usage:
//   node scripts/split-homonym.mjs [--plan scripts/homonym-splits.json] [--dry-run]
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const API = (
  process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev'
).replace(/\/+$/, '');
const EMAIL = process.env.IMPORTER_EMAIL;
const PASSWORD = process.env.IMPORTER_PASSWORD;
const dryRun = flag('--dry-run');
const planPath = option('--plan', new URL('homonym-splits.json', import.meta.url).pathname);

if (!EMAIL || !PASSWORD) {
  console.error('set IMPORTER_EMAIL and IMPORTER_PASSWORD');
  process.exit(2);
}

const plan = JSON.parse(readFileSync(planPath, 'utf8'));

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
    err.code = json.error;
    throw err;
  }
  return json;
}

async function authenticate() {
  const r = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });
  token = r.token;
  return (await api('GET', '/auth/me')).user;
}

/** Promote a proposed claim to accepted; a 409 means another run got there. */
async function acceptClaim(claimId, revision, summary) {
  try {
    await api('POST', `/claims/${claimId}/revisions`, {
      expected_revision: revision,
      patch: { status: 'accepted' },
      change_summary: summary,
    });
  } catch (e) {
    if (e.status !== 409) throw e;
  }
}

const account = dryRun ? { display_name: '(dry-run)', role: 'n/a' } : await authenticate();
console.log(`account: ${account.display_name} (${account.role})`);

// --- 0. check every retraction target before writing anything ---------------

const targets = [];
for (const item of plan.retract ?? []) {
  const { claim } = await api('GET', `/claims/${item.claim_id}`);
  const want = item.expect;
  const mismatch =
    claim.predicate !== want.predicate ||
    claim.subject_person_id !== want.subject ||
    claim.object_person_id !== want.object;
  if (mismatch) {
    console.error(
      `! ${item.claim_id} 不是计划所指的主张（期望 ${want.label}，实际 ` +
        `${claim.predicate} ${claim.subject_person_id} → ${claim.object_person_id}）`,
    );
    process.exit(1);
  }
  if (claim.status === 'retracted') {
    console.log(`= ${want.label} 已撤回，跳过`);
    continue;
  }
  targets.push({ ...item, claim });
}
const splits = plan.splits ?? [];
const links = plan.link ?? [];
const cites = plan.cite ?? [];
console.log(
  `待撤回 ${targets.length} 条，待新建 ${splits.length} 人，待改挂 ${links.length} 条，待补引用 ${cites.length} 条`,
);

// --- 1. retract first -------------------------------------------------------

// Before creating anything: the new edges reverse the direction of descent, so
// while the old ones are still standing the server would refuse half of them as
// kinship cycles — correctly.
for (const item of targets) {
  if (dryRun) {
    console.log(`- ${item.expect.label}`);
    continue;
  }
  await api('POST', `/claims/${item.claim_id}/retractions`, {
    reason: item.reason,
    // The plan says what kind of correction this is, because the summary is what
    // a reader of the history sees first: a homonym split and a misread sentence
    // are different mistakes and should not be logged as the same one.
    change_summary: `${plan.summary_prefix ?? '修正'}：${item.expect.label}`,
  });
  console.log(`- ${item.expect.label} 已撤回`);
}

// --- 2. create the person the source actually meant -------------------------

const personIdByKey = new Map();

for (const split of splits) {
  const ref = {
    source_id: split.source_id,
    stance: 'supports',
    locator: split.locator,
    quotation: split.quotation,
    interpretation_note: split.reason,
  };
  if (dryRun) {
    personIdByKey.set(split.key, `(dry-run:${split.key})`);
    console.log(`+ ${split.name.text} (${split.key})`);
    continue;
  }
  const created = await api('POST', '/persons', {
    name: { predicate: 'name.primary', value: split.name, confidence: 'medium', sources: [ref] },
    change_summary: `同名异人拆分：${split.reason}｜历史性依据：${split.historicity}`,
  });
  const personId = created.person_id;
  personIdByKey.set(split.key, personId);
  await acceptClaim(created.claim_id, 1, '拆分：来源为《新唐書·宰相世系表》');

  for (const alias of split.aliases ?? []) {
    const claim = await api('POST', `/persons/${personId}/claims`, {
      claim_kind: 'property',
      predicate: 'name.alias',
      value: alias,
      confidence: 'medium',
      sources: [ref],
      change_summary: '封号，记为异名而非本名',
    });
    await acceptClaim(claim.claim_id, 1, '拆分：来源为《新唐書·宰相世系表》');
  }

  try {
    await api('POST', `/persons/${personId}/publish`, {});
    console.log(`+ ${split.name.text} ${personId}（已发布）`);
  } catch (e) {
    console.log(`+ ${split.name.text} ${personId}（未发布：${e.code ?? e.status}）`);
  }
}

// --- 3. re-hang the same evidence on the right pair -------------------------

const resolve = (ref) => (ref.startsWith('split:') ? personIdByKey.get(ref.slice(6)) : ref);

let linked = 0;
for (const edge of links) {
  const fromId = resolve(edge.from);
  const toId = resolve(edge.to);
  if (!fromId || !toId) {
    console.error(`! ${edge.label}: 计划里的人物引用无法解析`);
    process.exitCode = 1;
    continue;
  }
  if (dryRun) {
    console.log(`~ ${edge.label}`);
    continue;
  }
  try {
    const created = await api('POST', `/persons/${fromId}/relationships`, {
      relationship: edge.relationship,
      related_person_id: toId,
      confidence: 'medium',
      // A relationship claim is unique per pair, so all of the old claim's
      // citations have to travel together in one create — re-hanging them one at
      // a time would hit `relationship_exists` on the second.
      sources: (edge.sources ?? [edge]).map((s) => ({
        source_id: s.source_id,
        stance: 'supports',
        ...(s.locator ? { locator: s.locator } : {}),
        ...(s.quotation ? { quotation: s.quotation } : {}),
      })),
      change_summary: `同名异人拆分后改挂（${edge.sources?.length ?? 1} 条引用）`,
    });
    await acceptClaim(created.claim_id, 1, '拆分：来源为《新唐書·宰相世系表》');
    linked += 1;
    console.log(`~ ${edge.label}`);
  } catch (e) {
    console.error(`! ${edge.label}: ${e.code ?? e.status} ${e.message}`);
    process.exitCode = 1;
  }
}

// --- 4. an edge that is right but under-documented ---------------------------

let cited = 0;
for (const item of cites) {
  if (dryRun) {
    console.log(`+ 引用 ${item.label}`);
    continue;
  }
  try {
    await api('POST', `/claims/${item.claim_id}/sources`, {
      source_id: item.source_id,
      stance: 'supports',
      ...(item.locator ? { locator: item.locator } : {}),
      ...(item.quotation ? { quotation: item.quotation } : {}),
      ...(item.note ? { interpretation_note: item.note } : {}),
    });
    cited += 1;
    console.log(`+ 引用 ${item.label}`);
  } catch (e) {
    // Already attached under the same stance is a success for our purposes.
    if (e.status === 409) console.log(`= 引用 ${item.label}（已存在）`);
    else {
      console.error(`! 引用 ${item.label}: ${e.code ?? e.status}`);
      process.exitCode = 1;
    }
  }
}

console.log(`\n--- 汇总 ---`);
console.log(
  `撤回 ${targets.length} 条、新建 ${splits.length} 人、改挂 ${dryRun ? links.length : linked} 条、` +
    `补引用 ${dryRun ? cites.length : cited} 条`,
);
