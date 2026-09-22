import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const docs = join(root, "docs");
if (!existsSync(join(docs, "index.html"))) {
  console.error("docs/index.html missing — run npm run build:pages first");
  process.exit(1);
}

const skip = new Set([".git", "node_modules", "src", "pages", "docs", "scripts", "server"]);
for (const name of readdirSync(docs)) {
  if (skip.has(name)) continue;
  const from = join(docs, name);
  const to = join(root, name);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
}

cpSync(join(docs, "index.html"), join(root, "404.html"));
writeFileSync(join(root, ".nojekyll"), "");
console.log("Synced docs/ → repo root for GitHub Pages");
