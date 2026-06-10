const fs = require('fs');
const path = require('path');

const srcImages = fs.readdirSync('./src/assets');
const pubImages = fs.readdirSync('./public/assets').filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp'));
const allImages = [...new Set([...srcImages, ...pubImages])];

// Extract dish names from cuisinesData.js using regex since it's a JS module
const cuisinesContent = fs.readFileSync('./src/data/cuisinesData.js', 'utf8');
const dishRegex = /name:\s*'([^']+)'/g;
let match;
const dishes = new Set();
while ((match = dishRegex.exec(cuisinesContent)) !== null) {
  dishes.add(match[1]);
}

// Same for takeaway
const takeawayContent = fs.readFileSync('./src/data/takeawayData.js', 'utf8');
const takeawayRegex = /title:\s*"([^"]+)"/g;
while ((match = takeawayRegex.exec(takeawayContent)) !== null) {
  dishes.add(match[1]);
}

const dishesArr = Array.from(dishes);

// Basic normalization for matching
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const mappedImages = {};
const unmappedImages = [];

allImages.forEach(img => {
  const nameWithoutExt = path.parse(img).name;
  const normalizedImgName = normalize(nameWithoutExt);
  
  let bestMatch = null;
  
  for (const dish of dishesArr) {
    const normalizedDish = normalize(dish);
    if (normalizedImgName === normalizedDish || 
        normalizedImgName.includes(normalizedDish) || 
        normalizedDish.includes(normalizedImgName)) {
      
      // Heuristic string match
      if (normalizedImgName.length > 4 && normalizedDish.length > 4) {
         bestMatch = dish;
         break;
      }
    }
  }

  if (bestMatch) {
    mappedImages[bestMatch] = img;
  } else {
    unmappedImages.push(img);
  }
});

fs.writeFileSync('image_mapping.json', JSON.stringify({
  mapped: mappedImages,
  unmappedCount: unmappedImages.length,
  unmapped: unmappedImages
}, null, 2));

console.log(`Mapped ${Object.keys(mappedImages).length} images to dishes. ${unmappedImages.length} images remain unmapped.`);
