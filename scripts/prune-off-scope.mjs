// Pull the database back to the 王 surname it exists to document.
//
// Following parent/child links out of every in-law walks into other clans: once
// 王政君's husband 汉元帝 is a record, the next round adds his father 汉宣帝, then
// 汉武帝, then 汉景帝 and fifteen of his children. Those records are true and
// sourced — they are simply not what this database is for.
//
// This marks every person more than `--max-distance` kinship steps away from a
// 王-surname person as `suppressed` (the schema's not-public status, reversible
// and audited — never a DELETE), and retracts the relationship claims that
// cross the boundary so no public page links to a hidden record. Relations
// *between* hidden records are left intact, so raising the threshold later
// brings the branch back whole.
//
// Usage:
//   node scripts/prune-off-scope.mjs [--max-distance 1] [--dry-run] [--local]
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD (claim retraction goes
//        through the API so it appends revisions and audit rows)

import { randomBytes } from 'node:crypto';
import { d1Query, d1Script } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const EMAIL = process.env.IMPORTER_EMAIL;
const PASSWORD = process.env.IMPORTER_PASSWORD;
const maxDistance = Number(option('--max-distance', '1'));
const dryRun = flag('--dry-run');
const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const newContributionId = () => `ct_${[...randomBytes(22)].map((b) => BASE58[b % 58]).join('')}`;

/** 王 by the name a source published, including titles that carry the surname. */
const isWangName = (name) =>
  typeof name === 'string' && (name.startsWith('王') || /王(皇后|皇太后|太后|夫人|氏|美人|婕妤|后)/.test(name));

// --- read the graph ---------------------------------------------------------

const persons = d1Query(
  `SELECT p.id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name
     FROM person p
    WHERE p.status IN ('active', 'candidate')`,
  { ...d1, label: 'persons' },
);

const edges = d1Query(
  `SELECT id, predicate, subject_person_id, object_person_id, status
     FROM claim
    WHERE claim_kind = 'relationship' AND status NOT IN ('retracted', 'superseded')`,
  { ...d1, label: 'edges' },
);

const nameById = new Map(persons.map((p) => [p.id, p.name]));
const neighbours = new Map(persons.map((p) => [p.id, []]));
for (const edge of edges) {
  neighbours.get(edge.subject_person_id)?.push(edge.object_person_id);
  neighbours.get(edge.object_person_id)?.push(edge.subject_person_id);
}

// --- distance from the 王 surname -------------------------------------------

const distance = new Map();
const queue = [];
for (const person of persons) {
  if (isWangName(person.name)) {
    distance.set(person.id, 0);
    queue.push(person.id);
  }
}
for (let i = 0; i < queue.length; i += 1) {
  const id = queue[i];
  for (const next of neighbours.get(id) ?? []) {
    if (distance.has(next)) continue;
    distance.set(next, distance.get(id) + 1);
    queue.push(next);
  }
}

const buckets = new Map();
for (const person of persons) {
  const d = distance.get(person.id) ?? Infinity;
  buckets.set(d, (buckets.get(d) ?? 0) + 1);
}
console.log(`共 ${persons.length} 人，按到最近王姓人物的距离：`);
for (const d of [...buckets.keys()].sort((a, b) => a - b)) {
  console.log(`  ${d === Infinity ? '不连通' : `${d} 步`}: ${buckets.get(d)} 人`);
}

const toSuppress = persons.filter((p) => (distance.get(p.id) ?? Infinity) > maxDistance);
const suppressedIds = new Set(toSuppress.map((p) => p.id));
const boundaryEdges = edges.filter((e) => {
  const a = suppressedIds.has(e.subject_person_id);
  const b = suppressedIds.has(e.object_person_id);
  return a !== b; // exactly one side disappears from public view
});

console.log(
  `\n将隐藏 ${toSuppress.length} 人（距离 > ${maxDistance}），` +
    `并撤回 ${boundaryEdges.length} 条跨越边界的关系主张。`,
);
console.log('示例：', toSuppress.slice(0, 12).map((p) => p.name).join('、'));

if (toSuppress.length === 0) {
  console.log('无需处理。');
  process.exit(0);
}
if (dryRun) {
  console.log('--dry-run：未执行。');
  process.exit(0);
}
if (!EMAIL || !PASSWORD) {
  console.error('撤回关系主张需要 IMPORTER_EMAIL / IMPORTER_PASSWORD');
  process.exit(2);
}

// --- retract the boundary relationships through the API ---------------------

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
  if (!res.ok) {
    const err = new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
    err.status = res.status;
    throw err;
  }
  return json;
}

const { token } = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });

let retracted = 0;
for (let i = 0; i < boundaryEdges.length; i += 4) {
  await Promise.all(
    boundaryEdges.slice(i, i + 4).map(async (edge) => {
      try {
        await api(
          'POST',
          `/claims/${edge.id}/retractions`,
          {
            reason: '范围调整：关系另一端的人物已移出公开范围（距王姓人物过远）',
            change_summary: '范围调整：撤回跨越公开边界的亲属关系',
          },
          token,
        );
        retracted += 1;
      } catch (e) {
        console.error(`  ! 撤回失败 ${edge.id}: ${e.message}`);
      }
    }),
  );
}
console.log(`已撤回 ${retracted}/${boundaryEdges.length} 条关系主张。`);

// --- suppress the persons ---------------------------------------------------

// No API endpoint sets this status, so it is an operator maintenance write,
// recorded in the same append-only audit trail as everything else.
const now = new Date().toISOString();
const owner = d1Query(
  "SELECT id FROM user WHERE role = 'admin' ORDER BY created_at LIMIT 1",
  { ...d1, label: 'owner' },
)[0];
const actor = owner?.id;
if (!actor) {
  console.error('找不到管理员账号，无法记录审计');
  process.exit(1);
}

const CHUNK = 40;
for (let i = 0; i < toSuppress.length; i += CHUNK) {
  const chunk = toSuppress.slice(i, i + CHUNK);
  const statements = [];
  for (const person of chunk) {
    statements.push(
      `UPDATE person SET status = 'suppressed', updated_at = '${now}' WHERE id = '${person.id}';`,
    );
    const summary =
      `范围调整：与王姓人物的亲属距离为 ${distance.get(person.id) ?? '∞'} 步，超出本库收录范围，转为不公开（可恢复）。`;
    statements.push(
      `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, created_at)
       VALUES ('${newContributionId()}', 'admin.suppress_person', '${actor}', 'person', '${person.id}',
               '${summary.replace(/'/g, "''")}', '${now}');`,
    );
  }
  d1Script(statements.join('\n'), { ...d1, label: `suppress ${i}` });
  console.log(`  已隐藏 ${Math.min(i + CHUNK, toSuppress.length)}/${toSuppress.length}`);
}

const [after] = d1Query(
  `SELECT (SELECT COUNT(*) FROM person WHERE status = 'active') AS active,
          (SELECT COUNT(*) FROM person WHERE status = 'suppressed') AS suppressed,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.parent_of' AND status <> 'retracted') AS parent_edges,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.spouse_of' AND status <> 'retracted') AS spouse_edges`,
  { ...d1, label: 'after' },
);
console.log('\n处理后：', after);
