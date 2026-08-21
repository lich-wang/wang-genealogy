import { Hono } from 'hono';
import type { Env, Variables } from '../env.ts';
import { createMergeSchema } from '@wang/validation';
import { requireAuth, requireRole } from '../auth.ts';
import { notFound } from '../errors.ts';
import { mapMergeProposal } from '../db.ts';
import { approveMerge, createMergeProposal, rejectMerge, revertMerge } from '../mergeService.ts';

// Mounted at /api/v1/person-merge-proposals
const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.get('/:id', async (c) => {
  const row = await c.env.DB.prepare('SELECT * FROM person_merge_proposal WHERE id = ?').bind(c.req.param('id')).first<Record<string, unknown>>();
  if (!row) throw notFound('合併提案不存在');
  return c.json({ proposal: mapMergeProposal(row) });
});

app.post('/:id/approve', async (c) => {
  const auth = requireRole(c, ['reviewer', 'admin']);
  return c.json(await approveMerge(c.env.DB, c.req.param('id'), auth.userId));
});

app.post('/:id/reject', async (c) => {
  const auth = requireRole(c, ['reviewer', 'admin']);
  return c.json(await rejectMerge(c.env.DB, c.req.param('id'), auth.userId));
});

app.post('/:id/revert', async (c) => {
  const auth = requireRole(c, ['reviewer', 'admin']);
  return c.json(await revertMerge(c.env.DB, c.req.param('id'), auth.userId));
});

// Proposal creation (mounted separately under /api/v1/persons/:id/merge-proposals).
export const createMergeHandler = new Hono<{ Bindings: Env; Variables: Variables }>();
createMergeHandler.post('/:id/merge-proposals', async (c) => {
  const auth = requireAuth(c);
  const body = createMergeSchema.parse(await c.req.json());
  const result = await createMergeProposal(
    c.env.DB,
    c.req.param('id'),
    body.target_person_id,
    body.reason ?? null,
    auth.userId,
  );
  return c.json(result, 201);
});

export default app;
