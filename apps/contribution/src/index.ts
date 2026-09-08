import { Hono } from 'hono';
import type { Context } from 'hono';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { contributionSchema, isPersonId, safeReturnTo } from './contracts.ts';
import { openJson, pkceChallenge, randomToken, safeEqual, sealJson, sha256 } from './crypto.ts';
import {
  exchangeOAuthCode,
  GitHubClient,
  GitHubError,
  refreshOAuthToken,
  revokeGrant,
} from './github.ts';
import type { GitHubUser, OAuthToken } from './github.ts';
import type { WorkerEnv } from './env.ts';

type AppContext = { Bindings: WorkerEnv };
type Ctx = Context<AppContext>;
type Session = {
  tokenHash: string;
  githubId: number;
  login: string;
  avatarUrl: string | null;
  status: string;
  csrfToken: string;
  scopes: string;
};
type OAuthState = { state: string; verifier: string; returnTo: string; issuedAt: number };
type CredentialRow = {
  access_token_ciphertext: string;
  refresh_token_ciphertext: string | null;
  scopes: string;
  access_expires_at: string | null;
};

const app = new Hono<AppContext>();
const SESSION_COOKIE = 'wg_session';
const OAUTH_COOKIE = 'wg_oauth';
const SESSION_SECONDS = 30 * 24 * 60 * 60;
const OAUTH_SECONDS = 10 * 60;

app.use('*', async (context, next) => {
  await next();
  context.header('Cache-Control', 'no-store');
  context.header('Referrer-Policy', 'same-origin');
  context.header('X-Content-Type-Options', 'nosniff');
});

app.get('/api/auth/github/start', async (context) => {
  const state = randomToken();
  const verifier = randomToken(48);
  const oauthState: OAuthState = {
    state,
    verifier,
    returnTo: safeReturnTo(context.req.query('return_to'), context.env.SITE_ORIGIN),
    issuedAt: Date.now(),
  };
  setCookie(context, OAUTH_COOKIE, await sealJson(oauthState, context.env.TOKEN_ENCRYPTION_SECRET), {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
    path: '/api/auth/github',
    maxAge: OAUTH_SECONDS,
  });
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', context.env.GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri', `${context.env.SITE_ORIGIN}/api/auth/github/callback`);
  authorize.searchParams.set('scope', 'read:user public_repo offline_access');
  authorize.searchParams.set('state', state);
  authorize.searchParams.set('code_challenge', await pkceChallenge(verifier));
  authorize.searchParams.set('code_challenge_method', 'S256');
  authorize.searchParams.set('allow_signup', 'true');
  authorize.searchParams.set('prompt', 'select_account');
  return context.redirect(authorize.toString());
});

app.get('/api/auth/github/callback', async (context) => {
  const sealed = getCookie(context, OAUTH_COOKIE);
  deleteCookie(context, OAUTH_COOKIE, { path: '/api/auth/github', secure: true });
  const oauth = sealed ? await openJson<OAuthState>(sealed, context.env.TOKEN_ENCRYPTION_SECRET) : null;
  const code = context.req.query('code');
  const state = context.req.query('state');
  if (!oauth || !code || !state || Date.now() - oauth.issuedAt > OAUTH_SECONDS * 1000 || !(await safeEqual(oauth.state, state))) {
    await audit(context.env.ACCOUNT_DB, null, 'oauth.callback', 'invalid_state');
    return errorResponse(context, 400, 'invalid_oauth_state', 'GitHub 登录状态无效或已过期，请重试。');
  }

  try {
    const token = await exchangeOAuthCode(context.env, code, oauth.verifier);
    const scopes = normalizeScopes(token.scope);
    if (!scopes.includes('public_repo')) {
      await audit(context.env.ACCOUNT_DB, null, 'oauth.callback', 'missing_scope');
      return errorResponse(context, 403, 'github_scope_required', '需要 GitHub public_repo 权限才能以你的账号创建 Pull Request。');
    }
    const github = new GitHubClient(token.access_token, context.env.GITHUB_REPOSITORY_OWNER, context.env.GITHUB_REPOSITORY_NAME);
    const user = await github.currentUser();
    await saveIdentity(context.env, user, token, scopes);
    await audit(context.env.ACCOUNT_DB, user.id, 'oauth.callback', 'success');
    const sessionToken = await issueSession(context.env.ACCOUNT_DB, user.id);
    setCookie(context, SESSION_COOKIE, sessionToken, sessionCookieOptions());
    return context.redirect(new URL(oauth.returnTo, context.env.SITE_ORIGIN).toString());
  } catch (error) {
    await audit(context.env.ACCOUNT_DB, null, 'oauth.callback', 'github_error');
    throw error;
  }
});

app.get('/api/account/me', async (context) => {
  const session = await currentSession(context);
  if (!session) return context.json({ user: null, can_submit: false, csrf_token: null });
  return context.json({
    user: { github_id: session.githubId, login: session.login, avatar_url: session.avatarUrl },
    can_submit: normalizeScopes(session.scopes).includes('public_repo') && session.status === 'active',
    csrf_token: session.csrfToken,
  });
});

app.get('/api/contributions/base', async (context) => {
  const session = await requireSession(context);
  const existingId = context.req.query('person_id');
  const newId = context.req.query('new_person_id');
  if (Boolean(existingId) === Boolean(newId)) return errorResponse(context, 400, 'invalid_person', '必须且只能指定一个人物 ID。');
  const personId = existingId ?? newId ?? '';
  if (!isPersonId(personId)) return errorResponse(context, 400, 'invalid_person', '人物 ID 格式不合法。');
  const token = await accessTokenFor(context.env, session.githubId);
  const github = new GitHubClient(token, context.env.GITHUB_REPOSITORY_OWNER, context.env.GITHUB_REPOSITORY_NAME);
  return context.json(await github.contributionBase(newId ? `new:${newId}` : personId));
});

app.post('/api/auth/logout', async (context) => {
  requireSameOrigin(context);
  const cookie = getCookie(context, SESSION_COOKIE);
  if (cookie) {
    const tokenHash = await sha256(cookie);
    const row = await context.env.ACCOUNT_DB.prepare(
      'SELECT github_id, csrf_token FROM site_session WHERE token_hash = ?1 AND revoked_at IS NULL',
    ).bind(tokenHash).first<{ github_id: number; csrf_token: string }>();
    if (row) {
      await requireCsrf(context, row.csrf_token);
      await context.env.ACCOUNT_DB.prepare(
        'UPDATE site_session SET revoked_at = ?1 WHERE token_hash = ?2 AND revoked_at IS NULL',
      ).bind(now(), tokenHash).run();
      await audit(context.env.ACCOUNT_DB, row.github_id, 'session.logout', 'success');
    }
  }
  deleteCookie(context, SESSION_COOKIE, { path: '/', secure: true });
  return context.body(null, 204);
});

app.post('/api/auth/github/disconnect', async (context) => {
  requireSameOrigin(context);
  const session = await requireSession(context);
  await requireCsrf(context, session.csrfToken);
  const credential = await credentialFor(context.env.ACCOUNT_DB, session.githubId);
  if (credential) {
    const accessToken = await openJson<string>(credential.access_token_ciphertext, context.env.TOKEN_ENCRYPTION_SECRET);
    if (accessToken) await revokeGrant(context.env, accessToken);
    await context.env.ACCOUNT_DB.batch([
      context.env.ACCOUNT_DB.prepare('DELETE FROM github_oauth_credential WHERE github_id = ?1').bind(session.githubId),
      context.env.ACCOUNT_DB.prepare('UPDATE site_session SET revoked_at = ?1 WHERE github_id = ?2 AND revoked_at IS NULL').bind(now(), session.githubId),
    ]);
    await audit(context.env.ACCOUNT_DB, session.githubId, 'oauth.disconnect', 'success');
  }
  deleteCookie(context, SESSION_COOKIE, { path: '/', secure: true });
  return context.body(null, 204);
});

app.post('/api/contributions/pull-requests', async (context) => {
  requireSameOrigin(context);
  const session = await requireSession(context);
  await requireCsrf(context, session.csrfToken);
  if (session.status !== 'active') return errorResponse(context, 403, 'account_restricted', '该账号当前不能投稿。');
  const parsed = contributionSchema.safeParse(await readBoundedJson(context, 1_100_000));
  if (!parsed.success) return context.json({ error: 'content_validation_failed', message: '投稿格式不合法。', details: parsed.error.issues }, 422);

  const token = await accessTokenFor(context.env, session.githubId);
  const github = new GitHubClient(token, context.env.GITHUB_REPOSITORY_OWNER, context.env.GITHUB_REPOSITORY_NAME);
  const pull = await github.createContribution(
    { id: session.githubId, login: session.login, avatar_url: session.avatarUrl },
    parsed.data,
  );
  return context.json({ pull_request: { number: pull.number, url: pull.html_url, state: pull.state } }, 201);
});

app.onError((error, context) => {
  if (error instanceof GitHubError) {
    const status = error.status === 401 ? 401 : error.status === 403 ? 403 : error.status === 409 ? 409 : error.status === 422 ? 422 : error.status === 429 ? 429 : 502;
    return errorResponse(context, status, error.code, error.message);
  }
  if (error instanceof HttpError) return errorResponse(context, error.status, error.code, error.message);
  console.error(JSON.stringify({ event: 'unhandled_error', error: error instanceof Error ? error.name : 'unknown' }));
  return errorResponse(context, 500, 'internal_error', '服务暂时不可用。');
});

app.notFound((context) => errorResponse(context, 404, 'not_found', '接口不存在。'));

async function saveIdentity(env: WorkerEnv, user: GitHubUser, token: OAuthToken, scopes: string[]): Promise<void> {
  const timestamp = now();
  const accessExpires = token.expires_in ? new Date(Date.now() + token.expires_in * 1000).toISOString() : null;
  const refreshExpires = token.refresh_token_expires_in ? new Date(Date.now() + token.refresh_token_expires_in * 1000).toISOString() : null;
  await env.ACCOUNT_DB.batch([
    env.ACCOUNT_DB.prepare(
      `INSERT INTO github_account (github_id, login, avatar_url, status, created_at, updated_at)
       VALUES (?1, ?2, ?3, 'active', ?4, ?4)
       ON CONFLICT(github_id) DO UPDATE SET login = excluded.login, avatar_url = excluded.avatar_url, updated_at = excluded.updated_at`,
    ).bind(user.id, user.login, user.avatar_url, timestamp),
    env.ACCOUNT_DB.prepare(
      `INSERT INTO github_oauth_credential
         (github_id, access_token_ciphertext, refresh_token_ciphertext, scopes, access_expires_at, refresh_expires_at, updated_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
       ON CONFLICT(github_id) DO UPDATE SET
         access_token_ciphertext = excluded.access_token_ciphertext,
         refresh_token_ciphertext = excluded.refresh_token_ciphertext,
         scopes = excluded.scopes,
         access_expires_at = excluded.access_expires_at,
         refresh_expires_at = excluded.refresh_expires_at,
         updated_at = excluded.updated_at`,
    ).bind(
      user.id,
      await sealJson(token.access_token, env.TOKEN_ENCRYPTION_SECRET),
      token.refresh_token ? await sealJson(token.refresh_token, env.TOKEN_ENCRYPTION_SECRET) : null,
      scopes.join(','),
      accessExpires,
      refreshExpires,
      timestamp,
    ),
  ]);
}

async function issueSession(database: D1Database, githubId: number): Promise<string> {
  const token = randomToken();
  const timestamp = now();
  await database.prepare(
    `INSERT INTO site_session (token_hash, github_id, csrf_token, created_at, expires_at)
     VALUES (?1, ?2, ?3, ?4, ?5)`,
  ).bind(
    await sha256(token),
    githubId,
    randomToken(),
    timestamp,
    new Date(Date.now() + SESSION_SECONDS * 1000).toISOString(),
  ).run();
  return token;
}

async function currentSession(context: Ctx): Promise<Session | null> {
  const cookie = getCookie(context, SESSION_COOKIE);
  if (!cookie) return null;
  const row = await context.env.ACCOUNT_DB.prepare(
    `SELECT s.token_hash, s.github_id, s.csrf_token, a.login, a.avatar_url, a.status, c.scopes
       FROM site_session s
       JOIN github_account a ON a.github_id = s.github_id
       JOIN github_oauth_credential c ON c.github_id = s.github_id
      WHERE s.token_hash = ?1 AND s.revoked_at IS NULL AND s.expires_at > ?2`,
  ).bind(await sha256(cookie), now()).first<{
    token_hash: string; github_id: number; csrf_token: string; login: string;
    avatar_url: string | null; status: string; scopes: string;
  }>();
  return row ? {
    tokenHash: row.token_hash,
    githubId: row.github_id,
    login: row.login,
    avatarUrl: row.avatar_url,
    status: row.status,
    csrfToken: row.csrf_token,
    scopes: row.scopes,
  } : null;
}

async function requireSession(context: Ctx): Promise<Session> {
  const session = await currentSession(context);
  if (!session) throw new HttpError(401, 'authentication_required', '请先使用 GitHub 登录。');
  return session;
}

async function accessTokenFor(env: WorkerEnv, githubId: number): Promise<string> {
  const credential = await credentialFor(env.ACCOUNT_DB, githubId);
  if (!credential) throw new HttpError(403, 'github_scope_required', 'GitHub 授权已断开，请重新登录。');
  const scopes = normalizeScopes(credential.scopes);
  if (!scopes.includes('public_repo')) throw new HttpError(403, 'github_scope_required', '需要 GitHub public_repo 权限。');
  const accessToken = await openJson<string>(credential.access_token_ciphertext, env.TOKEN_ENCRYPTION_SECRET);
  if (!accessToken) throw new HttpError(403, 'github_scope_required', 'GitHub 凭据不可用，请重新登录。');
  if (!credential.access_expires_at || Date.parse(credential.access_expires_at) > Date.now() + 60_000) return accessToken;
  if (!credential.refresh_token_ciphertext) throw new HttpError(403, 'github_scope_required', 'GitHub 授权已过期，请重新登录。');
  const refreshToken = await openJson<string>(credential.refresh_token_ciphertext, env.TOKEN_ENCRYPTION_SECRET);
  if (!refreshToken) throw new HttpError(403, 'github_scope_required', 'GitHub 授权已过期，请重新登录。');
  const refreshed = await refreshOAuthToken(env, refreshToken);
  const user = await env.ACCOUNT_DB.prepare('SELECT login, avatar_url FROM github_account WHERE github_id = ?1')
    .bind(githubId).first<{ login: string; avatar_url: string | null }>();
  if (!user) throw new HttpError(401, 'authentication_required', '账号不存在。');
  await saveIdentity(env, { id: githubId, login: user.login, avatar_url: user.avatar_url }, refreshed, normalizeScopes(refreshed.scope));
  return refreshed.access_token;
}

function credentialFor(database: D1Database, githubId: number): Promise<CredentialRow | null> {
  return database.prepare(
    `SELECT access_token_ciphertext, refresh_token_ciphertext, scopes, access_expires_at
       FROM github_oauth_credential WHERE github_id = ?1`,
  ).bind(githubId).first<CredentialRow>();
}

function requireSameOrigin(context: Ctx): void {
  const origin = context.req.header('origin');
  if (origin !== context.env.SITE_ORIGIN) throw new HttpError(403, 'invalid_origin', '请求来源无效。');
}

async function requireCsrf(context: Ctx, expected: string): Promise<void> {
  const actual = context.req.header('x-csrf-token') ?? '';
  if (!actual || !(await safeEqual(actual, expected))) throw new HttpError(403, 'invalid_csrf', 'CSRF token 无效。');
}

function sessionCookieOptions() {
  return { httpOnly: true, secure: true, sameSite: 'Lax' as const, path: '/', maxAge: SESSION_SECONDS };
}

function normalizeScopes(scopes: string): string[] {
  return [...new Set(scopes.split(/[ ,]+/).map((scope) => scope.trim()).filter(Boolean))].sort();
}

function now(): string {
  return new Date().toISOString();
}

async function readBoundedJson(context: Ctx, limit: number): Promise<unknown> {
  const declared = Number(context.req.header('content-length') ?? 0);
  if (declared > limit) throw new HttpError(413, 'payload_too_large', '投稿内容超过大小限制。');
  const reader = context.req.raw.body?.getReader();
  if (!reader) throw new HttpError(400, 'invalid_json', '请求正文不能为空。');
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const result = await reader.read();
    if (result.done) break;
    size += result.value.byteLength;
    if (size > limit) {
      await reader.cancel();
      throw new HttpError(413, 'payload_too_large', '投稿内容超过大小限制。');
    }
    chunks.push(result.value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
  } catch {
    throw new HttpError(400, 'invalid_json', '请求正文不是合法 JSON。');
  }
}

async function audit(database: D1Database, githubId: number | null, action: string, outcome: string): Promise<void> {
  await database.prepare(
    'INSERT INTO account_security_audit (github_id, action, outcome, created_at) VALUES (?1, ?2, ?3, ?4)',
  ).bind(githubId, action, outcome, now()).run();
}

function errorResponse(context: Ctx, status: number, error: string, message: string) {
  return context.json({ error, message }, status as 400);
}

class HttpError extends Error {
  constructor(readonly status: number, readonly code: string, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export default app;
