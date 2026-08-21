import type {
  Claim,
  ClaimWithSources,
  Confidence,
  PersonSummary,
  PersonSummaryLite,
  SummaryField,
} from '@wang/domain';
import { mapClaim, mapClaimSource, mapPerson, mapSource } from './db.ts';

const CONFIDENCE_RANK: Record<Confidence, number> = { high: 3, medium: 2, low: 1, unknown: 0 };

/** All person ids that have been merged into `personId` (one level; folded claims). */
export async function mergedInIds(db: D1Database, personId: string): Promise<string[]> {
  const res = await db
    .prepare("SELECT id FROM person WHERE merged_into_person_id = ? AND status = 'merged'")
    .bind(personId)
    .all<{ id: string }>();
  return (res.results ?? []).map((r) => r.id);
}

/** Load claim_source rows (with resolved sources) for a set of claim ids. */
async function loadSourcesFor(
  db: D1Database,
  claimIds: string[],
): Promise<Map<string, ClaimWithSources['sources']>> {
  const byClaim = new Map<string, ClaimWithSources['sources']>();
  if (claimIds.length === 0) return byClaim;
  const placeholders = claimIds.map(() => '?').join(',');
  const res = await db
    .prepare(
      `SELECT cs.*, s.id AS s_id, s.source_type AS s_source_type, s.title AS s_title,
              s.creator AS s_creator, s.publisher AS s_publisher, s.published_at_text AS s_published_at_text,
              s.canonical_url AS s_canonical_url, s.external_identifier AS s_external_identifier,
              s.license_code AS s_license_code, s.accessed_at AS s_accessed_at,
              s.metadata_json AS s_metadata_json, s.created_by_user_id AS s_created_by_user_id,
              s.created_at AS s_created_at
         FROM claim_source cs LEFT JOIN source s ON s.id = cs.source_id
        WHERE cs.claim_id IN (${placeholders})`,
    )
    .bind(...claimIds)
    .all<Record<string, unknown>>();

  for (const row of res.results ?? []) {
    const cs = mapClaimSource(row);
    const source = row.s_id
      ? mapSource({
          id: row.s_id,
          source_type: row.s_source_type,
          title: row.s_title,
          creator: row.s_creator,
          publisher: row.s_publisher,
          published_at_text: row.s_published_at_text,
          canonical_url: row.s_canonical_url,
          external_identifier: row.s_external_identifier,
          license_code: row.s_license_code,
          accessed_at: row.s_accessed_at,
          metadata_json: row.s_metadata_json,
          created_by_user_id: row.s_created_by_user_id,
          created_at: row.s_created_at,
        })
      : null;
    const list = byClaim.get(cs.claim_id) ?? [];
    list.push({ ...cs, source });
    byClaim.set(cs.claim_id, list);
  }
  return byClaim;
}

/** Distinct supporting source count — independence heuristic for ranking. */
function supportCount(cw: ClaimWithSources): number {
  return new Set(
    cw.sources.filter((s) => s.stance === 'supports').map((s) => s.source_id),
  ).size;
}

/** Recommended-claim ordering: more sources, then higher confidence, then most recent. */
function rankClaims(a: ClaimWithSources, b: ClaimWithSources): number {
  const sc = supportCount(b) - supportCount(a);
  if (sc !== 0) return sc;
  const cr = CONFIDENCE_RANK[b.claim.confidence] - CONFIDENCE_RANK[a.claim.confidence];
  if (cr !== 0) return cr;
  return b.claim.updated_at.localeCompare(a.claim.updated_at);
}

/** Best display name for a set of persons: recommended accepted name.primary, else proposed. */
export async function nameOf(
  db: D1Database,
  personIds: string[],
): Promise<Map<string, string | null>> {
  const out = new Map<string, string | null>();
  if (personIds.length === 0) return out;
  const placeholders = personIds.map(() => '?').join(',');
  const res = await db
    .prepare(
      `SELECT * FROM claim
         WHERE subject_person_id IN (${placeholders})
           AND predicate = 'name.primary'
           AND status IN ('accepted','proposed')`,
    )
    .bind(...personIds)
    .all<Record<string, unknown>>();
  const byPerson = new Map<string, Claim[]>();
  for (const row of res.results ?? []) {
    const c = mapClaim(row);
    const list = byPerson.get(c.subject_person_id) ?? [];
    list.push(c);
    byPerson.set(c.subject_person_id, list);
  }
  for (const pid of personIds) {
    const claims = byPerson.get(pid) ?? [];
    // Prefer accepted, then highest confidence, then most recent.
    claims.sort((a, b) => {
      if (a.status !== b.status) return a.status === 'accepted' ? -1 : 1;
      const cr = CONFIDENCE_RANK[b.confidence] - CONFIDENCE_RANK[a.confidence];
      if (cr !== 0) return cr;
      return b.updated_at.localeCompare(a.updated_at);
    });
    out.set(pid, (claims[0]?.value_json?.text as string) ?? null);
  }
  return out;
}

/**
 * Build a full PersonSummary. Includes claims of persons merged into this one
 * (folded, never physically deleted). Disputed and minority claims are shown.
 */
export async function computePersonSummary(
  db: D1Database,
  personRow: Record<string, unknown>,
): Promise<PersonSummary> {
  const person = mapPerson(personRow);
  const folded = await mergedInIds(db, person.id);
  const ownerIds = [person.id, ...folded];
  const ph = ownerIds.map(() => '?').join(',');

  // All claims touching this person (or folded persons) as subject or object.
  const res = await db
    .prepare(
      `SELECT * FROM claim
         WHERE (subject_person_id IN (${ph}) OR object_person_id IN (${ph}))
           AND status NOT IN ('retracted','superseded')`,
    )
    .bind(...ownerIds, ...ownerIds)
    .all<Record<string, unknown>>();
  const claims = (res.results ?? []).map(mapClaim);

  const sourcesByClaim = await loadSourcesFor(db, claims.map((c) => c.id));

  // Resolve names of related persons for relationship listings.
  const relatedIds = new Set<string>();
  for (const c of claims) {
    if (c.object_person_id) relatedIds.add(c.object_person_id);
    relatedIds.add(c.subject_person_id);
  }
  const names = await nameOf(db, [...relatedIds]);
  const relatedStatus = await personStatus(db, [...relatedIds]);
  const lite = (id: string): PersonSummaryLite => ({
    id,
    status: relatedStatus.get(id) ?? 'active',
    display_name: names.get(id) ?? null,
    merged_into_person_id: null,
  });

  const withSources = (c: Claim): ClaimWithSources => ({
    claim: c,
    sources: sourcesByClaim.get(c.id) ?? [],
    object_person: c.object_person_id ? lite(c.object_person_id) : null,
  });

  const ownerSet = new Set(ownerIds);
  const properties: SummaryField[] = [];
  const relationships: PersonSummary['relationships'] = {
    parents: [],
    children: [],
    spouses: [],
    other: [],
  };

  const propByPredicate = new Map<string, ClaimWithSources[]>();
  for (const c of claims) {
    if (c.claim_kind === 'property') {
      if (!ownerSet.has(c.subject_person_id)) continue;
      const list = propByPredicate.get(c.predicate) ?? [];
      list.push(withSources(c));
      propByPredicate.set(c.predicate, list);
    } else {
      const subjectIsOwner = ownerSet.has(c.subject_person_id);
      // Show the COUNTERPART person (the endpoint that isn't this person),
      // regardless of which side of the stored edge it is on.
      const counterpartId = subjectIsOwner ? c.object_person_id : c.subject_person_id;
      const cw: ClaimWithSources = {
        ...withSources(c),
        object_person: counterpartId ? lite(counterpartId) : null,
      };
      if (c.predicate === 'kinship.parent_of') {
        // subject is the parent, object is the child.
        if (subjectIsOwner) relationships.children.push(cw);
        else relationships.parents.push(cw);
      } else if (c.predicate === 'kinship.spouse_of') {
        relationships.spouses.push(cw);
      } else {
        relationships.other.push(cw);
      }
    }
  }

  for (const [predicate, list] of propByPredicate) {
    list.sort(rankClaims);
    const accepted = list.filter((c) => c.claim.status === 'accepted');
    const recommended = accepted[0] ?? null;
    const alternatives = list.filter((c) => c !== recommended);
    properties.push({ predicate, recommended, alternatives });
  }
  properties.sort((a, b) => a.predicate.localeCompare(b.predicate));

  const nameField = properties.find((p) => p.predicate === 'name.primary');
  const displayName =
    (nameField?.recommended?.claim.value_json?.text as string) ??
    (nameField?.alternatives[0]?.claim.value_json?.text as string) ??
    names.get(person.id) ??
    null;

  return {
    person,
    redirect_to_person_id: person.status === 'merged' ? person.merged_into_person_id : null,
    display_name: displayName,
    properties,
    relationships,
    current_revision: person.current_revision,
  };
}

async function personStatus(
  db: D1Database,
  ids: string[],
): Promise<Map<string, PersonSummaryLite['status']>> {
  const out = new Map<string, PersonSummaryLite['status']>();
  if (ids.length === 0) return out;
  const ph = ids.map(() => '?').join(',');
  const res = await db
    .prepare(`SELECT id, status FROM person WHERE id IN (${ph})`)
    .bind(...ids)
    .all<{ id: string; status: PersonSummaryLite['status'] }>();
  for (const r of res.results ?? []) out.set(r.id, r.status);
  return out;
}
