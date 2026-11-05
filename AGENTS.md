<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project guidance

## Application structure

- This repository uses Next.js 16, React, TypeScript, and the App Router.
- The root route is `src/app/page.tsx`; nested screens use route folders with `page.tsx` (for example, `src/app/feitoria/page.tsx`).
- Shared metadata and document layout live in `src/app/layout.tsx`; common UI such as the game frame is in `src/app/game-ui.tsx`.
- Keep interactive UI in client components and use server components for screens that do not need browser state.
- Put URL-addressable static assets in the root `public/` directory and reference them with root-relative paths (for example, `/ocean.jpg`).

## Game application

- `/`, `/feitoria`, `/cargo`, and `/lisbon` are the current game screens.
- Prices, cargo amounts, and rewards reproduce the original mockup's demo content and are not persisted game state.
- Navigation between screens should use Next.js `Link` components. Do not reintroduce standalone HTML files in `src/app`.
- The map and screen illustrations are stored in `public/`. There is no cargo-specific image; preserve the cargo mockup's plain background instead of substituting unrelated art.

## Validation

- Run `npm run lint` for linting and `npm run build` to validate the production build.
- Follow the installed Next.js documentation for this project's version when changing Next.js APIs or conventions.
