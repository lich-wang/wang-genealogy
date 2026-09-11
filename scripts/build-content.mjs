import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parsePersonMarkdown } from './lib/person-markdown.mjs';
import { validateCompletePaternalChains } from './lib/biography-kinship.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.resolve(process.argv[2] ?? path.join(rootDir, 'content/persons'));
const outputDir = path.resolve(process.argv[3] ?? path.join(rootDir, 'apps/web/public/data'));
const personDir = path.join(outputDir, 'persons');
const graphDir = path.join(outputDir, 'graphs');
const sourceDir = path.join(outputDir, 'sources');
fs.rmSync(outputDir, { recursive: true, force: true });
for (const dir of [personDir, graphDir, sourceDir]) fs.mkdirSync(dir, { recursive: true });

const records = new Map();
for (const name of fs.readdirSync(contentDir).filter((name) => name.endsWith('.md')).sort()) {
  const file = path.join(contentDir, name);
  const record = parsePersonMarkdown(fs.readFileSync(file, 'utf8'), file);
  validateRecord(record, name);
  if (records.has(record.id)) throw new Error(`${name}: 人物 ID 重复 ${record.id}`);
  records.set(record.id, record);
}

for (const record of records.values()) {
  for (const item of relationshipItems(record)) {
    const target = item.object_person?.id ?? item.claim?.object_person_id;
    if (target && !records.has(target)) throw new Error(`${record.id}: 关系引用不存在的人物 ${target}`);
  }
}

const paternalChainErrors = validateCompletePaternalChains(records);
if (paternalChainErrors.length) throw new Error(paternalChainErrors.join('\n'));

const summaries = new Map();
const personShards = new Map();
const graphShards = new Map();
const claims = new Map();
const claimFingerprints = new Map();
const sources = new Map();
for (const record of records.values()) {
  const summary = toSummary(record);
  summaries.set(record.id, summary);
  const shard = record.id.slice(2, 3) || '_';
  if (!personShards.has(shard)) personShards.set(shard, {});
  personShards.get(shard)[record.id] = summary;
  for (const item of allClaimItems(record)) {
    const fingerprint = JSON.stringify({ claim: item.claim, sources: item.sources });
    const existingFingerprint = claimFingerprints.get(item.claim.id);
    if (existingFingerprint && existingFingerprint !== fingerprint) throw new Error(`${record.id}: 主张 ${item.claim.id} 在人物文件之间不一致`);
    claimFingerprints.set(item.claim.id, fingerprint);
    claims.set(item.claim.id, item);
    for (const ref of item.sources ?? []) {
      if (ref.source?.canonical_url) {
        try { new URL(ref.source.canonical_url); } catch { throw new Error(`${record.id}: 来源 ${ref.source.id} 的 canonical_url 无效`); }
      }
      if (ref.source) sources.set(ref.source.id, ref.source);
    }
  }
}
for (const [shard, entries] of personShards) fs.writeFileSync(path.join(personDir, `${shard}.json`), JSON.stringify(entries));

const edges = buildEdges(claims.values());
const adjacency = new Map([...records.keys()].map((id) => [id, new Set()]));
for (const edge of [...edges.parent_edges, ...edges.spouse_edges, ...edges.descent_edges]) {
  const [a, b] = edge.parent_id ? [edge.parent_id, edge.child_id] : edge.a_id ? [edge.a_id, edge.b_id] : [edge.ancestor_id, edge.descendant_id];
  adjacency.get(a)?.add(b); adjacency.get(b)?.add(a);
}
const graphLookup = {};
const unvisited = new Set(records.keys());
let componentNumber = 0;
while (unvisited.size) {
  const root = unvisited.values().next().value;
  const component = walk(root, adjacency);
  for (const id of component) unvisited.delete(id);
  const componentId = String(componentNumber++).padStart(4, '0');
  for (const id of component) graphLookup[id] = componentId;
  const graph = {
    root_id: root, scope: 'all', up: 99, down: 99,
    nodes: component.map((nodeId) => nodeFor(summaries.get(nodeId))),
    parent_edges: edges.parent_edges.filter((edge) => component.includes(edge.parent_id) && component.includes(edge.child_id)),
    spouse_edges: edges.spouse_edges.filter((edge) => component.includes(edge.a_id) && component.includes(edge.b_id)),
    descent_edges: edges.descent_edges.filter((edge) => component.includes(edge.ancestor_id) && component.includes(edge.descendant_id)),
    truncated: false,
  };
  const shard = componentId.slice(0, 1) || '_';
  if (!graphShards.has(shard)) graphShards.set(shard, {});
  graphShards.get(shard)[componentId] = graph;
}
for (const [shard, entries] of graphShards) fs.writeFileSync(path.join(graphDir, `${shard}.json`), JSON.stringify(entries));

const sourceClaims = new Map([...sources.keys()].map((id) => [id, []]));
for (const item of claims.values()) for (const ref of item.sources ?? []) if (ref.source) sourceClaims.get(ref.source.id)?.push(item);
const sourceShards = new Map();
for (const [id, source] of sources) {
  const shard = id.slice(2, 3) || '_';
  if (!sourceShards.has(shard)) sourceShards.set(shard, {});
  sourceShards.get(shard)[id] = { source, claims: sourceClaims.get(id) };
}
for (const [shard, entries] of sourceShards) fs.writeFileSync(path.join(sourceDir, `${shard}.json`), JSON.stringify(entries));

const search = [...summaries.values()].map(searchRecord).sort((a, b) => (a.display_name ?? '').localeCompare(b.display_name ?? '', 'zh'));
const relativeCounts = new Map([...records.keys()].map((id) => [id, adjacency.get(id)?.size ?? 0]));
const surnameProgenitor = new Set(['姬晋', '畢公高', '宗敬']);
const byRelDesc = (a, b) => (relativeCounts.get(b.id) ?? 0) - (relativeCounts.get(a.id) ?? 0);
const activeSearch = search.filter((item) => item.status === 'active');
const highlights = [
  ...activeSearch.filter((item) => surnameProgenitor.has(item.display_name ?? '')).sort(byRelDesc),
  ...activeSearch.filter((item) => !surnameProgenitor.has(item.display_name ?? '')).sort(byRelDesc),
].slice(0, 24).map((item) => ({ id: item.id, display_name: item.display_name, relative_count: relativeCounts.get(item.id) ?? 0, is_surname_progenitor: surnameProgenitor.has(item.display_name ?? '') }));
const changes = gitChanges(records);
const generatedAt = latestContentCommitDate() ?? new Date().toISOString();
const index = { schema: 'wang-static/v1', generated_at: generatedAt, status: { people: records.size, relationships: edges.parent_edges.length + edges.spouse_edges.length + edges.descent_edges.length, sources: sources.size, claims: claims.size, generated_at: generatedAt }, highlights, search, changes, graph_lookup: graphLookup };
fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(index));
console.log(`已校验并生成 ${records.size} 个人物页面、${sources.size} 个来源记录`);

function validateRecord(record, file) {
  if (record.schema !== 'wang-person/v1') throw new Error(`${file}: schema 必须是 wang-person/v1`);
  if (!record.id || `${record.id}.md` !== file) throw new Error(`${file}: 文件名必须与 id 一致`);
  if (record.cbdb_id !== undefined && (!/^[1-9]\d*$/.test(String(record.cbdb_id)))) {
    throw new Error(`${file}: cbdb_id 必须是无前缀的正整数`);
  }
  if (!Array.isArray(record.properties) || !record.relationships) throw new Error(`${file}: 缺少 properties 或 relationships`);
}
function toSummary(record) {
  const now = '1970-01-01T00:00:00.000Z';
  return { person: { id: record.id, status: record.status, merged_into_person_id: record.merged_into ?? null, created_by_user_id: 'git', created_at: now, updated_at: now, current_revision: record.revision }, redirect_to_person_id: record.merged_into ?? null, display_name: record.display_name ?? null, cbdb_id: record.cbdb_id ? String(record.cbdb_id) : null, properties: record.properties, relationships: record.relationships, current_revision: record.revision };
}
function allClaimItems(record) { return [...record.properties.flatMap((field) => [field.recommended, ...(field.alternatives ?? [])]).filter(Boolean), ...relationshipItems(record)]; }
function relationshipItems(record) { return Object.values(record.relationships).flat(); }
function buildEdges(items) {
  const result = { parent_edges: [], spouse_edges: [], descent_edges: [] };
  for (const item of items) {
    const claim = item.claim; const citations = (item.sources ?? []).map((ref) => ({ source_title: ref.source?.title ?? '未知来源', locator: ref.locator ?? null }));
    const base = { claim_id: claim.id, status: claim.status, citations };
    if (['kinship.parent_of', 'kinship.father_of', 'kinship.mother_of', 'kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of'].includes(claim.predicate)) {
      const parentRole = claim.parent_role ?? (claim.predicate.includes('father') ? 'father' : claim.predicate.includes('mother') ? 'mother' : null);
      result.parent_edges.push({ ...base, parent_id: claim.subject_person_id, child_id: claim.object_person_id, parent_role: parentRole });
    }
    else if (claim.predicate === 'kinship.spouse_of') result.spouse_edges.push({ ...base, a_id: claim.subject_person_id, b_id: claim.object_person_id });
    else if (claim.predicate === 'kinship.ancestor_of') result.descent_edges.push({ ...base, ancestor_id: claim.subject_person_id, descendant_id: claim.object_person_id, generations: claim.generation_count ?? null });
  }
  return result;
}
function walk(root, adjacency) { const seen = new Set([root]); const queue = [root]; for (const id of queue) for (const next of adjacency.get(id) ?? []) if (!seen.has(next)) { seen.add(next); queue.push(next); } return [...seen]; }
function nodeFor(summary) { return { id: summary.person.id, display_name: summary.display_name, status: summary.person.status, birth: propertyText(summary, 'birth.date'), death: propertyText(summary, 'death.date') }; }
function propertyText(summary, predicate) { const claim = summary.properties.find((field) => field.predicate === predicate)?.recommended?.claim; return claim?.value_json?.date?.original_text ?? claim?.value_json?.text ?? null; }
function searchRecord(summary) { const aliases = summary.properties.filter((field) => field.predicate.startsWith('name.') && field.predicate !== 'name.primary').flatMap((field) => [field.recommended, ...field.alternatives]).filter(Boolean).map((item) => item.claim.value_json?.text).filter(Boolean); return { id: summary.person.id, status: summary.person.status, display_name: summary.display_name, merged_into_person_id: summary.person.merged_into_person_id, birth_text: propertyText(summary, 'birth.date'), death_text: propertyText(summary, 'death.date'), origin_text: propertyText(summary, 'place.origin'), branch_text: propertyText(summary, 'lineage.branch'), also_known_as: aliases, relative_count: relationshipItems(records.get(summary.person.id)).length }; }
function latestContentCommitDate() {
  try {
    return execFileSync('git', ['log', '-1', '--date=iso-strict', '--pretty=format:%cI', '--', 'content/persons'], { cwd: rootDir, encoding: 'utf8' }).trim() || null;
  } catch {
    return null;
  }
}
function gitChanges(known) {
  try {
    const text = execFileSync('git', ['log', '-120', '--date=iso-strict', '--pretty=format:%H%x09%an%x09%aI%x09%s', '--name-only', '--', 'content/persons'], { cwd: rootDir, encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 });
    const lines = text.split('\n');
    const changes = [];
    for (const line of lines) {
      if (!line.includes('\t')) continue;
      const [hash, author, date, subject] = line.split('\t');
      changes.push({
        contribution_id: hash,
        action: 'claim.revise',
        actor_display_name: author,
        target_type: 'commit',
        target_id: hash,
        subject_person_id: null,
        target_display_name: null,
        change_summary: subject,
        created_at: date,
      });
    }
    return changes.slice(0, 120);
  } catch {
    return [];
  }
}
