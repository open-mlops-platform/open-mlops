# Repository Guidelines

## Project Structure & Module Organization
- `module-frontend/` contains the Next.js (App Router) frontend.
- `module-frontend/app/` holds route segments (e.g., `app/data/page.tsx`) and shared UI like `app/components/`.
- `module-frontend/public/` stores static assets.
- `docs/` is for project documentation. No backend module is present yet.

## Build, Test, and Development Commands
Run from the repo root with pnpm:
```bash
pnpm -C module-frontend dev    # start local dev server
pnpm -C module-frontend build  # production build
pnpm -C module-frontend start  # run built app
pnpm -C module-frontend lint   # ESLint checks
```
You can also `cd module-frontend` and use `pnpm dev`, etc.

## Coding Style & Naming Conventions
- TypeScript + React; keep code in `*.tsx` under `app/`.
- Use 2-space indentation and follow ESLint (`eslint-config-next`).
- Components: `PascalCase` (e.g., `StudioShell.tsx`).
- Routes: lowercase folder names with `page.tsx` (e.g., `app/models/page.tsx`).
- Styling: Tailwind utility classes; shared palette lives in `app/globals.css`.

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, document the framework choice in this file and prefer a `*.test.tsx` naming pattern.

## Commit & Pull Request Guidelines
- Git history uses short, imperative messages (e.g., `fix docs`, `fix ci`); keep commits concise and scoped.
- PRs should include: a clear summary, affected routes or components, and screenshots for UI changes.
- If linting applies, confirm `pnpm -C module-frontend lint` passes in the PR description.
