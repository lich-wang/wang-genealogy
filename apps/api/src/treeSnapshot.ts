let indexCache: Record<string, string> | null = null;
const graphCache = new Map<string, Promise<SnapshotGraph | null>>();

interface SnapshotGraph {
  root_id: string;
  scope: 'all';
  up: number;
  down: number;
  nodes: Array<{ id: string } & Record<string, unknown>>;
  parent_edges: Array<{ parent_id: string; child_id: string } & Record<string, unknown>>;
  spouse_edges: Array<{ a_id: string; b_id: string } & Record<string, unknown>>;
  descent_edges: Array<{ ancestor_id: string; descendant_id: string } & Record<string, unknown>>;
  truncated: boolean;
}

export async function publicTreeSnapshot(
  assets: Fetcher,
  personId: string,
  d1Bypassed = true,
): Promise<Response | null> {
  const graph = await loadSnapshotGraph(assets, personId);
  if (!graph) return null;
  return treeJson({ ...graph, root_id: personId }, d1Bypassed);
}

/** Build the normal bounded tree slice in memory from the published component. */
export async function publicTreeSnapshotSlice(
  assets: Fetcher,
  personId: string,
  up: number,
  down: number,
): Promise<Response | null> {
  const graph = await loadSnapshotGraph(assets, personId);
  if (!graph) return null;
  const selected = new Set([personId]);
  let truncated = false;
  const add = (id: string, next: Set<string>) => {
    if (selected.has(id)) return;
    if (selected.size >= 240) {
      truncated = true;
      return;
    }
    selected.add(id);
    next.add(id);
  };
  let frontier = new Set([personId]);
  for (let level = 0; level < up && frontier.size > 0; level += 1) {
    const next = new Set<string>();
    for (const edge of graph.parent_edges) if (frontier.has(edge.child_id)) add(edge.parent_id, next);
    for (const edge of graph.descent_edges) if (frontier.has(edge.descendant_id)) add(edge.ancestor_id, next);
    frontier = next;
  }
  frontier = new Set([personId]);
  for (let level = 0; level < down && frontier.size > 0; level += 1) {
    const next = new Set<string>();
    for (const edge of graph.parent_edges) if (frontier.has(edge.parent_id)) add(edge.child_id, next);
    for (const edge of graph.descent_edges) if (frontier.has(edge.ancestor_id)) add(edge.descendant_id, next);
    frontier = next;
  }
  const lineage = new Set(selected);
  for (const edge of graph.spouse_edges) {
    if (lineage.has(edge.a_id)) add(edge.b_id, new Set());
    else if (lineage.has(edge.b_id)) add(edge.a_id, new Set());
  }
  return treeJson({
    root_id: personId,
    scope: 'bounded',
    up,
    down,
    nodes: graph.nodes.filter((node) => selected.has(node.id)),
    parent_edges: graph.parent_edges.filter((edge) => selected.has(edge.parent_id) && selected.has(edge.child_id)),
    spouse_edges: graph.spouse_edges.filter((edge) => selected.has(edge.a_id) && selected.has(edge.b_id)),
    descent_edges: graph.descent_edges.filter((edge) => selected.has(edge.ancestor_id) && selected.has(edge.descendant_id)),
    truncated,
  });
}

async function loadSnapshotGraph(assets: Fetcher, personId: string): Promise<SnapshotGraph | null> {
  if (!indexCache) {
    const response = await assets.fetch('https://tree-snapshot.invalid/index.json');
    if (!response.ok) return null;
    indexCache = await response.json() as Record<string, string>;
  }
  const file = indexCache[personId];
  if (!file) return null;
  let pending = graphCache.get(file);
  if (!pending) {
    pending = assets.fetch(`https://tree-snapshot.invalid/${file}`).then(async (response) =>
      response.ok ? response.json() as Promise<SnapshotGraph> : null);
    graphCache.set(file, pending);
  }
  return pending;
}

function treeJson(data: unknown, d1Bypassed = true): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Wang-Data-Source': 'public-tree-snapshot',
      'X-Wang-D1': d1Bypassed ? 'BYPASS' : 'FALLBACK_AFTER_ERROR',
    },
  });
}
