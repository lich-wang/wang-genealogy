import type { ParentEdge, RelativeNode, SpouseEdge } from '@wang/domain';

/**
 * Turns a kinship slice into coordinates for a generation diagram: one row per
 * generation, ancestors above the person, descendants below.
 *
 * Kept as a pure function so the arithmetic can be tested without a browser —
 * the layout is the part that gets subtly wrong (people in the wrong row,
 * couples split apart, rows drifting off-centre), not the SVG markup.
 */
export const NODE_WIDTH = 116;
export const NODE_HEIGHT = 46;
export const GAP_X = 26;
export const GAP_Y = 84;
export const PADDING = 16;

export interface PlacedNode {
  node: RelativeNode;
  /** Generations from the root: negative above, positive below. */
  generation: number;
  x: number;
  y: number;
}

export interface Layout {
  nodes: Map<string, PlacedNode>;
  width: number;
  height: number;
  /** Generations present, ordered oldest first. */
  generations: number[];
}

interface Graph {
  nodes: Map<string, RelativeNode>;
  parentEdges: ParentEdge[];
  spouseEdges: SpouseEdge[];
}

export function layoutTree(graph: Graph, rootId: string): Layout {
  const { nodes, parentEdges, spouseEdges } = graph;

  const parentsOf = new Map<string, string[]>();
  const childrenOf = new Map<string, string[]>();
  const spousesOf = new Map<string, string[]>();
  const push = (map: Map<string, string[]>, key: string, value: string) => {
    map.set(key, [...(map.get(key) ?? []), value]);
  };
  for (const edge of parentEdges) {
    push(parentsOf, edge.child_id, edge.parent_id);
    push(childrenOf, edge.parent_id, edge.child_id);
  }
  for (const edge of spouseEdges) {
    push(spousesOf, edge.a_id, edge.b_id);
    push(spousesOf, edge.b_id, edge.a_id);
  }

  // 1. Generation per person: parents one row up, children one row down, and a
  //    spouse shares their partner's row.
  const generation = new Map<string, number>([[rootId, 0]]);
  const queue = [rootId];
  while (queue.length > 0) {
    const id = queue.shift()!;
    const g = generation.get(id)!;
    const visit = (other: string, value: number) => {
      if (!nodes.has(other) || generation.has(other)) return;
      generation.set(other, value);
      queue.push(other);
    };
    for (const parent of parentsOf.get(id) ?? []) visit(parent, g - 1);
    for (const child of childrenOf.get(id) ?? []) visit(child, g + 1);
    for (const spouse of spousesOf.get(id) ?? []) visit(spouse, g);
  }
  // Anyone the walk could not reach (a spouse-of-a-spouse, say) goes on the
  // root's row rather than being dropped from the picture.
  for (const id of nodes.keys()) if (!generation.has(id)) generation.set(id, 0);

  const rows = new Map<number, string[]>();
  for (const [id, g] of generation) rows.set(g, [...(rows.get(g) ?? []), id]);
  const generations = [...rows.keys()].sort((a, b) => a - b);

  // 2. Order each row. Rows nearest the root are placed first, then each next
  //    row is sorted by the average position of the relatives already placed —
  //    the standard barycentre trick, which keeps lines from crossing.
  const order = new Map<string, number>();
  const byDistanceFromRoot = [...generations].sort((a, b) => Math.abs(a) - Math.abs(b));
  for (const g of byDistanceFromRoot) {
    const row = rows.get(g)!;
    const anchored = row.map((id) => {
      const neighbours = [
        ...(parentsOf.get(id) ?? []),
        ...(childrenOf.get(id) ?? []),
        ...(spousesOf.get(id) ?? []),
      ].filter((other) => order.has(other));
      const key =
        neighbours.length > 0
          ? neighbours.reduce((sum, other) => sum + order.get(other)!, 0) / neighbours.length
          : Number.POSITIVE_INFINITY;
      return { id, key };
    });
    anchored.sort((a, b) => a.key - b.key || a.id.localeCompare(b.id));

    // Couples read as couples: pull a spouse next to their partner.
    const ordered: string[] = [];
    for (const { id } of anchored) {
      if (ordered.includes(id)) continue;
      ordered.push(id);
      for (const spouse of spousesOf.get(id) ?? []) {
        if (generation.get(spouse) === g && !ordered.includes(spouse) && row.includes(spouse)) {
          ordered.push(spouse);
        }
      }
    }
    ordered.forEach((id, index) => order.set(id, index));
    rows.set(g, ordered);
  }

  // 3. Coordinates. Rows are centred on the widest one so the diagram reads as
  //    a tree rather than a left-aligned list.
  const widest = Math.max(...generations.map((g) => rows.get(g)!.length), 1);
  const rowWidth = (count: number) => count * NODE_WIDTH + Math.max(count - 1, 0) * GAP_X;
  const totalWidth = rowWidth(widest);

  const placed = new Map<string, PlacedNode>();
  generations.forEach((g, rowIndex) => {
    const row = rows.get(g)!;
    const offset = (totalWidth - rowWidth(row.length)) / 2;
    row.forEach((id, columnIndex) => {
      const node = nodes.get(id);
      if (!node) return;
      placed.set(id, {
        node,
        generation: g,
        x: PADDING + offset + columnIndex * (NODE_WIDTH + GAP_X),
        y: PADDING + rowIndex * (NODE_HEIGHT + GAP_Y),
      });
    });
  });

  return {
    nodes: placed,
    width: totalWidth + PADDING * 2,
    height: generations.length * (NODE_HEIGHT + GAP_Y) - GAP_Y + PADDING * 2,
    generations,
  };
}

/**
 * Short label for a line: which statement in which source says these two are
 * related. "P22（父）" becomes "P22", "亲属关系：父" becomes "父".
 */
export function evidenceLabel(citations: Array<{ locator: string | null }>): string {
  const parts = citations
    .map((c) => {
      const locator = c.locator ?? '';
      const property = /^(P\d+)/.exec(locator);
      if (property) return property[1]!;
      const term = /[:：]\s*(.+)$/.exec(locator);
      if (term) return term[1]!.trim();
      return locator.trim();
    })
    .filter(Boolean);
  const unique = [...new Set(parts)];
  if (unique.length === 0) return citations.length > 0 ? `来源 ${citations.length}` : '无来源';
  return unique.slice(0, 2).join('·') + (unique.length > 2 ? '…' : '');
}

/** Full text for the hover tooltip on a line. */
export function evidenceTooltip(citations: Array<{ source_title: string; locator: string | null }>) {
  if (citations.length === 0) return '尚无来源';
  return citations
    .map((c) => (c.locator ? `${c.source_title}（${c.locator}）` : c.source_title))
    .join('\n');
}

/**
 * Year-only form of a date, for the one line a box can spare: a full
 * "23年10月6日（新地皇四年）" would overflow the box and collide with its
 * neighbours, and in a tree the year is what carries the meaning.
 */
export function compactYear(value: string | null): string | null {
  if (!value || /不详|不詳|未知|unknown/i.test(value)) return null;
  // Longest unit first: "1480年代" must not match as "1480年".
  const era = /^((?:公元)?前?\s*\d+\s*(?:年代|世纪|世紀|年))/.exec(value.trim());
  if (era) return era[1]!.replace(/\s+/g, '');
  return value.length > 7 ? `${value.slice(0, 6)}…` : value;
}

/** "生年–卒年" for a box label, or null when neither is known. */
export function compactLifespan(node: { birth: string | null; death: string | null }): string | null {
  const birth = compactYear(node.birth);
  const death = compactYear(node.death);
  if (!birth && !death) return null;
  return `${birth ?? '？'}–${death ?? '？'}`;
}
