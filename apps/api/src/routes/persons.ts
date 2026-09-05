import { Hono } from 'hono';
import type { Env, Variables } from '../env.ts';
import type { AuthContext } from '../env.ts';
import {
  createPersonSchema,
  createPropertyClaimSchema,
  createRelationshipSchema,
  normalizeRelationship,
  KinshipError,
} from '@wang/validation';
import type { PersonExport, Person } from '@wang/domain';
import { parentPredicateForRole } from '@wang/domain';
import { requireAuth } from '../auth.ts';
import { badRequest, conflict, forbidden, notFound } from '../errors.ts';
import { mapClaim, mapMergeProposal, mapPerson, mapSource } from '../db.ts';
import { computePersonSummary } from '../summary.ts';
import { findPersonsByName } from '../nameSearch.ts';
import { MAX_GENERATIONS, loadAllRelatives, loadRelatives } from '../relatives.ts';
import {
  assertPropertyPredicate,
  assertSourcesExist,
  buildClaimCreation,
} from '../claimService.ts';
import { contributionStatement } from '../contributions.ts';
import { newId, nowIso } from '../util.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

async function loadPerson(db: D1Database, id: string): Promise<Person | null> {
  const row = await db.prepare('SELECT * FROM person WHERE id = ?').bind(id).first<Record<string, unknown>>();
  return row ? mapPerson(row) : null;
}

async function loadPersonRow(db: D1Database, id: string): Promise<Record<string, unknown> | null> {
  return db.prepare('SELECT * FROM person WHERE id = ?').bind(id).first<Record<string, unknown>>();
}

/** Visibility: active/merged public; candidate private to creator+staff; suppressed staff-only. */
function canView(person: Person, auth: AuthContext | null): boolean {
  if (person.status === 'active' || person.status === 'merged') return true;
  if (!auth) return false;
  const staff = auth.role === 'reviewer' || auth.role === 'admin';
  if (person.status === 'suppressed') return staff;
  // candidate (private draft)
  return staff || auth.role === 'maintainer' || person.created_by_user_id === auth.userId;
}

// Create a candidate person + initial name claim (+ optional sources).
app.post('/', async (c) => {
  const auth = requireAuth(c);
  const body = createPersonSchema.parse(await c.req.json());
  await assertSourcesExist(c.env.DB, body.name.sources);

  // Same name in the other Chinese script is the most common way this database
  // would end up with one historical figure recorded twice (王賁 vs 王贲), so we
  // look for existing matches and report them back with the new person.
  const nameText = body.name.value.text?.trim() ?? '';
  const duplicates = nameText
    ? (await findPersonsByName(c.env.DB, nameText, { limit: 5, exactOnly: true })).items
    : [];

  const personId = newId('person');
  const now = nowIso();
  const personStmt = c.env.DB.prepare(
    `INSERT INTO person (id, status, created_by_user_id, created_at, updated_at, current_revision)
     VALUES (?, 'candidate', ?, ?, ?, 0)`,
  ).bind(personId, auth.userId, now, now);

  const { claim, statements } = buildClaimCreation({
    db: c.env.DB,
    subjectPersonId: personId,
    claimKind: 'property',
    predicate: 'name.primary',
    value: body.name.value,
    confidence: body.name.confidence,
    sources: body.name.sources,
    actorUserId: auth.userId,
    changeSummary: body.change_summary ?? '建立候選人物',
  });

  await c.env.DB.batch([
    personStmt,
    contributionStatement(c.env.DB, {
      action: 'person.create',
      actorUserId: auth.userId,
      targetType: 'person',
      targetId: personId,
      changeSummary: body.change_summary ?? '建立候選人物',
    }),
    ...statements,
  ]);

  return c.json(
    {
      person_id: personId,
      claim_id: claim.id,
      status: 'candidate',
      public: false,
      note: body.name.sources.length === 0 ? '未提供來源，人物儲存為私有草稿，不會公開或進入搜尋。' : undefined,
      // Advisory only. Two persons may legitimately share a name, and blocking
      // would contradict "conflicts coexist" — so we surface the candidates and
      // let a human decide whether to propose a (reversible) merge.
      possible_duplicates: duplicates,
    },
    201,
  );
});

// Person summary (computed from currently-accepted claims).
app.get('/:id', async (c) => {
  const row = await loadPersonRow(c.env.DB, c.req.param('id'));
  if (!row) throw notFound('人物不存在');
  const person = mapPerson(row);
  if (!canView(person, c.get('auth'))) throw notFound('人物不存在或未公開');
  const summary = await computePersonSummary(c.env.DB, row);
  return c.json(summary);
});

app.get('/:id/claims', async (c) => {
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (!canView(person, c.get('auth'))) throw notFound('人物不存在或未公開');
  const status = c.req.query('status');
  const clauses = ['(subject_person_id = ? OR object_person_id = ?)'];
  const binds: unknown[] = [person.id, person.id];
  if (status) {
    clauses.push('status = ?');
    binds.push(status);
  }
  const res = await c.env.DB.prepare(`SELECT * FROM claim WHERE ${clauses.join(' AND ')} ORDER BY created_at`)
    .bind(...binds)
    .all<Record<string, unknown>>();
  return c.json({ claims: (res.results ?? []).map(mapClaim) });
});

// Kinship slice for the family-tree view: names and edges only.
app.get('/:id/relatives', async (c) => {
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (!canView(person, c.get('auth'))) throw notFound('人物不存在或未公開');

  const generations = (raw: string | undefined, fallback: number) => {
    if (raw === undefined) return fallback;
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 0 || n > MAX_GENERATIONS) {
      throw badRequest('invalid_generations', `代数需為 0 到 ${MAX_GENERATIONS} 之間的整數。`);
    }
    return n;
  };

  const scope = c.req.query('scope');
  if (scope !== undefined && scope !== 'all') {
    throw badRequest('invalid_scope', '家族树范围仅支持 all。');
  }
  const graph = scope === 'all' ? await loadAllRelatives(c.env.DB, person.id) : await loadRelatives(c.env.DB, person.id, {
    up: generations(c.req.query('up'), 2),
    down: generations(c.req.query('down'), 2),
  });
  return c.json(graph);
});

app.get('/:id/history', async (c) => {
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (!canView(person, c.get('auth'))) throw notFound('人物不存在或未公開');
  // Contributions on the person and on its claims.
  const res = await c.env.DB.prepare(
    `SELECT ct.* FROM contribution ct
      WHERE (ct.target_type = 'person' AND ct.target_id = ?)
         OR (ct.target_type = 'claim' AND ct.target_id IN (SELECT id FROM claim WHERE subject_person_id = ? OR object_person_id = ?))
      ORDER BY ct.created_at DESC LIMIT 200`,
  )
    .bind(person.id, person.id, person.id)
    .all<Record<string, unknown>>();
  return c.json({ history: res.results ?? [] });
});

// Add a property claim.
app.post('/:id/claims', async (c) => {
  const auth = requireAuth(c);
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (person.status === 'merged')
    throw conflict('person_merged', `人物已合併，請改用目標人物 ${person.merged_into_person_id}`, {
      redirect_to_person_id: person.merged_into_person_id,
    });
  const body = createPropertyClaimSchema.parse(await c.req.json());
  assertPropertyPredicate(body.predicate);
  await assertSourcesExist(c.env.DB, body.sources);

  const { claim, statements } = buildClaimCreation({
    db: c.env.DB,
    subjectPersonId: person.id,
    claimKind: 'property',
    predicate: body.predicate,
    value: body.value,
    confidence: body.confidence,
    sources: body.sources,
    actorUserId: auth.userId,
    changeSummary: body.change_summary,
  });
  await c.env.DB.batch(statements);
  return c.json({ claim_id: claim.id, contribution: 'claim.create', status: claim.status }, 201);
});

// Add a relationship claim (parent/child/spouse -> normalized server-side).
app.post('/:id/relationships', async (c) => {
  const auth = requireAuth(c);
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (person.status === 'merged')
    throw conflict('person_merged', `人物已合併，請改用目標人物 ${person.merged_into_person_id}`);
  const body = createRelationshipSchema.parse(await c.req.json());

  const related = await loadPerson(c.env.DB, body.related_person_id);
  if (!related) throw badRequest('related_not_found', '關聯人物不存在');
  await assertSourcesExist(c.env.DB, body.sources);

  let edge;
  try {
    edge = normalizeRelationship(person.id, body.relationship, body.related_person_id);
    edge = {
      ...edge,
      predicate: parentPredicateForRole(edge.predicate, edge.parent_role ?? body.parent_role ?? null),
      parent_role: edge.parent_role ?? body.parent_role ?? null,
    };
  } catch (e) {
    if (e instanceof KinshipError) throw badRequest(e.code, e.message);
    throw e;
  }

  // Cycle check for descent edges; blocks creating a NEW cycle edge (it rejects
  // the new edge, never deletes existing historical data). ancestor_of counts:
  // "A is an ancestor of B" and "B is an ancestor of A" cannot both hold.
  if (
    edge.predicate === 'kinship.parent_of' ||
    edge.predicate === 'kinship.father_of' ||
    edge.predicate === 'kinship.mother_of' ||
    edge.predicate === 'kinship.adoptive_parent_of' ||
    edge.predicate === 'kinship.adoptive_father_of' ||
    edge.predicate === 'kinship.adoptive_mother_of' ||
    edge.predicate === 'kinship.ancestor_of'
  ) {
    if (
      edge.subject_person_id === edge.object_person_id ||
      (await createsCycle(c.env.DB, edge.subject_person_id, edge.object_person_id))
    )
      throw conflict('kinship_cycle', '該世系關係會形成親屬環。');
  }

  const equivalentParentPredicates = edge.predicate.startsWith('kinship.adoptive_')
    ? ['kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of']
    : edge.predicate === 'kinship.parent_of' || edge.predicate === 'kinship.father_of' || edge.predicate === 'kinship.mother_of'
      ? ['kinship.parent_of', 'kinship.father_of', 'kinship.mother_of']
      : null;
  if (equivalentParentPredicates) {
    const existing = await c.env.DB.prepare(
      `SELECT id FROM claim
        WHERE subject_person_id = ? AND object_person_id = ?
          AND predicate IN (${equivalentParentPredicates.map(() => '?').join(',')})
          AND status NOT IN ('retracted','superseded')
        LIMIT 1`,
    ).bind(edge.subject_person_id, edge.object_person_id, ...equivalentParentPredicates).first<{ id: string }>();
    if (existing) throw conflict('relationship_exists', '該親子關係已存在，請修改原有關係的父母角色。', {
      claim_id: existing.id,
    });
  }

  const { claim, statements } = buildClaimCreation({
    db: c.env.DB,
    subjectPersonId: edge.subject_person_id,
    claimKind: 'relationship',
    predicate: edge.predicate,
    objectPersonId: edge.object_person_id,
    generationCount: body.generation_count ?? null,
    confidence: body.confidence,
    sources: body.sources,
    actorUserId: auth.userId,
    changeSummary: body.change_summary,
  });
  try {
    await c.env.DB.batch(statements);
  } catch (e) {
    if (String(e).includes('UNIQUE')) throw conflict('relationship_exists', '該關係主張已存在。');
    throw e;
  }
  return c.json({ claim_id: claim.id, predicate: edge.predicate, normalized: edge }, 201);
});

// Structured export of a person + claims + sources + merges.
app.get('/:id/export', async (c) => {
  const personRow = await loadPersonRow(c.env.DB, c.req.param('id'));
  if (!personRow) throw notFound('人物不存在');
  const person = mapPerson(personRow);
  if (!canView(person, c.get('auth'))) throw notFound('人物不存在或未公開');

  const claimsRes = await c.env.DB.prepare(
    'SELECT * FROM claim WHERE subject_person_id = ? OR object_person_id = ?',
  )
    .bind(person.id, person.id)
    .all<Record<string, unknown>>();
  const claims = (claimsRes.results ?? []).map(mapClaim);
  const claimIds = claims.map((cl) => cl.id);

  const sourcesRes =
    claimIds.length > 0
      ? await c.env.DB.prepare(
          `SELECT DISTINCT s.* FROM source s
             JOIN claim_source cs ON cs.source_id = s.id
            WHERE cs.claim_id IN (${claimIds.map(() => '?').join(',')})`,
        )
          .bind(...claimIds)
          .all<Record<string, unknown>>()
      : { results: [] };

  const mergesRes = await c.env.DB.prepare(
    'SELECT * FROM person_merge_proposal WHERE source_person_id = ? OR target_person_id = ?',
  )
    .bind(person.id, person.id)
    .all<Record<string, unknown>>();

  const summary = await computePersonSummary(
    c.env.DB,
    personRow,
  );

  const claimsWithSources = [
    ...summary.properties.flatMap((p) => [p.recommended, ...p.alternatives].filter((x) => x != null)),
    ...summary.relationships.parents,
    ...summary.relationships.children,
    ...summary.relationships.spouses,
    ...summary.relationships.other,
  ] as PersonExport['claims'];

  const out: PersonExport = {
    person,
    claims: claimsWithSources,
    sources: (sourcesRes.results ?? []).map(mapSource),
    merge_proposals: (mergesRes.results ?? []).map(mapMergeProposal),
    exported_at: nowIso(),
    format_version: 1,
  };
  return c.json(out);
});

// Publish (promote candidate -> active). Only for deceased historical persons.
app.post('/:id/publish', async (c) => {
  const auth = requireAuth(c);
  const person = await loadPerson(c.env.DB, c.req.param('id'));
  if (!person) throw notFound('人物不存在');
  if (person.status !== 'candidate') throw conflict('not_candidate', '只有候選人物可以釋出。');

  const staff = auth.role === 'reviewer' || auth.role === 'admin' || auth.role === 'maintainer';
  const isCreator = person.created_by_user_id === auth.userId;
  if (!staff && !isCreator) throw forbidden('沒有釋出該人物的許可權。');

  // Provenance gate: at least one claim with a supporting source.
  const sourced = await c.env.DB.prepare(
    `SELECT 1 FROM claim cl JOIN claim_source cs ON cs.claim_id = cl.id
      WHERE cl.subject_person_id = ? AND cs.stance = 'supports' LIMIT 1`,
  )
    .bind(person.id)
    .first();
  if (!sourced) throw badRequest('no_source', '公開人物必須至少有一條帶來源的主張。');

  // Deceased gate: a death.date claim, or staff override.
  const deceased = await c.env.DB.prepare(
    "SELECT 1 FROM claim WHERE subject_person_id = ? AND predicate = 'death.date' LIMIT 1",
  )
    .bind(person.id)
    .first();
  if (!deceased && !staff)
    throw badRequest('not_proven_deceased', '未證明為已故歷史人物，需由審核者釋出（進入隔離區）。');

  const now = nowIso();
  await c.env.DB.batch([
    c.env.DB.prepare("UPDATE person SET status = 'active', updated_at = ?, current_revision = current_revision + 1 WHERE id = ?").bind(now, person.id),
    contributionStatement(c.env.DB, {
      action: 'person.create',
      actorUserId: auth.userId,
      targetType: 'person',
      targetId: person.id,
      changeSummary: '釋出為公開歷史人物',
      beforeRevision: person.current_revision,
      afterRevision: person.current_revision + 1,
    }),
  ]);
  return c.json({ person_id: person.id, status: 'active' });
});

async function createsCycle(db: D1Database, parentId: string, childId: string): Promise<boolean> {
  // Walk up ancestors of parentId; if we reach childId, a cycle would form.
  const seen = new Set<string>();
  let frontier = [parentId];
  while (frontier.length > 0) {
    const ph = frontier.map(() => '?').join(',');
    const res = await db
      .prepare(
        `SELECT DISTINCT subject_person_id AS pid FROM claim
          WHERE predicate IN (
            'kinship.parent_of', 'kinship.father_of', 'kinship.mother_of',
            'kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of',
            'kinship.ancestor_of'
          )
            AND status NOT IN ('retracted','superseded')
            AND object_person_id IN (${ph})`,
      )
      .bind(...frontier)
      .all<{ pid: string }>();
    const next: string[] = [];
    for (const r of res.results ?? []) {
      if (r.pid === childId) return true;
      if (!seen.has(r.pid)) {
        seen.add(r.pid);
        next.push(r.pid);
      }
    }
    frontier = next;
  }
  return false;
}

export default app;
