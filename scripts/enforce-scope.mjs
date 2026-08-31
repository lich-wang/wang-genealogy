// Keep the database to what it collects, and keep it there.
//
// Scope, as decided for this collection:
//
//   1. 王-surname persons — collected in full, with all their kinship links.
//   2. Anyone else who is *married* to one of them — collected as a spouse and
//      nothing more: a name and that marriage. Their own parents, children and
//      other marriages are not this database's business.
//   3. Everyone else — not collected.
//
// Rule 2 matters because a marriage is half of the couple: dropping 郗璿 would
// leave 王羲之 with a wife-shaped hole. Rule 3 is why: following in-laws outward
// pulled in whole imperial clans — 王政君's husband 汉元帝 led to 汉宣帝, 汉武帝,
// 汉景帝 and fifteen of his children.
//
// The script converges rather than only deleting: a person who should be in
// scope is restored to `active` and their marriage claim revised back to
// `accepted`; a person who should not be is `suppressed` and their
// out-of-scope relationship claims retracted. Nothing is ever DELETEd, and
// relations between two hidden records are left intact, so widening the scope
// later brings a branch back whole.
//
// Usage:
//   node scripts/enforce-scope.mjs [--dry-run] [--local]
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD (claim changes go through
//        the API so they append revisions and audit rows)

import { randomBytes } from 'node:crypto';
import { d1Query, d1Script } from './lib/d1.mjs';
import { isWangScopeName, wasRetractedByScope } from './lib/scope.mjs';

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

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const newContributionId = () => `ct_${[...randomBytes(22)].map((b) => BASE58[b % 58]).join('')}`;

const isWangName = isWangScopeName;

// --- read everything, whatever its current status ---------------------------

const persons = d1Query(
  `SELECT p.id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name
     FROM person p
    WHERE p.status <> 'merged'`,
  { ...d1, label: 'persons' },
);

const claims = d1Query(
  `SELECT c.id, c.predicate, c.subject_person_id, c.object_person_id, c.status, c.current_revision,
          (SELECT r.change_summary FROM claim_revision r
            WHERE r.claim_id = c.id AND r.revision_number = c.current_revision) AS current_change_summary
     FROM claim c
    WHERE claim_kind = 'relationship' AND status <> 'superseded'`,
  { ...d1, label: 'relationship claims' },
);

const byId = new Map(persons.map((p) => [p.id, p]));
const wang = new Set(persons.filter((p) => isWangName(p.name)).map((p) => p.id));

// A marriage to a 王 person is what earns a non-王 record its place, so this
// looks at retracted claims too: an earlier, stricter pass may have retracted
// exactly the marriage that keeps someone in scope.
const marriedToWang = new Set();
for (const claim of claims) {
  if (claim.predicate !== 'kinship.spouse_of') continue;
  const { subject_person_id: a, object_person_id: b } = claim;
  if (wang.has(a) && !wang.has(b)) marriedToWang.add(b);
  if (wang.has(b) && !wang.has(a)) marriedToWang.add(a);
}

const inScope = (id) => wang.has(id) || marriedToWang.has(id);

/**
 * What to do with a relationship claim:
 *   keep    — both ends collected, and the pair is one we record;
 *   retract — it crosses out of the collection, or it is an out-of-scope
 *             relation of someone who is here only as a spouse;
 *   leave   — both ends are already hidden, so it is invisible either way.
 *             Untouched on purpose: widening the scope later should bring the
 *             branch back whole rather than as a pile of retracted claims.
 */
function claimAction(claim) {
  const { subject_person_id: a, object_person_id: b } = claim;
  const aIn = inScope(a);
  const bIn = inScope(b);
  if (!aIn && !bIn) return 'leave';
  if (!aIn || !bIn) return 'retract';
  if (wang.has(a) && wang.has(b)) return 'keep';
  // One side is here only as a spouse: the marriage is all we record.
  return claim.predicate === 'kinship.spouse_of' ? 'keep' : 'retract';
}

// --- work out the difference -------------------------------------------------

const toSuppress = persons.filter((p) => !inScope(p.id) && p.status === 'active');
const toRestore = persons.filter((p) => inScope(p.id) && p.status === 'suppressed');
const toRetract = claims.filter((c) => claimAction(c) === 'retract' && c.status !== 'retracted');
const toReinstate = claims.filter((c) => claimAction(c) === 'keep' && wasRetractedByScope(c));

console.log(
  `共 ${persons.length} 条人物记录：王姓及得姓前始祖 ${wang.size} 人，` +
    `与王姓有婚姻关系的非王姓 ${marriedToWang.size} 人，收录范围内合计 ${
      persons.filter((p) => inScope(p.id)).length
    } 人。`,
);
console.log(
  `需要处理：隐藏 ${toSuppress.length} 人、恢复 ${toRestore.length} 人、` +
    `撤回 ${toRetract.length} 条关系、恢复 ${toReinstate.length} 条关系。`,
);
const preview = (list, get) => list.slice(0, 10).map(get).join('、') || '（无）';
if (toSuppress.length) console.log('  将隐藏:', preview(toSuppress, (p) => p.name));
if (toRestore.length) console.log('  将恢复:', preview(toRestore, (p) => p.name));
if (toReinstate.length) {
  console.log(
    '  将恢复的关系:',
    preview(toReinstate, (c) => `${byId.get(c.subject_person_id)?.name}⇄${byId.get(c.object_person_id)?.name}`),
  );
}

if (toSuppress.length + toRestore.length + toRetract.length + toReinstate.length === 0) {
  console.log('已符合收录范围，无需处理。');
  process.exit(0);
}
if (dryRun) {
  console.log('--dry-run：未执行。');
  process.exit(0);
}
if (!EMAIL || !PASSWORD) {
  console.error('修改关系主张需要 IMPORTER_EMAIL / IMPORTER_PASSWORD');
  process.exit(2);
}

// --- claims go through the API so revisions and audit rows are appended -----

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

async function inBatches(items, size, worker) {
  let done = 0;
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(worker));
    done = Math.min(i + size, items.length);
    if (items.length > 40) console.log(`    ${done}/${items.length}`);
  }
}

if (toRetract.length) {
  console.log(`撤回 ${toRetract.length} 条超出范围的关系…`);
  await inBatches(toRetract, 4, async (claim) => {
    try {
      await api(
        'POST',
        `/claims/${claim.id}/retractions`,
        {
          reason: '范围调整：该关系的一端不在收录范围内（非王姓且无与王姓的婚姻关系），或属于非王姓人物的其他关系',
          change_summary: '范围调整：撤回超出收录范围的亲属关系',
        },
        token,
      );
    } catch (e) {
      console.error(`  ! 撤回失败 ${claim.id}: ${e.message}`);
    }
  });
}

if (toReinstate.length) {
  console.log(`恢复 ${toReinstate.length} 条应当保留的关系…`);
  await inBatches(toReinstate, 4, async (claim) => {
    try {
      await api(
        'POST',
        `/claims/${claim.id}/revisions`,
        {
          expected_revision: claim.current_revision,
          patch: { status: 'accepted' },
          change_summary: '范围调整：婚姻关系属于收录范围，恢复为已采纳',
        },
        token,
      );
    } catch (e) {
      console.error(`  ! 恢复失败 ${claim.id}: ${e.message}`);
    }
  });
}

// --- person status is an operator write; no endpoint sets it -----------------

const now = new Date().toISOString();
const owner = d1Query("SELECT id FROM user WHERE role = 'admin' ORDER BY created_at LIMIT 1", {
  ...d1,
  label: 'owner',
})[0];
if (!owner?.id) {
  console.error('找不到管理员账号，无法记录审计');
  process.exit(1);
}

function applyStatus(list, status, summary) {
  const CHUNK = 40;
  for (let i = 0; i < list.length; i += CHUNK) {
    const statements = [];
    for (const person of list.slice(i, i + CHUNK)) {
      statements.push(
        `UPDATE person SET status = '${status}', updated_at = '${now}' WHERE id = '${person.id}';`,
      );
      statements.push(
        `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, created_at)
         VALUES ('${newContributionId()}', 'admin.suppress_person', '${owner.id}', 'person', '${person.id}',
                 '${summary.replace(/'/g, "''")}', '${now}');`,
      );
    }
    d1Script(statements.join('\n'), { ...d1, label: `${status} ${i}` });
    console.log(`    ${Math.min(i + CHUNK, list.length)}/${list.length}`);
  }
}

if (toSuppress.length) {
  console.log(`隐藏 ${toSuppress.length} 位超出范围的人物…`);
  applyStatus(
    toSuppress,
    'suppressed',
    '范围调整：非王姓且与王姓无婚姻关系，超出本库收录范围，转为不公开（可恢复）。',
  );
}
if (toRestore.length) {
  console.log(`恢复 ${toRestore.length} 位以配偶身份收录的人物…`);
  applyStatus(
    toRestore,
    'active',
    '范围调整：与王姓人物有婚姻关系，按配偶身份重新公开（仅记录姓名与该婚姻关系）。',
  );
}

const [after] = d1Query(
  `SELECT (SELECT COUNT(*) FROM person WHERE status = 'active') AS active,
          (SELECT COUNT(*) FROM person WHERE status = 'suppressed') AS suppressed,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.parent_of' AND status <> 'retracted') AS parent_edges,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.spouse_of' AND status <> 'retracted') AS spouse_edges`,
  { ...d1, label: 'after' },
);
console.log('\n处理后：', after);
