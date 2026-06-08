const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets');
const files = fs.readdirSync(dir);

files.forEach(file => {
  const filePath = path.join(dir, file);
  const ext = path.extname(file).toLowerCase();
  
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const stats = fs.statSync(filePath);
    if (stats.size > 500 * 1024) { // > 500KB
      const newPath = path.join(dir, `${path.basename(file, ext)}_opt.webp`);
      console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB) -> ${path.basename(newPath)}`);
      sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(newPath)
        .then(() => console.log(`Finished ${newPath}`))
        .catch(err => console.error(`Error on ${file}:`, err));
    }
  }
});
