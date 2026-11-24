// The One-Line Exit — make.fun entry (u-kreutzx-the-one-line-exit-1dc652d1)
// Writes one resignation letter, exactly one line long, to /output/entry.txt.
// Gate: UTF-8 text of 1 to 140 characters, not only white space.
// Node 22, stdlib only. No network, no secrets, no files read from elsewhere.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear boss, I resign: the printer jammed on my last nerve, and IT just opened a ticket asking me to fix it myself.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters, not only
// white space. Refuse to ship anything outside it rather than fail silently.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
