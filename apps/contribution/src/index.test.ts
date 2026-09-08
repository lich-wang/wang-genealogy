import { describe, expect, it } from 'vitest';
import app from './index.ts';
import type { WorkerEnv } from './env.ts';

const env = {
  ACCOUNT_DB: {} as D1Database,
  SITE_ORIGIN: 'https://history.wang',
  GITHUB_REPOSITORY_OWNER: 'lich-wang',
  GITHUB_REPOSITORY_NAME: 'wang-genealogy',
  GITHUB_CLIENT_ID: 'client-id',
  GITHUB_CLIENT_SECRET: 'client-secret',
  TOKEN_ENCRYPTION_SECRET: 'encryption-secret',
} satisfies WorkerEnv;

describe('GET /api/account/me', () => {
  it('匿名状态是正常响应，不制造浏览器 401 错误', async () => {
    const response = await app.request('https://history.wang/api/account/me', undefined, env);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ user: null, can_submit: false, csrf_token: null });
  });
});
