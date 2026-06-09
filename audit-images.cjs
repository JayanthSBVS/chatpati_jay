const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const assetsDir = path.join(__dirname, 'public', 'assets');
const files = fs.readdirSync(assetsDir).filter(f => f.match(/\.(webp|png|jpg|jpeg)$/));

console.log("IMAGE AUDIT\n-----------------------------");
files.forEach(file => {
  const filePath = path.join(assetsDir, file);
  const stats = fs.statSync(filePath);
  let dimensions = { width: '?', height: '?' };
  try {
    dimensions = sizeOf(filePath);
  } catch(e) {
    // some webp images might not be supported depending on image-size version
  }
  
  const sizeKB = Math.round(stats.size / 1024);
  if (file.includes('opt')) {
    console.log(`${file} | ${dimensions.width}x${dimensions.height} | ${sizeKB}KB | ${path.extname(file).slice(1)}`);
  }
});
console.log("-----------------------------");
