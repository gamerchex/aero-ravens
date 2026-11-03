// Copies the built site (web/dist) into the repo root, where GitHub Pages serves it.
// Only touches files the build owns; CNAME, images/, web/ and README stay as they are.
// Usage: npm run publish   (runs the build first)
import { cp, rm, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '..', 'dist');
const root = path.resolve(here, '..', '..');

const OWNED = ['index.html', 'assets', 'media', 'favicon.png', 'apple-touch-icon.png', 'og-image.jpg'];

for (const name of OWNED) await rm(path.join(root, name), { recursive: true, force: true });

const built = await readdir(dist);
for (const name of built) {
  if (!OWNED.includes(name)) throw new Error(`Unexpected build output "${name}". Add it to OWNED in publish.mjs.`);
  await cp(path.join(dist, name), path.join(root, name), { recursive: true });
}
// Serve files as-is (no Jekyll processing on GitHub Pages).
await writeFile(path.join(root, '.nojekyll'), '');
console.log(`Published ${built.length} entries to the repo root.`);
