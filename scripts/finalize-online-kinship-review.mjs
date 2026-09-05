#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const luna = JSON.parse(readFileSync('scripts/luna-kinship-round3-decisions-2026-09.json', 'utf8'));
const online = JSON.parse(readFileSync('scripts/luna-kinship-round3-online-evidence-2026-09.json', 'utf8'));
const overrides = JSON.parse(readFileSync('scripts/kinship-round3-online-resolution-overrides-2026-09.json', 'utf8'));
const original = JSON.parse(readFileSync('scripts/kinship-roster-followup-2026-09-round3.json', 'utf8'));
const overrideById = new Map(overrides.overrides.map((item) => [item.id, item]));
const onlineById = new Map(online.reviews.map((item) => [item.id, item]));
const newlyAccepted = [];
const newlyRejected = [];
const repairs = [];
for (const item of luna.manual_review) {
  const override = overrideById.get(item.id);
  const onlineItem = onlineById.get(item.id);
  const outcome = override?.outcome ?? (onlineItem?.recommendation === 'accepted' ? 'accepted' : null);
  const resolved = {
    ...item,
    reason: override?.reason ?? onlineItem?.reason ?? item.reason,
    confidence: override?.confidence ?? 'medium',
    online_sources: override?.sources ?? [online.sources.wikidata, online.sources.cbdb],
  };
  if (outcome === 'accepted') newlyAccepted.push(resolved);
  else if (outcome === 'rejected') newlyRejected.push(resolved);
  else if (outcome === 'repair') repairs.push(resolved);
  else throw new Error(`unresolved manual decision: ${item.id}`);
}

const accepted = [...luna.accepted, ...newlyAccepted];
const rejected = [...luna.rejected, ...newlyRejected];
const acceptedIds = new Set(accepted.map((item) => item.id));
const edgeId = (edge) => edge.kind === 'spouse'
  ? `spouse:${[edge.a_key, edge.b_key].sort().join('--')}`
  : edge.kind === 'adoptive_parent'
    ? `adoptive_parent:${edge.parent_key}->${edge.child_key}`
    : `parent:${edge.parent_key}->${edge.child_key}`;
const edges = original.edges.filter((edge) => acceptedIds.has(edgeId(edge)));
if (edges.length !== accepted.length) throw new Error(`accepted edge mismatch: ${edges.length}/${accepted.length}`);
const requiredKeys = new Set(edges.flatMap((edge) => edge.kind === 'spouse'
  ? [edge.a_key, edge.b_key]
  : [edge.parent_key, edge.child_key]));
const persons = original.persons.filter((person) => requiredKeys.has(person.key));
const sourceKeys = new Set([
  ...persons.flatMap((person) => person.claims.flatMap((claim) => claim.source_keys ?? [])),
  ...edges.flatMap((edge) => edge.citations.map((citation) => citation.source_key)),
]);
const sources = original.sources.filter((source) => sourceKeys.has(source.key));

writeFileSync('scripts/kinship-round3-final-decisions-2026-09.json', JSON.stringify({
  schema_version: 1,
  reviewed_at: new Date().toISOString(),
  reviewers: ['Luna sub-agent', 'online evidence review'],
  source_plan: 'scripts/kinship-roster-followup-2026-09-round3.json',
  counts: { accepted: accepted.length, rejected: rejected.length, repairs: repairs.length, manual_review: 0 },
  accepted, rejected, repairs, manual_review: [],
}, null, 2) + '\n');
writeFileSync('scripts/kinship-round3-final-approved-plan-2026-09.json', JSON.stringify({
  ...original,
  persons,
  edges,
  sources,
  review: {
    reviewers: ['Luna sub-agent', 'online evidence review'],
    accepted: accepted.length,
    rejected: rejected.length,
    repairs: repairs.length,
    manual_review: 0,
    exclusion_rule: 'Only accepted edges are present; rejected and repair-required edges are excluded.',
  },
}, null, 2) + '\n');
console.log(JSON.stringify({ accepted: accepted.length, rejected: rejected.length, repairs: repairs.length, persons: persons.length, edges: edges.length, sources: sources.length }));
