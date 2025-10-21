<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, focused guidance for AI coding agents to get productive immediately.

Key files
- `package.json` — scripts: `dev` (vite), `build` (vue-tsc -b && vite build), `preview` (vite preview).
- `src/main.ts` — application bootstrap and DOM mount target.
- `src/App.vue` — root SFC using `<script setup lang="ts">`.
- `src/components/*` — component SFCs using Composition API and `defineProps<T>()`.
- `tsconfig.json` / `tsconfig.app.json` — TypeScript settings (based on `@vue/tsconfig`).

Big picture
- Single-page Vue 3 + Vite frontend with TypeScript. No backend code exists in this repo.
- UI is organized as SFCs under `src/components`; static assets are in `src/assets` and `public/`.

Patterns & conventions
- Use `<script setup lang="ts">` and the Composition API in SFCs (see `src/components/HelloWorld.vue`).
- Type props with `defineProps<T>()`. Keep styles scoped in SFCs when appropriate.
- Preserve the `vue-tsc -b` step in `npm run build`; it enforces SFC type-checking across the project.

Developer workflows
- Dev server: `npm run dev` (Vite with HMR). Edit SFCs to verify HMR updates.
- Build: `npm run build` (runs `vue-tsc -b` then `vite build`). Fix type errors reported by `vue-tsc` before merging.
- Preview: `npm run preview`.

Examples to inspect
- `src/main.ts` — bootstrap and DOM mount target (use as reference when changing the root component).
- `src/App.vue` — root layout and global imports.
- `src/components/HelloWorld.vue` — typed props, `ref` state example, and scoped styles.

Integration notes
- Runtime dependency: `vue`. Dev tooling: `vite`, `vue-tsc`, `@vitejs/plugin-vue`, and `TypeScript`.
- No external services are configured. If you add integrations, document required environment variables in `README.md` and avoid committing secrets.

Quick PR checklist
1. Run `npm run dev` and confirm HMR/UI behavior.
2. Run `npm run build` and resolve `vue-tsc` errors.
3. Do not commit secrets or untracked env config.

If you want more details (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.
<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, focused guidance for AI coding agents to get productive quickly.

Key files
- package.json — scripts: dev (vite), build (vue-tsc -b && vite build), preview (vite preview).
- src/main.ts — app bootstrap and DOM mount target.
- src/App.vue — root SFC using <script setup lang="ts">.
- src/components/* — component SFCs using Composition API and defineProps<T>().
- tsconfig.json / tsconfig.app.json — TypeScript settings (follow @vue/tsconfig conventions).

Big picture
- Single-page Vue 3 application built with Vite and TypeScript. No backend code in this repo.
- UI is organized in SFCs under src/components. Static assets live in src/assets and public/.

<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, focused guidance to help AI coding agents be productive in this repository.

Key files
- `package.json` — scripts: `dev` (vite), `build` (vue-tsc -b && vite build), `preview` (vite preview).
- `src/main.ts` — app bootstrap and DOM mount target (see file for exact call).
- `src/App.vue` — root single-file component using `<script setup lang="ts">`.
- `src/components/*` — component SFCs using Composition API and `defineProps<T>()`.
- `tsconfig.json` / `tsconfig.app.json` — TypeScript settings (follow `@vue/tsconfig` conventions).

Big picture
- Single-page Vue 3 + Vite frontend with TypeScript. No backend code in this repository.
- UI is composed of SFCs under `src/components`. Static assets live in `src/assets` and `public/`.

Patterns & conventions
- Prefer `<script setup lang="ts">` and the Composition API in SFCs (see `src/components/HelloWorld.vue`).
- Type props with `defineProps<T>()`. Keep styles scoped in SFCs when appropriate.
- Preserve the `vue-tsc -b` step in the `build` script — it enforces type-checking across SFCs.

Developer workflows
- Dev server: `npm run dev` (Vite with HMR). Edit SFCs and verify HMR updates.
- Build: `npm run build` (runs `vue-tsc -b` then `vite build`). Fix any type errors reported by `vue-tsc` before merging.
- Preview: `npm run preview`.

Examples to inspect
- `src/main.ts` — bootstrap and DOM mount target (use as reference when changing the root component).
- `src/App.vue` — root layout, global imports, and component composition.
- `src/components/HelloWorld.vue` — typed props, `ref` state example, and scoped styles.

Integration notes
- Runtime dependency: `vue`. Dev tooling: `vite`, `vue-tsc`, `@vitejs/plugin-vue`, `TypeScript`.
- No external services configured. If you add integrations, document required environment variables in `README.md` and do not commit secrets.

Quick PR checklist
1. Run `npm run dev` and confirm HMR/UI behavior.
2. Run `npm run build` and resolve `vue-tsc` errors.
3. Do not commit secrets or untracked env config.

If you want more detail (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.

Patterns & conventions
- Use <script setup lang="ts"> and the Composition API. See src/components/HelloWorld.vue for an example.
- Type props with defineProps<T>(). Keep styles scoped in SFCs where appropriate.
- Preserve the vue-tsc -b step in the build script; it enforces SFC type-checking.

Developer workflows
- Dev: npm run dev (Vite with HMR). Edit SFCs to verify HMR.
- Build: npm run build (vue-tsc -b then vite build). Fix type errors reported by vue-tsc.
- Preview: npm run preview.

Examples to inspect
- src/main.ts — bootstrap and mount target.
- src/App.vue — root layout and global imports.
- src/components/HelloWorld.vue — typed props and local ref state example.

Integration notes
- Runtime dependency: vue. Dev tooling: vite, vue-tsc, @vitejs/plugin-vue, TypeScript.
- No external services configured. If adding integrations, document required environment variables in README.md and avoid committing secrets.

Quick PR checklist
1. Run npm run dev and confirm HMR/UI behavior.
2. Run npm run build and resolve vue-tsc errors.
3. Do not commit secrets or untracked env config.

If you want more details (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.
<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, actionable guidance for AI coding agents to get productive quickly.

Key files
- `package.json` — scripts: `dev` (vite), `build` (vue-tsc -b && vite build), `preview` (vite preview).
- `src/main.ts` — app bootstrap; look for createApp(App) and the DOM mount target with id "app".
- `src/App.vue` — root SFC using `<script setup lang="ts">`.
- `src/components/*` — component SFCs using Composition API and `defineProps<T>()`.
- `tsconfig.json` / `tsconfig.app.json` — TypeScript settings (based on `@vue/tsconfig`).

Big picture
- Single-page Vue 3 + Vite frontend (no backend). UI is composed of SFCs under `src/components`.
- Static assets live in `src/assets` and `public/`.

Patterns & conventions
- Use `<script setup lang="ts">` and the Composition API. See `src/components/HelloWorld.vue` for an example.
- Type props with `defineProps<T>()`. Keep styles scoped in SFCs where appropriate.
- Preserve the `vue-tsc -b` step in `npm run build`; it enforces type-checking across SFCs.

Developer workflows
- Dev: `npm run dev` (Vite with HMR). Edit SFCs to verify HMR updates.
- Build: `npm run build` (runs `vue-tsc -b` then `vite build`); fix type errors before merging.
- Preview: `npm run preview`.

Examples to inspect
- `src/main.ts` — app bootstrap and DOM mount target.
- `src/App.vue` — root layout and global imports.
- `src/components/HelloWorld.vue` — typed props, `ref` state, and scoped styles.

Integration notes
- Runtime dependency: `vue`. Dev tooling includes `vite`, `vue-tsc`, `@vitejs/plugin-vue`, and `TypeScript`.
- No external services are configured in this repo. If you add integrations, document required environment variables in `README.md` and do not commit secrets.

Quick PR checklist
1. Run `npm run dev` and confirm HMR/UI behavior.
2. Run `npm run build` and resolve `vue-tsc` errors.
3. Do not commit secrets or untracked env config.

If you want more details (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.
---
Generated to help AI coding agents get started quickly.
<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, actionable guidance so an AI agent is productive immediately.

Key files
- package.json — scripts: dev (vite), build (vue-tsc -b && vite build), preview (vite preview).
- src/main.ts — app bootstrap: look for createApp(App).mount and the DOM mount target (id="app").
- src/App.vue — root SFC using script setup with TypeScript.
- src/components/* — example components using Composition API and defineProps<T>().
- tsconfig.json / tsconfig.app.json — follow @vue/tsconfig conventions when editing type settings.

Big picture
- Small single-page Vue 3 + Vite frontend. No backend code in this repository.
- UI organized into SFCs under src/components. Static assets in src/assets and public/.

Patterns & conventions
- Prefer <script setup lang="ts"> and the Composition API in SFCs (see HelloWorld.vue).
- Type props with defineProps<T>(). Keep styles scoped in SFCs when appropriate.
- Preserve the vue-tsc -b step in the build script — it enforces type-checking across SFCs.

Dev workflows
- Dev server: npm run dev (Vite with HMR). Edit SFCs to verify HMR behavior.
- Build: npm run build (runs vue-tsc -b then vite build). Fix any type errors reported by vue-tsc before bundling.
- Preview production build: npm run preview.

Examples
- src/main.ts — app bootstrap and mount target.
- src/components/HelloWorld.vue — typed props, ref state, and scoped styles example.

Notes
- No external APIs integrated. If adding integrations, document required env vars in README.md and avoid committing secrets.

Quick PR checklist
1. Run npm run dev and confirm HMR and UI behavior.
2. Run npm run build and fix any vue-tsc type errors.
3. Do not commit secrets or untracked env config.

If you want more details (routing, state management, CI), ask and I will expand this file with concrete examples.

---
Generated to help AI coding agents get started quickly.
<!-- Auto-generated: tailored instructions for AI coding agents working on the `rag-ts` repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Concise, repo-specific guidance so an AI agent can be productive immediately.

Key files
- `package.json` — scripts: `dev` (vite), `build` (vue-tsc -b && vite build), `preview` (vite preview).
- src/main.ts — app bootstrap; look for createApp(App).mount and the DOM mount target (id="app").
- `src/App.vue` — root SFC using `<script setup lang="ts">`.
- `src/components/*` — examples using Composition API and `defineProps<T>()`.
- `tsconfig.json` / `tsconfig.app.json` — follow `@vue/tsconfig` conventions when changing types or paths.

<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Short, actionable guidance so an AI coding agent is productive immediately.

Key files
- package.json — scripts: dev (vite), build (vue-tsc -b && vite build), preview (vite preview).
- src/main.ts — app bootstrap. The app is created and mounted to the page element with id "app".
- src/App.vue — root single-file component using <script setup lang="ts">.
- src/components/* — example components using Composition API and typed props via defineProps<T>().
- tsconfig.json / tsconfig.app.json — project TypeScript settings (based on @vue/tsconfig).

Big picture
- Single-page Vue 3 + Vite frontend only. No backend code in this repository.
- UI lives in SFCs under src/components. Static assets are in src/assets and public/.

Patterns & conventions (project-specific)
- Use <script setup lang="ts"> and the Composition API in SFCs. See src/components/HelloWorld.vue for an example.
- Type component props with defineProps<T>(). Example: HelloWorld.vue defines a msg prop and uses ref for local state.
- Keep styles scoped in SFCs when appropriate. Prefer small, focused components and minimal global state.
- Do not remove the vue-tsc -b step from the build script; it enforces type-checking across SFCs.

Developer workflows
- Dev server: run npm run dev (Vite with HMR). Edit SFCs to validate HMR and quick feedback.
- Build: run npm run build (runs vue-tsc -b then vite build). Address type errors reported by vue-tsc before bundling.
- Preview production build: npm run preview.

Integration / dependencies
- Runtime dependency: vue. Dev tooling: vite, vue-tsc, @vitejs/plugin-vue, TypeScript.
- No external APIs integrated. If you add external services, document required environment variables in README.md and avoid committing secrets.

Examples to inspect when editing code
- src/main.ts — app bootstrap and mount target.
- src/App.vue — root layout and global imports (styles/assets).
- src/components/HelloWorld.vue — idiomatic Composition API usage, typed props, and scoped styles.

Quick PR checklist
1. Run npm run dev and confirm behavior and HMR.
2. Run npm run build and fix any vue-tsc type errors.
3. Do not commit secrets or untracked env config.

If anything is unclear or you want more detail (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.
Big-picture architecture
- Small single-page Vue 3 app scaffolded with Vite and TypeScript. No backend code in this repo.
- UI is organized as SFC components under `src/components/`. `App.vue` is the root and imports child components (see `HelloWorld.vue`).
- Static assets live in `src/assets/` and `public/` (served at `/`).

<!-- Auto-generated: tailored instructions for AI coding agents working on the rag-ts repo -->
# Copilot instructions — rag-ts (Vue 3 + TypeScript + Vite)

Concise, repo-specific guidance so an AI agent can be productive immediately.

Key files
- package.json — scripts: dev (vite), build (vue-tsc -b && vite build), preview (vite preview).
- src/main.ts — app bootstrap: createApp(App).mount to the DOM element with id "app".
- src/App.vue — root SFC using <script setup lang="ts">.
- src/components/* — examples using Composition API and defineProps<T>().
- tsconfig.json / tsconfig.app.json — follow @vue/tsconfig conventions when changing types or paths.

Big picture
- Single-page Vue 3 + Vite frontend (no backend). Components are SFCs under src/components/.
- Static assets in src/assets/ and public/.

Patterns & conventions
- Use <script setup lang="ts"> and Composition API; type props with defineProps<T>() (see src/components/HelloWorld.vue).
- Keep styles scoped in SFCs when appropriate. Prefer small, focused components and minimal global state.
- Preserve the vue-tsc -b build step — it enforces type-checking across SFCs.

Developer workflows
- Dev server: npm run dev (Vite with HMR). Edit SFCs to validate HMR.
- Build (type-check + bundle): npm run build (vue-tsc -b then vite build).
- Preview production build: npm run preview.

Examples to reference
- Root mount: src/main.ts shows createApp(App).mount to the DOM element with id "app".
- Props + state: src/components/HelloWorld.vue demonstrates defineProps<{ msg: string }>() and a local ref counter.

Notes / do not change
- No runtime external services are integrated. If you add integrations, document required environment variables in README.md and avoid committing secrets.

Quick PR checklist
1. Run npm run dev and confirm HMR and UI behavior.
2. Run npm run build and fix any vue-tsc type errors.
3. Do not commit secrets or untracked env config.

If anything is unclear or you want more detail (routing, state management, CI), ask and I will expand this file with concrete examples and checks.

---
Generated to help AI coding agents get started quickly.
3. Ensure no secrets or env-specific config committed.
