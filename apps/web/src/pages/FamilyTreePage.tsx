import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { RelativeNode, RelativesGraph } from '@wang/domain';
import { api } from '../api';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';
import { ZhText } from '../components/ZhText';

/**
 * Family tree around one person: ancestors above, descendants below, each
 * branch expandable a generation at a time.
 *
 * The tree is assembled client-side from repeated bounded fetches rather than
 * one big query — this database has a 700-person connected component, and
 * drawing all of it at once would be neither readable nor fast. Expanding is
 * therefore an explicit act on a specific person.
 */
interface Graph {
  nodes: Map<string, RelativeNode>;
  /** child id -> parent ids, and parent id -> child ids. */
  parentsOf: Map<string, Set<string>>;
  childrenOf: Map<string, Set<string>>;
  spousesOf: Map<string, Set<string>>;
  /** Persons whose relatives have been fetched, so we know what is still unknown. */
  loadedUp: Set<string>;
  loadedDown: Set<string>;
}

const emptyGraph = (): Graph => ({
  nodes: new Map(),
  parentsOf: new Map(),
  childrenOf: new Map(),
  spousesOf: new Map(),
  loadedUp: new Set(),
  loadedDown: new Set(),
});

function addEdge(map: Map<string, Set<string>>, from: string, to: string) {
  if (!map.has(from)) map.set(from, new Set());
  map.get(from)!.add(to);
}

/**
 * Which nodes in a slice had their own relatives fetched. The server walks
 * `depth` levels from the root, querying each level except the last, so every
 * node closer than `depth` is fully known and must not offer an expand button.
 */
function queriedWithin(slice: RelativesGraph, depth: number, direction: 'up' | 'down'): string[] {
  if (depth <= 0) return [];
  const step = new Map<string, string[]>();
  for (const edge of slice.parent_edges) {
    const [from, to] = direction === 'up' ? [edge.child_id, edge.parent_id] : [edge.parent_id, edge.child_id];
    step.set(from, [...(step.get(from) ?? []), to]);
  }
  const queried: string[] = [];
  let frontier = [slice.root_id];
  const seen = new Set(frontier);
  for (let level = 0; level < depth && frontier.length > 0; level += 1) {
    queried.push(...frontier);
    const next: string[] = [];
    for (const id of frontier) {
      for (const other of step.get(id) ?? []) {
        if (seen.has(other)) continue;
        seen.add(other);
        next.push(other);
      }
    }
    frontier = next;
  }
  return queried;
}

/** Fold a fetched slice into the accumulated graph (pure: returns a new object). */
function merge(graph: Graph, slice: RelativesGraph, direction: 'both' | 'up' | 'down'): Graph {
  const next: Graph = {
    nodes: new Map(graph.nodes),
    parentsOf: new Map([...graph.parentsOf].map(([k, v]) => [k, new Set(v)])),
    childrenOf: new Map([...graph.childrenOf].map(([k, v]) => [k, new Set(v)])),
    spousesOf: new Map([...graph.spousesOf].map(([k, v]) => [k, new Set(v)])),
    loadedUp: new Set(graph.loadedUp),
    loadedDown: new Set(graph.loadedDown),
  };
  for (const node of slice.nodes) next.nodes.set(node.id, node);
  for (const edge of slice.parent_edges) {
    addEdge(next.parentsOf, edge.child_id, edge.parent_id);
    addEdge(next.childrenOf, edge.parent_id, edge.child_id);
  }
  for (const edge of slice.spouse_edges) {
    addEdge(next.spousesOf, edge.a_id, edge.b_id);
    addEdge(next.spousesOf, edge.b_id, edge.a_id);
  }
  for (const id of queriedWithin(slice, slice.up, 'up')) next.loadedUp.add(id);
  for (const id of queriedWithin(slice, slice.down, 'down')) next.loadedDown.add(id);
  if (direction !== 'down') next.loadedUp.add(slice.root_id);
  if (direction !== 'up') next.loadedDown.add(slice.root_id);
  return next;
}

export function FamilyTreePage() {
  const { id = '' } = useParams();
  const { t } = useScript();
  const [graph, setGraph] = useState<Graph>(emptyGraph);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setGraph(emptyGraph());
    setLoading(true);
    setError(null);
    api
      .getRelatives(id, 2, 2)
      .then((slice) => {
        if (cancelled) return;
        setGraph((current) => merge(current, slice, 'both'));
        setTruncated(slice.truncated);
      })
      .catch((err) => !cancelled && setError(toMessage(err)))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [id]);

  const expand = useCallback(async (personId: string, direction: 'up' | 'down') => {
    setBusyId(personId);
    setError(null);
    try {
      const slice = await api.getRelatives(
        personId,
        direction === 'up' ? 2 : 0,
        direction === 'down' ? 2 : 0,
      );
      setGraph((current) => merge(current, slice, direction));
      if (slice.truncated) setTruncated(true);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusyId(null);
    }
  }, []);

  const root = graph.nodes.get(id);
  const stats = useMemo(() => {
    let edges = 0;
    for (const set of graph.parentsOf.values()) edges += set.size;
    return { people: graph.nodes.size, edges };
  }, [graph]);

  if (loading) return <div className="page">{t('載入中…')}</div>;
  if (error && !root) return <div className="page error">{t('載入失敗')}：{t(error)}</div>;
  if (!root) return <div className="page">{t('未找到人物。')}</div>;

  return (
    <div className="page tree-page">
      <header className="tree-head">
        <h1>
          <ZhText text={root.display_name} fallback={root.id} />
          {t(' 的家族树')}
        </h1>
        <p className="hint">
          {t('祖先在上，后代在下。点「展开」按需再向外一代——本库最大的家族片段有数百人，一次画完既慢又读不懂。')}
        </p>
        <p className="muted">
          {t('当前显示')} {stats.people} {t('人')}、{stats.edges} {t('条亲子关系')}
          {truncated ? ` · ${t('已达单次返回上限，请从具体人物继续展开')}` : ''}
          {' · '}
          <Link to={`/persons/${encodeURIComponent(root.id)}`}>{t('返回人物页')}</Link>
        </p>
      </header>

      {error ? <p className="error">{t(error)}</p> : null}

      <section className="tree-section">
        <h2>{t('祖先')}</h2>
        <Branch
          graph={graph}
          personId={id}
          direction="up"
          trail={[id]}
          busyId={busyId}
          onExpand={expand}
        />
      </section>

      <div className="tree-root-row">
        <PersonChip graph={graph} node={root} highlight />
      </div>

      <section className="tree-section">
        <h2>{t('后代')}</h2>
        <Branch
          graph={graph}
          personId={id}
          direction="down"
          trail={[id]}
          busyId={busyId}
          onExpand={expand}
        />
      </section>
    </div>
  );
}

interface BranchProps {
  graph: Graph;
  personId: string;
  direction: 'up' | 'down';
  /** Ids on the path to here, so a kinship loop cannot recurse forever. */
  trail: string[];
  busyId: string | null;
  onExpand: (id: string, direction: 'up' | 'down') => void;
}

function Branch({ graph, personId, direction, trail, busyId, onExpand }: BranchProps) {
  const { t } = useScript();
  const relatives = [
    ...((direction === 'up' ? graph.parentsOf.get(personId) : graph.childrenOf.get(personId)) ?? []),
  ].filter((relativeId) => !trail.includes(relativeId));

  const loaded = direction === 'up' ? graph.loadedUp.has(personId) : graph.loadedDown.has(personId);

  return (
    <ul className={`tree-branch tree-branch-${direction}`}>
      {relatives.map((relativeId) => {
        const node = graph.nodes.get(relativeId);
        if (!node) return null;
        return (
          <li key={relativeId} className="tree-node">
            <PersonChip graph={graph} node={node} />
            <Branch
              graph={graph}
              personId={relativeId}
              direction={direction}
              trail={[...trail, relativeId]}
              busyId={busyId}
              onExpand={onExpand}
            />
          </li>
        );
      })}
      {!loaded ? (
        <li className="tree-more">
          <button
            type="button"
            className="btn btn-inline"
            disabled={busyId === personId}
            onClick={() => onExpand(personId, direction)}
          >
            {busyId === personId
              ? t('載入中…')
              : direction === 'up'
                ? t('展开上一代')
                : t('展开下一代')}
          </button>
        </li>
      ) : relatives.length === 0 ? (
        <li className="tree-more muted">{direction === 'up' ? t('无记录的父母') : t('无记录的子女')}</li>
      ) : null}
    </ul>
  );
}

function PersonChip({
  graph,
  node,
  highlight = false,
}: {
  graph: Graph;
  node: RelativeNode;
  highlight?: boolean;
}) {
  const { t } = useScript();
  const spouses = [...(graph.spousesOf.get(node.id) ?? [])]
    .map((id) => graph.nodes.get(id))
    .filter((n): n is RelativeNode => Boolean(n));

  return (
    <span className={highlight ? 'tree-person tree-person-root' : 'tree-person'}>
      <Link to={`/persons/${encodeURIComponent(node.id)}`}>
        <ZhText text={node.display_name} fallback={node.id} />
      </Link>
      <Lifespan node={node} />
      {spouses.length > 0 ? (
        <span className="tree-spouses">
          {' ⚭ '}
          {spouses.map((spouse, i) => (
            <span key={spouse.id}>
              {i > 0 ? '、' : ''}
              <Link to={`/persons/${encodeURIComponent(spouse.id)}`}>
                <ZhText text={spouse.display_name} fallback={spouse.id} />
              </Link>
            </span>
          ))}
        </span>
      ) : null}
      <Link className="tree-recentre" to={`/persons/${encodeURIComponent(node.id)}/tree`}>
        {t('以此人为中心')}
      </Link>
    </span>
  );
}

/** Some sources record "不详" as the value; that is an absence, not a year. */
const known = (value: string | null) => (value && !/不详|不詳|未知|unknown/i.test(value) ? value : null);

function Lifespan({ node }: { node: RelativeNode }) {
  const birth = known(node.birth);
  const death = known(node.death);
  if (!birth && !death) return null;
  return (
    <span className="tree-years">
      （{birth ?? '？'}–{death ?? '？'}）
    </span>
  );
}
