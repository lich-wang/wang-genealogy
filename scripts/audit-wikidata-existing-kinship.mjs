#!/usr/bin/env node

/**
 * Build a reviewable kinship plan from current Wikidata statements, but only
 * when both QIDs already resolve uniquely to people in the Markdown store.
 *
 * The Wikidata API is deliberately queried slowly and every batch is cached,
 * making an interrupted or rate-limited audit safe to resume. This script is
 * read-only with respect to content/persons; apply the resulting plan through
 * migrate-reviewed-kinship-to-markdown.mjs after inspecting the summary.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parsePersonMarkdown } from './lib/person-markdown.mjs';
import { isWangScopeName } from './lib/scope.mjs';

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const contentDir = resolve(option('--content', 'content/persons'));
const outputPath = resolve(option('--out', 'scripts/wikidata-existing-kinship-approved-plan-2026-09.json'));
const cacheDir = resolve(option('--cache', 'scripts/.cache/wikidata-kinship'));
const spacingMs = Math.max(1000, Number(option('--spacing-ms', '2500')));
const reviewedAt = '2026-09-08';
const USER_AGENT = 'wang-genealogy-kinship/0.5 (https://history.wang)';
// The first clean audit was inspected before import. Keep that decision stable
// so a post-import re-run reconstructs the same approved plan instead of
// rewriting it as an empty delta.
const REVIEWED_EDGE_QIDS = new Set([
  'parent|Q45685584|Q45587690',
  'parent|Q45369083|Q45369098',
  'parent|Q45369083|Q45359648',
  'parent|Q11572875|Q28691175',
  'parent|Q45679773|Q45679805',
  'parent|Q45679773|Q45679837',
  'parent|Q65874579|Q1562454',
  'parent|Q16077251|Q45359527',
]);

const records = new Map();
const qidPeople = new Map();
const existingRelationships = new Set();
const directedChildren = new Map();
const biologicalParents = new Map();
const fathers = new Map();
const mothers = new Map();
const relationshipKey = (kind, a, b) =>
  kind === 'spouse' ? `spouse|${[a, b].sort().join('|')}` : `${kind}|${a}|${b}`;
const addDirected = (a, b) => directedChildren.set(a, (directedChildren.get(a) ?? new Set()).add(b));

for (const filename of readdirSync(contentDir).filter((name) => name.endsWith('.md')).sort()) {
  const path = resolve(contentDir, filename);
  const record = parsePersonMarkdown(readFileSync(path, 'utf8'), path);
  records.set(record.id, record);
  for (const field of record.properties ?? []) {
    if (field.predicate !== 'name.primary') continue;
    for (const item of [field.recommended, ...(field.alternatives ?? [])].filter(Boolean)) {
      if (!['accepted', 'disputed', 'proposed'].includes(item.claim.status)) continue;
      for (const ref of item.sources ?? []) {
        const qid = ref.source?.external_identifier;
        if (!/^Q\d+$/.test(qid ?? '')) continue;
        qidPeople.set(qid, (qidPeople.get(qid) ?? new Set()).add(record.id));
      }
    }
  }
  for (const item of Object.values(record.relationships ?? {}).flat()) {
    const claim = item.claim;
    if (['retracted', 'superseded'].includes(claim.status)) continue;
    if (claim.predicate === 'kinship.spouse_of') {
      existingRelationships.add(relationshipKey('spouse', claim.subject_person_id, claim.object_person_id));
    } else if (claim.predicate === 'kinship.ancestor_of') {
      addDirected(claim.subject_person_id, claim.object_person_id);
    } else if (claim.predicate.includes('adoptive')) {
      addDirected(claim.subject_person_id, claim.object_person_id);
    } else if (/(?:parent|father|mother)_of$/.test(claim.predicate)) {
      existingRelationships.add(relationshipKey('parent', claim.subject_person_id, claim.object_person_id));
      addDirected(claim.subject_person_id, claim.object_person_id);
      biologicalParents.set(
        claim.object_person_id,
        (biologicalParents.get(claim.object_person_id) ?? new Set()).add(claim.subject_person_id),
      );
      const role = claim.parent_role ??
        (claim.predicate === 'kinship.father_of' ? 'father' : claim.predicate === 'kinship.mother_of' ? 'mother' : null);
      if (role === 'father') fathers.set(claim.object_person_id, (fathers.get(claim.object_person_id) ?? new Set()).add(claim.subject_person_id));
      if (role === 'mother') mothers.set(claim.object_person_id, (mothers.get(claim.object_person_id) ?? new Set()).add(claim.subject_person_id));
    }
  }
}

const uniqueQids = [...qidPeople]
  .filter(([, ids]) => ids.size === 1)
  .map(([qid]) => qid)
  .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
const ambiguousQids = [...qidPeople].filter(([, ids]) => ids.size !== 1).length;
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));
let lastRequestAt = 0;

async function fetchJson(url, attempts = 8) {
  for (let attempt = 1; ; attempt += 1) {
    const spacing = spacingMs - (Date.now() - lastRequestAt);
    if (spacing > 0) await sleep(spacing);
    lastRequestAt = Date.now();
    const response = await fetch(url, { headers: { accept: 'application/json', 'user-agent': USER_AGENT } });
    if (response.ok) return response.json();
    if ((response.status !== 429 && response.status < 500) || attempt >= attempts) {
      throw new Error(`Wikidata API ${response.status}: ${(await response.text()).slice(0, 240)}`);
    }
    const retryAfter = Number(response.headers.get('retry-after'));
    const backoff = Number.isFinite(retryAfter) && retryAfter > 0
      ? retryAfter * 1000
      : Math.min(60000, 3000 * 2 ** (attempt - 1));
    console.error(`  ${response.status}，${Math.round(backoff / 1000)}s 后重试（第 ${attempt} 次）`);
    await sleep(backoff);
  }
}

async function loadEntities(qids) {
  mkdirSync(cacheDir, { recursive: true });
  const out = {};
  const chunks = [];
  for (let i = 0; i < qids.length; i += 50) chunks.push(qids.slice(i, i + 50));
  for (let index = 0; index < chunks.length; index += 1) {
    const chunk = chunks[index];
    const hash = createHash('sha256').update(chunk.join('|')).digest('hex').slice(0, 16);
    const cachePath = resolve(cacheDir, `${hash}.json`);
    let data;
    if (existsSync(cachePath)) {
      data = JSON.parse(readFileSync(cachePath, 'utf8'));
    } else {
      const url = 'https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=' + chunk.join('|');
      data = await fetchJson(url);
      writeFileSync(cachePath, JSON.stringify(data));
    }
    Object.assign(out, data.entities ?? {});
    console.error(`Wikidata 亲属声明 ${index + 1}/${chunks.length} 批`);
  }
  return out;
}

const entities = await loadEntities(uniqueQids);
const candidates = new Map();
const rejected = [];
const entityQid = (snak) => snak?.datavalue?.value?.id ?? null;
const personId = (qid) => qidPeople.get(qid)?.size === 1 ? [...qidPeople.get(qid)][0] : null;
const addCandidate = (kind, aQid, bQid, citation) => {
  const a = personId(aQid);
  const b = personId(bQid);
  if (!a || !b || a === b) return;
  const key = relationshipKey(kind, a, b);
  const candidate = candidates.get(key) ?? { kind, a, b, aQid, bQid, citations: [] };
  if (!candidate.citations.some((item) => item.source_key === citation.source_key && item.locator === citation.locator)) {
    candidate.citations.push(citation);
  }
  candidates.set(key, candidate);
};

for (const [qid, entity] of Object.entries(entities)) {
  for (const statement of entity.claims?.P22 ?? []) {
    const other = entityQid(statement.mainsnak);
    if (other) addCandidate('parent', other, qid, { source_key: `wd:${qid}`, locator: 'P22（父）', note: null });
  }
  for (const statement of entity.claims?.P25 ?? []) {
    const other = entityQid(statement.mainsnak);
    if (other) addCandidate('parent', other, qid, { source_key: `wd:${qid}`, locator: 'P25（母）', note: null });
  }
  for (const statement of entity.claims?.P40 ?? []) {
    const other = entityQid(statement.mainsnak);
    if (other) addCandidate('parent', qid, other, { source_key: `wd:${qid}`, locator: 'P40（子女）', note: null });
  }
  for (const statement of entity.claims?.P26 ?? []) {
    const other = entityQid(statement.mainsnak);
    if (other) addCandidate('spouse', qid, other, { source_key: `wd:${qid}`, locator: 'P26（配偶）', note: null });
  }
}

function reaches(start, target) {
  const seen = new Set([start]);
  const queue = [start];
  for (const id of queue) {
    if (id === target) return true;
    for (const next of directedChildren.get(id) ?? []) {
      if (!seen.has(next)) { seen.add(next); queue.push(next); }
    }
  }
  return false;
}

const accepted = [];
for (const candidate of [...candidates.values()].sort((x, y) =>
  `${x.kind}|${records.get(x.a).display_name}|${records.get(x.b).display_name}`
    .localeCompare(`${y.kind}|${records.get(y.a).display_name}|${records.get(y.b).display_name}`, 'zh-CN'))) {
  const aRecord = records.get(candidate.a);
  const bRecord = records.get(candidate.b);
  const key = relationshipKey(candidate.kind, candidate.a, candidate.b);
  const reviewedQidKey = candidate.kind === 'spouse'
    ? `spouse|${[candidate.aQid, candidate.bQid].sort().join('|')}`
    : `parent|${candidate.aQid}|${candidate.bQid}`;
  const alreadyImportedByAudit = existingRelationships.has(key) && REVIEWED_EDGE_QIDS.has(reviewedQidKey);
  const locatorText = candidate.citations.map((citation) => citation.locator ?? '').join('\n');
  const role = /P22/.test(locatorText) && !/P25/.test(locatorText)
    ? 'father'
    : /P25/.test(locatorText) && !/P22/.test(locatorText)
      ? 'mother'
      : null;
  let reason = null;
  if (existingRelationships.has(key) && !alreadyImportedByAudit) reason = 'already_present';
  else if ([aRecord.display_name, bRecord.display_name].some((name) => /^王[A-Z]{1,3}$/.test(name))) reason = 'invalid_placeholder_name';
  else if (candidate.kind === 'spouse' && ![aRecord.display_name, bRecord.display_name].some(isWangScopeName)) reason = 'outside_scope';
  else if (candidate.kind === 'parent' && ![aRecord.display_name, bRecord.display_name].every(isWangScopeName)) reason = 'outside_scope';
  else if (candidate.kind === 'parent' && reaches(candidate.b, candidate.a)) reason = 'would_form_cycle';
  else if (candidate.kind === 'parent' && role === 'father' && [...(fathers.get(candidate.b) ?? [])].some((id) => id !== candidate.a)) reason = 'conflicting_father';
  else if (candidate.kind === 'parent' && role === 'mother' && [...(mothers.get(candidate.b) ?? [])].some((id) => id !== candidate.a)) reason = 'conflicting_mother';
  else if (candidate.kind === 'parent') {
    const parents = biologicalParents.get(candidate.b) ?? new Set();
    if (!parents.has(candidate.a) && parents.size >= 2) reason = 'already_has_two_parents';
  }
  if (reason) {
    rejected.push({ ...candidate, reason });
    continue;
  }
  if (alreadyImportedByAudit) {
    accepted.push(candidate);
    continue;
  }
  existingRelationships.add(key);
  if (candidate.kind === 'parent') {
    addDirected(candidate.a, candidate.b);
    biologicalParents.set(candidate.b, (biologicalParents.get(candidate.b) ?? new Set()).add(candidate.a));
    if (role === 'father') fathers.set(candidate.b, (fathers.get(candidate.b) ?? new Set()).add(candidate.a));
    if (role === 'mother') mothers.set(candidate.b, (mothers.get(candidate.b) ?? new Set()).add(candidate.a));
  }
  accepted.push(candidate);
}

const citedQids = new Set(accepted.flatMap((edge) => edge.citations.map((citation) => citation.source_key.slice(3))));
const sources = [...citedQids].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))).map((qid) => {
  const id = personId(qid);
  return {
    key: `wd:${qid}`,
    kind: 'wikidata',
    source_type: 'api_record',
    title: `维基数据：${records.get(id)?.display_name ?? qid}（${qid}）`,
    creator: '维基数据贡献者',
    publisher: 'Wikimedia Foundation',
    license_code: 'CC0-1.0',
    canonical_url: `https://www.wikidata.org/wiki/${qid}`,
    external_identifier: qid,
    accessed_at: reviewedAt,
    metadata_json: null,
  };
});
const edges = accepted.map((edge) => edge.kind === 'spouse' ? {
  kind: 'spouse',
  person_a_key: `wd:${edge.aQid}`,
  person_b_key: `wd:${edge.bQid}`,
  person_a_name: records.get(edge.a).display_name,
  person_b_name: records.get(edge.b).display_name,
  person_a_id: edge.a,
  person_b_id: edge.b,
  citations: edge.citations,
} : {
  kind: 'parent',
  parent_key: `wd:${edge.aQid}`,
  child_key: `wd:${edge.bQid}`,
  parent_name: records.get(edge.a).display_name,
  child_name: records.get(edge.b).display_name,
  parent_person_id: edge.a,
  child_person_id: edge.b,
  citations: edge.citations,
});
const plan = {
  generated_from: 'Wikidata wbgetentities：现有 Markdown 人物的 P22/P25/P40/P26',
  generated_at: `${reviewedAt}T00:00:00.000Z`,
  sources,
  persons: [],
  edges,
  rejected,
  review: {
    reviewers: ['Codex deterministic Wikidata audit'],
    reviewed_at: reviewedAt,
    accepted: edges.length,
    rejected: rejected.length,
    manual_review: 0,
    criteria: '两端 QID 均唯一命中现有人物；符合王姓范围；排除已有关系、编码占位名、环、同角色父母冲突与第三位父母。',
  },
};
writeFileSync(outputPath, JSON.stringify(plan, null, 2) + '\n');
console.log(JSON.stringify({
  people: records.size,
  unique_qids: uniqueQids.length,
  ambiguous_qids: ambiguousQids,
  raw_candidates: candidates.size,
  accepted: edges.length,
  rejected: rejected.reduce((counts, item) => ({ ...counts, [item.reason]: (counts[item.reason] ?? 0) + 1 }), {}),
  sources: sources.length,
  output: outputPath,
}, null, 2));
