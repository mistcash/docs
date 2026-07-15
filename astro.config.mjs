// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MIST Docs",
      description:
        "Privacy-focused SDK for zero-knowledge transactions on Starknet",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mistcash/sdk",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "Welcome", slug: "index" },
        {
          label: "Introduction",
          collapsed: false,
          items: [
            { label: "Overview", slug: "introduction/overview" },
            { label: "Community", slug: "introduction/mission" },
            { label: "FAQ", slug: "introduction/faq" },
          ],
        },
        {
          label: "Features",
          collapsed: false,
          items: [
            { label: "Private Payment", slug: "features/private-payment" },
            {
              label: "Partial Withdrawals",
              slug: "features/partial-withdrawals",
            },
            { label: "Off-Ramping", slug: "features/off-ramping" },
            { label: "Compliance", slug: "features/compliance" },
          ],
        },
        {
          label: "How It Works",
          collapsed: false,
          items: [
            { label: "Concepts", slug: "how-it-works/concepts-glossary" },
            { label: "Architecture", slug: "how-it-works/architecture" },
            {
              label: "Transaction Flow",
              slug: "how-it-works/tx-lifecycle",
            },
            { label: "Cryptography", slug: "how-it-works/cryptography" },
          ],
        },
        {
          label: "Guides",
          collapsed: false,
          items: [
            { label: "Quickstart", slug: "guides/quickstart" },
            { label: "Deposit", slug: "guides/deposit" },
            { label: "Withdraw", slug: "guides/withdraw" },
            { label: "Merkle Trees", slug: "guides/merkle-trees" },
            {
              label: "Zero-Knowledge Proofs",
              slug: "guides/zero-knowledge",
            },
          ],
        },
        {
          label: "Reference",
          collapsed: false,
          items: [
            { label: "SDK", slug: "reference/sdk" },
            { label: "Contract ABI", slug: "reference/contract" },
            { label: "Types", slug: "reference/types" },
          ],
        },
        {
          label: "Packages",
          collapsed: false,
          items: [
            { label: "@mistcash/sdk", slug: "packages/core" },
            { label: "@mistcash/config", slug: "packages/config" },
            { label: "@mistcash/react", slug: "packages/react" },
          ],
        },
      ],
    }),
  ],
});
