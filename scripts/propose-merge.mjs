// Propose a reversible merge between two person records that turned out to be
// the same historical figure.
//
// Deliberately one pair per invocation, with a reason you have to write: the
// collaboration rules say duplicate candidates may be *suggested* automatically
// but never merged automatically, and same-name records are very often genuine
// namesakes (王益's wife 吳氏 and 王安石's wife 吳氏 are two different women).
//
// This only creates the proposal. Approving it needs a reviewer/admin account:
//   POST /api/v1/person-merge-proposals/{id}/approve
// and an approved merge can always be reverted from its snapshot.
//
// Usage:
//   node scripts/propose-merge.mjs --source p_… --target p_… --reason "…"
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const EMAIL = process.env.IMPORTER_EMAIL;
const PASSWORD = process.env.IMPORTER_PASSWORD;
const source = option('--source');
const target = option('--target');
const reason = option('--reason');

if (!source || !target || !reason || !EMAIL || !PASSWORD) {
  console.error(
    'usage: node scripts/propose-merge.mjs --source <person_id> --target <person_id> --reason "<证据>"\n' +
      '       （需要 IMPORTER_EMAIL / IMPORTER_PASSWORD）',
  );
  process.exit(2);
}

async function api(method, path, body, token) {
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
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
  return json;
}

const { token } = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });

// Show both records first: a merge decision is about identity, so the evidence
// has to be visible next to the proposal.
for (const [role, id] of [
  ['源', source],
  ['目标', target],
]) {
  const person = await api('GET', `/persons/${id}`, undefined, token);
  const rel = person.relationships;
  const names = (list) => list.map((x) => x.object_person?.display_name).filter(Boolean);
  console.log(
    `${role}：${person.display_name}（${id}）父母=${names(rel.parents)} 子女=${names(rel.children)} 配偶=${names(rel.spouses)}`,
  );
}

const result = await api(
  'POST',
  `/persons/${source}/merge-proposals`,
  { target_person_id: target, reason },
  token,
);

console.log(
  `\n合并提案 ${result.proposal_id}：${result.status}` +
    (result.auto_approved
      ? '（满足简化条件，已直接执行；可回滚）'
      : '（待审核；审核者可 approve 或 reject）'),
);
