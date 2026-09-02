import type { Context, Next } from 'hono';
import type { Env, Variables } from './env.ts';

type AppContext = Context<{ Bindings: Env; Variables: Variables }>;

/**
 * Anonymous public reads may be cached at the edge. Authenticated requests are
 * always fresh because candidate visibility and review state are user-specific.
 */
export function cacheTtlFor(url: URL): number {
  const path = url.pathname;
  if (path === '/api/v1/changes') return 30;
  if (path === '/api/v1/search') return 120;
  if (path === '/api/v1/kinship-highlights') return 600;
  if (/^\/api\/v1\/persons\/[^/]+(?:\/claims|\/history|\/relatives|\/export)?$/.test(path)) return 300;
  if (/^\/api\/v1\/claims\/[^/]+$/.test(path)) return 300;
  if (/^\/api\/v1\/sources(?:\/[^/]+(?:\/claims)?)?$/.test(path)) return 300;
  if (/^\/api\/v1\/person-merge-proposals\/[^/]+$/.test(path)) return 300;
  return 0;
}

/** Cache successful anonymous GET responses without adding any D1 cache table. */
export async function publicReadCache(c: AppContext, next: Next) {
  if (c.req.method !== 'GET' || c.req.header('authorization')) return next();
  const ttl = cacheTtlFor(new URL(c.req.url));
  const storage = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  if (!ttl || !storage) return next();

  const key = new Request(c.req.url, { method: 'GET' });
  const cached = await storage.match(key);
  if (cached) {
    const headers = new Headers(cached.headers);
    headers.set('X-Wang-Cache', 'HIT');
    return new Response(cached.body, { status: cached.status, statusText: cached.statusText, headers });
  }

  await next();
  if (c.res.status !== 200 || c.res.headers.has('Set-Cookie')) return;
  c.header('Cache-Control', `public, max-age=${ttl}, stale-while-revalidate=${ttl * 12}`);
  const response = c.res.clone();
  try {
    c.executionCtx.waitUntil(storage.put(key, response));
  } catch {
    // Unit tests and non-Worker adapters do not expose an execution context.
    await storage.put(key, response);
  }
}
