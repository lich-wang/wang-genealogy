import type { RelativeNode, RelativesGraph } from '@wang/domain';
import { nameOf } from './summary.ts';

/**
 * Walk the kinship graph outward from one person for a family-tree view.
 *
 * Bounded on purpose: `up`/`down` cap the generations and `limit` caps the
 * nodes, because this database contains a 700-person connected component and a
 * tree view that fetched all of it would be useless as well as slow. When the
 * cap stops the walk the result says so, so the client can offer to expand
 * further from a specific person rather than silently showing a partial tree.
 */
export const MAX_GENERATIONS = 4;
export const MAX_NODES = 240;

/** Only publicly visible persons appear in a tree. */
const VISIBLE = "('active','merged')";

async function step(
  db: D1Database,
  ids: string[],
  direction: 'up' | 'down',
): Promise<Array<{ parent_id: string; child_id: string }>> {
  if (ids.length === 0) return [];
  const placeholders = ids.map(() => '?').join(',');
  // Going up we look for edges whose CHILD is in the frontier; going down, the
  // parent. One stored direction, read from both ends.
  const anchor = direction === 'up' ? 'c.object_person_id' : 'c.subject_person_id';
  const other = direction === 'up' ? 'c.subject_person_id' : 'c.object_person_id';
  const res = await db
    .prepare(
      `SELECT c.subject_person_id AS parent_id, c.object_person_id AS child_id
         FROM claim c
         JOIN person p ON p.id = ${other}
        WHERE c.predicate = 'kinship.parent_of'
          AND c.status NOT IN ('retracted','superseded')
          AND ${anchor} IN (${placeholders})
          AND p.status IN ${VISIBLE}`,
    )
    .bind(...ids)
    .all<{ parent_id: string; child_id: string }>();
  return res.results ?? [];
}

export async function loadRelatives(
  db: D1Database,
  rootId: string,
  options: { up?: number; down?: number; limit?: number } = {},
): Promise<RelativesGraph> {
  const up = Math.min(Math.max(options.up ?? 2, 0), MAX_GENERATIONS);
  const down = Math.min(Math.max(options.down ?? 2, 0), MAX_GENERATIONS);
  const limit = Math.min(Math.max(options.limit ?? MAX_NODES, 1), MAX_NODES);

  const collected = new Set<string>([rootId]);
  const parentEdges = new Map<string, { parent_id: string; child_id: string }>();
  let truncated = false;

  const absorb = (
    edges: Array<{ parent_id: string; child_id: string }>,
    pick: (e: { parent_id: string; child_id: string }) => string,
  ) => {
    const next: string[] = [];
    for (const edge of edges) {
      const id = pick(edge);
      if (!collected.has(id)) {
        if (collected.size >= limit) {
          truncated = true;
          continue;
        }
        collected.add(id);
        next.push(id);
      }
      parentEdges.set(`${edge.parent_id}|${edge.child_id}`, edge);
    }
    return next;
  };

  let frontier = [rootId];
  for (let i = 0; i < up && frontier.length > 0; i += 1) {
    frontier = absorb(await step(db, frontier, 'up'), (e) => e.parent_id);
  }
  frontier = [rootId];
  for (let i = 0; i < down && frontier.length > 0; i += 1) {
    frontier = absorb(await step(db, frontier, 'down'), (e) => e.child_id);
  }

  // Spouses of everyone collected: a tree without them hides half of each
  // couple, and they are one hop, so this stays cheap.
  const spouseEdges: Array<{ a_id: string; b_id: string }> = [];
  const ids = [...collected];
  if (ids.length > 0) {
    const ph = ids.map(() => '?').join(',');
    const res = await db
      .prepare(
        `SELECT c.subject_person_id AS a_id, c.object_person_id AS b_id
           FROM claim c
           JOIN person pa ON pa.id = c.subject_person_id
           JOIN person pb ON pb.id = c.object_person_id
          WHERE c.predicate = 'kinship.spouse_of'
            AND c.status NOT IN ('retracted','superseded')
            AND (c.subject_person_id IN (${ph}) OR c.object_person_id IN (${ph}))
            AND pa.status IN ${VISIBLE}
            AND pb.status IN ${VISIBLE}`,
      )
      .bind(...ids, ...ids)
      .all<{ a_id: string; b_id: string }>();
    for (const edge of res.results ?? []) {
      for (const id of [edge.a_id, edge.b_id]) {
        if (collected.has(id)) continue;
        if (collected.size >= limit) {
          truncated = true;
          continue;
        }
        collected.add(id);
      }
      if (collected.has(edge.a_id) && collected.has(edge.b_id)) spouseEdges.push(edge);
    }
  }

  const nodeIds = [...collected];
  const names = await nameOf(db, nodeIds);
  const rows = await db
    .prepare(
      `SELECT p.id, p.status,
              (SELECT json_extract(c.value_json, '$.date.original_text') FROM claim c
                 WHERE c.subject_person_id = p.id AND c.predicate = 'birth.date'
                   AND c.status NOT IN ('retracted','superseded')
                 ORDER BY c.created_at LIMIT 1) AS birth,
              (SELECT json_extract(c.value_json, '$.date.original_text') FROM claim c
                 WHERE c.subject_person_id = p.id AND c.predicate = 'death.date'
                   AND c.status NOT IN ('retracted','superseded')
                 ORDER BY c.created_at LIMIT 1) AS death
         FROM person p
        WHERE p.id IN (${nodeIds.map(() => '?').join(',')})`,
    )
    .bind(...nodeIds)
    .all<Record<string, unknown>>();

  const nodes: RelativeNode[] = (rows.results ?? []).map((r) => ({
    id: r.id as string,
    status: r.status as RelativeNode['status'],
    display_name: names.get(r.id as string) ?? null,
    birth: (r.birth as string) ?? null,
    death: (r.death as string) ?? null,
  }));

  return {
    root_id: rootId,
    up,
    down,
    nodes,
    parent_edges: [...parentEdges.values()].filter(
      (e) => collected.has(e.parent_id) && collected.has(e.child_id),
    ),
    spouse_edges: spouseEdges,
    truncated,
  };
}
