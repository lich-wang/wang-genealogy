/**
 * Find the kinship loops a set of descent edges contains.
 *
 * The API rejects an edge that *closes* a loop, which is not the same thing as
 * keeping loops out of an import. A source like 《新唐書·宰相世系表》 writes every
 * name as a single character — 錯生賁，賁生渝，渝生息…頤生翦 — and the two 王賁
 * seven generations apart come back matched to one record. The importer then
 * submits the chain edge by edge, each of them a legal link between two real
 * people, until the last one is refused. What is left behind is a chain folded
 * back on itself plus a rejection message naming the wrong culprit.
 *
 * So look for the loop before writing anything, over the graph the import would
 * produce: existing descent edges plus planned ones. Every node inside a
 * strongly connected component is returned mapped to that component, so the
 * caller can skip the planned edges within it and print the whole thing —
 * which of those names is really two people is a judgement for a human.
 */
export function findLoops(edges) {
  const out = new Map();
  const arc = (a, b) => {
    if (!out.has(a)) out.set(a, new Set());
    if (!out.has(b)) out.set(b, new Set());
    out.get(a).add(b);
  };
  for (const [a, b] of edges) arc(a, b);

  // Tarjan, iterative: the 琅邪 trunk is several hundred people deep and a
  // recursive walk overflows the stack on it.
  const index = new Map();
  const low = new Map();
  const onStack = new Set();
  const stack = [];
  const loops = new Map();
  let counter = 0;

  const open = (node) => {
    index.set(node, counter);
    low.set(node, counter);
    counter += 1;
    stack.push(node);
    onStack.add(node);
  };

  for (const root of out.keys()) {
    if (index.has(root)) continue;
    open(root);
    const work = [[root, out.get(root)[Symbol.iterator]()]];
    while (work.length > 0) {
      const frame = work[work.length - 1];
      const [node, iter] = frame;
      const next = iter.next();
      if (!next.done) {
        const child = next.value;
        if (!index.has(child)) {
          open(child);
          work.push([child, out.get(child)[Symbol.iterator]()]);
        } else if (onStack.has(child)) {
          low.set(node, Math.min(low.get(node), index.get(child)));
        }
        continue;
      }
      work.pop();
      if (work.length > 0) {
        const parent = work[work.length - 1][0];
        low.set(parent, Math.min(low.get(parent), low.get(node)));
      }
      if (low.get(node) !== index.get(node)) continue;
      const members = [];
      let popped;
      do {
        popped = stack.pop();
        onStack.delete(popped);
        members.push(popped);
      } while (popped !== node);
      // A component of one is just a person. A self-loop is a person recorded as
      // their own forebear, which the API refuses outright but a plan can still
      // contain.
      if (members.length > 1 || out.get(node).has(node)) {
        for (const m of members) loops.set(m, members);
      }
    }
  }
  return loops;
}
