// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { mistFog, mistMidnight } from "./src/styles/code-themes.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.mist.cash",
  integrations: [
    starlight({
      title: "MIST.cash Docs",
      description:
        "Documentation for MIST.cash, a protocol for private stablecoin payments on EVM chains with compliance set per Reserve: the circuit, the contracts and the TypeScript SDK.",
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mistcash",
        },
      ],
      customCss: [
        "./src/styles/tokens.css",
        "./src/styles/theme.css",
        "./src/styles/diagram.css",
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Hero: "./src/components/Hero.astro",
        Footer: "./src/components/Footer.astro",
      },
      expressiveCode: {
        themes: [mistMidnight, mistFog],
        styleOverrides: {
          borderColor: "var(--mist-line-strong)",
          borderRadius: "0",
          codeFontSize: "0.8125rem",
          codeLineHeight: "1.6",
          frames: {
            frameBoxShadowCssValue: "none",
          },
        },
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preload",
            href: "/fonts/Sen-Variable-latin.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preload",
            href: "/fonts/JosefinSans-Variable-latin.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        },
        {
          tag: "meta",
          attrs: { name: "theme-color", content: "#010511" },
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Introduction", slug: "" },
            { label: "Getting Started", slug: "getting-started" },
          ],
        },
        {
          label: "Packages",
          items: [
            { label: "@mistcash/sdk", slug: "packages/core" },
            { label: "@mistcash/config", slug: "packages/config" },
            { label: "@mistcash/react", slug: "packages/react" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Depositing Tokens", slug: "guides/deposit" },
            { label: "Withdrawing Tokens", slug: "guides/withdraw" },
            { label: "Zero-Knowledge Proofs", slug: "guides/zero-knowledge" },
            { label: "Merkle Trees", slug: "guides/merkle-trees" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "API Reference", slug: "reference/api" },
            { label: "Types", slug: "reference/types" },
            { label: "Contract ABI", slug: "reference/contract" },
          ],
        },
      ],
    }),
  ],
});
