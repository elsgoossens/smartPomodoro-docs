// scripts/build-jsdocs-md.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import jsdoc2md from 'jsdoc-to-markdown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Welke bronnen meenemen (pas aan naar wens)
const sources = [
  'src/**/*.ts',
  'src/**/*.tsx',
  'src/**/*.js',
  'src/**/*.jsx',
  '!src/**/*.test.*',
  '!src/**/*.spec.*',
  '!src/**/*.stories.*',
  '!**/stories/**',
];

const frontmatter = `---
id: js-api
title: JavaScript API
sidebar_label: JS API
---

`;

const md = await jsdoc2md.render({
  files: sources,
  'no-cache': true,
  'global-index-format': 'grouped',
});

// Output-bestand
const outDir = path.resolve(__dirname, '..', 'docs', 'api', 'js');
const outFile = path.join(outDir, 'index.md');

// ✅ zorg dat de map bestaat (werkt op Windows/macOS/Linux)
await mkdir(outDir, { recursive: true });

// Schrijf bestand
await writeFile(outFile, frontmatter + (md || '\n*(No API symbols found)*\n'), 'utf8');

console.log('Wrote', outFile);
