<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project guidance

## Application structure

- This repository uses Next.js 16, React, TypeScript, and the App Router.
- The active root route is `src/app/page.tsx`; shared document metadata and layout live in `src/app/layout.tsx`.
- Implement application screens as React components in route `page.tsx` files. Standalone `.html` files placed in `src/app` are not App Router routes.
- Put URL-addressable static assets in the root `public/` directory and reference them with root-relative paths (for example, `/ocean.jpg`).

## Prototype files

- `src/app/index.html`, `cargo.html`, `feitoria.html`, and `lisbon.html` are standalone screen prototypes, not active application routes or game logic.
- Their sibling JPGs are visual references. `cargo.html` refers to `cargo.jpg`, which is not currently in the repository.
- When porting a prototype, reimplement its interactions and navigation in React and connect them to application state; do not assume the HTML mockup is served by Next.js.

## Validation

- Run `npm run lint` for linting and `npm run build` to validate the production build.
- Follow the installed Next.js documentation for this project's version when changing Next.js APIs or conventions.
