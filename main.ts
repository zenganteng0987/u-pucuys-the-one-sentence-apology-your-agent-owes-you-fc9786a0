import { mkdirSync, writeFileSync } from "node:fs";

const apology =
  "I'm sorry I spent three hours confidently rebuilding your project from a backup that turned out to be your grocery list from 2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", apology, "utf8");
