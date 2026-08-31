// Execute a reviewed batch of person merges through the HTTP API.
//
// `propose-merge.mjs` deliberately takes one pair at a time with a reason you
// have to type, because same name is not same person — this repository spent a
// whole round proving it, on two 王賁 seven generations apart. This script is the
// step after that judgement has been made: a plan file lists pairs someone has
// already decided about, and it proposes and approves them in one pass so a
// batch of twelve does not need twelve hand-typed commands.
//
// It does not decide anything. Every entry carries the evidence that identified
// the pair — a shared Wikidata QID, the same parents and the same children, the
// same spouse — and that text becomes the proposal's reason, so the merge is as
// checkable afterwards as it was beforehand.
//
// Approving needs `reviewer` or `admin`. The merge itself is the usual soft
// merge: the source person becomes `merged`, its public ID redirects for good,
// the full snapshot is retained and the whole thing can be reverted.
//
// Usage:
//   node scripts/resolve-duplicates.mjs [--plan scripts/duplicate-merges.json] [--dry-run]
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
const planPath = option('--plan', new URL('duplicate-merges.json', import.meta.url).pathname);

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

const account = dryRun
  ? { display_name: '(dry-run)', role: 'n/a' }
  : await (async () => {
      const r = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });
      token = r.token;
      return (await api('GET', '/auth/me')).user;
    })();
console.log(`account: ${account.display_name} (${account.role})`);
if (!dryRun && !['reviewer', 'admin'].includes(account.role)) {
  console.error('批准合并需要 reviewer 或 admin 角色。');
  process.exit(1);
}

const stats = { approved: 0, rejected: 0, proposed: 0, skipped: 0, failed: [] };

// --- 1. proposals someone already filed ------------------------------------

// The plan file is the record of what was decided, so entries stay in it after
// they are carried out and a re-run has to be a no-op rather than a pile of
// `bad_status` failures.
async function alreadyResolved(proposalId) {
  try {
    const { proposal } = await api('GET', `/person-merge-proposals/${proposalId}`);
    return ['proposed', 'reviewing'].includes(proposal.status) ? null : proposal.status;
  } catch (e) {
    if (e.status === 404) return 'missing';
    throw e;
  }
}

for (const item of plan.approve ?? []) {
  if (dryRun) {
    console.log(`✓ 批准 ${item.label} (${item.proposal_id})`);
    continue;
  }
  const done = await alreadyResolved(item.proposal_id);
  if (done) {
    stats.skipped += 1;
    console.log(`= ${item.label} 已是 ${done}`);
    continue;
  }
  try {
    await api('POST', `/person-merge-proposals/${item.proposal_id}/approve`, {});
    stats.approved += 1;
    console.log(`✓ 批准 ${item.label}`);
  } catch (e) {
    stats.failed.push({ label: item.label, reason: e.code ?? String(e.status) });
    console.log(`! 批准 ${item.label}: ${e.code ?? e.status}`);
  }
}

for (const item of plan.reject ?? []) {
  if (dryRun) {
    console.log(`✗ 拒绝 ${item.label} (${item.proposal_id})`);
    continue;
  }
  const done = await alreadyResolved(item.proposal_id);
  if (done) {
    stats.skipped += 1;
    console.log(`= ${item.label} 已是 ${done}`);
    continue;
  }
  try {
    await api('POST', `/person-merge-proposals/${item.proposal_id}/reject`, { reason: item.reason });
    stats.rejected += 1;
    console.log(`✗ 拒绝 ${item.label}`);
  } catch (e) {
    stats.failed.push({ label: item.label, reason: e.code ?? String(e.status) });
    console.log(`! 拒绝 ${item.label}: ${e.code ?? e.status}`);
  }
}

// --- 2. pairs found in this round ------------------------------------------

for (const item of plan.merge ?? []) {
  if (dryRun) {
    console.log(`+ ${item.label}: ${item.source} → ${item.target}`);
    continue;
  }
  // Already merged by an earlier run: the source's status says so. And if the
  // record is gone entirely, `purge-records.mjs` has been over it — a merge that
  // was carried out and then hard-deleted, which is done either way.
  let sourceGone = false;
  try {
    const { person } = await api('GET', `/persons/${item.source}`);
    if (person.status === 'merged') {
      stats.skipped += 1;
      console.log(`= ${item.label} 已合并到 ${person.merged_into_person_id}`);
      continue;
    }
  } catch (e) {
    if (e.status !== 404) throw e;
    sourceGone = true;
  }
  if (sourceGone) {
    stats.skipped += 1;
    console.log(`= ${item.label} 源记录已不存在（合并后已硬删除）`);
    continue;
  }

  try {
    const created = await api('POST', `/persons/${item.source}/merge-proposals`, {
      target_person_id: item.target,
      reason: item.reason,
    });
    stats.proposed += 1;
    const id = created.proposal_id ?? created.id;
    if (created.auto_approved || created.status === 'approved') {
      stats.approved += 1;
      console.log(`✓ ${item.label}（提交即执行）`);
      continue;
    }
    await api('POST', `/person-merge-proposals/${id}/approve`, {});
    stats.approved += 1;
    console.log(`✓ ${item.label}`);
  } catch (e) {
    stats.failed.push({ label: item.label, reason: e.code ?? String(e.status) });
    console.log(`! ${item.label}: ${e.code ?? e.status} ${e.message.slice(0, 160)}`);
  }
}

// --- 3. pairs that look like duplicates but are not certain -----------------

// Filed so the evidence is on the record and a reviewer can see it, deliberately
// NOT approved. Identical children with different fathers could be one man
// stored twice or one record that has swallowed another — and guessing which is
// how this database acquired eight generations upside down in the first place.
for (const item of plan.propose_only ?? []) {
  if (dryRun) {
    console.log(`? ${item.label}: 只提提案，不批准`);
    continue;
  }
  try {
    const { person } = await api('GET', `/persons/${item.source}`);
    if (person.status === 'merged') {
      console.log(`= ${item.label} 已合并`);
      continue;
    }
    // The API happily accepts a second proposal for the same pair, so a re-run
    // would file the same undecided question twice and give a reviewer two
    // identical things to read.
    const { merge_proposals: merges = [] } = await api('GET', `/persons/${item.source}/export`);
    const open = merges.find(
      (m) =>
        m.target_person_id === item.target && ['proposed', 'reviewing'].includes(m.status),
    );
    if (open) {
      console.log(`= ${item.label} 提案已存在 ${open.id}，待人工判断`);
      continue;
    }
    const created = await api('POST', `/persons/${item.source}/merge-proposals`, {
      target_person_id: item.target,
      reason: item.reason,
    });
    stats.proposed += 1;
    console.log(`? ${item.label} 已提提案 ${created.proposal_id ?? created.id}，待人工判断`);
  } catch (e) {
    if (e.code === 'merge_proposal_exists' || e.status === 409) {
      console.log(`= ${item.label} 提案已存在`);
      continue;
    }
    stats.failed.push({ label: item.label, reason: e.code ?? String(e.status) });
    console.log(`! ${item.label}: ${e.code ?? e.status}`);
  }
}

console.log('\n--- 汇总 ---');
console.log(
  `新提案 ${stats.proposed}、已执行合并 ${stats.approved}、已拒绝 ${stats.rejected}、跳过 ${stats.skipped}`,
);
if (stats.failed.length) {
  console.log(`失败 ${stats.failed.length} 条：`);
  for (const f of stats.failed) console.log(`  ${f.label}: ${f.reason}`);
  process.exitCode = 1;
}
