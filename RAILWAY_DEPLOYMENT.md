# ASTRA HEALTH — Railway Production Deployment

This guide deploys the current repository as separate web and API services. It does not create, drop, import, or replace any database. Connect the intended existing PostgreSQL service only after verifying its identity and taking a backup.

## Service topology

Create one Railway project and a production environment with these three services:

1. **Web** — GitHub repo `kareema640/astra-health`, source branch `feature/railway-deployment`, root directory `/`.
   - Build command: `bun run build`
   - Start command: `node .output/server/index.mjs`
   - Health-check path: `/`
   - Add a Railway-generated public domain (or an owned custom domain).
   - The frontend is TanStack Start with Nitro's `node-server` preset. `PORT` is read by the generated server; it binds to Railway's assigned port. The package now exposes the `start` script for this production entrypoint.

2. **API** — same GitHub repo and branch, root directory `/backend`.
   - Build command: `bun run typecheck`
   - Start command: `bun run start`
   - Health-check path: `/api/health`
   - Add a public Railway domain because browser-side frontend code calls the API directly. The PostgreSQL connection itself remains private.
   - `backend/src/server.ts` listens on `process.env.PORT` through the validated `PORT` variable, starts on all interfaces by default, and applies tracked SQL migrations before listening.

3. **PostgreSQL** — attach the *existing* production PostgreSQL service if one already contains ASTRA HEALTH data. Do not click “Add PostgreSQL” as a replacement until the current production database has been identified and backed up. If no production database exists, first decide with the project owner whether a new empty production database is acceptable; this task did not provision one.

Railway's monorepo workflow supports a separate root directory for each service. Configure the Web root as `/` and API root as `/backend`. This repo intentionally does not use `railway.json` or `railway.toml`: Railway now marks those per-service config files deprecated, with a published cutoff of **2026-12-01**. Use Railway's service settings instead, or use Railway IaC only after its intended project/environment and planned changes have been reviewed.

## Environment variables

Set the following as Railway **service variables**. Never add secret values to Git, this guide, or the frontend.

### Web service

- `VITE_API_URL` — public API origin, including scheme and no trailing slash, for example `https://<api-public-domain>`. This is compiled into browser code at build time. Rebuild/redeploy Web after changing it. It is not a secret.

### API service

- `DATABASE_URL` — the existing PostgreSQL service's connection string. Prefer Railway's private/internal `DATABASE_URL` reference. Example reference form: `${{Postgres.DATABASE_URL}}` if the DB service is named `Postgres`.
- `JWT_SECRET` — unique random signing secret of at least 32 characters. Generate a fresh one with `openssl rand -base64 48`; do not reuse a development key.
- `CORS_ORIGINS` — exact browser origin(s), comma-separated with no trailing slashes, e.g. `https://<web-public-domain>`. If using a custom domain as well, include both origins exactly.
- `GEMINI_API_KEY` — Google Gemini API credential. Required to enable live Gemini responses; without it the existing assistant returns its configured unavailable fallback rather than a fabricated answer.
- `NODE_ENV=production`.

The code supplies defaults for `PORT` (local default 3001), `ACCESS_TOKEN_TTL` (15m), `REFRESH_TOKEN_TTL_DAYS` (30), `BCRYPT_ROUNDS` (12), `GEMINI_MODEL` (`gemini-3.5-flash-lite`), and `GEMINI_BASE_URL` (`https://generativelanguage.googleapis.com/v1beta`). Railway injects `PORT`; do not pin it to 3001 in production. Only set optional values if intentionally overriding those defaults.

The API public hostname may not be available until Railway has made its first deployment/domain. A safe sequence is: deploy API with `CORS_ORIGINS` temporarily set to the exact Web origin once known, create/generate both domains, then set `VITE_API_URL` and the final `CORS_ORIGINS` references and redeploy both services. Alternatively, use owned custom domains chosen before production cutover. Do not set the browser API URL to a Railway private hostname: browsers cannot access Railway's service-private network.

## Database preservation and migrations

The application currently applies the SQL files under `backend/src/db/migrations/` at API startup. It records completed files in `schema_migrations`, skips those already recorded, and wraps each new migration in a transaction. The inspected migrations are additive (`CREATE TABLE IF NOT EXISTS`, `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`) and do not contain `DROP TABLE`, `TRUNCATE`, or broad `DELETE` statements. This code review is not a substitute for verifying the live database's schema, data, and migration ledger.

Before connecting a production DB:

1. Confirm the service is the intended ASTRA HEALTH production database, not the sandbox/development DB.
2. Take and verify a restorable snapshot/backup.
3. Compare `schema_migrations` and the actual table/schema state with migration files `001`–`009`. If it is an older/manual database without a correct ledger, do not allow startup migrations to run until a DBA has reviewed a safe baseline/upgrade plan. `CREATE TABLE IF NOT EXISTS` does not reconcile incompatible existing table definitions.
4. Set the API's `DATABASE_URL` to that database's private connection string. Keep public TCP database access disabled unless there is a deliberate operational need.
5. Deploy the API and inspect startup logs for `[migrate]` output or `already up to date`; verify the health endpoint, then test a non-destructive read and the intended auth flow.

For any restoration or data transfer, do it as a separately reviewed backup/restore operation. There is no database dump or seed/import command in this deployment setup, so a Railway deploy will not silently replace existing records.

## Deploy from GitHub

1. Confirm the branch `feature/railway-deployment` is pushed to GitHub and select it as the source branch for both app services. Do not select or merge to `main`.
2. Create/choose the correct Railway project and production environment. First identify the existing PostgreSQL service. Add an API service and a Web service from the same repository. Set their root directories independently (`/backend` and `/`).
3. Add a private variable reference to the existing Postgres `DATABASE_URL` on API. Add `JWT_SECRET`, `NODE_ENV`, `GEMINI_API_KEY`, and initial/final `CORS_ORIGINS` to API. Keep all credentials in Railway's Variables UI.
4. Set Web's `VITE_API_URL` to the API's **public HTTPS origin**. Since this is a Vite `VITE_` variable, Railway must provide it during the build as well as runtime. Redeploy Web after setting it.
5. Configure the build/start commands and health-check paths above. Deploy API and Web, then confirm Railway reports both healthy. API startup runs the tracked migrations before opening the listener.
6. Test `https://<api-domain>/api/health` and the Web domain in a browser. Then run signup, login, onboarding persistence, dashboard/profile reads, logout, and the AI Assistant with a valid Gemini credential. Check browser network requests for the production API origin and verify no localhost URLs or CORS errors.
7. Set up regular PostgreSQL backups and monitor API logs/health. Railway's deployment health check validates rollout readiness, not continuous uptime monitoring.

## Local checks completed on this branch

- Frontend production build: `VITE_API_URL=https://astra-api.example.up.railway.app npm run build` — passed.
- Frontend production entrypoint: started `.output/server/index.mjs` with `PORT=4321`, `HOST=0.0.0.0`; `/` returned HTTP 200.
- Backend tests: `npm test` from `backend/` — 67 tests passed across 8 files.
- Frontend tests: `npm test` from repository root — 16 passed, 1 failed. The failing test is an existing stale expectation in `src/test/onboarding-steps.test.ts`: it expects the final onboarding step's `next` route to be `null`, but the current implementation correctly routes to `/dashboard`. This deployment change did not alter onboarding behavior or that test.
- No live Railway deployment or live URL test has been performed. This sandbox does not have a Railway CLI login/project link or verified access to the production database. The steps above must be completed in the user's Railway account before deployment can be claimed complete.

## References

- Railway monorepos and root directories: https://docs.railway.com/deployments/monorepo
- Railway Infrastructure as Code and Config-as-Code deprecation: https://docs.railway.com/infrastructure-as-code
- Railway PostgreSQL connection variables and private networking: https://docs.railway.com/databases/postgresql
- Railway deployment health checks: https://docs.railway.com/deployments/healthchecks
- Railway pre-deploy commands: https://docs.railway.com/deployments/pre-deploy-command
