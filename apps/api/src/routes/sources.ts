import { Hono } from 'hono';
import type { Env, Variables } from '../env.ts';
import { createSourceSchema } from '@wang/validation';
import { requireAuth } from '../auth.ts';
import { notFound } from '../errors.ts';
import { mapClaim, mapSource } from '../db.ts';
import { buildSourceCreation } from '../claimService.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.post('/', async (c) => {
  const auth = requireAuth(c);
  const input = createSourceSchema.parse(await c.req.json());
  const { sourceId, statements } = buildSourceCreation(c.env.DB, input, auth.userId);
  await c.env.DB.batch(statements);
  return c.json({ source_id: sourceId }, 201);
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
      `SELECT cl.*, cs.stance AS cs_stance, cs.locator AS cs_locator, cs.quotation AS cs_quotation
         FROM claim cl JOIN claim_source cs ON cs.claim_id = cl.id
        WHERE cs.source_id = ? ORDER BY cl.created_at`,
    )
    .bind(c.req.param('id'))
    .all<Record<string, unknown>>();
  const claims = (res.results ?? []).map((r) => ({
    claim: mapClaim(r),
    stance: r.cs_stance,
    locator: r.cs_locator,
    quotation: r.cs_quotation,
  }));
  return c.json({ claims });
});

export default app;
