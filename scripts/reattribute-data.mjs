// Reassign the contributor of existing records to a single account.
//
// Why this exists: the seed corpus was imported by a throwaway bot account, but
// the human who is actually accountable for that data is the site operator. The
// script moves every attribution column onto the operator's account and appends
// one `admin.reattribute` contribution row so the change itself is auditable —
// it never touches claim values, statuses, revisions or sources.
//
// The target account must already exist (register it through the site first);
// we look it up by sha-256 of the normalized e-mail, which is the only form of
// the address the database ever stores.
//
// Usage:
//   node scripts/reattribute-data.mjs --email you@example.com [--local] [--dry-run]
//   env: OWNER_EMAIL, D1_DATABASE (default "wang-genealogy")
//
// Requires wrangler credentials (CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID).

import { createHash, randomBytes } from 'node:crypto';
import { d1Query, d1Script } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const email = (option('--email', process.env.OWNER_EMAIL) ?? '').trim().toLowerCase();
const database = option('--db', process.env.D1_DATABASE ?? 'wang-genealogy');
const remote = !flag('--local');
const dryRun = flag('--dry-run');

if (!email) {
  console.error('usage: node scripts/reattribute-data.mjs --email <address> [--local] [--dry-run]');
  process.exit(2);
}

const emailHash = createHash('sha256').update(email).digest('hex');

// Mirrors packages/domain/src/id.ts — kept as a copy because this maintenance
// script runs on plain node without the workspace build.
const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const newContributionId = () =>
  `ct_${[...randomBytes(22)].map((b) => BASE58[b % 58]).join('')}`;

// --- 1. resolve the target account -------------------------------------------

const d1 = { database, remote };
const owner = d1Query(`SELECT id, display_name, role FROM user WHERE email_hash = '${emailHash}'`, {
  ...d1,
  label: 'lookup owner',
})[0];

if (!owner) {
  console.error(
    `没有找到 email_hash 为 ${emailHash} 的账号（${email}）。\n` +
      '请先用该邮箱在站点注册（/contribute → 注册），再运行本脚本。',
  );
  process.exit(1);
}
console.log(`目标账号：${owner.display_name}（${owner.id}，role=${owner.role}）`);

// --- 2. show what would move -------------------------------------------------

const TARGETS = [
  ['person', 'created_by_user_id'],
  ['claim', 'created_by_user_id'],
  ['claim_revision', 'created_by_user_id'],
  ['source', 'created_by_user_id'],
  ['claim_source', 'added_by_user_id'],
  ['person_maintainer', 'user_id'],
  ['person_merge_proposal', 'created_by_user_id'],
  ['person_merge_proposal', 'approved_by_user_id'],
  ['contribution', 'actor_user_id'],
];

// One row of scalar subqueries: D1 caps the number of terms in a compound
// SELECT, so UNION ALL per table is not an option here.
const [countRow] = d1Query(
  'SELECT ' +
    TARGETS.map(
      ([table, column], i) =>
        `(SELECT COUNT(*) FROM ${table} ` +
        `WHERE ${column} IS NOT NULL AND ${column} <> '${owner.id}') AS c${i}`,
    ).join(', '),
  { ...d1, label: 'count rows to move' },
);

let total = 0;
TARGETS.forEach(([table, column], i) => {
  const n = Number(countRow?.[`c${i}`] ?? 0);
  total += n;
  console.log(`  ${table}.${column}: ${n}`);
});
if (total === 0) {
  console.log('没有需要改动的记录，退出。');
  process.exit(0);
}

if (dryRun) {
  console.log(`--dry-run：共 ${total} 行会被改写，未执行。`);
  process.exit(0);
}

// --- 3. reassign + record the maintenance in the audit trail ------------------

const now = new Date().toISOString();
const summary =
  `将导入数据的提交人统一归属到站点所有者账号（${owner.id}）；仅改写归属字段，未改动任何主张内容。`;

const sql = [
  'PRAGMA foreign_keys = ON;',
  ...TARGETS.map(
    ([table, column]) =>
      // OR IGNORE: person_maintainer is unique per (person_id, user_id), so a row
      // that would collide with an existing one is left as-is rather than dropped.
      `UPDATE OR IGNORE ${table} SET ${column} = '${owner.id}' ` +
      `WHERE ${column} IS NOT NULL AND ${column} <> '${owner.id}';`,
  ),
  `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, created_at)
   VALUES ('${newContributionId()}', 'admin.reattribute', '${owner.id}', 'user', '${owner.id}',
           '${summary.replace(/'/g, "''")}', '${now}');`,
].join('\n');

d1Script(sql, { ...d1, label: 'reattribute' });

// --- 4. verify ----------------------------------------------------------------

const after = d1Query(
  `SELECT u.id, u.display_name,
          (SELECT COUNT(*) FROM person p WHERE p.created_by_user_id = u.id) AS persons,
          (SELECT COUNT(*) FROM claim c WHERE c.created_by_user_id = u.id) AS claims,
          (SELECT COUNT(*) FROM source s WHERE s.created_by_user_id = u.id) AS sources,
          (SELECT COUNT(*) FROM contribution ct WHERE ct.actor_user_id = u.id) AS contributions
     FROM user u ORDER BY contributions DESC`,
  { ...d1, label: 'verify' },
);
console.log('\n改写后的归属情况：');
for (const row of after) {
  console.log(
    `  ${row.display_name} (${row.id}): persons=${row.persons} claims=${row.claims} ` +
      `sources=${row.sources} contributions=${row.contributions}`,
  );
}
console.log('\n完成。');
