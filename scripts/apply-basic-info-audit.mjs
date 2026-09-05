#!/usr/bin/env node

// Review or apply a sourced batch of missing basic-person claims through the
// public API. All new claims are sent in one request and one D1 write batch.
// Usage: node scripts/apply-basic-info-audit.mjs <plan.json> [--apply]

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const planPath = args.find((arg) => !arg.startsWith('--'));
if (!planPath) throw new Error('usage: apply-basic-info-audit.mjs <plan.json> [--apply]');
const apply = args.includes('--apply');
const plan = JSON.parse(readFileSync(planPath, 'utf8'));
const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');

async function api(method, path, body, token) {
  const response = await fetch(`${API}/api/v1${path}`, {
    method,
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`${method} ${path} -> ${response.status} ${JSON.stringify(json)}`);
  return json;
}

const additions = plan.people.flatMap((person) => person.claims.map((claim) => ({ person, claim })));
console.log(`计划：补全 ${plan.people.length} 人、创建 ${additions.length} 条主张、采纳 ${plan.promote?.length ?? 0} 条已有主张、补挂 ${plan.cite?.length ?? 0} 条来源。`);
if (!apply) {
  for (const person of plan.people) console.log(`${person.name}: ${person.claims.map((claim) => claim.predicate).join('、')}`);
  process.exit(0);
}

if (!process.env.IMPORTER_EMAIL || !process.env.IMPORTER_PASSWORD) {
  throw new Error('--apply 需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');
}
const login = await api('POST', '/auth/login', {
  email: process.env.IMPORTER_EMAIL,
  password: process.env.IMPORTER_PASSWORD,
});
const token = login.token;
if ((plan.cite?.length ?? 0) > 0 || (plan.promote?.length ?? 0) > 0) {
  throw new Error('cite/promote 是既有主张维护，不属于缺失属性批量创建；请另行审核处理。');
}
const result = await api('POST', '/claims/bulk-person-properties', {
  summary: plan.note?.slice(0, 500) || '人物资料审计批量补全',
  items: additions.map(({ person, claim }) => ({
    person_id: person.person_id,
    predicate: claim.predicate,
    value: claim.value,
    confidence: claim.confidence,
    source: { source_id: person.source_id, stance: 'supports', locator: person.locator },
  })),
}, token);
console.log(result);
