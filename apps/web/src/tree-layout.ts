import type { DescentEdge, ParentEdge, RelativeNode, SpouseEdge } from '@wang/domain';

/**
 * Turns a kinship slice into coordinates for a generation diagram: one row per
 * generation, ancestors above the person, descendants below.
 *
 * Kept as a pure function so the arithmetic can be tested without a browser —
 * the layout is the part that gets subtly wrong (people in the wrong row,
 * couples split apart, rows drifting off-centre), not the rendering library.
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

interface GenerationConstraint {
  from: string;
  to: string;
  span: number;
}

/**
 * Assign one stable row to every person from the direction of all loaded
 * lineage edges. Spouses are one unit; directed cycles are collapsed rather
 * than allowing a child to jump above its forebear.
 */
function assignGenerations(graph: Graph, rootId: string): Map<string, number> {
  const ids = [...graph.nodes.keys()];
  const parent = new Map(ids.map((id) => [id, id]));
  const find = (id: string): string => {
    const p = parent.get(id) ?? id;
    if (p === id) return id;
    const root = find(p);
    parent.set(id, root);
    return root;
  };
  const union = (a: string, b: string) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent.set(rb, ra);
  };
  for (const edge of graph.spouseEdges) {
    if (graph.nodes.has(edge.a_id) && graph.nodes.has(edge.b_id)) union(edge.a_id, edge.b_id);
  }

  const constraints: GenerationConstraint[] = [
    ...graph.parentEdges.map((edge) => ({ from: edge.parent_id, to: edge.child_id, span: 1 })),
    ...(graph.descentEdges ?? []).map((edge) => ({
      from: edge.ancestor_id,
      to: edge.descendant_id,
      span: edge.generations && edge.generations > 1 ? edge.generations : UNKNOWN_DESCENT_SPAN,
    })),
  ].filter((edge) => graph.nodes.has(edge.from) && graph.nodes.has(edge.to));

  const units = [...new Set(ids.map(find))];
  const adjacency = new Map<string, Array<{ to: string; span: number }>>();
  const reverse = new Map<string, string[]>();
  for (const edge of constraints) {
    const from = find(edge.from);
    const to = find(edge.to);
    if (from === to) continue;
    adjacency.set(from, [...(adjacency.get(from) ?? []), { to, span: edge.span }]);
    reverse.set(to, [...(reverse.get(to) ?? []), from]);
  }

  // Collapse strongly connected components. Historical data should be acyclic,
  // but a disputed/imported cycle must never make later descendants render on
  // an earlier row.
  const seen = new Set<string>();
  const order: string[] = [];
  const visit = (id: string) => {
    if (seen.has(id)) return;
    seen.add(id);
    for (const edge of adjacency.get(id) ?? []) visit(edge.to);
    order.push(id);
  };
  for (const unit of units) visit(unit);

  const componentOf = new Map<string, number>();
  const assign = (id: string, component: number) => {
    if (componentOf.has(id)) return;
    componentOf.set(id, component);
    for (const previous of reverse.get(id) ?? []) assign(previous, component);
  };
  let componentCount = 0;
  for (const unit of [...order].reverse()) {
    if (componentOf.has(unit)) continue;
    assign(unit, componentCount);
    componentCount += 1;
  }

  const componentEdges = new Map<number, Map<number, number>>();
  const indegree = new Map<number, number>(Array.from({ length: componentCount }, (_, i) => [i, 0]));
  for (const [from, edges] of adjacency) {
    const fromComponent = componentOf.get(from)!;
    for (const edge of edges) {
      const toComponent = componentOf.get(edge.to)!;
      if (fromComponent === toComponent) continue;
      const targets = componentEdges.get(fromComponent) ?? new Map<number, number>();
      const previous = targets.get(toComponent);
      if (previous === undefined) indegree.set(toComponent, (indegree.get(toComponent) ?? 0) + 1);
      targets.set(toComponent, Math.max(previous ?? 0, edge.span));
      componentEdges.set(fromComponent, targets);
    }
  }

  const componentGeneration = new Map<number, number>(
    Array.from({ length: componentCount }, (_, i) => [i, 0]),
  );
  const queue = [...indegree].filter(([, count]) => count === 0).map(([id]) => id).sort((a, b) => a - b);
  while (queue.length > 0) {
    const component = queue.shift()!;
    const current = componentGeneration.get(component) ?? 0;
    for (const [target, span] of componentEdges.get(component) ?? []) {
      componentGeneration.set(target, Math.max(componentGeneration.get(target) ?? 0, current + span));
      const remaining = (indegree.get(target) ?? 1) - 1;
      indegree.set(target, remaining);
      if (remaining === 0) queue.push(target);
    }
  }

  const rootUnit = find(rootId);
  const rootGeneration = componentGeneration.get(componentOf.get(rootUnit) ?? -1) ?? 0;
  const generations = new Map(ids.map((id) => [
    id,
    (componentGeneration.get(componentOf.get(find(id)) ?? -1) ?? 0) - rootGeneration,
  ]));

  // The focused person's immediate family is the visual anchor. A distant
  // descent constraint elsewhere in a large connected component may otherwise
  // leave slack in a direct parent edge and push that parent several rows away
  // (for example, A ⇢ root spans nine generations while A ⇢ parent follows a
  // shorter historical path). Whatever the wider graph says, parent_of still
  // means exactly one generation at the point the reader chose to inspect.
  for (const edge of graph.parentEdges) {
    if (edge.child_id === rootId) {
      const parentUnit = find(edge.parent_id);
      for (const id of ids) if (find(id) === parentUnit) generations.set(id, -1);
    }
    if (edge.parent_id === rootId) {
      const childUnit = find(edge.child_id);
      for (const id of ids) if (find(id) === childUnit) generations.set(id, 1);
    }
  }

  return generations;
}

/** Keep one person's complete ancestor/descendant trunk and hide side branches. */
export function focusedKinshipIds(
  focusId: string,
  parentEdges: ParentEdge[],
  spouseEdges: SpouseEdge[],
  descentEdges: DescentEdge[] = [],
): Set<string> {
  const parentsOf = new Map<string, string[]>();
  const childrenOf = new Map<string, string[]>();
  const add = (map: Map<string, string[]>, key: string, value: string) =>
    map.set(key, [...(map.get(key) ?? []), value]);
  for (const edge of parentEdges) {
    add(parentsOf, edge.child_id, edge.parent_id);
    add(childrenOf, edge.parent_id, edge.child_id);
  }
  for (const edge of descentEdges) {
    add(parentsOf, edge.descendant_id, edge.ancestor_id);
    add(childrenOf, edge.ancestor_id, edge.descendant_id);
  }

  const visible = new Set<string>([focusId]);
  const walk = (map: Map<string, string[]>) => {
    const queue = [focusId];
    while (queue.length > 0) {
      const id = queue.shift()!;
      for (const next of map.get(id) ?? []) {
        if (visible.has(next)) continue;
        visible.add(next);
        queue.push(next);
      }
    }
  };
  walk(parentsOf);
  walk(childrenOf);

  // Spouses stay beside people on the trunk, but their unrelated ancestry and
  // descendants remain folded until that spouse is selected.
  for (const edge of spouseEdges) {
    if (visible.has(edge.a_id)) visible.add(edge.b_id);
    if (visible.has(edge.b_id)) visible.add(edge.a_id);
  }
  return visible;
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

  // 1. Generation per person, solved from every loaded directed relationship
  // instead of whichever path happened to be visited first.
  const generation = assignGenerations(graph, rootId);

  const rows = new Map<number, string[]>();
  for (const [id, g] of generation) rows.set(g, [...(rows.get(g) ?? []), id]);
  const generations = [...rows.keys()].sort((a, b) => a - b);

  // 2. Order each row. Rows nearest the root are placed first, then each next
  //    row is sorted by the average position of the relatives already placed —
  //    the standard barycentre trick, which decides who sits left of whom.
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
    anchored.forEach(({ id }, index) => order.set(id, index));
    rows.set(g, anchored.map(({ id }) => id));
  }

  // 3. Group couples. A husband and wife are one block on the diagram and their
  //    children hang below the pair, not below one of them.
  const unitOf = new Map<string, string>();
  const unitMembers = new Map<string, string[]>();
  const rank = (id: string) => (order.get(id) ?? 0) + (generation.get(id) ?? 0) * 1000;
  for (const id of [...nodes.keys()].sort((a, b) => rank(a) - rank(b))) {
    if (unitOf.has(id)) continue;
    const members = [id];
    unitOf.set(id, id);
    for (const spouse of spousesOf.get(id) ?? []) {
      if (unitOf.has(spouse) || !nodes.has(spouse)) continue;
      if (generation.get(spouse) !== generation.get(id)) continue;
      unitOf.set(spouse, id);
      members.push(spouse);
    }
    unitMembers.set(id, members);
  }
  const unitWidth = (unit: string) =>
    unitMembers.get(unit)!.length * NODE_WIDTH +
    (unitMembers.get(unit)!.length - 1) * GAP_X;

  // 4. Build a forest over those blocks: every block hangs under the first
  //    forebear above it. A child appears under one parent only — the other
  //    parent still draws a line to them, but the block structure has to be a
  //    tree for the packing below to mean anything.
  const forebearOf = new Map<string, string>();
  const offspringOf = new Map<string, string[]>();
  for (const unit of unitMembers.keys()) {
    const g = generation.get(unit)!;
    const candidates = unitMembers
      .get(unit)!
      .flatMap((m) => [
        ...(parentsOf.get(m) ?? []),
        ...(ancestorsOf.get(m) ?? []).map((a) => a.id),
      ])
      .map((p) => unitOf.get(p))
      .filter((u): u is string => Boolean(u) && u !== unit && generation.get(u!)! < g)
      .sort((a, b) => rank(a) - rank(b));
    const forebear = candidates[0];
    if (!forebear) continue;
    forebearOf.set(unit, forebear);
    offspringOf.set(forebear, [...(offspringOf.get(forebear) ?? []), unit]);
  }
  for (const kids of offspringOf.values()) kids.sort((a, b) => rank(a) - rank(b));

  // 5. Pack the subtrees. Descendants are laid out first, then their forebear
  //    is centred over them; a block that would land on top of one already
  //    placed in its row pushes itself — and everything below it — to the
  //    right. That is what makes a person's descendants sit under that person
  //    instead of interleaving with the neighbours'.
  const unitX = new Map<string, number>();
  const rowCursor = new Map<number, number>();

  const shift = (unit: string, dx: number) => {
    unitX.set(unit, unitX.get(unit)! + dx);
    const g = generation.get(unit)!;
    rowCursor.set(g, Math.max(rowCursor.get(g) ?? 0, unitX.get(unit)! + unitWidth(unit) + GAP_X));
    for (const kid of offspringOf.get(unit) ?? []) shift(kid, dx);
  };

  const place = (unit: string) => {
    const g = generation.get(unit)!;
    const kids = offspringOf.get(unit) ?? [];
    for (const kid of kids) place(kid);

    const free = rowCursor.get(g) ?? 0;
    let x = free;
    if (kids.length > 0) {
      const first = unitX.get(kids[0]!)!;
      const last = unitX.get(kids[kids.length - 1]!)! + unitWidth(kids[kids.length - 1]!);
      const centred = (first + last) / 2 - unitWidth(unit) / 2;
      if (centred >= free) x = centred;
      else for (const kid of kids) shift(kid, free - centred);
    }
    unitX.set(unit, x);
    rowCursor.set(g, x + unitWidth(unit) + GAP_X);
  };

  for (const unit of [...unitMembers.keys()]
    .filter((u) => !forebearOf.has(u))
    .sort((a, b) => rank(a) - rank(b))) {
    place(unit);
  }

  // 6. Coordinates, normalised so the leftmost block sits at the padding.
  const placed = new Map<string, PlacedNode>();
  const left = Math.min(...[...unitX.values()], 0);
  const minGeneration = generations[0] ?? 0;
  const maxGeneration = generations[generations.length - 1] ?? minGeneration;
  for (const [unit, members] of unitMembers) {
    members.forEach((id, i) => {
      const node = nodes.get(id);
      if (!node) return;
      placed.set(id, {
        node,
        generation: generation.get(unit)!,
        x: PADDING + unitX.get(unit)! - left + i * (NODE_WIDTH + GAP_X),
        y: PADDING + (generation.get(unit)! - minGeneration) * (NODE_HEIGHT + GAP_Y),
      });
    });
  }
  const totalWidth = Math.max(
    ...[...placed.values()].map((p) => p.x + NODE_WIDTH - PADDING),
    NODE_WIDTH,
  );

  return {
    nodes: placed,
    width: totalWidth + PADDING * 2,
    height: (maxGeneration - minGeneration + 1) * (NODE_HEIGHT + GAP_Y) - GAP_Y + PADDING * 2,
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

/**
 * Lines of descent the diagram should not draw, because the generations they
 * span are already on it.
 *
 * 「王翦之孫王離」 and 王翦 → 王賁 → 王離 say the same thing; drawing both puts a
 * dashed shortcut alongside the very chain it summarises, and expanding the
 * tree turns every filled-in gap into a duplicate line. A line of descent earns
 * its place only where the named chain is missing — which is exactly what it
 * was recorded for.
 *
 * Judged against the edges actually loaded: a chain that exists in the database
 * but is not on screen yet is not a chain the reader can follow, so the line
 * stays until it is.
 */
export function redundantDescent(
  parentEdges: Array<{ parent_id: string; child_id: string }>,
  descentEdges: Array<{ claim_id: string; ancestor_id: string; descendant_id: string }>,
): Set<string> {
  const childrenOf = new Map<string, string[]>();
  for (const edge of parentEdges) {
    childrenOf.set(edge.parent_id, [...(childrenOf.get(edge.parent_id) ?? []), edge.child_id]);
  }

  const redundant = new Set<string>();
  for (const edge of descentEdges) {
    const seen = new Set([edge.ancestor_id]);
    const queue = [edge.ancestor_id];
    while (queue.length > 0) {
      const id = queue.shift()!;
      if (id === edge.descendant_id) {
        redundant.add(edge.claim_id);
        break;
      }
      for (const child of childrenOf.get(id) ?? []) {
        if (seen.has(child)) continue;
        seen.add(child);
        queue.push(child);
      }
    }
  }
  return redundant;
}
