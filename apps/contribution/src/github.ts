import type { ContributionInput } from './contracts.ts';
import { contributionBranch } from './contracts.ts';
import type { WorkerEnv } from './env.ts';

const API_VERSION = '2026-03-10';

export interface OAuthToken {
  access_token: string;
  token_type: string;
  scope: string;
  refresh_token?: string;
  expires_in?: number;
  refresh_token_expires_in?: number;
  error?: string;
  error_description?: string;
}

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string | null;
}

export interface ContributionBase {
  base_sha: string;
  path: string;
  content: string;
}

interface PullRequest {
  number: number;
  html_url: string;
  state: string;
  head: { ref: string };
}

export class GitHubError extends Error {
  constructor(readonly status: number, message: string, readonly code = 'github_unavailable') {
    super(message);
    this.name = 'GitHubError';
  }
}

export async function exchangeOAuthCode(env: WorkerEnv, code: string, verifier: string): Promise<OAuthToken> {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${env.SITE_ORIGIN}/api/auth/github/callback`,
      code_verifier: verifier,
    }),
  });
  const token = await response.json<OAuthToken>();
  if (!response.ok || token.error || !token.access_token) {
    throw new GitHubError(response.status, token.error_description ?? 'GitHub OAuth 授权失败。');
  }
  return token;
}

export async function refreshOAuthToken(env: WorkerEnv, refreshToken: string): Promise<OAuthToken> {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });
  const token = await response.json<OAuthToken>();
  if (!response.ok || token.error || !token.access_token) {
    throw new GitHubError(response.status, token.error_description ?? 'GitHub OAuth token 刷新失败。');
  }
  return token;
}

export async function revokeGrant(env: WorkerEnv, accessToken: string): Promise<void> {
  const credentials = btoa(`${env.GITHUB_CLIENT_ID}:${env.GITHUB_CLIENT_SECRET}`);
  const response = await fetch(`https://api.github.com/applications/${encodeURIComponent(env.GITHUB_CLIENT_ID)}/grant`, {
    method: 'DELETE',
    headers: githubHeaders(accessToken, { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/json' }),
    body: JSON.stringify({ access_token: accessToken }),
  });
  if (!response.ok && response.status !== 404) throw new GitHubError(response.status, '无法撤销 GitHub 授权。');
}

export class GitHubClient {
  constructor(
    private readonly token: string,
    private readonly owner: string,
    private readonly repository: string,
  ) {}

  async currentUser(): Promise<GitHubUser> {
    return this.request<GitHubUser>('GET', '/user');
  }

  async contributionBase(personId: string): Promise<ContributionBase> {
    const reference = await this.request<{ object: { sha: string } }>(
      'GET',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/git/ref/heads/main`,
    );
    const isNew = personId.startsWith('new:');
    const stableId = isNew ? personId.slice(4) : personId;
    const path = isNew ? 'content/templates/person.md' : `content/persons/${stableId}.md`;
    const file = await this.request<{ content: string; encoding: string }>(
      'GET',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/contents/${path}?ref=${reference.object.sha}`,
    );
    if (file.encoding !== 'base64') throw new GitHubError(502, 'GitHub 返回了无法识别的文件编码。');
    let content = decodeBase64(file.content.replaceAll('\n', ''));
    if (isNew) content = content.replaceAll('p_REPLACE_WITH_STABLE_ID', stableId);
    return {
      base_sha: reference.object.sha,
      path: `content/persons/${stableId}.md`,
      content,
    };
  }

  async createContribution(user: GitHubUser, input: ContributionInput): Promise<PullRequest> {
    const branch = contributionBranch(user.id, input.submission_id);
    const existing = await this.findPullRequest(user.login, branch);
    if (existing) return existing;

    await this.ensureFork(user.login);

    const existingBranch = await this.requestOrNull<{ object: { sha: string } }>(
      'GET',
      `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/ref/heads/${encodeURIComponent(branch)}`,
    );
    if (existingBranch) {
      const commit = await this.request<{ message: string }>(
        'GET',
        `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/commits/${existingBranch.object.sha}`,
      );
      if (!commit.message.includes(`Submission-ID: ${input.submission_id}`)) {
        throw new GitHubError(409, '投稿分支已经存在但不属于本次提交，请更换 submission_id。', 'submission_conflict');
      }
      return this.openPullRequest(user.login, branch, input);
    }

    await this.ensureBaseUnchanged(input.base_sha);
    const baseCommit = await this.request<{ tree: { sha: string } }>(
      'GET',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/git/commits/${input.base_sha}`,
    );
    const treeEntries = [];
    for (const change of input.changes) {
      const blob = await this.request<{ sha: string }>(
        'POST',
        `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/blobs`,
        { content: change.content, encoding: 'utf-8' },
      );
      treeEntries.push({ path: change.path, mode: '100644', type: 'blob', sha: blob.sha });
    }
    const tree = await this.request<{ sha: string }>(
      'POST',
      `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/trees`,
      { base_tree: baseCommit.tree.sha, tree: treeEntries },
    );
    const commit = await this.request<{ sha: string }>(
      'POST',
      `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/commits`,
      {
        message: `${input.title}\n\nSubmission-ID: ${input.submission_id}`,
        tree: tree.sha,
        parents: [input.base_sha],
      },
    );
    await this.request(
      'POST',
      `/repos/${encodeURIComponent(user.login)}/${encodeURIComponent(this.repository)}/git/refs`,
      { ref: `refs/heads/${branch}`, sha: commit.sha },
    );
    return this.openPullRequest(user.login, branch, input);
  }

  private openPullRequest(login: string, branch: string, input: ContributionInput): Promise<PullRequest> {
    return this.request<PullRequest>(
      'POST',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/pulls`,
      {
        title: input.title,
        body: `${input.body}\n\n<!-- submission-id: ${input.submission_id} -->`,
        head: `${login}:${branch}`,
        base: 'main',
        maintainer_can_modify: true,
      },
    );
  }

  private async ensureBaseUnchanged(expected: string): Promise<void> {
    const reference = await this.request<{ object: { sha: string } }>(
      'GET',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/git/ref/heads/main`,
    );
    if (reference.object.sha !== expected) throw new GitHubError(409, 'main 已更新，请重新预览修改。', 'base_changed');
  }

  private async ensureFork(login: string): Promise<void> {
    const path = `/repos/${encodeURIComponent(login)}/${encodeURIComponent(this.repository)}`;
    const existing = await this.requestOrNull<{ fork: boolean; parent?: { full_name: string } }>('GET', path);
    if (existing) {
      if (!existing.fork || existing.parent?.full_name.toLowerCase() !== `${this.owner}/${this.repository}`.toLowerCase()) {
        throw new GitHubError(409, `GitHub 账号中已有同名仓库 ${login}/${this.repository}，但它不是本项目的 fork。`, 'submission_conflict');
      }
      return;
    }

    await this.request('POST', `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/forks`, {
      default_branch_only: true,
    });
    for (let attempt = 0; attempt < 8; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (await this.requestOrNull('GET', path)) return;
    }
    throw new GitHubError(502, 'GitHub fork 尚未准备完成，请稍后用同一 submission_id 重试。');
  }

  private async findPullRequest(login: string, branch: string): Promise<PullRequest | null> {
    const params = new URLSearchParams({ state: 'all', head: `${login}:${branch}`, base: 'main', per_page: '1' });
    const items = await this.request<PullRequest[]>(
      'GET',
      `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repository)}/pulls?${params}`,
    );
    return items[0] ?? null;
  }

  private async requestOrNull<T>(method: string, path: string): Promise<T | null> {
    try {
      return await this.request<T>(method, path);
    } catch (error) {
      if (error instanceof GitHubError && error.status === 404) return null;
      throw error;
    }
  }

  private async request<T = unknown>(method: string, path: string, body?: unknown): Promise<T> {
    const response = await fetch(`https://api.github.com${path}`, {
      method,
      headers: githubHeaders(this.token, body === undefined ? undefined : { 'Content-Type': 'application/json' }),
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!response.ok) {
      const detail = await githubErrorMessage(response);
      const rateLimited = response.status === 429 || (
        response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0'
      );
      throw new GitHubError(
        rateLimited ? 429 : response.status,
        rateLimited ? 'GitHub API 速率限制，请稍后重试。' : detail,
        rateLimited ? 'rate_limited' : 'github_unavailable',
      );
    }
    if (response.status === 204) return undefined as T;
    return response.json<T>();
  }
}

function githubHeaders(token: string, overrides: Record<string, string> = {}): Record<string, string> {
  return {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'wang-genealogy-contribution-worker',
    'X-GitHub-Api-Version': API_VERSION,
    ...overrides,
  };
}

async function githubErrorMessage(response: Response): Promise<string> {
  const length = Number(response.headers.get('content-length') ?? 0);
  if (length > 64_000) return `GitHub API 请求失败（HTTP ${response.status}）。`;
  try {
    const body = await response.json<{ message?: string }>();
    return body.message ? `GitHub: ${body.message}` : `GitHub API 请求失败（HTTP ${response.status}）。`;
  } catch {
    return `GitHub API 请求失败（HTTP ${response.status}）。`;
  }
}

function decodeBase64(value: string): string {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new TextDecoder().decode(bytes);
}
