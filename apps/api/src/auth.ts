import type { Context, Next } from 'hono';
import type { AuthContext, Env, Variables } from './env.ts';
import { hashPassword, sha256Hex, signToken, verifyPassword, verifyToken } from './crypto.ts';
import { mapUser } from './db.ts';
import { AppError, badRequest, conflict, unauthorized } from './errors.ts';
import { addDaysIso, newId, nowIso } from './util.ts';
import type { LoginInput, SignupInput } from '@wang/validation';
import type { User } from '@wang/domain';

type Ctx = Context<{ Bindings: Env; Variables: Variables }>;

const SESSION_TTL_DAYS = 30;
const EMAIL_VERIFICATION_TTL_MINUTES = 30;

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function randomCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return `WG-${[...bytes].map((b) => b.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

function verificationAddress(baseAddress: string, code: string): string {
  const at = baseAddress.lastIndexOf('@');
  if (at <= 0) throw new Error('REGISTRATION_EMAIL_ADDRESS 配置无效');
  return `${baseAddress.slice(0, at)}+${code}@${baseAddress.slice(at + 1)}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function requestEmailVerification(env: Env, email: string) {
  const normalized = normalizeEmail(email);
  const emailHash = await sha256Hex(normalized);
  const recent = await env.DB.prepare(
    `SELECT COUNT(*) AS count FROM email_registration_verification
      WHERE email_hash = ? AND created_at >= ?`,
  ).bind(emailHash, new Date(Date.now() - 60 * 60_000).toISOString()).first<{ count: number }>();
  if ((recent?.count ?? 0) >= 5) {
    throw new AppError(429, 'verification_rate_limited', '验证请求过于频繁，请稍后再试。');
  }
  const id = `ev_${crypto.randomUUID().replaceAll('-', '')}`;
  const code = randomCode();
  const now = nowIso();
  const expiresAt = new Date(Date.now() + EMAIL_VERIFICATION_TTL_MINUTES * 60_000).toISOString();
  await env.DB.prepare(
    `INSERT INTO email_registration_verification
       (id, email_hash, code_hash, status, created_at, expires_at)
     VALUES (?, ?, ?, 'pending', ?, ?)`,
  )
    .bind(id, emailHash, await sha256Hex(code), now, expiresAt)
    .run();

  const recipient = verificationAddress(env.REGISTRATION_EMAIL_ADDRESS, code);
  return {
    verification_token: await signToken(env.AUTH_SECRET, id),
    recipient,
    subject: `王氏族谱注册验证 ${code}`,
    expires_at: expiresAt,
  };
}

export async function emailVerificationStatus(env: Env, token: string) {
  const id = await verifyToken(env.AUTH_SECRET, token);
  if (!id?.startsWith('ev_')) throw unauthorized('验证请求无效。');
  const row = await env.DB.prepare(
    'SELECT status, expires_at FROM email_registration_verification WHERE id = ?',
  ).bind(id).first<{ status: string; expires_at: string }>();
  if (!row) throw unauthorized('验证请求无效。');
  return { verified: row.status === 'verified' && row.expires_at >= nowIso(), expires_at: row.expires_at };
}

/** Handle an inbound message without reading or retaining its body. */
export async function verifyRegistrationEmail(env: Env, message: ForwardableEmailMessage): Promise<void> {
  const configured = env.REGISTRATION_EMAIL_ADDRESS.trim().toLowerCase();
  const at = configured.lastIndexOf('@');
  const recipient = message.to.trim().toLowerCase();
  const prefix = configured.slice(0, at);
  const domain = configured.slice(at + 1);
  const match = new RegExp(`^${escapeRegExp(prefix)}\\+(wg-[0-9a-f]{16})@${escapeRegExp(domain)}$`, 'i').exec(recipient);
  if (!match) {
    message.setReject('Unknown registration verification address');
    return;
  }

  const codeHash = await sha256Hex(match[1]!.toUpperCase());
  const senderHash = await sha256Hex(normalizeEmail(message.from));
  const result = await env.DB.prepare(
    `UPDATE email_registration_verification
        SET status = 'verified', verified_at = ?
      WHERE code_hash = ? AND email_hash = ? AND status = 'pending' AND expires_at >= ?`,
  ).bind(nowIso(), codeHash, senderHash, nowIso()).run();
  if (!result.meta.changes) message.setReject('Verification expired or sender does not match');
}

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
  const emailHash = await sha256Hex(normalizeEmail(input.email));
  const existing = await db.prepare('SELECT id FROM user WHERE email_hash = ?').bind(emailHash).first();
  if (existing) throw conflict('email_taken', '該電子郵件已註冊。');

  const userId = newId('user');
  const role = isBootstrapAdmin(env, emailHash) ? 'admin' : 'contributor';
  const now = nowIso();
  const verificationId = await verifyToken(env.AUTH_SECRET, input.verification_token);
  if (!verificationId?.startsWith('ev_')) throw unauthorized('请先完成邮箱验证。');
  const verification = await db.prepare(
    `SELECT status, email_hash, expires_at FROM email_registration_verification WHERE id = ?`,
  ).bind(verificationId).first<{ status: string; email_hash: string; expires_at: string }>();
  if (!verification || verification.status !== 'verified' || verification.email_hash !== emailHash || verification.expires_at < now) {
    throw unauthorized('请先用该邮箱发送验证邮件。');
  }
  const passwordHash = await hashPassword(input.password);

  await db.batch([
    db.prepare(
      `INSERT INTO user (id, display_name, email_hash, password_hash, role, status, created_at)
       VALUES (?, ?, ?, ?, ?, 'active', ?)`,
    ).bind(userId, input.display_name, emailHash, passwordHash, role, now),
    db.prepare(
      `UPDATE email_registration_verification SET status = 'consumed', consumed_at = ?
        WHERE id = ? AND status = 'verified'`,
    ).bind(now, verificationId),
  ]);

  // Return the same `user` shape as login, so a client can show who is signed
  // in without a follow-up /auth/me round trip.
  const user: User = {
    id: userId,
    display_name: input.display_name,
    email_hash: emailHash,
    external_login: null,
    role,
    status: 'active',
    created_at: now,
  };
  return { ...(await issueSession(db, env.AUTH_SECRET, userId)), role, user };
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
