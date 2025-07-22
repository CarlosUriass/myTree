#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";

const EMOJIS = {
  folder: "📁",
  file: "📄",
  extensions: {
    ".js": "⚙️",
    ".ts": "🔧",
    ".jsx": "⚛️",
    ".tsx": "⚛️",
    ".json": "🗂️",
    ".md": "📝",
    ".html": "🌐",
    ".css": "🎨",
    ".py": "🐍",
    ".ipynb": "📙",
    ".java": "☕",
    ".sh": "🐚",
    ".yml": "⚙️",
    ".yaml": "⚙️",
  },
};

function getEmoji(filename, isDir) {
  if (isDir) return EMOJIS.folder;
  const ext = path.extname(filename).toLowerCase();
  return EMOJIS.extensions[ext] || EMOJIS.file;
}

const args = process.argv.slice(2);
let targetDir = ".";
let ignoreList = [];

const iFlagIndex = args.indexOf("-i");
if (iFlagIndex !== -1) {
  ignoreList = args[iFlagIndex + 1]?.split(",") || [];
  targetDir = args[0] || ".";
} else {
  targetDir = args[0] || ".";
}

function printTree(dir, prefix = "", ignoredDirs = []) {
  let items;

  try {
    items = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    console.error(chalk.red(`🚫 Cannot access ${dir}: ${err.message}`));
    return;
  }

  const lastIndex = items.length - 1;

  items.forEach((item, index) => {
    const isLast = index === lastIndex;
    const pointer = isLast ? "└── " : "├── ";
    const newPrefix = prefix + (isLast ? "    " : "│   ");

    const fullPath = path.join(dir, item.name);
    const emoji = getEmoji(item.name, item.isDirectory());

    const coloredName = item.isDirectory()
      ? chalk.blue.bold(item.name)
      : chalk.green(item.name);

    console.log(`${prefix}${pointer}${emoji} ${coloredName}`);

    if (item.isDirectory() && !ignoredDirs.includes(item.name)) {
      printTree(fullPath, newPrefix, ignoredDirs);
    }
  });
}

console.log(chalk.yellow(`\n📂 Tree of ${path.resolve(targetDir)}\n`));
printTree(targetDir);
