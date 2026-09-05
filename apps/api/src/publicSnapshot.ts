import type { Context, Next } from 'hono';
import { scriptVariants } from '@wang/i18n';
import type { Env, Variables } from './env.ts';
import { verifyToken } from './crypto.ts';
import { publicTreeSnapshot, publicTreeSnapshotSlice } from './treeSnapshot.ts';

type AppContext = Context<{ Bindings: Env; Variables: Variables }>;
type JsonRecord = Record<string, unknown>;

interface PublicIndex {
  generated_at: string;
  highlights: JsonRecord[];
  status?: JsonRecord;
}

type SearchRecord = JsonRecord & { id: string; created_at: string; search_terms: string[] };
type SourceSearchRecord = JsonRecord & {
  id: string;
  title: string;
  creator?: string | null;
  external_identifier?: string | null;
  created_at: string;
};
type ChangeRecord = JsonRecord & { created_at: string };

let indexCache: PublicIndex | null = null;
const shardCache = new Map<string, Promise<Record<string, JsonRecord>>>();
const listCache = new Map<string, Promise<unknown[] | null>>();
const MAX_SHARD_CACHE = 8;

/**
 * Resolve public records from published assets before considering D1.
 *
 * This also applies to signed-in readers: authentication does not make an
 * already-public record more complete, and the former authenticated bypass
 * made ordinary browsing consume D1 reads. A snapshot miss falls through only
 * when a bearer token is present, preserving access to private candidate and
 * suppressed records through the normal authorization path.
 */
export async function serveAnonymousPublicSnapshot(c: AppContext, next: Next) {
  if (c.req.method !== 'GET') return next();
  const authorization = c.req.header('authorization');
  const privateFallback = async () => {
    if (!authorization?.startsWith('Bearer ')) return false;
    return Boolean(await verifyToken(c.env.AUTH_SECRET, authorization.slice(7).trim()));
  };
  const url = new URL(c.req.url);
  if (url.pathname === '/api/v1/health' || url.pathname.startsWith('/api/v1/auth/')) return next();
  if (!c.env.TREE_SNAPSHOT) return snapshotUnavailable();

  const index = await loadIndex(c.env.TREE_SNAPSHOT);
  if (!index) return snapshotUnavailable();

  if (url.pathname === '/api/v1/search') return searchResponse(c.env.TREE_SNAPSHOT, url, index);
  if (url.pathname === '/api/v1/kinship-highlights') {
    const limit = Math.min(Math.max(Number(url.searchParams.get('limit') ?? 8), 1), 24);
    return snapshotJson({ items: index.highlights.slice(0, limit), status: index.status ?? null }, index);
  }
  if (url.pathname === '/api/v1/changes') return changesResponse(c.env.TREE_SNAPSHOT, url, index);
  if (url.pathname === '/api/v1/sources') return sourceSearchResponse(c.env.TREE_SNAPSHOT, url, index);

  const personMatch = /^\/api\/v1\/persons\/([^/]+)(?:\/(claims|history|relatives|export))?$/.exec(url.pathname);
  if (personMatch) {
    const id = safeDecode(personMatch[1]!);
    if (!id) return snapshotNotFound('人物不存在');
    const section = personMatch[2];
    if (section === 'relatives') return relativesResponse(c.env.TREE_SNAPSHOT, id, url, index);
    const record = await loadRecord(c.env.TREE_SNAPSHOT, 'persons', id);
    if (!record) return await privateFallback() ? next() : snapshotNotFound('人物不存在或未公開');
    if (section === 'claims') {
      const status = url.searchParams.get('status');
      const claims = (record.claims as JsonRecord[] ?? []).filter((claim) => !status || claim.status === status);
      return snapshotJson({ claims }, index);
    }
    if (section === 'history') return snapshotJson({ history: record.history ?? [] }, index);
    if (section === 'export') return snapshotJson(record.export, index);
    return snapshotJson(record.summary, index);
  }

  const claimMatch = /^\/api\/v1\/claims\/([^/]+)$/.exec(url.pathname);
  if (claimMatch) {
    const id = safeDecode(claimMatch[1]!);
    const record = id ? await loadRecord(c.env.TREE_SNAPSHOT, 'claims', id) : null;
    return record ? snapshotJson(record, index) : await privateFallback() ? next() : snapshotNotFound('主張不存在');
  }

  const sourceMatch = /^\/api\/v1\/sources\/([^/]+)(?:\/(claims))?$/.exec(url.pathname);
  if (sourceMatch) {
    const id = safeDecode(sourceMatch[1]!);
    const record = id ? await loadRecord(c.env.TREE_SNAPSHOT, 'sources', id) : null;
    if (!record) return await privateFallback() ? next() : snapshotNotFound('來源不存在');
    return sourceMatch[2] === 'claims'
      ? snapshotJson({ claims: record.claims ?? [] }, index)
      : snapshotJson({ source: record.source }, index);
  }

  const mergeMatch = /^\/api\/v1\/person-merge-proposals\/([^/]+)$/.exec(url.pathname);
  if (mergeMatch) {
    const id = safeDecode(mergeMatch[1]!);
    const record = id ? await loadRecord(c.env.TREE_SNAPSHOT, 'merges', id) : null;
    return record ? snapshotJson(record, index) : await privateFallback() ? next() : snapshotNotFound('合併提案不存在');
  }

  return snapshotNotFound('介面不存在');
}

async function loadIndex(assets: Fetcher): Promise<PublicIndex | null> {
  if (indexCache) return indexCache;
  const response = await assets.fetch('https://tree-snapshot.invalid/public/index.json');
  if (!response.ok) return null;
  indexCache = await response.json() as PublicIndex;
  return indexCache;
}

export function snapshotBucketFile(kind: string, id: string): string {
  const marker = id.indexOf('_');
  const char = id[marker + 1] ?? '_';
  return `public/${kind}-${char.charCodeAt(0).toString(16).padStart(2, '0')}.json`;
}

async function loadRecord(assets: Fetcher, kind: string, id: string): Promise<JsonRecord | null> {
  const file = snapshotBucketFile(kind, id);
  let pending = shardCache.get(file);
  if (pending) {
    shardCache.delete(file);
    shardCache.set(file, pending);
  }
  if (!pending) {
    pending = assets.fetch(`https://tree-snapshot.invalid/${file}`).then(async (response) => {
      if (!response.ok) return {};
      return response.json() as Promise<Record<string, JsonRecord>>;
    });
    shardCache.set(file, pending);
    while (shardCache.size > MAX_SHARD_CACHE) {
      const oldest = shardCache.keys().next().value as string | undefined;
      if (!oldest) break;
      shardCache.delete(oldest);
    }
  }
  return (await pending)[id] ?? null;
}

async function loadList<T>(assets: Fetcher, file: string): Promise<T[] | null> {
  let pending = listCache.get(file);
  if (!pending) {
    pending = assets.fetch(`https://tree-snapshot.invalid/public/${file}`).then(async (response) =>
      response.ok ? response.json() as Promise<unknown[]> : null);
    listCache.set(file, pending);
  }
  return await pending as T[] | null;
}

async function searchResponse(assets: Fetcher, url: URL, index: PublicIndex): Promise<Response> {
  const query = (url.searchParams.get('q') ?? '').trim();
  if (!query) return snapshotJson({ items: [], next_cursor: null }, index);
  const records = await loadList<SearchRecord>(assets, 'search.json');
  if (!records) return snapshotUnavailable();
  const variants = scriptVariants(query.slice(0, 100));
  const cursor = decodeCursor(url.searchParams.get('cursor'));
  if (cursor instanceof Response) return cursor;
  const matched = records.filter((item) =>
    item.search_terms.some((term) => variants.some((variant) => term.includes(variant))) &&
    (!cursor || item.created_at > cursor.created_at || (item.created_at === cursor.created_at && item.id > cursor.id)));
  const page = matched.slice(0, 51);
  const hasMore = page.length > 50;
  const items = (hasMore ? page.slice(0, 50) : page).map(({ created_at: _createdAt, search_terms: _terms, ...item }) => item);
  const last = items.at(-1) as { id?: string } | undefined;
  const sourceLast = last ? page.find((item) => item.id === last.id) : null;
  return snapshotJson({
    items,
    next_cursor: hasMore && sourceLast ? encodeCursor(sourceLast.created_at, sourceLast.id) : null,
  }, index);
}

async function sourceSearchResponse(assets: Fetcher, url: URL, index: PublicIndex): Promise<Response> {
  const query = (url.searchParams.get('q') ?? '').trim();
  if (!query) return snapshotJson({ items: [] }, index);
  const records = await loadList<SourceSearchRecord>(assets, 'source-search.json');
  if (!records) return snapshotUnavailable();
  const folded = query.toLocaleLowerCase();
  const items = records.filter((source) =>
    [source.title, source.creator, source.external_identifier]
      .some((value) => value?.toLocaleLowerCase().includes(folded)))
    .sort((a, b) => Number(b.title === query) - Number(a.title === query) || b.created_at.localeCompare(a.created_at))
    .slice(0, 20);
  return snapshotJson({ items }, index);
}

async function changesResponse(assets: Fetcher, url: URL, index: PublicIndex): Promise<Response> {
  const records = await loadList<ChangeRecord>(assets, 'changes.json');
  if (!records) return snapshotUnavailable();
  const cursor = url.searchParams.get('cursor');
  const rows = records.filter((item) => !cursor || item.created_at < cursor).slice(0, 50);
  return snapshotJson({
    items: rows,
    next_cursor: rows.length === 50 ? rows.at(-1)!.created_at : null,
  }, index);
}

async function relativesResponse(assets: Fetcher, id: string, url: URL, index: PublicIndex): Promise<Response> {
  if (url.searchParams.get('scope') === 'all') {
    return (await publicTreeSnapshot(assets, id)) ?? snapshotNotFound('人物不存在或未公開');
  }
  if (url.searchParams.has('scope')) {
    return snapshotError(400, 'invalid_scope', '家族树范围仅支持 all。');
  }
  const up = generation(url.searchParams.get('up'), 2);
  const down = generation(url.searchParams.get('down'), 2);
  if (up == null || down == null) return snapshotError(400, 'invalid_generations', '代数需為 0 到 4 之間的整數。');
  const response = await publicTreeSnapshotSlice(assets, id, up, down);
  if (!response) return snapshotNotFound('人物不存在或未公開');
  const headers = new Headers(response.headers);
  headers.set('X-Wang-Snapshot-At', index.generated_at);
  return new Response(response.body, { status: response.status, headers });
}

function generation(raw: string | null, fallback: number): number | null {
  if (raw == null) return fallback;
  const value = Number(raw);
  return Number.isInteger(value) && value >= 0 && value <= 4 ? value : null;
}

function encodeCursor(createdAt: string, id: string): string {
  const binary = btoa(`${createdAt}|${id}`);
  return binary.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeCursor(raw: string | null): { created_at: string; id: string } | null | Response {
  if (!raw) return null;
  try {
    const decoded = atob(raw.replace(/-/g, '+').replace(/_/g, '/'));
    const separator = decoded.indexOf('|');
    if (separator <= 0 || separator === decoded.length - 1) throw new Error('invalid');
    return { created_at: decoded.slice(0, separator), id: decoded.slice(separator + 1) };
  } catch {
    return snapshotError(400, 'invalid_cursor', '分頁游標不合法。');
  }
}

function safeDecode(value: string): string | null {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}

function snapshotJson(data: unknown, index: PublicIndex, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: snapshotHeaders(index.generated_at),
  });
}

function snapshotHeaders(generatedAt?: string): Headers {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
    'X-Wang-Data-Source': 'public-read-snapshot',
    'X-Wang-D1': 'BYPASS',
  });
  if (generatedAt) headers.set('X-Wang-Snapshot-At', generatedAt);
  return headers;
}

function snapshotNotFound(message: string): Response {
  return new Response(JSON.stringify({ error: 'not_found', message }), { status: 404, headers: snapshotHeaders() });
}

function snapshotUnavailable(): Response {
  return new Response(JSON.stringify({ error: 'snapshot_unavailable', message: '公開資料快照暫時不可用。' }), {
    status: 503,
    headers: snapshotHeaders(),
  });
}

function snapshotError(status: number, error: string, message: string): Response {
  return new Response(JSON.stringify({ error, message }), { status, headers: snapshotHeaders() });
}
