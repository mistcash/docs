// Holds every docs page to the MIST copy rules (landing/PRODUCT.md, "Copy
// rules"; the same patterns as landing/src/lib/copy-rules.ts). Prose only:
// fenced code, inline code and import lines are skipped, so a code sample may
// say `token` or `test` where the API does. Run: npm run copyrules
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export const RULES = [
  { id: "test", pattern: /\btest(s|ing)?\b/i, why: "never say test" },
  { id: "mainnet", pattern: /\b(testnets?|mainnets?)\b/i, why: "no network status words" },
  { id: "token", pattern: /\btokens?\b/i, why: "say stablecoins or assets" },
  {
    id: "chain-name",
    pattern: /\b(ethereum|arbitrum|sepolia|starknet|optimism|polygon|solana|avalanche)\b/i,
    why: "no chain or network names for our deployment",
  },
  { id: "em-dash", pattern: /—/, why: "no em-dashes: use a full stop or a comma" },
  { id: "arrow-glyph", pattern: /[←-↓↗↘]/, why: "arrows are drawn icons, never glyphs" },
  {
    id: "privacy-hype",
    pattern: /\b(mixers?|untraceable|anonymous|anonymity|shielded|quantum[- ]proof|quantum[- ]safe)\b/i,
    why: "banned privacy wording",
  },
  {
    id: "hype",
    pattern:
      /\b(seamless(ly)?|unlock(s|ed|ing)?|empower(s|ed|ing)?|revolutionary|next[- ]gen|supercharge[sd]?|world[- ]class)\b/i,
    why: "no hype words",
  },
  { id: "emoji", pattern: /\p{Extended_Pictographic}/u, why: "no emoji" },
];

/** Blank out fenced code, inline code and import lines, keeping line numbers. */
export function prose(source) {
  let inFence = false;
  return source
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return "";
      }
      if (inFence || /^import\s/.test(line)) return "";
      return line.replace(/`[^`]*`/g, "");
    })
    .join("\n");
}

export function findViolations(source) {
  const found = [];
  prose(source)
    .split("\n")
    .forEach((text, i) => {
      for (const rule of RULES) {
        if (rule.pattern.test(text)) found.push({ rule: rule.id, why: rule.why, line: i + 1, text: text.trim() });
      }
    });
  return found;
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (/\.mdx?$/.test(name)) yield path;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = process.argv[2] ?? "src/content/docs";
  let files = 0;
  let bad = 0;
  for (const file of walk(root)) {
    files++;
    for (const v of findViolations(readFileSync(file, "utf8"))) {
      bad++;
      console.error(`${file}:${v.line} [${v.rule}] ${v.why}: ${v.text}`);
    }
  }
  if (files === 0) {
    console.error(`copy rules: no pages found under ${root}`);
    process.exit(1);
  }
  console.log(`copy rules: ${files} pages, ${bad} violations`);
  process.exit(bad === 0 ? 0 : 1);
}
