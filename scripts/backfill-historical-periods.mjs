#!/usr/bin/env node

// Build an evidence-backed historical.period batch from a single full-person
// claim snapshot and optionally submit it in one HTTP request. A period is only
// copied when the accepted biography itself states it; dates and relatives are
// never used to guess a dynasty.
//
// Usage: node scripts/backfill-historical-periods.mjs <wrangler-query.json> [--apply]

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const input = args.find((arg) => !arg.startsWith('--'));
if (!input) throw new Error('usage: backfill-historical-periods.mjs <wrangler-query.json> [--apply]');
const apply = args.includes('--apply');
const rows = JSON.parse(readFileSync(input, 'utf8'))[0]?.results ?? [];

// Long and transitional period names precede their component dynasties.
const PERIODS = [
  '清末民初', '明末清初', '宋末元初', '元末明初', '隋末唐初', '东汉末年', '東漢末年',
  '魏晋南北朝', '魏晉南北朝', '春秋战国', '春秋戰國', '五代十国', '五代十國',
  '西汉', '西漢', '东汉', '東漢', '三国', '三國', '西晋', '西晉', '东晋', '東晉',
  '南北朝', '北魏', '东魏', '東魏', '西魏', '北齐', '北齊', '南齐', '南齊',
  '刘宋', '劉宋', '南梁', '南陈', '南陳', '隋朝', '唐朝', '北宋', '南宋',
  '辽朝', '遼朝', '金朝', '元朝', '明朝', '清朝', '中华民国', '中華民國',
  '新朝', '秦朝', '战国', '戰國', '春秋', '商朝', '周朝',
];

const existing = new Set(rows
  .filter((row) => row.claim_status !== 'retracted' && row.claim_status !== 'superseded' && row.predicate === 'historical.period')
  .map((row) => row.person_id));
const seenClaims = new Set();
const items = [];
for (const row of rows) {
  if (
    row.person_status !== 'active' || row.predicate !== 'bio.summary' || row.claim_status !== 'accepted' ||
    !row.source_id || existing.has(row.person_id) || seenClaims.has(row.claim_id)
  ) continue;
  let biography = '';
  try { biography = JSON.parse(row.value_json)?.text ?? ''; } catch { continue; }
  const period = PERIODS.find((candidate) => biography.includes(candidate));
  if (!period) continue;
  seenClaims.add(row.claim_id);
  items.push({
    person_id: row.person_id,
    predicate: 'historical.period',
    value: { text: period, language: /[東漢晉齊陳遼國華戰]/.test(period) ? 'zh-Hant' : 'zh-Hans' },
    confidence: row.confidence === 'high' ? 'high' : 'medium',
    source: {
      source_id: row.source_id,
      stance: 'supports',
      locator: '人物简介中的朝代／时期表述',
      interpretation_note: `从同一来源支持的简介摘取：${biography.slice(0, 160)}`,
    },
  });
}

// These biographies were added after the snapshot used for the first audit.
const recent = [
  ['p_Xs7SSNKR6whA118xZvjxN2', '明末清初', 'zh-Hans', 's_JrZ38wtSfjchSjwE411t3z'],
  ['p_CRTiUFbJJTt5FqJL9A5xNr', '清末民初', 'zh-Hans', 's_jdk8ev2sE9kNUT1en7UxxV'],
  ['p_fuv1kE3UCBeTFNiA6c9Tuw', '北宋', 'zh-Hans', 's_5g7WxJuDRVzW6i37RBszym'],
];
for (const [personId, period, language, sourceId] of recent) {
  if (existing.has(personId) || items.some((item) => item.person_id === personId)) continue;
  items.push({
    person_id: personId,
    predicate: 'historical.period',
    value: { text: period, language },
    confidence: 'high',
    source: { source_id: sourceId, stance: 'supports', locator: '人物专页首段' },
  });
}

const body = { summary: '人物资料审计：从来源明确表述补全朝代／时期', items };
console.log(`可补全 historical.period：${items.length} 人`);
if (!apply) {
  const counts = Object.groupBy(items, (item) => item.value.text);
  console.log(Object.fromEntries(Object.entries(counts).map(([period, group]) => [period, group.length])));
  process.exit(0);
}
if (!process.env.IMPORTER_EMAIL || !process.env.IMPORTER_PASSWORD) throw new Error('--apply 需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');
const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
async function api(method, path, payload, token) {
  const response = await fetch(`${API}/api/v1${path}`, {
    method,
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    body: payload ? JSON.stringify(payload) : undefined,
  });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`${method} ${path} -> ${response.status} ${JSON.stringify(json)}`);
  return json;
}
const login = await api('POST', '/auth/login', { email: process.env.IMPORTER_EMAIL, password: process.env.IMPORTER_PASSWORD });
console.log(await api('POST', '/claims/bulk-person-properties', body, login.token));
