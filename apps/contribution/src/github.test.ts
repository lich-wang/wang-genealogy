import { afterEach, describe, expect, it, vi } from 'vitest';
import { GitHubClient } from './github.ts';
import type { ContributionInput } from './contracts.ts';

const submissionId = '01994f07-8a50-7a1f-89af-6ddf3ab614d8';
const input: ContributionInput = {
  submission_id: submissionId,
  base_sha: 'a'.repeat(40),
  title: 'content: 更新人物',
  body: '来源说明',
  changes: [{
    path: 'content/persons/p_123456789ABCDEFGHJKLMN.md',
    content: '---\nschema: wang-person/v1\nid: p_123456789ABCDEFGHJKLMN\n---\n',
  }],
};
const user = { id: 8718, login: 'contributor', avatar_url: null };

afterEach(() => vi.unstubAllGlobals());

describe('GitHubClient.createContribution', () => {
  it('相同 submission id 已有 PR 时零写入返回原结果', async () => {
    const calls: Array<{ method: string; url: string }> = [];
    vi.stubGlobal('fetch', vi.fn(async (request: string | URL | Request, init?: RequestInit) => {
      calls.push({ method: init?.method ?? 'GET', url: String(request) });
      return json([{ number: 42, html_url: 'https://github.com/o/r/pull/42', state: 'open', head: { ref: 'branch' } }]);
    }));
    const result = await new GitHubClient('token', 'owner', 'repo').createContribution(user, input);
    expect(result.number).toBe(42);
    expect(calls).toHaveLength(1);
    expect(calls[0]?.method).toBe('GET');
  });

  it('分支创建成功但 PR 响应丢失时只补建 PR', async () => {
    const calls: Array<{ method: string; url: string }> = [];
    const responses = [
      json([]),
      json({ fork: true, parent: { full_name: 'owner/repo' } }),
      json({ object: { sha: 'b'.repeat(40) } }),
      json({ message: `content: 更新人物\n\nSubmission-ID: ${submissionId}` }),
      json({ number: 43, html_url: 'https://github.com/o/r/pull/43', state: 'open', head: { ref: 'branch' } }),
    ];
    vi.stubGlobal('fetch', vi.fn(async (request: string | URL | Request, init?: RequestInit) => {
      calls.push({ method: init?.method ?? 'GET', url: String(request) });
      return responses.shift() ?? json({ message: 'unexpected' }, 500);
    }));
    const result = await new GitHubClient('token', 'owner', 'repo').createContribution(user, input);
    expect(result.number).toBe(43);
    expect(calls.map((call) => call.method)).toEqual(['GET', 'GET', 'GET', 'GET', 'POST']);
    expect(calls.some((call) => /git\/(blobs|trees|refs)/.test(call.url) && call.method === 'POST')).toBe(false);
  });

  it('首次投稿在用户 fork 中创建一个 commit 后向上游开 PR', async () => {
    const calls: Array<{ method: string; url: string; body?: unknown }> = [];
    const responses = [
      json([]),
      json({ fork: true, parent: { full_name: 'owner/repo' } }),
      json({ message: 'Not Found' }, 404),
      json({ object: { sha: input.base_sha } }),
      json({ tree: { sha: 'b'.repeat(40) } }),
      json({ sha: 'c'.repeat(40) }),
      json({ sha: 'd'.repeat(40) }),
      json({ sha: 'e'.repeat(40) }),
      json({ ref: `refs/heads/contrib/${user.id}/${submissionId}` }),
      json({ number: 44, html_url: 'https://github.com/o/r/pull/44', state: 'open', head: { ref: 'branch' } }),
    ];
    vi.stubGlobal('fetch', vi.fn(async (request: string | URL | Request, init?: RequestInit) => {
      calls.push({
        method: init?.method ?? 'GET',
        url: String(request),
        body: typeof init?.body === 'string' ? JSON.parse(init.body) as unknown : undefined,
      });
      return responses.shift() ?? json({ message: 'unexpected' }, 500);
    }));

    const result = await new GitHubClient('token', 'owner', 'repo').createContribution(user, input);

    expect(result.number).toBe(44);
    expect(calls.map((call) => call.method)).toEqual([
      'GET', 'GET', 'GET', 'GET', 'GET', 'POST', 'POST', 'POST', 'POST', 'POST',
    ]);
    expect(calls[8]?.body).toEqual({
      ref: `refs/heads/contrib/${user.id}/${submissionId}`,
      sha: 'e'.repeat(40),
    });
    expect(calls[9]?.body).toMatchObject({
      head: `${user.login}:contrib/${user.id}/${submissionId}`,
      base: 'main',
      maintainer_can_modify: true,
    });
  });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
