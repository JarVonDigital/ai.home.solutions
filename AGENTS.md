# Repository Guidelines

## Project Structure & Modules
- Source lives in `src/` with Angular components under `src/app/`; shared UI sits in `src/app/components/`.
- Global entrypoints: `src/main.ts` bootstraps the app, `src/styles.scss` hosts shared styling, and `public/` supplies static assets bundled at build time.
- Build output lands in `dist/`; Angular/TypeScript configuration is managed by `angular.json` and `tsconfig*.json`.

## Build, Test, and Development Commands
- Install deps once: `npm install`.
- Run locally with live reload: `npm start` (alias for `ng serve`).
- Production-style build: `npm run build` → outputs to `dist/`.
- Watch build for iterative QA: `npm run watch`.
- Unit tests (Karma/Jasmine): `npm test`.

## Coding Style & Naming Conventions
- Language: TypeScript + Angular, styles in SCSS. Default Angular CLI prefix is `app`; keep selectors/components consistent (e.g., `app-hero-card`).
- Indentation: 2 spaces; prefer single quotes in TS unless the codebase around you differs.
- Keep components small and foldered by feature; co-locate templates (`.html`), styles (`.scss`), and logic (`.ts`).
- Follow Angular style guide: use strongly typed inputs/outputs, avoid `any`, and centralize constants/utilities under `src/app/` instead of re-declaring.

## Testing Guidelines
- Frameworks: Jasmine for specs, Karma for runner; place specs next to implementations as `*.spec.ts`.
- Minimum: write unit specs for new components/services; cover inputs/outputs and template conditionals.
- Run `npm test` before pushing; prefer deterministic tests (avoid timers where possible).

## Commit & Pull Request Guidelines
- History favors short, Title Case subjects (e.g., `Updated BG Image`). Use imperative verbs when adding new commits (e.g., `Add contact form validation`).
- Commit frequently with focused scope; avoid committing build artifacts from `dist/`.
- PRs should state purpose, key changes, and test results (`npm test`/manual checks). Include screenshots/GIFs for UI changes and note any config impacts.

## Security & Config Tips
- Keep secrets out of the repo; use environment files or deployment-layer config rather than hardcoding keys into `src/`.
- Validate external dependencies before adding; align versions with Angular 20.x to match the current toolchain.
