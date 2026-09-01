import { describe, expect, it } from 'vitest';
import type { Env } from './env.ts';
import sources from './routes/sources.ts';

const sourceRow = {
  id: 'source_1',
  source_type: 'book',
  title: '资治通鉴',
  creator: '司马光',
  publisher: null,
  published_at_text: null,
  canonical_url: null,
  external_identifier: null,
  license_code: 'public-domain',
  accessed_at: null,
  metadata_json: null,
  created_by_user_id: 'user_1',
  created_at: '2026-01-01T00:00:00.000Z',
};

function fakeEnv(rows: unknown[] = []) {
  const executed: Array<{ sql: string; binds: unknown[] }> = [];
  const db = {
    prepare(sql: string) {
      const statement = {
        bind(...binds: unknown[]) {
          executed.push({ sql, binds });
          return statement;
        },
        all() { return Promise.resolve({ results: rows }); },
      };
      return statement;
    },
  };
  return {
    env: { DB: db as unknown as D1Database } as Env,
    executed,
  };
}

describe('source search', () => {
  it('returns readable source records for the title picker', async () => {
    const { env, executed } = fakeEnv([sourceRow]);
    const response = await sources.request('http://local/?q=资治', {}, env);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      items: [{ id: 'source_1', title: '资治通鉴', creator: '司马光' }],
    });
    expect(executed[0]!.sql).toContain('title LIKE ?');
    expect(executed[0]!.binds).toEqual(['%资治%', '%资治%', '%资治%', '资治']);
  });

  it('does not query the database for a blank search', async () => {
    const { env, executed } = fakeEnv();
    const response = await sources.request('http://local/?q=%20%20', {}, env);
    expect(await response.json()).toEqual({ items: [] });
    expect(executed).toEqual([]);
  });
});
