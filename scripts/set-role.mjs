// Change one contributor's authorization role as an audited operator action.
//
// This is account metadata maintenance, not genealogy-data editing. The role
// update and its `admin.set_role` contribution are submitted in one D1 script,
// so an elevation can never happen without leaving an audit record.
//
// Usage:
//   node scripts/set-role.mjs --email user@example.com --role reviewer --dry-run
//   node scripts/set-role.mjs --email user@example.com --role reviewer --apply
//   env: D1_DATABASE (default "wang-genealogy")

import { createHash, randomBytes } from 'node:crypto';
import { d1Query, d1Script } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const email = (option('--email', process.env.ROLE_EMAIL) ?? '').trim().toLowerCase();
const role = option('--role', 'reviewer');
const database = option('--db', process.env.D1_DATABASE ?? 'wang-genealogy');
const remote = !flag('--local');
const apply = flag('--apply');
const allowedRoles = new Set(['contributor', 'maintainer', 'reviewer', 'admin']);

if (!email || !allowedRoles.has(role)) {
  console.error(
    'usage: node scripts/set-role.mjs --email <address> ' +
      '--role <contributor|maintainer|reviewer|admin> [--dry-run|--apply]',
  );
  process.exit(2);
}

const emailHash = createHash('sha256').update(email).digest('hex');
const d1 = { database, remote };
const user = d1Query(
  `SELECT id, display_name, role, status FROM user WHERE email_hash = '${emailHash}'`,
  { ...d1, label: 'lookup role target' },
)[0];

if (!user) {
  console.error(`未找到 email_hash=${emailHash} 的账号。`);
  process.exit(1);
}
if (user.status !== 'active') {
  console.error(`账号 ${user.display_name} 状态为 ${user.status}，拒绝提权。`);
  process.exit(1);
}

console.log(`账号：${user.display_name}（${user.id}），${user.role} → ${role}`);
if (user.role === role) {
  console.log('角色已经一致，无需修改。');
  process.exit(0);
}
if (!apply) {
  console.log('预检完成；加 --apply 才会修改并写入 admin.set_role 审计记录。');
  process.exit(0);
}

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const contributionId = `ct_${[...randomBytes(22)].map((b) => BASE58[b % 58]).join('')}`;
const now = new Date().toISOString();
const summary = `经运维授权将账号角色从 ${user.role} 调整为 ${role}，用于审核本次数据修正。`;
const quote = (value) => String(value).replaceAll("'", "''");

d1Script(
  `PRAGMA foreign_keys = ON;
   UPDATE user SET role = '${quote(role)}' WHERE id = '${quote(user.id)}' AND role = '${quote(user.role)}';
   INSERT INTO contribution
     (id, action, actor_user_id, target_type, target_id, change_summary, created_at)
   VALUES
     ('${contributionId}', 'admin.set_role', '${quote(user.id)}', 'user', '${quote(user.id)}',
      '${quote(summary)}', '${now}');`,
  { ...d1, label: 'set role' },
);

const after = d1Query(`SELECT role FROM user WHERE id = '${quote(user.id)}'`, {
  ...d1,
  label: 'verify role',
})[0];
if (after?.role !== role) throw new Error(`角色修改校验失败：实际为 ${after?.role ?? 'missing'}`);
console.log(`已改为 ${role}；审计记录 ${contributionId}。`);
