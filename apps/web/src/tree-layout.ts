import type { DescentEdge, ParentEdge, RelativeNode, SpouseEdge } from '@wang/domain';

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
/**
 * Rows to leave for a descent whose distance the source did not state. Two,
 * not one: one row would read as parentage, and a larger guess would claim
 * knowledge nobody has. The gap is what the picture can honestly say.
 */
export const UNKNOWN_DESCENT_SPAN = 2;

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
  /** Descent across unnamed generations; may be absent on older callers. */
  descentEdges?: DescentEdge[];
}

export function layoutTree(graph: Graph, rootId: string): Layout {
  const { nodes, parentEdges, spouseEdges, descentEdges = [] } = graph;

  const parentsOf = new Map<string, string[]>();
  const childrenOf = new Map<string, string[]>();
  const spousesOf = new Map<string, string[]>();
  /** Descent links, carrying how many rows they should span. */
  const ancestorsOf = new Map<string, Array<{ id: string; span: number }>>();
  const descendantsOf = new Map<string, Array<{ id: string; span: number }>>();
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
  for (const edge of descentEdges) {
    // A row is a generation, so a link that spans several must span several
    // rows: 「八代孫」 belongs eight rows down, not one. Where the source gave
    // no count there is no honest row for the descendant, and the two are kept
    // apart by more than one row so the picture does not claim a parentage the
    // source never stated.
    const span = edge.generations && edge.generations > 1 ? edge.generations : UNKNOWN_DESCENT_SPAN;
    ancestorsOf.set(edge.descendant_id, [
      ...(ancestorsOf.get(edge.descendant_id) ?? []),
      { id: edge.ancestor_id, span },
    ]);
    descendantsOf.set(edge.ancestor_id, [
      ...(descendantsOf.get(edge.ancestor_id) ?? []),
      { id: edge.descendant_id, span },
    ]);
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

  // Descent links place only the people no parent link could reach. Named
  // generations decide the rows; a line of descent must not compete with them,
  // or 太子晉 — an unknown number of generations above 王翦 — would be drawn as
  // his father and push the real chain down a row.
  const descentQueue = [...generation.keys()];
  while (descentQueue.length > 0) {
    const id = descentQueue.shift()!;
    const g = generation.get(id)!;
    const visit = (other: string, value: number) => {
      if (!nodes.has(other) || generation.has(other)) return;
      generation.set(other, value);
      descentQueue.push(other);
    };
    for (const a of ancestorsOf.get(id) ?? []) visit(a.id, g - a.span);
    for (const d of descendantsOf.get(id) ?? []) visit(d.id, g + d.span);
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
        ...(ancestorsOf.get(id) ?? []).map((a) => a.id),
        ...(descendantsOf.get(id) ?? []).map((d) => d.id),
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
 *
 * Aggressively short, because these sit on top of a diagram: a locator like
 * 「条文：条文识读（孙）（8世）」 carries one thing a reader wants — how many
 * generations — and printing the rest of it collides with the next line's
 * label into an unreadable smear.
 */
export function evidenceLabel(citations: Array<{ locator: string | null }>): string {
  const parts = citations
    .map((c) => {
      const locator = c.locator ?? '';
      const property = /^(P\d+)/.exec(locator);
      if (property) return property[1]!;
      // A stated distance is the whole point of a line of descent.
      const generations = /（\s*([一二三四五六七八九十百\d]+\s*世)\s*）/.exec(locator);
      if (generations) return generations[1]!.replace(/\s+/g, '');
      if (/代数不明|代數不明/.test(locator)) return '代数不明';
      const term = /[:：]\s*(.+)$/.exec(locator);
      const rest = (term ? term[1]! : locator).trim();
      // Drop the miner's own wording and keep what the source said.
      const inner = [...rest.matchAll(/（([^）]{1,8})）/g)].map((m) => m[1]!);
      if (inner.length > 0) return inner[inner.length - 1]!;
      return rest.replace(/^(条文识读|條文識讀|信息框)\s*/, '');
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
