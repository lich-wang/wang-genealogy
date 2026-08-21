import type { Context, Next } from 'hono';
import type { AuthContext, Env, Variables } from './env.ts';
import { hashPassword, sha256Hex, signToken, verifyPassword, verifyToken } from './crypto.ts';
import { mapUser } from './db.ts';
import { AppError, badRequest, conflict, unauthorized } from './errors.ts';
import { addDaysIso, newId, nowIso } from './util.ts';
import type { LoginInput, SignupInput } from '@wang/validation';

type Ctx = Context<{ Bindings: Env; Variables: Variables }>;

const SESSION_TTL_DAYS = 30;

/** Whether an email hash is designated a bootstrap admin via env config. */
function isBootstrapAdmin(env: Env, emailHash: string): boolean {
  const set = (env.BOOTSTRAP_ADMIN_HASHES ?? '')
    .split(',')
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  return set.includes(emailHash.toLowerCase());
}

export async function signup(env: Env, input: SignupInput) {
  const db = env.DB;
  const emailHash = await sha256Hex(input.email.trim().toLowerCase());
  const existing = await db.prepare('SELECT id FROM user WHERE email_hash = ?').bind(emailHash).first();
  if (existing) throw conflict('email_taken', '該電子郵件已註冊。');

  const userId = newId('user');
  const passwordHash = await hashPassword(input.password);
  const role = isBootstrapAdmin(env, emailHash) ? 'admin' : 'contributor';
  const now = nowIso();
  await db
    .prepare(
      `INSERT INTO user (id, display_name, email_hash, password_hash, role, status, created_at)
       VALUES (?, ?, ?, ?, ?, 'active', ?)`,
    )
    .bind(userId, input.display_name, emailHash, passwordHash, role, now)
    .run();

  return { ...(await issueSession(db, env.AUTH_SECRET, userId)), role };
}

export async function login(env: Env, input: LoginInput) {
  const db = env.DB;
  const emailHash = await sha256Hex(input.email.trim().toLowerCase());
  const row = await db
    .prepare('SELECT * FROM user WHERE email_hash = ?')
    .bind(emailHash)
    .first<Record<string, unknown>>();
  if (!row || !row.password_hash) throw unauthorized('電子郵件或密碼不正確。');
  const ok = await verifyPassword(input.password, row.password_hash as string);
  if (!ok) throw unauthorized('電子郵件或密碼不正確。');
  if ((row.status as string) === 'banned') throw new AppError(403, 'account_banned', '帳號已被封禁。');

  // Idempotently promote a designated bootstrap admin on login.
  if (isBootstrapAdmin(env, emailHash) && (row.role as string) !== 'admin') {
    await db.prepare("UPDATE user SET role = 'admin' WHERE id = ?").bind(row.id as string).run();
    row.role = 'admin';
  }

  const session = await issueSession(db, env.AUTH_SECRET, row.id as string);
  return { ...session, user: mapUser(row) };
}

async function issueSession(db: D1Database, secret: string, userId: string) {
  const sessionId = newId('contribution').replace('ct_', 'sess_');
  const now = nowIso();
  await db
    .prepare('INSERT INTO session (id, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)')
    .bind(sessionId, userId, now, addDaysIso(SESSION_TTL_DAYS))
    .run();
  const token = await signToken(secret, sessionId);
  return { token, user_id: userId };
}

/** Resolve the bearer token into an AuthContext, or null. Never throws on absence. */
export async function resolveAuth(c: Ctx): Promise<AuthContext | null> {
  const header = c.req.header('authorization');
  if (!header?.startsWith('Bearer ')) return null;
  const token = header.slice(7).trim();
  const sessionId = await verifyToken(c.env.AUTH_SECRET, token);
  if (!sessionId) return null;

  const row = await c.env.DB.prepare(
    `SELECT s.expires_at, u.id AS user_id, u.role, u.status
       FROM session s JOIN user u ON u.id = s.user_id
      WHERE s.id = ?`,
  )
    .bind(sessionId)
    .first<Record<string, unknown>>();
  if (!row) return null;
  if ((row.expires_at as string) < nowIso()) return null;
  return {
    userId: row.user_id as string,
    role: row.role as string,
    status: row.status as string,
  };
}

/** Middleware: attach auth (nullable) to the context. */
export async function authMiddleware(c: Ctx, next: Next) {
  c.set('auth', await resolveAuth(c));
  await next();
}

/** Require an authenticated, non-banned user; returns the AuthContext. */
export function requireAuth(c: Ctx): AuthContext {
  const auth = c.get('auth');
  if (!auth) throw unauthorized();
  if (auth.status === 'banned') throw new AppError(403, 'account_banned', '帳號已被封禁。');
  if (auth.status === 'restricted') throw new AppError(403, 'account_restricted', '帳號被限制投稿。');
  return auth;
}

export function requireRole(c: Ctx, roles: string[]): AuthContext {
  const auth = requireAuth(c);
  if (!roles.includes(auth.role)) throw badRequest('insufficient_role', '需要更高的許可權角色。');
  return auth;
}
