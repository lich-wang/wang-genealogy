import { Hono } from 'hono';
import type { Env, Variables } from '../env.ts';
import { createSourceSchema } from '@wang/validation';
import { requireAuth } from '../auth.ts';
import { notFound } from '../errors.ts';
import { mapClaim, mapSource } from '../db.ts';
import { buildSourceCreation } from '../claimService.ts';
import { loadSourcesFor, nameOf } from '../summary.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

// Searchable source picker for contribution forms. Contributors choose a
// human-readable title; opaque source ids remain an implementation detail.
app.get('/', async (c) => {
  const q = (c.req.query('q') ?? '').trim();
  if (!q) return c.json({ items: [] });
  const like = `%${q.replaceAll('%', '\\%').replaceAll('_', '\\_')}%`;
  const res = await c.env.DB
    .prepare(
      `SELECT * FROM source
        WHERE title LIKE ? ESCAPE '\\'
           OR creator LIKE ? ESCAPE '\\'
           OR external_identifier LIKE ? ESCAPE '\\'
        ORDER BY CASE WHEN title = ? THEN 0 ELSE 1 END, created_at DESC
        LIMIT 20`,
    )
    .bind(like, like, like, q)
    .all<Record<string, unknown>>();
  return c.json({ items: (res.results ?? []).map(mapSource) });
});

app.post('/', async (c) => {
  const auth = requireAuth(c);
  const input = createSourceSchema.parse(await c.req.json());
  const existing = await c.env.DB.prepare(
    `SELECT id FROM source
      WHERE source_type = ?
        AND canonical_url IS ?
        AND external_identifier IS ?
      LIMIT 1`,
  ).bind(input.source_type, input.canonical_url ?? null, input.external_identifier ?? null).first<{ id: string }>();
  if (existing) return c.json({ source_id: existing.id, reused: true, writes: 0 });
  const { sourceId, statements } = buildSourceCreation(c.env.DB, input, auth.userId);
  await c.env.DB.batch(statements);
  return c.json({ source_id: sourceId, reused: false, writes: 2 }, 201);
});

app.get('/:id', async (c) => {
  const row = await c.env.DB.prepare('SELECT * FROM source WHERE id = ?').bind(c.req.param('id')).first<Record<string, unknown>>();
  if (!row) throw notFound('來源不存在');
  return c.json({ source: mapSource(row) });
});

// Claims citing this source (with stance/locator).
app.get('/:id/claims', async (c) => {
  const row = await c.env.DB.prepare('SELECT id FROM source WHERE id = ?').bind(c.req.param('id')).first();
  if (!row) throw notFound('來源不存在');
  const res = await c.env.DB
    .prepare(
      // Only claims about publicly visible persons: a suppressed record is out
      // of public view everywhere, not just on its own page.
      `SELECT cl.*, cs.stance AS cs_stance, cs.locator AS cs_locator, cs.quotation AS cs_quotation
         FROM claim cl
         JOIN claim_source cs ON cs.claim_id = cl.id
         JOIN person p ON p.id = cl.subject_person_id
        WHERE cs.source_id = ?
          AND p.status IN ('active', 'merged')
          AND cl.status <> 'retracted'
        ORDER BY cl.created_at`,
    )
    .bind(c.req.param('id'))
    .all<Record<string, unknown>>();
  const rows = res.results ?? [];
  const mapped = rows.map(mapClaim);

  // Include each claim's full provenance and the counterpart person of any
  // relationship claim, so a citation renders with the same detail as it does
  // on the person page.
  const sourcesByClaim = await loadSourcesFor(c.env.DB, mapped.map((cl) => cl.id));
  const objectIds = mapped.map((cl) => cl.object_person_id).filter((id): id is string => id != null);
  const names = await nameOf(c.env.DB, objectIds);

  const claims = rows.map((r, i) => {
    const claim = mapped[i]!;
    return {
      claim,
      sources: sourcesByClaim.get(claim.id) ?? [],
      object_person: claim.object_person_id
        ? {
            id: claim.object_person_id,
            status: 'active' as const,
            display_name: names.get(claim.object_person_id) ?? null,
            merged_into_person_id: null,
          }
        : null,
      // Stance/locator of THIS source's citation, which is what the source page
      // is actually about.
      stance: r.cs_stance,
      locator: r.cs_locator,
      quotation: r.cs_quotation,
    };
  });
  return c.json({ claims });
});

export default app;
