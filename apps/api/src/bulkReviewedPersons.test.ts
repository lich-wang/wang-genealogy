import { Hono } from 'hono';
import { describe, expect, it } from 'vitest';
import type { Env, Variables } from './env.ts';
import bulkPersons, { bulkReviewedPersonsSchema } from './routes/bulkPersons.ts';
import { AppError } from './errors.ts';
import { normalizeDate } from '@wang/validation';

interface StatementRecord {
  sql: string;
  binds: unknown[];
}

function testApp(validationResults: unknown[][] | ((statements: StatementRecord[]) => unknown[][])) {
  const batches: StatementRecord[][] = [];
  let batchIndex = 0;
  const db = {
    prepare(sql: string) {
      const record: StatementRecord = { sql, binds: [] };
      const statement = {
        bind(...binds: unknown[]) {
          record.binds = binds;
          return statement;
        },
      };
      Object.assign(statement, { __record: record });
      return statement;
    },
    batch(statements: Array<{ __record: StatementRecord }>) {
      batches.push(statements.map((statement) => statement.__record));
      if (batchIndex++ === 0) {
        const rows = typeof validationResults === 'function' ? validationResults(batches[0]!) : validationResults;
        return Promise.resolve(rows.map((results) => ({ results })));
      }
      return Promise.resolve(statements.map(() => ({ results: [] })));
    },
  };
  const app = new Hono<{ Bindings: Env; Variables: Variables }>();
  app.use('*', async (c, next) => {
    c.set('auth', { userId: 'user_admin', role: 'admin', status: 'active' });
    await next();
  });
  app.route('/persons', bulkPersons);
  app.onError((error, c) => {
    if (error instanceof AppError) return c.json(error.toBody(), error.status as 400);
    throw error;
  });
  return { app, env: { DB: db as unknown as D1Database } as Env, batches };
}

const item = {
  identity_key: 'cbdb:1831',
  historicity: { kind: 'cbdb_death_year', detail: 'CBDB 卒年 = 982' },
  source: {
    source_type: 'api_record',
    title: '中国历代人物传记资料库：王仁贍（CBDB 1831）',
    creator: 'China Biographical Database (CBDB)',
    publisher: 'Harvard University / Academia Sinica / Peking University',
    canonical_url: 'https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1831&o=json',
    external_identifier: 'CBDB:1831',
    license_code: 'CC-BY-NC-SA-4.0',
    metadata_json: { source_release: 'CBDB 2026-08-29' },
  },
  claims: [
    {
      predicate: 'name.primary',
      value: { text: '王仁贍', language: 'zh-Hant' },
      confidence: 'high',
      change_summary: 'CBDB 明确记录的王姓历史人物（1831）',
    },
    {
      predicate: 'death.date',
      value: { date: { original_text: '982年', calendar_note: 'CBDB 卒年字段，精度：年' } },
      confidence: 'medium',
      change_summary: 'CBDB 卒年',
    },
  ],
};

describe('bulk reviewed persons', () => {
  it('rejects script-insensitive duplicate names before touching D1', async () => {
    const duplicate = {
      ...item,
      identity_key: 'cbdb:9999',
      source: { ...item.source, external_identifier: 'CBDB:9999', canonical_url: 'https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=9999&o=json' },
      claims: item.claims.map((claim) => claim.predicate === 'name.primary'
        ? { ...claim, value: { text: '王仁赡', language: 'zh-Hans' } }
        : claim),
    };
    expect(() => bulkReviewedPersonsSchema.parse({ summary: 'Luna 审核通过', items: [item, duplicate] }))
      .toThrow('批次中的主姓名不能简繁重复');
  });

  it('creates a reviewed roster with one validation and one write batch', async () => {
    const { app, env, batches } = testApp([
      [{ request_index: 0, source_count: 0, source_url: null, person_count: 0, person_id: null, person_status: null, identity_name: null }],
      [],
      [],
    ]);
    const response = await app.request('http://local/persons/bulk-reviewed', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ summary: 'Luna 审核通过', items: [item] }),
    }, env);

    expect(response.status).toBe(201);
    await expect(response.json()).resolves.toMatchObject({
      requested: 1,
      created: 1,
      reused: 0,
      skipped_noop: 0,
      d1_validation_batches: 1,
      d1_write_batches: 1,
    });
    expect(batches).toHaveLength(2);
    expect(batches[0]).toHaveLength(3);
    expect(batches[1]).toHaveLength(7);
    expect(batches[1]!.every((statement) => statement.sql.includes('json_each'))).toBe(true);
    const records = JSON.parse(batches[1]![0]!.binds[0] as string);
    expect(records).toHaveLength(1);
    expect(records[0]).toMatchObject({ identity_key: 'cbdb:1831', actor_user_id: 'user_admin' });
    expect(records[0].claims).toHaveLength(2);
  });

  it('returns an exact existing identity as a zero-write no-op', async () => {
    const { app, env, batches } = testApp((statements) => {
      const requested = JSON.parse(statements[0]!.binds[0] as string)[0];
      return [
        [{
          request_index: 0,
          import_identity_key: 'cbdb:1831',
          source_identity: requested.source_identity,
          folded_name: requested.folded_name,
          content_hash: requested.content_hash,
          source_count: 1,
          source_url: item.source.canonical_url,
          person_count: 1,
          person_id: 'person_existing',
          person_status: 'active',
          identity_name: '王仁贍',
        }],
        [{ person_id: 'person_existing', name: '王仁贍' }],
        [
          { request_index: 0, predicate: 'name.primary', value_json: JSON.stringify(item.claims[0]!.value), status: 'accepted', confidence: 'high', source_matches: 1 },
          { request_index: 0, predicate: 'death.date', value_json: JSON.stringify({ date: normalizeDate('982年', 'CBDB 卒年字段，精度：年') }), status: 'accepted', confidence: 'medium', source_matches: 1 },
        ],
      ];
    });
    const response = await app.request('http://local/persons/bulk-reviewed', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ summary: 'Luna 审核通过', items: [item] }),
    }, env);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      requested: 1,
      created: 0,
      reused: 1,
      skipped_noop: 1,
      d1_write_batches: 0,
      items: [{ identity_key: 'cbdb:1831', person_id: 'person_existing' }],
    });
    expect(batches).toHaveLength(1);
  });

  it('rejects a changed or missing durable claim instead of reporting no-op', async () => {
    const { app, env, batches } = testApp((statements) => {
      const requested = JSON.parse(statements[0]!.binds[0] as string)[0];
      return [
        [{
          request_index: 0,
          import_identity_key: 'cbdb:1831',
          source_identity: requested.source_identity,
          folded_name: requested.folded_name,
          content_hash: requested.content_hash,
          source_count: 1,
          source_url: item.source.canonical_url,
          person_count: 1,
          person_id: 'person_existing',
          person_status: 'active',
        }],
        [{ person_id: 'person_existing', name: '王仁贍' }],
        [{ request_index: 0, predicate: 'name.primary', value_json: JSON.stringify(item.claims[0]!.value), status: 'accepted', confidence: 'high', source_matches: 1 }],
      ];
    });
    const response = await app.request('http://local/persons/bulk-reviewed', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ summary: 'Luna 审核通过', items: [item] }),
    }, env);

    expect(response.status).toBe(409);
    await expect(response.json()).resolves.toMatchObject({ error: 'import_claim_changed' });
    expect(batches).toHaveLength(1);
  });
});
