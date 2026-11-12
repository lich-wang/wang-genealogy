# Repository Guidelines

## Project Structure & Module Organization

The design documents are the source of truth; implementation follows `docs/ARCHITECTURE.md`. When docs conflict, resolve in this order and reconcile the rest in the same change: `docs/DOMAIN_MODEL.md` > `docs/API.md` > `docs/COLLABORATION.md` > `docs/SOURCES_AND_POLICY.md` > `docs/PRODUCT.md` > `docs/ARCHITECTURE.md`.

- `content/persons/` is the authoritative genealogy store: one Markdown file per public person, keyed by stable `p_<22 base58>` IDs. `apps/web` (React + Vite, Cloudflare Pages) reads only generated static JSON. `apps/contribution` (GitHub OAuth + PR orchestration Worker) is the only write path into Git, always via the current user's own fork.
- `apps/api`, the root `migrations/`, and the legacy DB importers are historical code: no CI deploys them and their endpoints/tables must not be reused. Only the checked-in `apps/api/tree-snapshot/*.json` bootstrap fallback survives; `apps/api/tree-snapshot/public/` is generated and gitignored.
- `packages/domain` types/enums/public IDs, `packages/i18n` 简繁 script conversion and folding, `packages/validation` Zod schemas and kinship/date rules.
- `scripts/` does all content work: imports/staging, audits, and Markdown migrations. Reviewed plans are checked-in dated JSON; shared helpers live in `scripts/lib/`. `e2e/` contains Playwright smoke checks.

## Domain Invariants (do not violate)

These constraints are the reason the project exists; they override convenience:

- **Claims, not fields.** A `Person` file holds no final name/birth/death; page summaries are computed from accepted claims. `display_name` is a build-time label, not truth.
- **One kinship direction.** Store parent/child once as `PARENT --kinship.parent_of/father_of/mother_of--> CHILD`, never as mirrored rows. `spouse_of` and `sibling_of` are one claim duplicated at both ends with the same claim ID (the builder checks consistency); `ancestor_of` carries `generation_count` for cross-generation statements. Never invent intermediate parents.
- **Never infer gender/role** from names, titles or convention; if a source only says "a parent", keep `parent_of`. Label edges inferred from sibling evidence in `interpretation_note`.
- **Git is the revision log.** Every edit is a commit + Pull Request; reverting is a Git revert, never an in-place overwrite. `revision` / `current_revision` in Markdown are reading hints only — there is no database revision entity.
- **Provenance required.** Public claims link ≥1 `Source` with locator and stance; sourceless entries stay out of public content and indexes. Never invent a claim for missing data (an unknown death year is not a `death.date` claim).
- **Conflicts coexist.** `recommended` and `alternatives` are shown side by side; a sourced minority view is never hidden. This is explicitly not last-write-wins.
- **Soft merge only.** Source becomes `status: merged` with `merged_into`, old public IDs keep redirecting, claims are logically folded (never physically deleted), and the Git diff is the merge snapshot. For one record that turns out to be two same-named people: create a new anchor → retract misattributed edges → re-hang the same citation, all in one PR; the old ID does not redirect.
- **Concurrency via `base_sha`.** Contribution requests carry the `main` SHA used for the diff preview; a stale base returns `409 base_changed` instead of silently overwriting newer content.
- **Living/sensitive people excluded.** Only deceased historical persons are public; unproven-deceased records are quarantined, not indexed. Never derive/expose modern descendants via kinship. No images, IDs, contact info, DNA/medical/religious data.
- **No hard delete** except legal/privacy/safety incidents, and even then keep a minimal audit record. Deletion is a status field.
- **Uncertain dates** keep original text + normalized earliest/latest + precision + calendar note — not a single SQL date.
- **License layering.** Keep source-code, site-text, user-contribution and external-source licenses distinct; store `license_code` per `Source`. Never relabel NC/SA data (e.g. CBDB `CC-BY-NC-SA-4.0`) as CC0.
- **Script (简体/繁體) is display-only.** Stored claim text keeps the script its source used (`value_json.language`); conversion belongs to `packages/i18n` + `apps/web/src/i18n.tsx`, never write converted content back to Markdown. Name matching, search and duplicate hints compare folded text, so 王賁 and 王贲 match as one name. A folded match is only a duplicate hint; it does not establish that two records describe the same person.

## Toolchain & Commands

Requires Node >= 22.

```bash
npm install
npm run check:content  # validate content/persons Markdown (writes to /tmp); also runs on every build
npm test               # Vitest: packages/**/*.test.ts, apps/**/*.test.ts, scripts/**/*.test.mjs
npm run typecheck      # every workspace project
npm run build          # type-checks + runs build-content.mjs + bundles apps/web
npm run test:e2e       # Playwright smoke (PAGES_URL, defaults to production)
npm run dev:web        # vite dev server
npm run dev:contribution # wrangler dev for the contribution Worker
```

Run `npm test && npm run typecheck && npm run build` before committing. `npm run build` regenerates `apps/web/public/data/` (sharded persons/graphs/sources JSON) — it is gitignored; never commit it. On Windows, a drive-letter casing mismatch can make Vitest load its runner twice; when that happens, `vitest.config.ts` selects the `vmForks` pool. If the config sets no pool, Windows and other platforms use Vitest's default pool. Cloudflare credentials for wrangler come from the gitignored root `.env` (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`). The contribution Worker needs `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `TOKEN_ENCRYPTION_SECRET` as Worker secrets plus its own account D1 `wang-genealogy-accounts` (migrations in `apps/contribution/migrations/`, local values in `apps/contribution/.dev.vars`). `npm run build:public-snapshot` requires a `$PUBLIC_SNAPSHOT_DB` env var.

## Content Build Rules

`scripts/build-content.mjs` is the single content entry point; CI runs `check:content` on every push and aborts on failure. It enforces: valid schema, unique person IDs, relationship targets exist, cross-file claim consistency (same claim ID must have an identical fingerprint in every file), valid source URLs, and complete paternal chains.

Data workflow: staging scripts emit reviewed dated JSON plans → migration scripts (e.g. `migrate-reviewed-kinship-to-markdown.mjs`, `sync-cbdb-wang-to-markdown.mjs`) transform them into `content/persons/*.md` → run `check:content` → commit. Do not hand-edit generated artifacts or write genealogy data anywhere except Git/Markdown.

## Writing Style & Naming

Write documentation in clear Chinese unless an established file is intentionally bilingual. Use short Markdown headings, concrete examples, and fenced `text` blocks for data flows. Keep domain identifiers and enum values in lower-case English code style, such as `kinship.parent_of` and `source_type`.

TypeScript uses 2-space indentation, `camelCase` for variables/functions, `PascalCase` for types/components, and explicit names over abbreviations.

Stored claim text keeps the script (简体/繁體) of its source. Conversion belongs to the display layer (`packages/i18n` + `apps/web/src/i18n.tsx`); never normalize a stored value's script or write converted content back to Markdown.

## Testing Guidelines

Unit tests are Vitest files next to the code they cover (`packages/**/*.test.ts`, `apps/**/*.test.ts`, `scripts/**/*.test.mjs`); `e2e/smoke.mjs` is a Playwright smoke check against a deployed or previewed build. Prioritize tests for claim normalization, provenance, append-only revisions, merge rollback, and exclusion of living or sensitive-person data.

## Storage Boundary

Genealogy content never writes to D1. People, claims, relationships, sources, revisions, merges, drafts, import queues, and public search indexes live in Git/Markdown or build artifacts only.

- Genealogy changes must be reviewable Pull Request diffs and idempotent Markdown transformations.
- GitHub OAuth is the only login/registration method; do not add email/password or verification flows.
- D1 is limited to GitHub account bindings, encrypted OAuth credentials, sessions, preferences, notification subscriptions, rate limits, and account-security audit.
- Contribution Markdown and diffs are transient request data and must never be stored in D1, KV, logs, or audit rows.
- D1 account tables must not have genealogy foreign keys or mirror genealogy records.
- Re-running an unchanged account operation must be a zero-write no-op; security and account audit records remain mandatory.

## Deployment

Pushing to `main` runs `deploy.yml` (content validation → unit tests → typecheck → static build → Pages deploy); it needs no D1 or OAuth secrets. `deploy-contribution.yml` separately deploys the contribution Worker, gated on `apps/contribution/**` paths, and applies its account-D1 migrations first. `apps/api` has no deploy workflow. Production site is `https://history.wang` (Cloudflare Pages project `wang-genealogy-web`); `e2e/smoke.mjs` defaults to the `pages.dev` URL unless `PAGES_URL` is set.

## Commits & Pull Requests

The existing history uses concise Conventional Commit-style messages, e.g. `docs: establish initial genealogy design`. Continue with imperative, scoped subjects such as `docs: clarify merge review rules` or `api: validate claim sources`.

Keep pull requests focused. Include a summary, the affected documents or contracts, screenshots only for user-interface changes, and call out changes affecting public IDs, source traceability, retention, privacy, or merge semantics. Branch protection requires a linked Issue (`require-linked-issue.yml`) and a successful CodeRabbit review check (`.coderabbit.yaml`); a PR without either cannot be merged.

## Single source of truth for agent guidance

`CLAUDE.md` is a thin pointer to this file (`@AGENTS.md`). Keep all agent guidance here; do not duplicate it into `CLAUDE.md` or let the two drift apart.
