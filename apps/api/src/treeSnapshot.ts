import type { Context, Next } from 'hono';
import type { Env, Variables } from './env.ts';

type AppContext = Context<{ Bindings: Env; Variables: Variables }>;
let indexCache: Record<string, string> | null = null;

export async function publicTreeSnapshot(assets: Fetcher, personId: string): Promise<Response | null> {
  if (!indexCache) {
    const indexResponse = await assets.fetch('https://tree-snapshot.invalid/index.json');
    if (!indexResponse.ok) return null;
    indexCache = await indexResponse.json() as Record<string, string>;
  }
  const file = indexCache[personId];
  if (!file) return null;
  const graph = await assets.fetch(`https://tree-snapshot.invalid/${file}`);
  if (!graph.ok) return null;
  const headers = new Headers(graph.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  headers.set('X-Wang-Data-Source', 'public-tree-snapshot');
  return new Response(graph.body, { status: 200, headers });
}

/** Anonymous full-tree browsing never needs to scan D1's complete relationship table. */
export async function serveAnonymousFullTree(c: AppContext, next: Next) {
  const path = new URL(c.req.url).pathname;
  const match = /^\/api\/v1\/persons\/([^/]+)\/relatives$/.exec(path);
  if (
    c.req.method === 'GET' &&
    !c.req.header('authorization') &&
    c.req.query('scope') === 'all' &&
    match &&
    c.env.TREE_SNAPSHOT
  ) {
    const response = await publicTreeSnapshot(c.env.TREE_SNAPSHOT, decodeURIComponent(match[1]!));
    if (response) return response;
  }
  return next();
}
