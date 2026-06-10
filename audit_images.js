import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const PUB_ASSETS = './public/assets';

function getFilesRecursive(dir, extFilter) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(fullPath, extFilter));
    } else {
      if (!extFilter || extFilter.includes(path.extname(fullPath))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const jsFiles = getFilesRecursive(SRC_DIR, ['.js', '.jsx']);

const pubImages = fs.readdirSync(PUB_ASSETS);

const imageUsage = {};
pubImages.forEach(img => imageUsage[img] = { path: `public/assets/${img}`, count: 0, references: [] });

jsFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  Object.keys(imageUsage).forEach(img => {
    if (content.includes(img)) {
      imageUsage[img].count++;
      imageUsage[img].references.push(file);
    }
  });
});

const usedImages = [];
const unusedImages = [];

Object.keys(imageUsage).forEach(img => {
  if (imageUsage[img].count > 0) usedImages.push(img);
  else unusedImages.push(img);
});

fs.writeFileSync('image_audit_report.json', JSON.stringify({
  total: Object.keys(imageUsage).length,
  usedCount: usedImages.length,
  unusedCount: unusedImages.length,
  used: usedImages.map(img => ({ name: img, path: imageUsage[img].path, refs: imageUsage[img].references })),
  unused: unusedImages.map(img => ({ name: img, path: imageUsage[img].path }))
}, null, 2));

console.log(`Audit complete. Found ${usedImages.length} used and ${unusedImages.length} unused images.`);
