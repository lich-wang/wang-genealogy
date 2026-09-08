# Repository Guidelines

## Project Structure & Module Organization

The design documents remain the source of truth; the implementation follows the layout in `docs/ARCHITECTURE.md`.

- `README.md` introduces the project’s scope and principles.
- `docs/PRODUCT.md` defines user-facing scope and exclusions.
- `docs/DOMAIN_MODEL.md` is the source of truth for entities, claims, sources, revisions, and merges.
- `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/COLLABORATION.md`, and `docs/SOURCES_AND_POLICY.md` define contracts and policies.
- `content/persons` is the authoritative genealogy store: one Markdown file per public person. `apps/web` is the React + Vite front end (Cloudflare Pages). `apps/contribution` is the GitHub OAuth and PR-orchestration Worker. `apps/api` is legacy code and must not be deployed; D1 may store GitHub bindings, sessions, encrypted OAuth tokens, preferences, subscriptions, rate limits, and account-security audit only.
- `packages/domain` types/enums/public IDs, `packages/i18n` 简繁 script conversion and folding, `packages/validation` Zod schemas and kinship/date rules.
- `scripts/` builds, validates, imports, and audits Markdown content. Legacy D1 genealogy migrations and API importers are migration history, not active write paths. `e2e/` contains Playwright smoke checks.

## Documentation and Development Workflow

```bash
npm install
npm test          # Vitest unit tests
npm run typecheck # every workspace project
npm run build     # type-checks + bundles apps/web
npm run test:e2e  # Playwright smoke (PAGES_URL, defaults to production)
npm run dev:web   # vite dev server
```

Run `npm test && npm run typecheck && npm run build` before committing. Pushing to `main` validates Markdown content and deploys Pages. Any account-only Worker must use a separate deployment path and account-only D1 migrations.

For documentation work, review cross-references before committing. Changes to entities or lifecycle rules should be reconciled across the domain model, API, collaboration, and source-policy documents. Preserve key terms and statuses exactly, for example `Claim`, `Person`, `accepted`, `disputed`, and `merged`.

## Writing Style & Naming

Write documentation in clear Chinese unless an established file is intentionally bilingual. Use short Markdown headings, concrete examples, and fenced `text` blocks for data flows. Keep domain identifiers and enum values in lower-case English code style, such as `kinship.parent_of` and `source_type`.

TypeScript uses 2-space indentation, `camelCase` for variables/functions, `PascalCase` for types/components, and explicit names over abbreviations. Migrations use ordered, descriptive filenames such as `0001_create_person_tables.sql`.

Stored claim text keeps the script (简体/繁體) of its source. Conversion belongs to the display layer (`packages/i18n` + `apps/web/src/i18n.tsx`); never normalize a stored value's script or write converted content back to Markdown.

## Testing Guidelines

Unit tests are Vitest files next to the code they cover (`packages/**/*.test.ts`, `apps/**/*.test.ts`); `e2e/smoke.mjs` is a Playwright smoke check against a deployed or previewed build. Prioritize tests for claim normalization, provenance, append-only revisions, merge rollback, and exclusion of living or sensitive-person data.

## Storage Boundary

Genealogy content never writes to D1. People, claims, relationships, sources, revisions, merges, drafts, import queues, and public search indexes live in Git/Markdown or build artifacts only.

- Genealogy changes must be reviewable Pull Request diffs and idempotent Markdown transformations.
- GitHub OAuth is the only login/registration method; do not add email/password or verification flows.
- D1 is limited to GitHub account bindings, encrypted OAuth credentials, sessions, preferences, notification subscriptions, rate limits, and account-security audit.
- Contribution Markdown and diffs are transient request data and must never be stored in D1, KV, logs, or audit rows.
- D1 account tables must not have genealogy foreign keys or mirror genealogy records.
- Re-running an unchanged account operation must be a zero-write no-op; security and account audit records remain mandatory.

## Commits & Pull Requests

The existing history uses concise Conventional Commit-style messages, e.g. `docs: establish initial genealogy design`. Continue with imperative, scoped subjects such as `docs: clarify merge review rules` or `api: validate claim sources`.

Keep pull requests focused. Include a summary, the affected documents or contracts, linked issue when available, and screenshots only for user-interface changes. Call out changes affecting public IDs, source traceability, retention, privacy, or merge semantics.
