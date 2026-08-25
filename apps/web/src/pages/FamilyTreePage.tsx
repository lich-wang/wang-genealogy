import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { DescentEdge, ParentEdge, RelativeNode, RelativesGraph, SpouseEdge } from '@wang/domain';
import { api } from '../api';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';
import {
  GAP_Y,
  NODE_HEIGHT,
  NODE_WIDTH,
  compactLifespan,
  evidenceLabel,
  evidenceTooltip,
  layoutTree,
} from '../tree-layout';

/**
 * Family tree as a diagram: generations in rows, ancestors above the person,
 * descendants below, and every line labelled with the statement it rests on.
 *
 * The graph is assembled from repeated bounded fetches rather than one big
 * query — this database has a 700-person connected component, so a whole-family
 * render would be neither readable nor fast. Clicking a person walks one more
 * generation out from them.
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
  next.expanded.add(slice.root_id);
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
  const [error, setError] = useState<string | null>(null);
  const [truncated, setTruncated] = useState(false);
  const [selection, setSelection] = useState<Selection>({ kind: 'none' });
  const [zoom, setZoom] = useState(1);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    setGraph(emptyGraph());
    setSelection({ kind: 'none' });
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

  /** Walk one more generation out from this person, both directions. */
  const expand = useCallback(async (personId: string) => {
    setBusyId(personId);
    setError(null);
    try {
      const slice = await api.getRelatives(personId, 1, 1);
      setGraph((current) => merge(current, slice));
      if (slice.truncated) setTruncated(true);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusyId(null);
    }
  }, []);

  const layout = useMemo(
    () =>
      layoutTree(
        {
          nodes: graph.nodes,
          parentEdges: [...graph.parentEdges.values()],
          spouseEdges: [...graph.spouseEdges.values()],
          descentEdges: [...graph.descentEdges.values()],
        },
        id,
      ),
    [graph, id],
  );

  const root = graph.nodes.get(id);

  // A wide family runs past the viewport; start the view on the person the tree
  // is about rather than at its left edge.
  useEffect(() => {
    const canvas = canvasRef.current;
    const placed = layout.nodes.get(id);
    if (!canvas || !placed) return;
    canvas.scrollLeft = Math.max(0, (placed.x + NODE_WIDTH / 2) * zoom - canvas.clientWidth / 2);
  }, [layout, id, zoom]);

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
          {t('祖先在上、后代在下。点人物方框可再展开他的上下一代；点连线可查看这条关系的依据。')}
        </p>
        <p className="muted">
          {t('当前显示')} {graph.nodes.size} {t('人')}、{graph.parentEdges.size}{' '}
          {t('条亲子关系')}
          {truncated ? ` · ${t('已达单次返回上限，请从具体人物继续展开')}` : ''}
          {' · '}
          <Link to={`/persons/${encodeURIComponent(root.id)}`}>{t('返回人物页')}</Link>
          {' · '}
          <button type="button" className="btn btn-inline" onClick={() => setZoom((z) => Math.max(0.5, z - 0.15))}>
            −
          </button>
          <button type="button" className="btn btn-inline" onClick={() => setZoom(1)}>
            {Math.round(zoom * 100)}%
          </button>
          <button type="button" className="btn btn-inline" onClick={() => setZoom((z) => Math.min(1.8, z + 0.15))}>
            +
          </button>
        </p>
      </header>

      {error ? <p className="error">{t(error)}</p> : null}

      <div className="tree-canvas" ref={canvasRef}>
        <svg
          width={layout.width * zoom}
          height={layout.height * zoom}
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          role="img"
          aria-label={t('家族树图')}
        >
          {/* Lines first, so the boxes sit on top of them. */}
          {[...graph.parentEdges.values()].map((edge) => (
            <ParentLine
              key={edge.claim_id}
              edge={edge}
              layout={layout}
              selected={selection.kind === 'edge' && selection.claimId === edge.claim_id}
              onSelect={() => setSelection({ kind: 'edge', claimId: edge.claim_id })}
            />
          ))}
          {[...graph.descentEdges.values()].map((edge) => (
            <DescentLine
              key={edge.claim_id}
              edge={edge}
              layout={layout}
              selected={selection.kind === 'edge' && selection.claimId === edge.claim_id}
              onSelect={() => setSelection({ kind: 'edge', claimId: edge.claim_id })}
            />
          ))}
          {[...graph.spouseEdges.values()].map((edge) => (
            <SpouseLine
              key={edge.claim_id}
              edge={edge}
              layout={layout}
              selected={selection.kind === 'edge' && selection.claimId === edge.claim_id}
              onSelect={() => setSelection({ kind: 'edge', claimId: edge.claim_id })}
            />
          ))}
          {[...layout.nodes.values()].map((placed) => (
            <PersonBox
              key={placed.node.id}
              placed={placed}
              isRoot={placed.node.id === id}
              selected={selection.kind === 'person' && selection.id === placed.node.id}
              expanded={graph.expanded.has(placed.node.id)}
              busy={busyId === placed.node.id}
              onClick={() => {
                setSelection({ kind: 'person', id: placed.node.id });
                if (!graph.expanded.has(placed.node.id)) void expand(placed.node.id);
              }}
            />
          ))}
        </svg>
      </div>

      {selectedEdge ? <EdgeDetail edge={selectedEdge} graph={graph} /> : null}
      {selectedPerson ? (
        <PersonDetail person={selectedPerson} expanded={graph.expanded.has(selectedPerson.id)} />
      ) : null}
    </div>
  );
}

type LayoutResult = ReturnType<typeof layoutTree>;

/** Elbow from the parent's lower edge to the child's upper edge. */
function ParentLine({
  edge,
  layout,
  selected,
  onSelect,
}: {
  edge: ParentEdge;
  layout: LayoutResult;
  selected: boolean;
  onSelect: () => void;
}) {
  const parent = layout.nodes.get(edge.parent_id);
  const child = layout.nodes.get(edge.child_id);
  if (!parent || !child) return null;

  const px = parent.x + NODE_WIDTH / 2;
  const py = parent.y + NODE_HEIGHT;
  const cx = child.x + NODE_WIDTH / 2;
  const cy = child.y;
  const midY = py + (cy - py) / 2;
  const path = `M ${px} ${py} V ${midY} H ${cx} V ${cy}`;

  return (
    <g
      className={[
        'tree-edge',
        selected ? 'tree-edge-selected' : '',
        edge.status === 'disputed' ? 'tree-edge-disputed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onSelect}
    >
      <title>{evidenceTooltip(edge.citations)}</title>
      {/* A wide invisible stroke makes a 1px line clickable. */}
      <path d={path} className="tree-edge-hit" />
      <path d={path} className="tree-edge-line" />
      <text x={(px + cx) / 2} y={midY - 4} className="tree-edge-label" textAnchor="middle">
        {evidenceLabel(edge.citations)}
      </text>
    </g>
  );
}

/**
 * Descent across generations nobody named: drawn as a dashed line, and drawn
 * straight, so it reads as a link that skips whatever lies between rather than
 * as a parent standing directly above a child. Where the intervening
 * generations *are* known they are already on the diagram as ordinary parent
 * links, and this line simply spans them.
 */
function DescentLine({
  edge,
  layout,
  selected,
  onSelect,
}: {
  edge: DescentEdge;
  layout: LayoutResult;
  selected: boolean;
  onSelect: () => void;
}) {
  const ancestor = layout.nodes.get(edge.ancestor_id);
  const descendant = layout.nodes.get(edge.descendant_id);
  if (!ancestor || !descendant) return null;

  const ax = ancestor.x + NODE_WIDTH / 2;
  const ay = ancestor.y + NODE_HEIGHT;
  const dx = descendant.x + NODE_WIDTH / 2;
  const dy = descendant.y;
  const path = `M ${ax} ${ay} L ${dx} ${dy}`;

  return (
    <g
      className={[
        'tree-edge',
        'tree-edge-descent',
        selected ? 'tree-edge-selected' : '',
        edge.status === 'disputed' ? 'tree-edge-disputed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onSelect}
    >
      <title>{evidenceTooltip(edge.citations)}</title>
      <path d={path} className="tree-edge-hit" />
      <path d={path} className="tree-edge-line" />
      <text
        x={(ax + dx) / 2}
        y={(ay + dy) / 2 - 4}
        className="tree-edge-label"
        textAnchor="middle"
      >
        {evidenceLabel(edge.citations)}
      </text>
    </g>
  );
}

/** A horizontal tie between two boxes on the same row. */
function SpouseLine({
  edge,
  layout,
  selected,
  onSelect,
}: {
  edge: SpouseEdge;
  layout: LayoutResult;
  selected: boolean;
  onSelect: () => void;
}) {
  const a = layout.nodes.get(edge.a_id);
  const b = layout.nodes.get(edge.b_id);
  if (!a || !b) return null;

  const [left, right] = a.x <= b.x ? [a, b] : [b, a];
  const y = left.y + NODE_HEIGHT / 2;
  const x1 = left.x + NODE_WIDTH;
  const x2 = right.x;
  // Same row: a straight tie. Different rows (a source that disagrees about
  // generations): drop below both boxes so the line stays visible.
  const sameRow = left.y === right.y;
  const path = sameRow
    ? `M ${x1} ${y} H ${x2}`
    : `M ${left.x + NODE_WIDTH / 2} ${left.y + NODE_HEIGHT} V ${Math.max(left.y, right.y) + NODE_HEIGHT + GAP_Y / 3} H ${right.x + NODE_WIDTH / 2} V ${right.y + NODE_HEIGHT}`;

  return (
    <g
      className={[
        'tree-edge tree-edge-spouse',
        selected ? 'tree-edge-selected' : '',
        edge.status === 'disputed' ? 'tree-edge-disputed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onSelect}
    >
      <title>{evidenceTooltip(edge.citations)}</title>
      <path d={path} className="tree-edge-hit" />
      <path d={path} className="tree-edge-line" />
      {sameRow ? (
        <text x={(x1 + x2) / 2} y={y - 5} className="tree-edge-label" textAnchor="middle">
          ⚭ {evidenceLabel(edge.citations)}
        </text>
      ) : null}
    </g>
  );
}

function PersonBox({
  placed,
  isRoot,
  selected,
  expanded,
  busy,
  onClick,
}: {
  placed: LayoutResult['nodes'] extends Map<string, infer T> ? T : never;
  isRoot: boolean;
  selected: boolean;
  expanded: boolean;
  busy: boolean;
  onClick: () => void;
}) {
  const { node, x, y } = placed;
  const years = compactLifespan(node);

  return (
    <g
      className={[
        'tree-box',
        isRoot ? 'tree-box-root' : '',
        selected ? 'tree-box-selected' : '',
        busy ? 'tree-box-busy' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      transform={`translate(${x} ${y})`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <title>{expanded ? node.display_name ?? node.id : `${node.display_name ?? node.id} · 点击展开上下一代`}</title>
      <rect width={NODE_WIDTH} height={NODE_HEIGHT} rx={6} />
      <text x={NODE_WIDTH / 2} y={years ? 20 : 27} className="tree-box-name" textAnchor="middle">
        {truncate(node.display_name ?? node.id, 7)}
      </text>
      {years ? (
        <text x={NODE_WIDTH / 2} y={35} className="tree-box-years" textAnchor="middle">
          {years}
        </text>
      ) : null}
      {!expanded ? (
        <text x={NODE_WIDTH - 8} y={NODE_HEIGHT - 6} className="tree-box-more" textAnchor="end">
          ＋
        </text>
      ) : null}
    </g>
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
  const label =
    kind === 'parent' ? '亲子关系' : kind === 'descent' ? '世系关系（代数不明）' : '配偶关系';

  return (
    <section className="tree-detail">
      <h2>
        {a?.display_name ?? '?'} {arrow} {b?.display_name ?? '?'}
      </h2>
      <p className="muted">
        {t(label)} · {t('主張')} {edge.claim_id}
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

/** SVG has no ZhText: convert through the same hook, then render plain text. */
function PersonName({ node }: { node: RelativeNode }) {
  const { tData } = useScript();
  return <>{tData(node.display_name, null) || node.id}</>;
}

/** The panel has room for the full text; the boxes do not. */
function lifespan(node: RelativeNode): string | null {
  const full = [node.birth, node.death]
    .map((v) => (v && !/不详|不詳|未知|unknown/i.test(v) ? v : '？'))
    .join('–');
  return full === '？–？' ? null : full;
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}
