#!/usr/bin/env node

/**
 * Find the longest published parent-to-child path without querying D1.
 *
 * Usage:
 *   npm run audit:tree-path
 *   node scripts/longest-tree-path.mjs path/to/tree-snapshot
 */
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const snapshotDirectory = resolve(process.argv[2] ?? 'apps/api/tree-snapshot');
const files = readdirSync(snapshotDirectory)
  .filter((file) => /^component-\d+\.json$/.test(file))
  .sort();

if (files.length === 0) throw new Error(`no tree snapshot components found in ${snapshotDirectory}`);

let longest = [];
let longestComponent = null;
let longestComponentPeople = 0;
let parentEdgeCount = 0;
let personCount = 0;

for (const file of files) {
  const graph = JSON.parse(readFileSync(resolve(snapshotDirectory, file), 'utf8'));
  const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
  const children = new Map(graph.nodes.map((node) => [node.id, []]));
  const indegree = new Map(graph.nodes.map((node) => [node.id, 0]));

  personCount += nodes.size;
  parentEdgeCount += graph.parent_edges.length;
  for (const edge of graph.parent_edges) {
    if (!nodes.has(edge.parent_id) || !nodes.has(edge.child_id)) continue;
    children.get(edge.parent_id).push(edge.child_id);
    indegree.set(edge.child_id, indegree.get(edge.child_id) + 1);
  }

  const queue = [...nodes.keys()].filter((id) => indegree.get(id) === 0);
  const paths = new Map(queue.map((id) => [id, [id]]));
  let cursor = 0;
  while (cursor < queue.length) {
    const parentId = queue[cursor++];
    const parentPath = paths.get(parentId) ?? [parentId];
    if (parentPath.length > longest.length) {
      longest = parentPath;
      longestComponent = file;
      longestComponentPeople = nodes.size;
    }
    for (const childId of children.get(parentId)) {
      const candidate = [...parentPath, childId];
      if (candidate.length > (paths.get(childId)?.length ?? 0)) paths.set(childId, candidate);
      indegree.set(childId, indegree.get(childId) - 1);
      if (indegree.get(childId) === 0) queue.push(childId);
    }
  }

  if (queue.length !== nodes.size) {
    const cyclic = [...nodes.keys()].filter((id) => indegree.get(id) > 0);
    throw new Error(`parent cycle found in ${file}: ${cyclic.slice(0, 12).join(', ')}`);
  }
}

const nameById = new Map();
for (const file of files) {
  const graph = JSON.parse(readFileSync(resolve(snapshotDirectory, file), 'utf8'));
  for (const node of graph.nodes) nameById.set(node.id, node.display_name ?? '未命名');
}

console.log(JSON.stringify({
  source: snapshotDirectory,
  components: files.length,
  people: personCount,
  parent_edges: parentEdgeCount,
  longest_path_people: longest.length,
  longest_path_generations: Math.max(0, longest.length - 1),
  longest_path_component: longestComponent,
  longest_path_component_people: longestComponentPeople,
  path: longest.map((id) => ({ id, name: nameById.get(id) })),
}, null, 2));
