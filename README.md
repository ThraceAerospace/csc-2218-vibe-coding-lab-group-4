# Spice Route Trading Game

This project is a React application built with Next.js 16 and the App Router. The repository currently contains the default Next.js landing page plus standalone HTML screen prototypes for a Portuguese spice-trading voyage.

## Current project state

- The application root at `/` is implemented by `src/app/page.tsx` and still shows the default Next.js starter screen.
- `src/app/index.html`, `cargo.html`, `feitoria.html`, and `lisbon.html` are visual and interaction prototypes. They are not Next.js routes, and their inline navigation does not connect to the React app.
- `src/app/ocean.jpg`, `feitoria.jpg`, and `lisbon.jpg` are prototype backgrounds referenced by those standalone HTML files. The cargo prototype also references `cargo.jpg`, which is not present.
- The prototype pages contain sample game values and demo interactions; they are not connected to shared game state or implemented game logic.

When integrating a prototype into the app, implement it with React components and App Router route files (for example, `src/app/page.tsx` for `/` or `src/app/feitoria/page.tsx` for `/feitoria`). For assets referenced by URL, place them in `public/` and use root-relative URLs such as `/ocean.jpg`. Keep route navigation and game state in the React app rather than relying on the prototypes' standalone HTML links and inline scripts.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the current React app.

## Validation

```bash
npm run lint
npm run build
```

## Useful documentation

- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [React documentation](https://react.dev/learn)
