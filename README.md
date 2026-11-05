# Spice Route Trading Game

This project is a React application built with Next.js 16 and the App Router. It presents a Portuguese spice-trading voyage from Lisbon to Goa.

## Game screens

- `/` — interactive route map with sailing progress, zoom, and a storm effect.
- `/feitoria` — Goa trading post and spice price overview.
- `/cargo` — cargo capacity and provisions overview.
- `/lisbon` — voyage completion and profit summary.

The screens are implemented as React components in the App Router. Sailing controls on the route map use client-side state; navigation between screens uses Next.js links. Screen text and displayed values reproduce the original mockup content; these remain demo values and are not backed by persistent game state.

Static map and screen art lives in `public/` and is referenced with root-relative URLs. The original standalone HTML prototypes have been replaced by their React route implementations. The source cargo page referred to `cargo.jpg`, which was not supplied; the cargo screen therefore retains the original plain background rather than substituting a different illustration.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to begin a voyage.

## Validation

```bash
npm run lint
npm run build
```

## Useful documentation

- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [React documentation](https://react.dev/learn)
