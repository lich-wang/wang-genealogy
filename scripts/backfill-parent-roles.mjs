#!/usr/bin/env node

/**
 * Build a parent-role repair plan from one local D1 export and, when requested,
 * submit it as one set-based API mutation. The export is the only read model:
 * this script never loops over live person/claim endpoints.
 *
 * Usage:
 *   node scripts/backfill-parent-roles.mjs --database exported.sqlite
 *   node scripts/backfill-parent-roles.mjs --database exported.sqlite --apply
 *
 * Apply mode uses API_BASE, IMPORTER_EMAIL and IMPORTER_PASSWORD.
 */
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : null;
};
const apply = args.includes('--apply');
const databaseArg = option('--database');
if (!databaseArg) throw new Error('请提供 --database <D1 导出的 SQLite 文件>');
const database = resolve(databaseArg);

const sql = `
  SELECT c.id, c.status, c.current_revision, c.subject_person_id, c.object_person_id,
         cs.locator, cs.stance
    FROM claim c
    LEFT JOIN claim_source cs ON cs.claim_id = c.id
   WHERE c.predicate = 'kinship.parent_of'
     AND c.status IN ('accepted', 'disputed')
   ORDER BY c.id, cs.id
`;
const raw = execFileSync('sqlite3', ['-json', database, sql], {
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
});
const citationRows = raw.trim() ? JSON.parse(raw) : [];
const claims = new Map();
for (const row of citationRows) {
  const record = claims.get(row.id) ?? {
    id: row.id,
    status: row.status,
    current_revision: Number(row.current_revision),
    locators: [],
  };
  if (row.stance === 'supports' && row.locator) record.locators.push(row.locator);
  claims.set(row.id, record);
}

const fatherEvidence = /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/;
const motherEvidence = /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/;
const plan = [];
let conflicts = 0;
let unresolved = 0;
for (const claim of claims.values()) {
  const father = claim.locators.some((locator) => fatherEvidence.test(locator));
  const mother = claim.locators.some((locator) => motherEvidence.test(locator));
  if (father && mother) {
    conflicts += 1;
    continue;
  }
  if (!father && !mother) {
    unresolved += 1;
    continue;
  }
  plan.push({
    claim_id: claim.id,
    expected_revision: claim.current_revision,
    parent_role: father ? 'father' : 'mother',
  });
}

const counts = {
  scanned: claims.size,
  planned: plan.length,
  father: plan.filter((item) => item.parent_role === 'father').length,
  mother: plan.filter((item) => item.parent_role === 'mother').length,
  unresolved,
  conflicts,
};
console.log(JSON.stringify(counts, null, 2));
if (!apply) process.exit(0);

const apiBase = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const email = process.env.IMPORTER_EMAIL;
const password = process.env.IMPORTER_PASSWORD;
if (!email || !password) throw new Error('apply 模式需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');

async function request(method, path, body, token) {
  const response = await fetch(`${apiBase}/api/v1${path}`, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body == null ? undefined : JSON.stringify(body),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${method} ${path} -> ${response.status} ${JSON.stringify(result)}`);
  return result;
}

const session = await request('POST', '/auth/login', { email, password });
const result = await request('POST', '/claims/bulk-parent-roles', { items: plan }, session.token);
console.log(JSON.stringify(result, null, 2));
