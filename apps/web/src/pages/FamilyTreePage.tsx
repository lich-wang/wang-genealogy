import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Focus, LoaderCircle, Network } from 'lucide-react';
import type { DescentEdge, ParentEdge, RelativeNode, RelativesGraph, SpouseEdge } from '@wang/domain';
import { api } from '../api';
import { FamilyTreeDiagram } from '../components/FamilyTreeDiagram';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';
import { focusedKinshipIds, redundantDescent } from '../tree-layout';

/**
 * Family tree as a diagram: generations in rows, ancestors above the person,
 * descendants below, and every line labelled with the statement it rests on.
 *
 * Starts with a compact neighbourhood. “Expand all” loads the connected public
 * family, while selecting a person folds away side branches and keeps that
 * person's complete ancestor/descendant trunk.
 */
interface Graph {
  nodes: Map<string, RelativeNode>;
  parentEdges: Map<string, ParentEdge>;
  spouseEdges: Map<string, SpouseEdge>;
  descentEdges: Map<string, DescentEdge>;
  /** Persons whose relatives have been fetched, so we know what is still unknown. */
  expanded: Set<string>;
}

const emptyGraph = (): Graph => ({
  nodes: new Map(),
  parentEdges: new Map(),
  spouseEdges: new Map(),
  descentEdges: new Map(),
  expanded: new Set(),
});

function merge(graph: Graph, slice: RelativesGraph): Graph {
  const next: Graph = {
    nodes: new Map(graph.nodes),
    parentEdges: new Map(graph.parentEdges),
    spouseEdges: new Map(graph.spouseEdges),
    descentEdges: new Map(graph.descentEdges),
    expanded: new Set(graph.expanded),
  };
  for (const node of slice.nodes) next.nodes.set(node.id, node);
  for (const edge of slice.parent_edges) next.parentEdges.set(edge.claim_id, edge);
  for (const edge of slice.spouse_edges) next.spouseEdges.set(edge.claim_id, edge);
  for (const edge of slice.descent_edges ?? []) next.descentEdges.set(edge.claim_id, edge);
  if (slice.scope === 'all') {
    for (const node of slice.nodes) next.expanded.add(node.id);
  } else {
    next.expanded.add(slice.root_id);
  }
  return next;
}

type Selection =
  | { kind: 'person'; id: string }
  | { kind: 'edge'; claimId: string }
  | { kind: 'none' };

export function FamilyTreePage() {
  const { id = '' } = useParams();
  const { t } = useScript();
  const [graph, setGraph] = useState<Graph>(emptyGraph);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [loadingAll, setLoadingAll] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [truncated, setTruncated] = useState(false);
  const [selection, setSelection] = useState<Selection>({ kind: 'none' });

  useEffect(() => {
    let cancelled = false;
    setGraph(emptyGraph());
    setSelection({ kind: 'none' });
    setFocusId(null);
    setAllLoaded(false);
    setLoadingAll(false);
    setLoading(true);
    setError(null);
    api
      .getRelatives(id, 2, 2)
      .then((slice) => {
        if (cancelled) return;
        setGraph((current) => merge(current, slice));
        setTruncated(slice.truncated);
      })
      .catch((err) => !cancelled && setError(toMessage(err)))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [id]);

  /** Load the complete connected graph once; it then powers global and focused views. */
  const loadWholeTree = useCallback(async (personId?: string) => {
    if (loadingAll || allLoaded) return;
    setLoadingAll(true);
    setBusyId(personId ?? null);
    setError(null);
    try {
      const slice = await api.getAllRelatives(id);
      setGraph((current) => merge(current, slice));
      setAllLoaded(true);
      if (slice.truncated) setTruncated(true);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setLoadingAll(false);
      setBusyId(null);
    }
  }, [allLoaded, id, loadingAll]);

  // A line of descent whose generations are already drawn as parent links is
  // the same statement twice, and expanding the tree fills those gaps in one
  // by one — so it is dropped from the diagram, not just from the picture's
  // arithmetic.
  const descentEdges = useMemo(() => {
    const parentEdges = [...graph.parentEdges.values()];
    const all = [...graph.descentEdges.values()];
    const covered = redundantDescent(parentEdges, all);
    return all.filter((edge) => !covered.has(edge.claim_id));
  }, [graph]);

  const visibleIds = useMemo(
    () => focusId
      ? focusedKinshipIds(
          focusId,
          [...graph.parentEdges.values()],
          [...graph.spouseEdges.values()],
          [...graph.descentEdges.values()],
        )
      : new Set(graph.nodes.keys()),
    [focusId, graph],
  );
  const people = useMemo(
    () => new Map([...graph.nodes].filter(([personId]) => visibleIds.has(personId))),
    [graph.nodes, visibleIds],
  );
  const parentEdges = useMemo(
    () => [...graph.parentEdges.values()].filter(
      (edge) => visibleIds.has(edge.parent_id) && visibleIds.has(edge.child_id),
    ),
    [graph.parentEdges, visibleIds],
  );
  const spouseEdges = useMemo(
    () => [...graph.spouseEdges.values()].filter(
      (edge) => visibleIds.has(edge.a_id) && visibleIds.has(edge.b_id),
    ),
    [graph.spouseEdges, visibleIds],
  );
  const visibleDescentEdges = useMemo(
    () => descentEdges.filter(
      (edge) => visibleIds.has(edge.ancestor_id) && visibleIds.has(edge.descendant_id),
    ),
    [descentEdges, visibleIds],
  );

  const root = graph.nodes.get(id);

  if (loading) return <div className="page">{t('載入中…')}</div>;
  if (error && !root) return <div className="page error">{t('載入失敗')}：{t(error)}</div>;
  if (!root) return <div className="page">{t('未找到人物。')}</div>;

  const selectedEdge =
    selection.kind === 'edge'
      ? (graph.parentEdges.get(selection.claimId) ??
        graph.spouseEdges.get(selection.claimId) ??
        graph.descentEdges.get(selection.claimId))
      : undefined;
  const selectedPerson = selection.kind === 'person' ? graph.nodes.get(selection.id) : undefined;

  return (
    <div className="page tree-page">
      <header className="tree-head">
        <h1>
          <PersonName node={root} />
          {t(' 的家族树')}
        </h1>
        <p className="hint">
          {t('祖先在上、后代在下。点人物会收起旁系，只保留他的完整父辈与子辈主干；点连线可查看关系依据。')}
        </p>
        <div className="tree-toolbar" aria-label={t('家族树视图工具')}>
          {focusId ? (
            <button
              className="btn btn-secondary"
              type="button"
              disabled={loadingAll}
              onClick={() => {
                setFocusId(null);
                setSelection({ kind: 'none' });
                if (!allLoaded) void loadWholeTree();
              }}
            >
              <Network size={17} aria-hidden />
              {loadingAll ? t('正在展开全族…') : t('返回全局家族树')}
            </button>
          ) : (
            <button
              className="btn"
              type="button"
              disabled={loadingAll || allLoaded}
              onClick={() => void loadWholeTree()}
            >
              {loadingAll ? <LoaderCircle className="spin" size={17} aria-hidden /> : <Network size={17} aria-hidden />}
              {loadingAll ? t('正在展开全族…') : allLoaded ? t('已展开全部') : t('展开全部')}
            </button>
          )}
          {focusId ? (
            <span className="tree-focus-note">
              <Focus size={15} aria-hidden />
              {t('已聚焦')} <PersonName node={graph.nodes.get(focusId)!} />
              {graph.nodes.size > people.size ? ` · ${t('已收起')} ${graph.nodes.size - people.size} ${t('位旁系人物')}` : ''}
            </span>
          ) : null}
        </div>
        <p className="muted">
          {t('当前显示')} {people.size} {t('人')}、{parentEdges.length}{' '}
          {t('条亲子关系')}
          {visibleDescentEdges.length > 0
            ? `、${visibleDescentEdges.length} ${t('条跨代世系关系')}`
            : ''}
          {truncated ? ` · ${t('已达全局安全上限')}` : ''}
          {' · '}
          <Link to={`/persons/${encodeURIComponent(root.id)}`}>{t('返回人物页')}</Link>
        </p>
      </header>

      {error ? <p className="error">{t(error)}</p> : null}

      <FamilyTreeDiagram
        rootId={focusId ?? id}
        people={people}
        parentEdges={parentEdges}
        spouseEdges={spouseEdges}
        descentEdges={visibleDescentEdges}
        expanded={graph.expanded}
        busyId={busyId}
        fitAll={allLoaded && !focusId}
        selectedPersonId={selection.kind === 'person' ? selection.id : null}
        selectedClaimId={selection.kind === 'edge' ? selection.claimId : null}
        onPersonClick={(personId) => {
          setSelection({ kind: 'person', id: personId });
          setFocusId(personId);
          if (!allLoaded) void loadWholeTree(personId);
        }}
        onEdgeClick={(claimId) => setSelection({ kind: 'edge', claimId })}
      />

      {selectedEdge ? <EdgeDetail edge={selectedEdge} graph={graph} /> : null}
      {selectedPerson ? (
        <PersonDetail person={selectedPerson} expanded={graph.expanded.has(selectedPerson.id)} />
      ) : null}
    </div>
  );
}

function EdgeDetail({
  edge,
  graph,
}: {
  edge: ParentEdge | SpouseEdge | DescentEdge;
  graph: Graph;
}) {
  const { t } = useScript();
  const kind = 'parent_id' in edge ? 'parent' : 'ancestor_id' in edge ? 'descent' : 'spouse';
  const [aId, bId] =
    kind === 'parent'
      ? [(edge as ParentEdge).parent_id, (edge as ParentEdge).child_id]
      : kind === 'descent'
        ? [(edge as DescentEdge).ancestor_id, (edge as DescentEdge).descendant_id]
        : [(edge as SpouseEdge).a_id, (edge as SpouseEdge).b_id];
  const a = graph.nodes.get(aId);
  const b = graph.nodes.get(bId);
  const arrow = kind === 'parent' ? '→' : kind === 'descent' ? '⇢' : '⚭';
  const descentGenerations = kind === 'descent' ? (edge as DescentEdge).generations : null;
  const label = kind === 'parent'
    ? '亲子关系'
    : kind === 'descent'
      ? descentGenerations
        ? `世系关系（相隔 ${descentGenerations} 代）`
        : '世系关系（代数不详）'
      : '配偶关系';

  return (
    <section className="tree-detail">
      <h2>
        {a?.display_name ?? '?'} {arrow} {b?.display_name ?? '?'}
      </h2>
      <p className="muted">
        {t(label)}
        {edge.status !== 'accepted' ? ` · ${edge.status}` : ''}
      </p>
      {edge.citations.length === 0 ? (
        <p className="source-empty">{t('尚無來源')}</p>
      ) : (
        <ul className="tree-detail-sources">
          {edge.citations.map((citation, i) => (
            <li key={`${citation.source_title}-${i}`}>
              {citation.source_title}
              {citation.locator ? <span className="muted">（{citation.locator}）</span> : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function PersonDetail({ person, expanded }: { person: RelativeNode; expanded: boolean }) {
  const { t } = useScript();
  return (
    <section className="tree-detail">
      <h2>
        <PersonName node={person} />
        {lifespan(person) ? <span className="muted">（{lifespan(person)}）</span> : null}
      </h2>
      <p>
        <Link to={`/persons/${encodeURIComponent(person.id)}`}>{t('打开人物页')}</Link>
        {' · '}
        <Link to={`/persons/${encodeURIComponent(person.id)}/tree`}>{t('以此人为中心')}</Link>
        {expanded ? '' : ` · ${t('已请求展开其上下一代')}`}
      </p>
    </section>
  );
}

/** Convert stored names through the shared display-layer script setting. */
function PersonName({ node }: { node: RelativeNode }) {
  const { tData } = useScript();
  return <>{tData(node.display_name, null) || '未命名人物'}</>;
}

/** The panel has room for the full text; the boxes do not. */
function lifespan(node: RelativeNode): string | null {
  const full = [node.birth, node.death]
    .map((v) => (v && !/不详|不詳|未知|unknown/i.test(v) ? v : '？'))
    .join('–');
  return full === '？–？' ? null : full;
}
