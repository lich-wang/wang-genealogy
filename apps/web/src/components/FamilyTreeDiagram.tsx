import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type ReactFlowInstance,
} from '@xyflow/react';
import type { DescentEdge, ParentEdge, RelativeNode, SpouseEdge } from '@wang/domain';
import '@xyflow/react/dist/style.css';
import { useScript } from '../i18n';
import {
  NODE_HEIGHT,
  NODE_WIDTH,
  compactLifespan,
  evidenceLabel,
  layoutTree,
} from '../tree-layout';

interface PersonNodeData extends Record<string, unknown> {
  person: RelativeNode;
  isRoot: boolean;
  expanded: boolean;
  busy: boolean;
}

type PersonFlowNode = Node<PersonNodeData, 'person'>;

interface DiagramProps {
  rootId: string;
  people: Map<string, RelativeNode>;
  parentEdges: ParentEdge[];
  spouseEdges: SpouseEdge[];
  descentEdges: DescentEdge[];
  expanded: Set<string>;
  busyId: string | null;
  fitAll: boolean;
  selectedPersonId: string | null;
  selectedClaimId: string | null;
  onPersonClick: (personId: string) => void;
  onEdgeClick: (claimId: string) => void;
}

/**
 * React Flow owns the diagram surface, viewport, controls and edge rendering.
 * Genealogy-specific code only supplies positioned people and relationship
 * metadata.
 */
export function FamilyTreeDiagram({
  rootId,
  people,
  parentEdges,
  spouseEdges,
  descentEdges,
  expanded,
  busyId,
  fitAll,
  selectedPersonId,
  selectedClaimId,
  onPersonClick,
  onEdgeClick,
}: DiagramProps) {
  const flowRef = useRef<ReactFlowInstance<PersonFlowNode, Edge> | null>(null);
  const [flowReady, setFlowReady] = useState(false);

  const layout = useMemo(
    () => layoutTree({ nodes: people, parentEdges, spouseEdges, descentEdges }, rootId),
    [people, parentEdges, spouseEdges, descentEdges, rootId],
  );

  const nodes = useMemo<PersonFlowNode[]>(
    () =>
      [...layout.nodes.values()].map((placed) => ({
        id: placed.node.id,
        type: 'person',
        position: { x: placed.x, y: placed.y },
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        draggable: false,
        selectable: true,
        selected: selectedPersonId === placed.node.id,
        data: {
          person: placed.node,
          isRoot: placed.node.id === rootId,
          expanded: expanded.has(placed.node.id),
          busy: busyId === placed.node.id,
        },
      })),
    [layout, rootId, expanded, busyId, selectedPersonId],
  );

  const edges = useMemo<Edge[]>(
    () => [
      ...parentEdges.map((edge) => relationshipEdge({
        edge,
        source: edge.parent_id,
        target: edge.child_id,
        kind: 'parent',
        selected: selectedClaimId === edge.claim_id,
      })),
      ...descentEdges.map((edge) => relationshipEdge({
        edge,
        source: edge.ancestor_id,
        target: edge.descendant_id,
        kind: 'descent',
        selected: selectedClaimId === edge.claim_id,
      })),
      ...spouseEdges.flatMap((edge) => {
        const a = layout.nodes.get(edge.a_id);
        const b = layout.nodes.get(edge.b_id);
        if (!a || !b) return [];
        const [source, target] = a.x <= b.x ? [edge.a_id, edge.b_id] : [edge.b_id, edge.a_id];
        return [relationshipEdge({
          edge,
          source,
          target,
          kind: 'spouse',
          selected: selectedClaimId === edge.claim_id,
        })];
      }),
    ],
    [parentEdges, descentEdges, spouseEdges, layout, selectedClaimId],
  );

  const centerPerson = useCallback((personId: string, duration: number, zoomIn = false) => {
    const flow = flowRef.current;
    const placed = layout.nodes.get(personId);
    if (!flow || !placed) return;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    void flow.setCenter(placed.x + NODE_WIDTH / 2, placed.y + NODE_HEIGHT / 2, {
      zoom: zoomIn ? Math.max(flow.getZoom(), 0.68) : flow.getZoom(),
      duration: reduceMotion ? 0 : duration,
    });
  }, [layout]);

  const focusedPersonId = selectedPersonId ?? rootId;
  useEffect(() => {
    if (!flowReady) return;
    if (fitAll) {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      void flowRef.current?.fitView({ padding: 0.12, duration: reduceMotion ? 0 : 320, maxZoom: 0.8 });
      return;
    }
    centerPerson(focusedPersonId, selectedPersonId ? 280 : 0, Boolean(selectedPersonId));
  }, [flowReady, centerPerson, focusedPersonId, selectedPersonId, fitAll]);

  return (
    <div className="tree-canvas" role="region" aria-label="家族树图">
      <ReactFlow<PersonFlowNode, Edge>
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        minZoom={0.01}
        maxZoom={1.8}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable
        selectNodesOnDrag={false}
        onlyRenderVisibleElements
        onInit={(instance) => {
          flowRef.current = instance;
          setFlowReady(true);
        }}
        onNodeClick={(_, node) => {
          onPersonClick(node.id);
        }}
        onEdgeClick={(_, edge) => onEdgeClick(edge.id)}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls showInteractive={false} fitViewOptions={{ padding: 0.2, duration: 280 }} />
      </ReactFlow>
    </div>
  );
}

const nodeTypes = { person: PersonNode };

function PersonNode({ data, selected }: NodeProps<PersonFlowNode>) {
  const { tData } = useScript();
  const { person, isRoot, expanded, busy } = data;
  const name = tData(person.display_name, null) || '未命名人物';
  const years = compactLifespan(person);

  return (
    <div
      className={[
        'tree-box',
        isRoot ? 'tree-box-root' : '',
        selected ? 'tree-box-selected' : '',
        busy ? 'tree-box-busy' : '',
      ].filter(Boolean).join(' ')}
      title={`${name} · ${expanded ? '点击居中' : '点击居中并展开上下一代'}`}
    >
      <Handle id="top" type="target" position={Position.Top} />
      <Handle id="bottom" type="source" position={Position.Bottom} />
      <Handle id="left" type="target" position={Position.Left} />
      <Handle id="right" type="source" position={Position.Right} />
      <span className="tree-box-name">{truncate(name, 7)}</span>
      {years ? <span className="tree-box-years">{years}</span> : null}
      {!expanded ? <span className="tree-box-more">＋</span> : null}
    </div>
  );
}

type RelationshipKind = 'parent' | 'descent' | 'spouse';

function relationshipEdge({
  edge,
  source,
  target,
  kind,
  selected,
}: {
  edge: ParentEdge | DescentEdge | SpouseEdge;
  source: string;
  target: string;
  kind: RelationshipKind;
  selected: boolean;
}): Edge {
  const disputed = edge.status === 'disputed';
  const evidence = evidenceLabel(edge.citations);
  const label =
    kind === 'descent' && 'generations' in edge && edge.generations
      ? `${edge.generations}代 · ${evidence}`
      : evidence;
  return {
    id: edge.claim_id,
    source,
    target,
    sourceHandle: kind === 'spouse' ? 'right' : 'bottom',
    targetHandle: kind === 'spouse' ? 'left' : 'top',
    type: kind === 'spouse' ? 'straight' : 'smoothstep',
    label: kind === 'spouse' ? `⚭ ${label}` : label,
    ariaLabel: edge.citations.map((citation) => citation.source_title).join('；') || '尚无来源',
    interactionWidth: 16,
    selectable: true,
    selected,
    className: [
      'tree-edge',
      `tree-edge-${kind}`,
      disputed ? 'tree-edge-disputed' : '',
    ].filter(Boolean).join(' '),
  };
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}
