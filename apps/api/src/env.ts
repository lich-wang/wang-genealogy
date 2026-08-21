export interface Env {
  DB: D1Database;
  AUTH_SECRET: string;
  ALLOWED_ORIGIN: string;
  TURNSTILE_SECRET?: string;
  /** Comma-separated sha-256 email hashes granted `admin` on signup/login. */
  BOOTSTRAP_ADMIN_HASHES?: string;
}

/** Authenticated user context attached to a request after auth middleware. */
export interface AuthContext {
  userId: string;
  role: string;
  status: string;
}

export type Variables = {
  auth: AuthContext | null;
};
