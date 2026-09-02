#!/usr/bin/env node

/**
 * Build a public, read-only family-tree fallback from a SQLite D1 export.
 *
 * Usage:
 *   node scripts/build-tree-snapshot.mjs exported.sqlite apps/api/tree-snapshot
 *
 * The output intentionally contains only the same public DTO fields returned
 * by GET /persons/:id/relatives. It never copies users, drafts, claim bodies or
 * other private database rows.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [databaseArg, outputArg] = process.argv.slice(2);
if (!databaseArg || !outputArg) {
  throw new Error('usage: build-tree-snapshot.mjs <database.sqlite> <output-directory>');
}
const database = resolve(databaseArg);
const output = resolve(outputArg);

function query(sql) {
  const raw = execFileSync('sqlite3', ['-json', database, sql], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  return raw.trim() ? JSON.parse(raw) : [];
}

const nodes = query(`
  SELECT p.id, p.status,
         (SELECT json_extract(c.value_json, '$.text') FROM claim c
            WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
              AND c.status IN ('accepted','proposed')
            ORDER BY CASE c.status WHEN 'accepted' THEN 0 ELSE 1 END,
                     CASE c.confidence WHEN 'high' THEN 3 WHEN 'medium' THEN 2
                       WHEN 'low' THEN 1 ELSE 0 END DESC,
                     c.updated_at DESC LIMIT 1) AS display_name,
         (SELECT json_extract(c.value_json, '$.date.original_text') FROM claim c
            WHERE c.subject_person_id = p.id AND c.predicate = 'birth.date'
              AND c.status NOT IN ('retracted','superseded')
            ORDER BY c.created_at LIMIT 1) AS birth,
         (SELECT json_extract(c.value_json, '$.date.original_text') FROM claim c
            WHERE c.subject_person_id = p.id AND c.predicate = 'death.date'
              AND c.status NOT IN ('retracted','superseded')
            ORDER BY c.created_at LIMIT 1) AS death
    FROM person p
   WHERE p.status IN ('active','merged')
   ORDER BY p.id
`);

const relationships = query(`
  SELECT c.id AS claim_id, c.status, c.predicate, c.generation_count, c.parent_role,
         c.subject_person_id AS subject_id, c.object_person_id AS object_id
    FROM claim c
    JOIN person ps ON ps.id = c.subject_person_id
    JOIN person po ON po.id = c.object_person_id
   WHERE c.claim_kind = 'relationship'
     AND c.predicate IN ('kinship.parent_of','kinship.ancestor_of','kinship.spouse_of')
     AND c.status NOT IN ('retracted','superseded')
     AND ps.status IN ('active','merged')
     AND po.status IN ('active','merged')
   ORDER BY c.created_at, c.id
`);

const evidenceRows = query(`
  SELECT cs.claim_id, s.title AS source_title, cs.locator
    FROM claim_source cs
    JOIN source s ON s.id = cs.source_id
    JOIN claim c ON c.id = cs.claim_id
   WHERE cs.stance = 'supports'
     AND c.claim_kind = 'relationship'
     AND c.predicate IN ('kinship.parent_of','kinship.ancestor_of','kinship.spouse_of')
     AND c.status NOT IN ('retracted','superseded')
   ORDER BY cs.created_at
`);
const citations = new Map();
for (const row of evidenceRows) {
  const list = citations.get(row.claim_id) ?? [];
  list.push({ source_title: row.source_title, locator: row.locator ?? null });
  citations.set(row.claim_id, list);
}

const adjacent = new Map(nodes.map((node) => [node.id, []]));
for (const edge of relationships) {
  adjacent.get(edge.subject_id)?.push(edge);
  adjacent.get(edge.object_id)?.push(edge);
}

const byId = new Map(nodes.map((node) => [node.id, node]));
const unvisited = new Set(byId.keys());
const index = {};
const manifests = [];
let number = 0;
while (unvisited.size > 0) {
  const first = unvisited.values().next().value;
  const ids = new Set([first]);
  const queue = [first];
  unvisited.delete(first);
  while (queue.length > 0) {
    const id = queue.shift();
    for (const edge of adjacent.get(id) ?? []) {
      const other = edge.subject_id === id ? edge.object_id : edge.subject_id;
      if (ids.has(other)) continue;
      ids.add(other);
      unvisited.delete(other);
      queue.push(other);
    }
  }
  const edges = relationships.filter((edge) => ids.has(edge.subject_id) && ids.has(edge.object_id));
  const file = `component-${String(number).padStart(4, '0')}.json`;
  const graph = {
    root_id: first,
    scope: 'all',
    up: 0,
    down: 0,
    nodes: [...ids].map((id) => byId.get(id)),
    parent_edges: edges.filter((edge) => edge.predicate === 'kinship.parent_of').map((edge) => ({
      parent_id: edge.subject_id,
      child_id: edge.object_id,
      claim_id: edge.claim_id,
      status: edge.status,
      parent_role: edge.parent_role ?? parentRoleFrom(citations.get(edge.claim_id) ?? []),
      citations: citations.get(edge.claim_id) ?? [],
    })),
    spouse_edges: edges.filter((edge) => edge.predicate === 'kinship.spouse_of').map((edge) => ({
      a_id: edge.subject_id,
      b_id: edge.object_id,
      claim_id: edge.claim_id,
      status: edge.status,
      citations: citations.get(edge.claim_id) ?? [],
    })),
    descent_edges: edges.filter((edge) => edge.predicate === 'kinship.ancestor_of').map((edge) => ({
      ancestor_id: edge.subject_id,
      descendant_id: edge.object_id,
      claim_id: edge.claim_id,
      status: edge.status,
      citations: citations.get(edge.claim_id) ?? [],
      generations: edge.generation_count ?? generationsFrom(citations.get(edge.claim_id) ?? []),
    })),
    truncated: false,
  };
  manifests.push({ file, graph });
  for (const id of ids) index[id] = file;
  number += 1;
}

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
writeFileSync(resolve(output, 'index.json'), JSON.stringify(index));
for (const { file, graph } of manifests) writeFileSync(resolve(output, file), JSON.stringify(graph));

console.log(JSON.stringify({ people: nodes.length, relationships: relationships.length, components: manifests.length }));

function generationsFrom(items) {
  const digits = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
  for (const item of items) {
    const match = /[（(]\s*([一二三四五六七八九十百\d]+)\s*[世代]\s*[）)]/.exec(item.locator ?? '');
    if (!match) continue;
    const value = digits[match[1]] ?? Number(match[1]);
    if (Number.isInteger(value) && value > 1) return value;
  }
  return null;
}

function parentRoleFrom(items) {
  let father = false;
  let mother = false;
  for (const item of items) {
    const locator = item.locator ?? '';
    father ||= /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/.test(locator);
    mother ||= /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/.test(locator);
  }
  return father === mother ? null : father ? 'father' : 'mother';
}
