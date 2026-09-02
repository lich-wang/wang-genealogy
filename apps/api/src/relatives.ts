import type {
  DescentEdge,
  KinshipEvidence,
  ParentEdge,
  ParentRole,
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
/** Large enough for the current main component, while still bounding bad data. */
export const MAX_GLOBAL_NODES = 1200;
// D1 accepts at most 100 bound parameters in this project's compatibility
// range; stay below that while avoiding dozens of round trips for a large tree.
const QUERY_CHUNK = 95;

/** Only publicly visible persons appear in a tree. */
const VISIBLE = "('active','merged')";

interface RawEdge {
  claim_id: string;
  status: string;
  parent_id: string;
  child_id: string;
  generation_count?: number | null;
  parent_role?: ParentRole | null;
}

interface RawSpouse {
  claim_id: string;
  status: string;
  a_id: string;
  b_id: string;
}

interface RawRelationship {
  claim_id: string;
  status: string;
  predicate: 'kinship.parent_of' | 'kinship.ancestor_of' | 'kinship.spouse_of';
  subject_id: string;
  object_id: string;
  generation_count: number | null;
  parent_role: ParentRole | null;
}

function chunks<T>(values: T[], size = QUERY_CHUNK): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < values.length; i += size) result.push(values.slice(i, i + size));
  return result;
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
      `SELECT c.id AS claim_id, c.status, c.generation_count, c.parent_role,
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

const CN_DIGITS: Record<string, number> = {
  一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10,
};

/**
 * Legacy generation count read from a citation, as in 「条文（8世）」.
 *
 * New claims store this as `claim.generation_count`; this fallback preserves
 * the meaning of imported records created before that structured field existed.
 */
function statedGenerations(citations: KinshipEvidence[]): number | null {
  for (const c of citations) {
    const m = /[（(]\s*([一二三四五六七八九十百\d]+)\s*[世代]\s*[）)]/.exec(c.locator ?? '');
    if (!m) continue;
    const raw = m[1]!;
    const n = CN_DIGITS[raw] ?? Number(raw);
    if (Number.isInteger(n) && n > 1) return n;
  }
  return null;
}

function statedParentRole(citations: KinshipEvidence[]): ParentRole | null {
  let father = false;
  let mother = false;
  for (const citation of citations) {
    const locator = citation.locator ?? '';
    father ||= /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/.test(locator);
    mother ||= /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/.test(locator);
  }
  return father === mother ? null : father ? 'father' : 'mother';
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

async function materializeRelatives(
  db: D1Database,
  rootId: string,
  options: {
    up: number;
    down: number;
    scope: 'bounded' | 'all';
    collected: Set<string>;
    parentEdges: RawEdge[];
    descentEdges: RawEdge[];
    spouseEdges: RawSpouse[];
    truncated: boolean;
  },
): Promise<RelativesGraph> {
  const claimIds = [
    ...options.parentEdges.map((edge) => edge.claim_id),
    ...options.descentEdges.map((edge) => edge.claim_id),
    ...options.spouseEdges.map((edge) => edge.claim_id),
  ];
  const citations = new Map<string, KinshipEvidence[]>();
  for (const batch of chunks(claimIds)) {
    for (const [claimId, evidence] of await citationsFor(db, batch)) citations.set(claimId, evidence);
  }

  const nodeIds = [...options.collected];
  const names = new Map<string, string | null>();
  const personRows: Record<string, unknown>[] = [];
  for (const batch of chunks(nodeIds)) {
    for (const [personId, name] of await nameOf(db, batch)) names.set(personId, name);
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
          WHERE p.id IN (${batch.map(() => '?').join(',')})`,
      )
      .bind(...batch)
      .all<Record<string, unknown>>();
    personRows.push(...(rows.results ?? []));
  }

  const nodes: RelativeNode[] = personRows.map((row) => ({
    id: row.id as string,
    status: row.status as RelativeNode['status'],
    display_name: names.get(row.id as string) ?? null,
    birth: (row.birth as string) ?? null,
    death: (row.death as string) ?? null,
  }));
  const parent_edges: ParentEdge[] = options.parentEdges.map((edge) => ({
    parent_id: edge.parent_id,
    child_id: edge.child_id,
    claim_id: edge.claim_id,
    status: edge.status as ParentEdge['status'],
    parent_role: edge.parent_role ?? statedParentRole(citations.get(edge.claim_id) ?? []),
    citations: citations.get(edge.claim_id) ?? [],
  }));
  const spouse_edges: SpouseEdge[] = options.spouseEdges.map((edge) => ({
    a_id: edge.a_id,
    b_id: edge.b_id,
    claim_id: edge.claim_id,
    status: edge.status as SpouseEdge['status'],
    citations: citations.get(edge.claim_id) ?? [],
  }));
  const descent_edges: DescentEdge[] = options.descentEdges.map((edge) => {
    const evidence = citations.get(edge.claim_id) ?? [];
    return {
      ancestor_id: edge.parent_id,
      descendant_id: edge.child_id,
      claim_id: edge.claim_id,
      status: edge.status as DescentEdge['status'],
      citations: evidence,
      generations: edge.generation_count ?? statedGenerations(evidence),
    };
  });

  return {
    root_id: rootId,
    scope: options.scope,
    up: options.up,
    down: options.down,
    nodes,
    parent_edges,
    spouse_edges,
    descent_edges,
    truncated: options.truncated,
  };
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
  const rawSpouses: RawSpouse[] = [];
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
      .all<RawSpouse>();
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
  return materializeRelatives(db, rootId, {
    up,
    down,
    scope: 'bounded',
    collected,
    parentEdges: keptParents,
    descentEdges: keptDescent,
    spouseEdges: rawSpouses,
    truncated,
  });
}

/** Load the complete connected public kinship component around one person. */
export async function loadAllRelatives(
  db: D1Database,
  rootId: string,
  options: { limit?: number } = {},
): Promise<RelativesGraph> {
  const limit = Math.min(Math.max(options.limit ?? MAX_GLOBAL_NODES, 1), MAX_GLOBAL_NODES);
  const result = await db
    .prepare(
      `SELECT c.id AS claim_id, c.status, c.predicate, c.generation_count, c.parent_role,
              c.subject_person_id AS subject_id, c.object_person_id AS object_id
         FROM claim c
         JOIN person ps ON ps.id = c.subject_person_id
         JOIN person po ON po.id = c.object_person_id
        WHERE c.claim_kind = 'relationship'
          AND c.predicate IN ('kinship.parent_of','kinship.ancestor_of','kinship.spouse_of')
          AND c.status NOT IN ('retracted','superseded')
          AND ps.status IN ${VISIBLE}
          AND po.status IN ${VISIBLE}
        ORDER BY c.created_at, c.id`,
    )
    .all<RawRelationship>();
  const relationships = result.results ?? [];
  const adjacent = new Map<string, RawRelationship[]>();
  for (const edge of relationships) {
    adjacent.set(edge.subject_id, [...(adjacent.get(edge.subject_id) ?? []), edge]);
    adjacent.set(edge.object_id, [...(adjacent.get(edge.object_id) ?? []), edge]);
  }

  const collected = new Set<string>([rootId]);
  const queue = [rootId];
  let truncated = false;
  while (queue.length > 0) {
    const personId = queue.shift()!;
    for (const edge of adjacent.get(personId) ?? []) {
      const other = edge.subject_id === personId ? edge.object_id : edge.subject_id;
      if (collected.has(other)) continue;
      if (collected.size >= limit) {
        truncated = true;
        continue;
      }
      collected.add(other);
      queue.push(other);
    }
  }

  const kept = relationships.filter(
    (edge) => collected.has(edge.subject_id) && collected.has(edge.object_id),
  );
  return materializeRelatives(db, rootId, {
    up: 0,
    down: 0,
    scope: 'all',
    collected,
    parentEdges: kept
      .filter((edge) => edge.predicate === 'kinship.parent_of')
      .map((edge) => ({
        claim_id: edge.claim_id,
        status: edge.status,
        parent_id: edge.subject_id,
        child_id: edge.object_id,
        generation_count: null,
        parent_role: edge.parent_role ?? null,
      })),
    descentEdges: kept
      .filter((edge) => edge.predicate === 'kinship.ancestor_of')
      .map((edge) => ({
        claim_id: edge.claim_id,
        status: edge.status,
        parent_id: edge.subject_id,
        child_id: edge.object_id,
        generation_count: edge.generation_count,
        parent_role: null,
      })),
    spouseEdges: kept
      .filter((edge) => edge.predicate === 'kinship.spouse_of')
      .map((edge) => ({
        claim_id: edge.claim_id,
        status: edge.status,
        a_id: edge.subject_id,
        b_id: edge.object_id,
      })),
    truncated,
  });
}
