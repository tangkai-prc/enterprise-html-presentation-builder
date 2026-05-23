import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const projectId = 'ibc_presentation_title';
const sourceDir = path.join(root, 'inputs', projectId, 'development', 'prototype');
const outputDir = path.join(root, 'outputs', projectId);
const sourceHtmlPath = path.join(sourceDir, 'IBC_template-prototype.html');
const outputHtmlPath = path.join(outputDir, 'IBC_presentation_template_library.html');

async function dataUrl(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const mimeType = ext === '.jpeg' || ext === '.jpg'
    ? 'image/jpeg'
    : ext === '.svg'
      ? 'image/svg+xml'
      : 'image/png';
  const buffer = await fs.readFile(path.join(sourceDir, 'IBC_template_assets', fileName));
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

let html = await fs.readFile(sourceHtmlPath, 'utf8');
const replacements = {
  'IBC_template_assets/image1.png': await dataUrl('image1.png'),
  'IBC_template_assets/image2.jpeg': await dataUrl('image2.jpeg'),
  'IBC_template_assets/image3.png': await dataUrl('image3.png'),
  'IBC_template_assets/image4.png': await dataUrl('image4.png'),
  'IBC_template_assets/image5.png': await dataUrl('image5.png'),
  'IBC_template_assets/image6.png': await dataUrl('image6.png'),
  'IBC_template_assets/chapter-mark-layout14.svg': await dataUrl('chapter-mark-layout14.svg'),
};

for (const [assetPath, embedded] of Object.entries(replacements)) {
  html = html.split(assetPath).join(embedded);
}

html = html
  .replace('<title>IBC Template Prototype</title>', '<title>IBC Presentation Template Library</title>')
  .replace('<html lang="zh-CN">', '<html lang="en">');

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(outputHtmlPath, html, 'utf8');
console.log(outputHtmlPath);
