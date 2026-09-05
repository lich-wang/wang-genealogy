# Repository Guidelines

## Project Structure & Module Organization

The design documents remain the source of truth; the implementation follows the layout in `docs/ARCHITECTURE.md`.

- `README.md` introduces the project’s scope and principles.
- `docs/PRODUCT.md` defines user-facing scope and exclusions.
- `docs/DOMAIN_MODEL.md` is the source of truth for entities, claims, sources, revisions, and merges.
- `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/COLLABORATION.md`, and `docs/SOURCES_AND_POLICY.md` define contracts and policies.
- `apps/web` React + Vite front end (Cloudflare Pages); `apps/api` Hono Worker (Cloudflare D1).
- `packages/domain` types/enums/public IDs, `packages/i18n` 简繁 script conversion and folding, `packages/validation` Zod schemas and kinship/date rules.
- `migrations/` ordered D1 SQL, `scripts/` import and maintenance scripts (`fetch-kinship.mjs` → reviewable plan → `import-kinship.mjs` → `audit-data.mjs`; duplicates become a reversible merge proposal, one record that is really two same-named people becomes a `split-homonym.mjs` plan; writes go only through the API), `e2e/` Playwright smoke checks.

## Documentation and Development Workflow

```bash
npm install
npm test          # Vitest unit tests
npm run typecheck # every workspace project
npm run build     # type-checks + bundles apps/web
npm run test:e2e  # Playwright smoke (PAGES_URL, defaults to production)
npm run dev:api   # wrangler dev
npm run dev:web   # vite dev server
```

Run `npm test && npm run typecheck && npm run build` before committing. Deployment is automatic: pushing to `main` runs the checks in `.github/workflows/deploy.yml`, applies D1 migrations, then deploys the Worker and Pages.

For documentation work, review cross-references before committing. Changes to entities or lifecycle rules should be reconciled across the domain model, API, collaboration, and source-policy documents. Preserve key terms and statuses exactly, for example `Claim`, `Person`, `accepted`, `disputed`, and `merged`.

## Writing Style & Naming

Write documentation in clear Chinese unless an established file is intentionally bilingual. Use short Markdown headings, concrete examples, and fenced `text` blocks for data flows. Keep domain identifiers and enum values in lower-case English code style, such as `kinship.parent_of` and `source_type`.

TypeScript uses 2-space indentation, `camelCase` for variables/functions, `PascalCase` for types/components, and explicit names over abbreviations. Migrations use ordered, descriptive filenames such as `0001_create_person_tables.sql`.

Stored claim text keeps the script (简体/繁體) of its source. Conversion belongs to the display layer (`packages/i18n` + `apps/web/src/i18n.tsx`); never normalize a stored value's script, and never send a converted value back to the API.

## Testing Guidelines

Unit tests are Vitest files next to the code they cover (`packages/**/*.test.ts`, `apps/**/*.test.ts`); `e2e/smoke.mjs` is a Playwright smoke check against a deployed or previewed build. Prioritize tests for claim normalization, provenance, append-only revisions, merge rollback, and exclusion of living or sensitive-person data.

## Database Minimal-Write Rule

Every database mutation must write the smallest durable delta that preserves the domain model and audit trail.

- Resolve identity and compute the delta before writing. Re-running an unchanged operation must be a zero-write no-op: do not create duplicate people, sources, claims, source links, revisions, contributions, or timestamp-only updates.
- If a matching claim already exists, add only genuinely missing source evidence. If the same source link is already present, write nothing. A changed claim appends exactly the required revision and contribution; never rewrite unchanged snapshots.
- Prefer one set-based validation read and one transactional D1 batch for reviewed bulk work. Do not implement bulk imports as per-person or per-claim read/write loops when a bounded batch can express the same invariant.
- Keep mandatory provenance, revisions, and audit contributions. “Minimal” means no redundant writes; it never means omitting required evidence or history.
- Imports must report planned, created, reused, and skipped/no-op counts. Writes still go only through the API; direct D1 access remains read-only except for explicitly documented administrative maintenance.

## Commits & Pull Requests

The existing history uses concise Conventional Commit-style messages, e.g. `docs: establish initial genealogy design`. Continue with imperative, scoped subjects such as `docs: clarify merge review rules` or `api: validate claim sources`.

Keep pull requests focused. Include a summary, the affected documents or contracts, linked issue when available, and screenshots only for user-interface changes. Call out changes affecting public IDs, source traceability, retention, privacy, or merge semantics.
