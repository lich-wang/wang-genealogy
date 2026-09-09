import type {
  Claim,
  ClaimWithSources,
  Cursor,
  KinshipHighlight,
  PersonExport,
  PersonSearchResult,
  PersonSummary,
  RecentChange,
  RelativesGraph,
  Source,
} from '@wang/domain';
import type { ClaimSourceStance } from '@wang/domain';
import { scriptVariants } from '@wang/i18n';

export const REPOSITORY_URL = 'https://github.com/lich-wang/wang-genealogy';

export interface GitHubAccount {
  github_id: number;
  login: string;
  avatar_url: string | null;
}

export interface AccountSession {
  user: GitHubAccount | null;
  can_submit: boolean;
  csrf_token: string | null;
}

export interface ContributionBase {
  base_sha: string;
  path: string;
  content: string;
}

export interface PullRequestInput {
  submission_id: string;
  base_sha: string;
  title: string;
  body: string;
  changes: Array<{ path: string; content: string }>;
}

export interface PullRequestResult {
  pull_request: { number: number; url: string; state: string };
}

export class ApiRequestError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    this.code = code;
  }
}

export interface SystemStatus {
  people: number;
  relationships: number;
  sources: number;
  claims: number;
  generated_at: string;
}

export interface SourceRefInput {
  source_id: string;
  stance?: ClaimSourceStance;
  locator?: string;
  quotation?: string;
  interpretation_note?: string;
}

interface StaticIndex {
  status: SystemStatus;
  highlights: KinshipHighlight[];
  search: PersonSearchResult[];
  changes: RecentChange[];
  graph_lookup: Record<string, string>;
}

let indexPromise: Promise<StaticIndex> | null = null;
function getIndex() {
  indexPromise ??= getJson<StaticIndex>('/data/index.json');
  return indexPromise;
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new ApiRequestError(response.status, 'static_data_error', response.status === 404 ? '未找到资料' : '静态资料载入失败');
  return response.json() as Promise<T>;
}

async function accountRequest<T>(url: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(url, { ...init, credentials: 'include' });
  if (response.status === 204) return undefined as T;
  const body = await response.json().catch(() => null) as { error?: string; message?: string } | null;
  if (!response.ok) {
    throw new ApiRequestError(response.status, body?.error ?? 'request_failed', body?.message ?? `请求失败（HTTP ${response.status}）`);
  }
  return body as T;
}

function readOnly(): never {
  throw new ApiRequestError(405, 'pull_request_required', '资料修改请通过 GitHub Pull Request 提交');
}

const PAGE_SIZE = 40;

export const api = {
  me: () => accountRequest<AccountSession>('/api/account/me'),
  logout: (csrfToken: string) => accountRequest<void>('/api/auth/logout', {
    method: 'POST',
    headers: { 'X-CSRF-Token': csrfToken },
  }),
  getContributionBase: (input: { personId?: string; newPersonId?: string }) => {
    const params = new URLSearchParams();
    if (input.personId) params.set('person_id', input.personId);
    if (input.newPersonId) params.set('new_person_id', input.newPersonId);
    return accountRequest<ContributionBase>(`/api/contributions/base?${params}`);
  },
  createPullRequest: (input: PullRequestInput, csrfToken: string) => accountRequest<PullRequestResult>(
    '/api/contributions/pull-requests',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
      body: JSON.stringify(input),
    },
  ),
  getPerson: (id: string) => getPerson(id),
  getPersonClaims: (id: string, status?: string) => api.getPerson(id).then((summary) =>
    [...summary.properties.flatMap((field) => [field.recommended, ...field.alternatives]), ...Object.values(summary.relationships).flat()]
      .filter((item): item is ClaimWithSources => item !== null && (!status || item.claim.status === status))
      .map((item) => item.claim),
  ),
  getRelatives: (id: string, _up = 2, _down = 2) => getGraph(id),
  getAllRelatives: (id: string) => getGraph(id),
  getPersonHistory: async () => [],
  getSource: (id: string) => getSourceEntry(id).then((data) => data.source),
  getSourceClaims: (id: string) => getSourceEntry(id).then((data) => data.claims),
  searchSources: async (_query: string) => [] as Source[],
  getHomeOverview: (limit = 8) => getIndex().then((index) => ({ items: index.highlights.slice(0, limit), status: index.status })),
  listRecentChanges: (cursor?: string): Promise<Cursor<RecentChange>> => getIndex().then((index) => page(index.changes, cursor)),
  searchPersons: (query: string, cursor?: string): Promise<Cursor<PersonSearchResult>> => getIndex().then((index) => {
    const needles = scriptVariants(query.trim().toLocaleLowerCase());
    const matches = index.search.filter((person) => [person.display_name, ...person.also_known_as].some((name) => name && needles.some((needle) => name.toLocaleLowerCase().includes(needle))));
    return page(matches, cursor);
  }),
  exportPerson: (id: string): Promise<PersonExport> => api.getPerson(id).then((summary) => {
    const all = [...summary.properties.flatMap((field) => [field.recommended, ...field.alternatives]), ...Object.values(summary.relationships).flat()].filter((item): item is ClaimWithSources => Boolean(item));
    const sources = new Map<string, Source>();
    for (const item of all) for (const ref of item.sources) if (ref.source) sources.set(ref.source.id, ref.source);
    return { person: summary.person, claims: all, sources: [...sources.values()], merge_proposals: [], exported_at: new Date().toISOString(), format_version: 1 };
  }),
  createPerson: readOnly,
  createClaim: readOnly,
  createRelationship: readOnly,
  reviseClaim: readOnly,
  disputeClaim: readOnly,
  retractClaim: readOnly,
  revertClaim: readOnly,
  createSource: (..._args: unknown[]) => readOnly(),
  addClaimSource: readOnly,
  createMerge: readOnly,
};

async function getPerson(id: string): Promise<PersonSummary> {
  const shard = id.slice(2, 3) || '_';
  const entries = await getJson<Record<string, PersonSummary>>(`/data/persons/${encodeURIComponent(shard)}.json`);
  const person = entries[id];
  if (!person) throw new ApiRequestError(404, 'not_found', '未找到人物');
  return person;
}

function page<T>(items: T[], cursor?: string): Cursor<T> {
  const start = cursor ? Number(cursor) : 0;
  const next = start + PAGE_SIZE;
  return { items: items.slice(start, next), next_cursor: next < items.length ? String(next) : null };
}

async function getGraph(id: string) {
  const index = await getIndex();
  const component = index.graph_lookup[id];
  if (!component) throw new ApiRequestError(404, 'not_found', '未找到家族图');
  const shard = component.slice(0, 1) || '_';
  const entries = await getJson<Record<string, RelativesGraph>>(`/data/graphs/${shard}.json`);
  const graph = entries[component];
  if (!graph) throw new ApiRequestError(404, 'not_found', '未找到家族图');
  return { ...graph, root_id: id };
}

async function getSourceEntry(id: string) {
  const shard = id.slice(2, 3) || '_';
  const entries = await getJson<Record<string, { source: Source; claims: ClaimWithSources[] }>>(`/data/sources/${encodeURIComponent(shard)}.json`);
  const entry = entries[id];
  if (!entry) throw new ApiRequestError(404, 'not_found', '未找到来源');
  return entry;
}

export type Api = typeof api;
export type { Claim };
