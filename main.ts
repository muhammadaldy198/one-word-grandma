// One Word From Grandma (make.fun): exactly one word — the word
// grandma would text about AI. The gate is 1-30 UTF-8 characters,
// not whitespace-only, so the file holds the word and nothing else:
// no trailing newline, no punctuation, no explanation.
//
// The word: KNOWITALL. Grandma has met the machine that answers
// every question, and she has named it the way grandmas name
// anything that acts like it knows everything: a know-it-all.
// Warm, a little baffled, funny on its own, and tied to what the
// machine actually does — it knows. Nine letters, all caps, the
// way grandma types when she means it.
//
// Guard: the word must stay one word (no spaces) inside the 1-30
// character gate, or the program refuses to write anything.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "KNOWITALL";

if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("word must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
