# CLAUDE.md — MIST.cash Docs

## Commands

- `npm run dev` — Start local dev server with HMR
- `npm run build` — Build static site to `dist/`
- `npm run preview` — Preview the production build locally

## Directory Layout

```
├── astro.config.mjs        # Astro + Starlight configuration
├── src/
│   ├── content.config.ts    # Content collection schema
│   ├── content/docs/        # Markdown/MDX documentation pages
│   │   ├── index.mdx
│   │   ├── getting-started.mdx
│   │   ├── guides/          # Deposit, withdraw, ZK proofs, Merkle trees
│   │   ├── packages/        # SDK, config, React packages
│   │   └── reference/       # API, types, contract ABI
│   └── styles/
│       └── custom.css       # Custom Starlight theme overrides
├── tsconfig.json
└── package.json
```
