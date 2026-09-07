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
export const NEW_PERSON_URL = `${REPOSITORY_URL}/new/main/content/persons?filename=p_NEW.md`;

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

function readOnly(): never {
  throw new ApiRequestError(405, 'pull_request_required', '资料修改请通过 GitHub Pull Request 提交');
}

const PAGE_SIZE = 40;

export const api = {
  getPerson: (id: string) => getJson<PersonSummary>(`/data/persons/${encodeURIComponent(id)}.json`),
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

function page<T>(items: T[], cursor?: string): Cursor<T> {
  const start = cursor ? Number(cursor) : 0;
  const next = start + PAGE_SIZE;
  return { items: items.slice(start, next), next_cursor: next < items.length ? String(next) : null };
}

async function getGraph(id: string) {
  const index = await getIndex();
  const component = index.graph_lookup[id];
  if (!component) throw new ApiRequestError(404, 'not_found', '未找到家族图');
  const graph = await getJson<RelativesGraph>(`/data/graphs/${component}.json`);
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
