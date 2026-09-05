// Typed fetch wrapper around the /api/v1 REST contract. Hand-rolled on purpose:
// no data-layer library, just fetch + the shared @wang/domain view types so the
// client and server agree on the exact shapes.
import type {
  ApiError,
  Claim,
  ClaimSourceStance,
  ClaimWithSources,
  Confidence,
  Contribution,
  Cursor,
  KinshipHighlight,
  LicenseCode,
  ParentRole,
  PersonExport,
  PersonMergeProposal,
  PersonSummary,
  PersonSearchResult,
  PropertyPredicate,
  RecentChange,
  RelationshipInput,
  RelativesGraph,
  Source,
  SourceType,
  User,
} from '@wang/domain';

const TOKEN_KEY = 'wang_token';

// If VITE_API_BASE is set we prefix it; otherwise we hit a relative path so the
// Vite dev proxy (or a same-origin deploy) can route it.
const rawBase = (import.meta.env.VITE_API_BASE ?? '').replace(/\/+$/, '');
export const API_PREFIX = `${rawBase}/api/v1`;

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore storage failures (private mode etc.) */
  }
}

/** Error thrown for any non-2xx response, carrying the structured ApiError. */
export class ApiRequestError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: unknown;

  constructor(status: number, body: ApiError) {
    super(body.message || body.error || `HTTP ${status}`);
    this.name = 'ApiRequestError';
    this.status = status;
    this.code = body.error;
    this.details = body.details;
  }
}

interface RequestOptions {
  method?: string;
  body?: unknown;
  query?: Record<string, string | number | undefined | null>;
}

async function request<T>(path: string, opts: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, query } = opts;

  let url = `${API_PREFIX}${path}`;
  if (query) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') {
        params.set(key, String(value));
      }
    }
    const qs = params.toString();
    if (qs) url += `?${qs}`;
  }

  const headers: Record<string, string> = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url, {
    method,
    headers,
    credentials: 'include',
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (res.status === 204) return undefined as T;

  const text = await res.text();
  const parsed: unknown = text ? JSON.parse(text) : undefined;

  if (!res.ok) {
    const errBody: ApiError =
      parsed && typeof parsed === 'object' && 'error' in parsed
        ? (parsed as ApiError)
        : { error: 'unknown_error', message: `請求失敗（HTTP ${res.status}）` };
    throw new ApiRequestError(res.status, errBody);
  }

  return parsed as T;
}

// --- request payload shapes (mirror the server contract / @wang/validation) ---

export interface SourceRefInput {
  source_id: string;
  stance?: ClaimSourceStance;
  locator?: string;
  quotation?: string;
  interpretation_note?: string;
}

export interface PropertyValueInput {
  text?: string;
  language?: string;
  date?: { original_text: string; calendar_note?: string };
}

export interface CreatePersonInput {
  name: {
    predicate?: 'name.primary';
    value: PropertyValueInput;
    confidence?: Confidence;
    sources?: SourceRefInput[];
  };
  change_summary?: string;
}

export interface CreatePropertyClaimInput {
  claim_kind: 'property';
  predicate: PropertyPredicate;
  value: PropertyValueInput;
  confidence?: Confidence;
  sources?: SourceRefInput[];
  change_summary?: string;
}

export interface CreateRelationshipInput {
  relationship: RelationshipInput;
  related_person_id: string;
  parent_role?: ParentRole | null;
  generation_count?: number;
  confidence?: Confidence;
  sources?: SourceRefInput[];
  change_summary?: string;
}

export interface ReviseClaimInput {
  expected_revision: number;
  patch: {
    confidence?: Confidence;
    value?: PropertyValueInput;
    generation_count?: number | null;
    parent_role?: ParentRole | null;
    status?: 'accepted' | 'disputed' | 'superseded';
  };
  change_summary?: string;
}

export interface DisputeInput {
  reason?: string;
  change_summary?: string;
}

export interface RevertInput {
  target_revision_id: string;
  change_summary?: string;
}

export interface CreateSourceInput {
  source_type: SourceType;
  title: string;
  creator?: string;
  publisher?: string;
  published_at_text?: string;
  canonical_url?: string;
  external_identifier?: string;
  license_code?: LicenseCode;
  accessed_at?: string;
  metadata_json?: Record<string, unknown>;
}

export interface CreateMergeInput {
  target_person_id: string;
  reason?: string;
  supporting_claim_ids?: string[];
}

export interface SignupInput {
  display_name: string;
  email: string;
  password: string;
  verification_token: string;
}

export interface EmailVerificationChallenge {
  verification_token: string;
  recipient: string;
  subject: string;
  expires_at: string;
}

export interface SystemStatus {
  people: number;
  relationships: number;
  sources: number;
  claims: number;
  generated_at: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

// --- response shapes not fully pinned by the domain package ---

/** Every write returns at least the append-only audit id; most also echo a new id. */
export interface MutationResult {
  contribution_id: string;
  id?: string;
  person_id?: string;
  claim_id?: string;
  proposal_id?: string;
  revision_id?: string;
  note?: string;
  /**
   * Advisory list of existing persons whose recorded name matches the submitted
   * one in either Chinese script. Never a rejection — namesakes are real — but
   * the contributor should decide whether to propose a merge instead.
   */
  possible_duplicates?: PersonSearchResult[];
}

export interface AuthResult {
  token: string;
  user: User;
}

// --- API surface ---

export const api = {
  // persons
  getPerson: (id: string) => request<PersonSummary>(`/persons/${encodeURIComponent(id)}`),

  getPersonClaims: (id: string, status?: string) =>
    request<{ claims: Claim[] }>(`/persons/${encodeURIComponent(id)}/claims`, {
      query: { status },
    }).then((r) => r.claims),

  /** Bounded kinship slice for the family-tree view. */
  getRelatives: (id: string, up = 2, down = 2) =>
    request<RelativesGraph>(`/persons/${encodeURIComponent(id)}/relatives`, {
      query: { up, down },
    }),

  /** Complete connected public kinship component for the global tree view. */
  getAllRelatives: (id: string) =>
    request<RelativesGraph>(`/persons/${encodeURIComponent(id)}/relatives`, {
      query: { scope: 'all' },
    }),

  getPersonHistory: (id: string) =>
    request<{ history: Contribution[] }>(`/persons/${encodeURIComponent(id)}/history`).then(
      (r) => r.history,
    ),

  createPerson: (input: CreatePersonInput) =>
    request<MutationResult>('/persons', { method: 'POST', body: input }),

  createClaim: (personId: string, input: CreatePropertyClaimInput) =>
    request<MutationResult>(`/persons/${encodeURIComponent(personId)}/claims`, {
      method: 'POST',
      body: input,
    }),

  createRelationship: (personId: string, input: CreateRelationshipInput) =>
    request<MutationResult>(`/persons/${encodeURIComponent(personId)}/relationships`, {
      method: 'POST',
      body: input,
    }),

  // claims lifecycle
  reviseClaim: (claimId: string, input: ReviseClaimInput) =>
    request<MutationResult>(`/claims/${encodeURIComponent(claimId)}/revisions`, {
      method: 'POST',
      body: input,
    }),

  disputeClaim: (claimId: string, input: DisputeInput = {}) =>
    request<MutationResult>(`/claims/${encodeURIComponent(claimId)}/disputes`, {
      method: 'POST',
      body: input,
    }),

  retractClaim: (claimId: string, input: DisputeInput = {}) =>
    request<MutationResult>(`/claims/${encodeURIComponent(claimId)}/retractions`, {
      method: 'POST',
      body: input,
    }),

  revertClaim: (claimId: string, input: RevertInput) =>
    request<MutationResult>(`/claims/${encodeURIComponent(claimId)}/reverts`, {
      method: 'POST',
      body: input,
    }),

  // sources
  createSource: (input: CreateSourceInput) =>
    request<{ source_id: string }>('/sources', { method: 'POST', body: input }),

  searchSources: (query: string) =>
    request<{ items: Source[] }>('/sources', { query: { q: query } }).then((r) => r.items),

  getSource: (id: string) =>
    request<{ source: Source }>(`/sources/${encodeURIComponent(id)}`).then((r) => r.source),

  getSourceClaims: (id: string) =>
    request<{ claims: ClaimWithSources[] }>(`/sources/${encodeURIComponent(id)}/claims`).then(
      (r) => r.claims,
    ),

  addClaimSource: (claimId: string, input: SourceRefInput) =>
    request<MutationResult>(`/claims/${encodeURIComponent(claimId)}/sources`, {
      method: 'POST',
      body: input,
    }),

  /** Persons with the most recorded kinship — entry points for the tree view. */
  getHomeOverview: (limit = 8) =>
    request<{ items: KinshipHighlight[]; status: SystemStatus | null }>('/kinship-highlights', { query: { limit } }),

  // recent changes feed
  listRecentChanges: (cursor?: string) =>
    request<Cursor<RecentChange>>('/changes', { query: { cursor } }),

  // search
  searchPersons: (query: string, cursor?: string) =>
    request<Cursor<PersonSearchResult>>('/search', { query: { q: query, cursor } }),

  // merges
  createMerge: (personId: string, input: CreateMergeInput) =>
    request<MutationResult>(`/persons/${encodeURIComponent(personId)}/merge-proposals`, {
      method: 'POST',
      body: input,
    }),

  getMerge: (proposalId: string) =>
    request<{ proposal: PersonMergeProposal }>(
      `/person-merge-proposals/${encodeURIComponent(proposalId)}`,
    ).then((r) => r.proposal),

  // export
  exportPerson: (id: string) =>
    request<PersonExport>(`/persons/${encodeURIComponent(id)}/export`),

  // auth
  requestEmailVerification: (email: string) =>
    request<EmailVerificationChallenge>('/auth/email-verifications', {
      method: 'POST',
      body: { email },
    }),

  getEmailVerificationStatus: (token: string) =>
    request<{ verified: boolean; expires_at: string }>('/auth/email-verifications/status', {
      query: { token },
    }),

  signup: (input: SignupInput) =>
    request<AuthResult>('/auth/signup', { method: 'POST', body: input }),

  login: (input: LoginInput) =>
    request<AuthResult>('/auth/login', { method: 'POST', body: input }),

  me: () => request<{ user: User }>('/auth/me').then((r) => r.user),
};

export type Api = typeof api;
