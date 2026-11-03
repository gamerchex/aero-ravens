// Resizes the club photos listed in src/data/photos.json into web-friendly WebP files.
// Originals stay untouched in /images at the repo root.
// Usage: npm run images
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(here, '..');
const repoRoot = path.resolve(webRoot, '..');
const outDir = path.join(webRoot, 'public', 'media');
const WIDTHS = [480, 960, 1600];

const photos = JSON.parse(await readFile(path.join(webRoot, 'src/data/photos.json'), 'utf8'));
await mkdir(outDir, { recursive: true });

const manifest = {};
for (const photo of photos) {
  const input = path.join(repoRoot, photo.src);
  const base = sharp(input).rotate(); // respect EXIF orientation
  const { width, height } = await base.metadata();
  const widths = WIDTHS.filter((w) => w < width).concat(width > WIDTHS.at(-1) ? [] : [width]);
  const unique = [...new Set(widths.map((w) => Math.min(w, WIDTHS.at(-1))))];
  for (const w of unique) {
    const file = path.join(outDir, `${photo.id}-${w}.webp`);
    if (!existsSync(file)) {
      await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 76 }).toFile(file);
    }
  }
  manifest[photo.id] = { w: width, h: height, widths: unique };
  process.stdout.write('.');
}
await writeFile(path.join(webRoot, 'src/data/media.json'), JSON.stringify(manifest, null, 1));

// Club mark: favicon + small logo
const logo = path.join(here, 'logo-source.jpg');
await sharp(logo).resize(180).png().toFile(path.join(webRoot, 'public', 'apple-touch-icon.png'));
// Browser-tab icon: the logo cut to a circle with transparent corners.
const ICON = 96;
const circle = Buffer.from(`<svg width="${ICON}" height="${ICON}"><circle cx="${ICON / 2}" cy="${ICON / 2}" r="${ICON / 2}" fill="#fff"/></svg>`);
await sharp(logo)
  .resize(ICON, ICON)
  .ensureAlpha()
  .composite([{ input: circle, blend: 'dest-in' }])
  .png()
  .toFile(path.join(webRoot, 'public', 'favicon.png'));
await sharp(logo).resize(150).webp({ quality: 90 }).toFile(path.join(outDir, 'logo-150.webp'));
// Social preview image
await sharp(path.join(repoRoot, 'images/aeroravens3.jpeg')).resize(1200, 630, { fit: 'cover', position: 'left' }).jpeg({ quality: 80 }).toFile(path.join(webRoot, 'public', 'og-image.jpg'));

console.log(`\n${photos.length} photos processed`);
