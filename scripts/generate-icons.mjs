import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

const sizes = [192, 512];

async function convert(svgPath, name) {
  const svg = readFileSync(svgPath, 'utf-8');
  for (const size of sizes) {
    const png = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
    const outPath = resolve(publicDir, `${name}-${size}x${size}.png`);
    writeFileSync(outPath, png);
    console.log(`Created ${outPath}`);
  }
}

async function main() {
  await convert(resolve(publicDir, 'icon.svg'), 'icon');
  await convert(resolve(publicDir, 'maskable-icon.svg'), 'maskable-icon');
  // favicon: 32x32 PNG (we'll use a small icon)
  const svg = readFileSync(resolve(publicDir, 'icon.svg'), 'utf-8');
  const png = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  writeFileSync(resolve(publicDir, 'favicon.ico'), png);
  console.log('Created public/favicon.ico');
}

main().catch(console.error);
