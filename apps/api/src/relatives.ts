import type {
  DescentEdge,
  KinshipEvidence,
  ParentEdge,
  RelativeNode,
  RelativesGraph,
  SpouseEdge,
} from '@wang/domain';
import { nameOf } from './summary.ts';

/**
 * Walk the kinship graph outward from one person for a family-tree view.
 *
 * Bounded on purpose: `up`/`down` cap the generations and `limit` caps the
 * nodes, because this database contains a 700-person connected component and a
 * tree view that fetched all of it would be useless as well as slow. When the
 * cap stops the walk the result says so, so the client can offer to expand
 * further from a specific person rather than silently showing a partial tree.
 *
 * Each edge carries its citations: a line drawn between two people is a claim,
 * and the reader should be able to see what it rests on without leaving the
 * diagram.
 */
export const MAX_GENERATIONS = 4;
export const MAX_NODES = 240;

/** Only publicly visible persons appear in a tree. */
const VISIBLE = "('active','merged')";

interface RawEdge {
  claim_id: string;
  status: string;
  parent_id: string;
  child_id: string;
}

async function step(
  db: D1Database,
  ids: string[],
  direction: 'up' | 'down',
  predicate: 'kinship.parent_of' | 'kinship.ancestor_of' = 'kinship.parent_of',
): Promise<RawEdge[]> {
  if (ids.length === 0) return [];
  const placeholders = ids.map(() => '?').join(',');
  // Going up we look for edges whose CHILD is in the frontier; going down, the
  // parent. One stored direction, read from both ends.
  const anchor = direction === 'up' ? 'c.object_person_id' : 'c.subject_person_id';
  const other = direction === 'up' ? 'c.subject_person_id' : 'c.object_person_id';
  const res = await db
    .prepare(
      `SELECT c.id AS claim_id, c.status,
              c.subject_person_id AS parent_id, c.object_person_id AS child_id
         FROM claim c
         JOIN person p ON p.id = ${other}
        WHERE c.predicate = ?
          AND c.status NOT IN ('retracted','superseded')
          AND ${anchor} IN (${placeholders})
          AND p.status IN ${VISIBLE}`,
    )
    .bind(predicate, ...ids)
    .all<RawEdge>();
  return res.results ?? [];
}

/** Supporting citations for a set of claims, trimmed to what a label needs. */
async function citationsFor(
  db: D1Database,
  claimIds: string[],
): Promise<Map<string, KinshipEvidence[]>> {
  const byClaim = new Map<string, KinshipEvidence[]>();
  if (claimIds.length === 0) return byClaim;
  const placeholders = claimIds.map(() => '?').join(',');
  const res = await db
    .prepare(
      `SELECT cs.claim_id, cs.locator, s.title
         FROM claim_source cs JOIN source s ON s.id = cs.source_id
        WHERE cs.claim_id IN (${placeholders}) AND cs.stance = 'supports'
        ORDER BY cs.created_at`,
    )
    .bind(...claimIds)
    .all<{ claim_id: string; locator: string | null; title: string }>();
  for (const row of res.results ?? []) {
    const list = byClaim.get(row.claim_id) ?? [];
    list.push({ source_title: row.title, locator: row.locator ?? null });
    byClaim.set(row.claim_id, list);
  }
  return byClaim;
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
  const parentEdges = new Map<string, RawEdge>();
  let truncated = false;

  const absorb = (edges: RawEdge[], pick: (e: RawEdge) => string) => {
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
      parentEdges.set(edge.claim_id, edge);
    }
    return next;
  };

  const descentEdges = new Map<string, RawEdge>();
  const absorbDescent = (edges: RawEdge[], pick: (e: RawEdge) => string) => {
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
      descentEdges.set(edge.claim_id, edge);
    }
    return next;
  };

  // A line of descent counts as one step of the walk even though it spans an
  // unnamed number of generations — otherwise 太子晉, who is joined to the tree
  // only that way, is invisible from every person below him.
  let frontier = [rootId];
  let descentFrontier = [rootId];
  for (let i = 0; i < up && (frontier.length > 0 || descentFrontier.length > 0); i += 1) {
    const reached = absorb(await step(db, frontier, 'up'), (e) => e.parent_id);
    const viaDescent = absorbDescent(
      await step(db, [...frontier, ...descentFrontier], 'up', 'kinship.ancestor_of'),
      (e) => e.parent_id,
    );
    frontier = reached;
    descentFrontier = viaDescent;
  }
  frontier = [rootId];
  descentFrontier = [rootId];
  for (let i = 0; i < down && (frontier.length > 0 || descentFrontier.length > 0); i += 1) {
    const reached = absorb(await step(db, frontier, 'down'), (e) => e.child_id);
    const viaDescent = absorbDescent(
      await step(db, [...frontier, ...descentFrontier], 'down', 'kinship.ancestor_of'),
      (e) => e.child_id,
    );
    frontier = reached;
    descentFrontier = viaDescent;
  }

  // Spouses of everyone collected: a tree without them hides half of each
  // couple, and they are one hop, so this stays cheap.
  const rawSpouses: Array<{ claim_id: string; status: string; a_id: string; b_id: string }> = [];
  const ids = [...collected];
  if (ids.length > 0) {
    const ph = ids.map(() => '?').join(',');
    const res = await db
      .prepare(
        `SELECT c.id AS claim_id, c.status,
                c.subject_person_id AS a_id, c.object_person_id AS b_id
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
      .all<{ claim_id: string; status: string; a_id: string; b_id: string }>();
    for (const edge of res.results ?? []) {
      for (const id of [edge.a_id, edge.b_id]) {
        if (collected.has(id)) continue;
        if (collected.size >= limit) {
          truncated = true;
          continue;
        }
        collected.add(id);
      }
      if (collected.has(edge.a_id) && collected.has(edge.b_id)) rawSpouses.push(edge);
    }
  }

  const keptParents = [...parentEdges.values()].filter(
    (e) => collected.has(e.parent_id) && collected.has(e.child_id),
  );
  const keptDescent = [...descentEdges.values()].filter(
    (e) => collected.has(e.parent_id) && collected.has(e.child_id),
  );
  const citations = await citationsFor(db, [
    ...keptParents.map((e) => e.claim_id),
    ...keptDescent.map((e) => e.claim_id),
    ...rawSpouses.map((e) => e.claim_id),
  ]);

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

  const parent_edges: ParentEdge[] = keptParents.map((e) => ({
    parent_id: e.parent_id,
    child_id: e.child_id,
    claim_id: e.claim_id,
    status: e.status as ParentEdge['status'],
    citations: citations.get(e.claim_id) ?? [],
  }));

  const spouse_edges: SpouseEdge[] = rawSpouses.map((e) => ({
    a_id: e.a_id,
    b_id: e.b_id,
    claim_id: e.claim_id,
    status: e.status as SpouseEdge['status'],
    citations: citations.get(e.claim_id) ?? [],
  }));

  const descent_edges: DescentEdge[] = keptDescent.map((e) => ({
    ancestor_id: e.parent_id,
    descendant_id: e.child_id,
    claim_id: e.claim_id,
    status: e.status as DescentEdge['status'],
    citations: citations.get(e.claim_id) ?? [],
  }));

  return { root_id: rootId, up, down, nodes, parent_edges, spouse_edges, descent_edges, truncated };
}
