import { describe, expect, it } from 'vitest';
import app from './index.ts';
import { snapshotBucketFile } from './publicSnapshot.ts';

describe('anonymous public snapshot', () => {
  it('serves every public reading surface without touching D1', async () => {
    const personId = 'p_Alpha';
    const claimId = 'c_Bravo';
    const sourceId = 's_Charlie';
    const mergeId = 'm_Delta';
    const generatedAt = '2026-09-02T00:00:00.000Z';
    const files = new Map<string, unknown>([
      ['public/index.json', {
        generated_at: generatedAt,
        highlights: [{ id: personId, display_name: '王甲', relative_count: 1, is_surname_progenitor: false }],
      }],
      ['public/search.json', [{
          id: personId,
          status: 'active',
          display_name: '王甲',
          merged_into_person_id: null,
          birth_text: null,
          death_text: null,
          origin_text: null,
          branch_text: null,
          also_known_as: [],
          relative_count: 1,
          created_at: '2026-01-01T00:00:00.000Z',
          search_terms: ['王甲'],
        }]],
      ['public/source-search.json', [{ id: sourceId, title: '甲谱', creator: null, external_identifier: null, created_at: generatedAt }]],
      ['public/changes.json', [{ contribution_id: 'ct_1', created_at: generatedAt }]],
      [snapshotBucketFile('persons', personId), { [personId]: {
        summary: { person: { id: personId, status: 'active' }, display_name: '王甲', properties: [], relationships: {} },
        claims: [{ id: claimId, status: 'accepted' }],
        history: [{ id: 'ct_1' }],
        export: { person: { id: personId }, claims: [], sources: [], merge_proposals: [] },
      } }],
      [snapshotBucketFile('claims', claimId), { [claimId]: { claim: { id: claimId }, sources: [], revisions: [] } }],
      [snapshotBucketFile('sources', sourceId), { [sourceId]: { source: { id: sourceId, title: '甲谱' }, claims: [] } }],
      [snapshotBucketFile('merges', mergeId), { [mergeId]: { proposal: { id: mergeId } } }],
      ['index.json', { [personId]: 'component-0000.json' }],
      ['component-0000.json', {
        root_id: personId,
        scope: 'all',
        up: 0,
        down: 0,
        nodes: [{ id: personId, display_name: '王甲', status: 'active' }],
        parent_edges: [], spouse_edges: [], descent_edges: [], truncated: false,
      }],
    ]);
    let dbCalls = 0;
    const env = {
      DB: new Proxy({}, { get() { dbCalls += 1; throw new Error('D1 must not be used'); } }),
      TREE_SNAPSHOT: {
        async fetch(input: RequestInfo | URL) {
          const url = new URL(input instanceof Request ? input.url : String(input));
          const value = files.get(url.pathname.slice(1));
          return value == null ? new Response(null, { status: 404 }) : Response.json(value);
        },
      },
      AUTH_SECRET: 'test-secret',
      ALLOWED_ORIGIN: '*',
    };

    const urls = [
      `/api/v1/search?q=${encodeURIComponent('王甲')}`,
      '/api/v1/kinship-highlights',
      '/api/v1/changes',
      `/api/v1/persons/${personId}`,
      `/api/v1/persons/${personId}/claims`,
      `/api/v1/persons/${personId}/history`,
      `/api/v1/persons/${personId}/export`,
      `/api/v1/persons/${personId}/relatives?up=2&down=2`,
      `/api/v1/persons/${personId}/relatives?scope=all`,
      `/api/v1/claims/${claimId}`,
      `/api/v1/sources?q=${encodeURIComponent('甲谱')}`,
      `/api/v1/sources/${sourceId}`,
      `/api/v1/sources/${sourceId}/claims`,
      `/api/v1/person-merge-proposals/${mergeId}`,
    ];
    for (const path of urls) {
      const response = await app.request(`https://example.test${path}`, {}, env as never);
      expect(response.status, path).toBe(200);
      expect(response.headers.get('X-Wang-D1'), path).toBe('BYPASS');
    }
    const invalidBearer = await app.request(`https://example.test/api/v1/persons/${personId}`, {
      headers: { Authorization: 'Bearer not-a-signed-session' },
    }, env as never);
    expect(invalidBearer.status).toBe(200);
    expect(invalidBearer.headers.get('X-Wang-D1')).toBe('BYPASS');
    expect(dbCalls).toBe(0);
  });
});
