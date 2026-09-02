import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { ZodError } from 'zod';
import type { Env, Variables } from './env.ts';
import { AppError } from './errors.ts';
import { authMiddleware, login, requireAuth, signup } from './auth.ts';
import { loginSchema, signupSchema } from '@wang/validation';
import { mapUser } from './db.ts';
import { nameOf } from './summary.ts';
import { findPersonsByName, SEARCH_PAGE_SIZE } from './nameSearch.ts';
import { loadKinshipHighlights } from './kinshipHighlights.ts';
import persons from './routes/persons.ts';
import claims from './routes/claims.ts';
import sources from './routes/sources.ts';
import mergeProposals, { createMergeHandler } from './routes/merges.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.use('*', async (c, next) => {
  const allowed = c.env.ALLOWED_ORIGIN || '*';
  return cors({
    // Reflect the caller's origin so credentialed requests work (a wildcard
    // "*" is rejected by browsers when credentials are included). When
    // ALLOWED_ORIGIN is set to a specific value, restrict to it.
    origin: (origin) => {
      if (!origin) return allowed === '*' ? '*' : allowed;
      if (allowed === '*') return origin;
      return origin === allowed ? origin : allowed;
    },
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })(c, next);
});

app.use('*', authMiddleware);

app.get('/', (c) => c.json({ name: 'wang-genealogy-api', version: 'v1', status: 'ok' }));
app.get('/api/v1/health', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

// --- auth ---
const auth = new Hono<{ Bindings: Env; Variables: Variables }>();
auth.post('/signup', async (c) => {
  const body = signupSchema.parse(await c.req.json());
  const result = await signup(c.env, body);
  return c.json(result, 201);
});
auth.post('/login', async (c) => {
  const body = loginSchema.parse(await c.req.json());
  return c.json(await login(c.env, body));
});
auth.get('/me', async (c) => {
  const ctx = requireAuth(c);
  const row = await c.env.DB.prepare('SELECT * FROM user WHERE id = ?').bind(ctx.userId).first<Record<string, unknown>>();
  if (!row) throw new AppError(404, 'not_found', '使用者不存在');
  const u = mapUser(row);
  return c.json({ user: { id: u.id, display_name: u.display_name, role: u.role, status: u.status } });
});
app.route('/api/v1/auth', auth);

// --- search (active persons only, script-insensitive, cursor-paged) ---
app.get('/api/v1/search', async (c) => {
  const q = (c.req.query('q') ?? '').trim();
  if (q.length === 0) return c.json({ items: [], next_cursor: null });
  const page = await findPersonsByName(c.env.DB, q, {
    limit: SEARCH_PAGE_SIZE,
    cursor: c.req.query('cursor') ?? null,
  });
  return c.json(page);
});

// --- starting points for the family-tree view ---
//
// A tree needs a person to start from, and a newcomer has no reason to know
// which of 781 records has a tree worth walking. The policy-backed pre-surname
// progenitors come first; remaining places are ranked by recorded kinship.
app.get('/api/v1/kinship-highlights', async (c) => {
  const limit = Math.min(Math.max(Number(c.req.query('limit') ?? 8), 1), 24);
  return c.json({ items: await loadKinshipHighlights(c.env.DB, limit) });
});

// --- recent changes (public feed) ---
app.get('/api/v1/changes', async (c) => {
  const cursor = c.req.query('cursor');
  const binds: unknown[] = [];
  let where = '';
  if (cursor) {
    where = 'WHERE ct.created_at < ?';
    binds.push(cursor);
  }
  const res = await c.env.DB
    .prepare(
      `SELECT ct.id, ct.action, ct.target_type, ct.target_id, ct.change_summary, ct.created_at,
              u.display_name AS actor_display_name
         FROM contribution ct JOIN user u ON u.id = ct.actor_user_id
         ${where}
        ORDER BY ct.created_at DESC LIMIT 50`,
    )
    .bind(...binds)
    .all<Record<string, unknown>>();
  const rows = res.results ?? [];

  // Resolve a person id + display name for each change so the feed shows names,
  // not raw ids. Person targets resolve directly; claim targets resolve to the
  // claim's subject person.
  const personTargets = rows.filter((r) => r.target_type === 'person').map((r) => r.target_id as string);
  const claimTargets = rows.filter((r) => r.target_type === 'claim').map((r) => r.target_id as string);
  const claimToPerson = new Map<string, string>();
  if (claimTargets.length > 0) {
    const ph = claimTargets.map(() => '?').join(',');
    const cr = await c.env.DB
      .prepare(`SELECT id, subject_person_id FROM claim WHERE id IN (${ph})`)
      .bind(...claimTargets)
      .all<{ id: string; subject_person_id: string }>();
    for (const r of cr.results ?? []) claimToPerson.set(r.id, r.subject_person_id);
  }
  const allPersonIds = [...new Set([...personTargets, ...claimToPerson.values()])];
  const names = await nameOf(c.env.DB, allPersonIds);

  // Changes about non-public persons stay out of the public feed — otherwise
  // suppressing a record would still broadcast its name and id.
  const publicPersonIds = new Set();
  if (allPersonIds.length > 0) {
    const ph = allPersonIds.map(() => '?').join(',');
    const visible = await c.env.DB
      .prepare(`SELECT id FROM person WHERE id IN (${ph}) AND status IN ('active','merged')`)
      .bind(...allPersonIds)
      .all<{ id: string }>();
    for (const row of visible.results ?? []) publicPersonIds.add(row.id);
  }

  const items = rows.map((r) => {
    const targetType = r.target_type as string;
    const targetId = r.target_id as string;
    const personId =
      targetType === 'person' ? targetId : targetType === 'claim' ? claimToPerson.get(targetId) ?? null : null;
    return {
      contribution_id: r.id as string,
      action: r.action as string,
      actor_display_name: r.actor_display_name as string,
      target_type: targetType,
      target_id: targetId,
      subject_person_id: personId,
      target_display_name: personId ? names.get(personId) ?? null : null,
      change_summary: (r.change_summary as string) ?? null,
      created_at: r.created_at as string,
    };
  });
  const visibleItems = items.filter((item) => !item.subject_person_id || publicPersonIds.has(item.subject_person_id));
  const next = rows.length === 50 ? (rows[rows.length - 1]!.created_at as string) : null;
  return c.json({ items: visibleItems, next_cursor: next });
});

// --- mounted resource routers ---
app.route('/api/v1/persons', persons);
app.route('/api/v1/persons', createMergeHandler);
app.route('/api/v1/claims', claims);
app.route('/api/v1/sources', sources);
app.route('/api/v1/person-merge-proposals', mergeProposals);

// --- error handling: machine code + Chinese message ---
app.onError(async (err, c) => {
  const path = new URL(c.req.url).pathname;
  const relatives = /^\/api\/v1\/persons\/([^/]+)\/relatives$/.exec(path);
  if (c.req.method === 'GET' && relatives && c.env.TREE_SNAPSHOT) {
    try {
      const response = await treeSnapshot(c.env.TREE_SNAPSHOT, decodeURIComponent(relatives[1]!));
      if (response) return response;
    } catch (snapshotError) {
      console.error('tree snapshot unavailable', snapshotError);
    }
  }
  if (err instanceof AppError) return c.json(err.toBody(), err.status as 400);
  if (err instanceof ZodError)
    return c.json({ error: 'validation_error', message: '請求引數不合法。', details: err.issues }, 400);
  console.error('unhandled', err);
  return c.json({ error: 'internal_error', message: '伺服器內部錯誤。' }, 500);
});

async function treeSnapshot(assets: Fetcher, personId: string): Promise<Response | null> {
  const indexResponse = await assets.fetch('https://tree-snapshot.invalid/index.json');
  if (!indexResponse.ok) return null;
  const index = await indexResponse.json<Record<string, string>>();
  const file = index[personId];
  if (!file) return null;
  const graph = await assets.fetch(`https://tree-snapshot.invalid/${file}`);
  if (!graph.ok) return null;
  const headers = new Headers(graph.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
  headers.set('X-Wang-Data-Source', 'public-tree-snapshot');
  return new Response(graph.body, { status: 200, headers });
}

app.notFound((c) => c.json({ error: 'not_found', message: '介面不存在。' }, 404));

export default app;
