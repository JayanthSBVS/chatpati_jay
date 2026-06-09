const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /text-\[#CBAA6A\]/g, replacement: 'text-accent-gold' },
  { regex: /bg-\[#CBAA6A\]/g, replacement: 'bg-accent-gold' },
  { regex: /border-\[#CBAA6A\]/g, replacement: 'border-accent-gold' },
  { regex: /from-\[#CBAA6A\]/g, replacement: 'from-accent-gold' },
  { regex: /via-\[#CBAA6A\]/g, replacement: 'via-accent-gold' },
  { regex: /to-\[#CBAA6A\]/g, replacement: 'to-accent-gold' },
  { regex: /#CBAA6A/g, replacement: 'var(--accent-gold)' }, // For inline styles or svgs

  { regex: /text-\[#F5EFEB\]/g, replacement: 'text-content-primary' },
  { regex: /bg-\[#F5EFEB\]/g, replacement: 'bg-content-primary' },
  { regex: /border-\[#F5EFEB\]/g, replacement: 'border-content-primary' },
  { regex: /from-\[#F5EFEB\]/g, replacement: 'from-content-primary' },
  { regex: /via-\[#F5EFEB\]/g, replacement: 'via-content-primary' },
  { regex: /to-\[#F5EFEB\]/g, replacement: 'to-content-primary' },

  { regex: /text-\[#110f0e\]/g, replacement: 'text-surface-base' },
  { regex: /bg-\[#110f0e\]/g, replacement: 'bg-surface-base' },
  { regex: /border-\[#110f0e\]/g, replacement: 'border-surface-base' },
  { regex: /from-\[#110f0e\]/g, replacement: 'from-surface-base' },
  { regex: /via-\[#110f0e\]/g, replacement: 'via-surface-base' },
  { regex: /to-\[#110f0e\]/g, replacement: 'to-surface-base' },

  { regex: /text-\[#0a0908\]/g, replacement: 'text-surface-paper' },
  { regex: /bg-\[#0a0908\]/g, replacement: 'bg-surface-paper' },
  { regex: /border-\[#0a0908\]/g, replacement: 'border-surface-paper' },
  { regex: /from-\[#0a0908\]/g, replacement: 'from-surface-paper' },
  { regex: /via-\[#0a0908\]/g, replacement: 'via-surface-paper' },
  { regex: /to-\[#0a0908\]/g, replacement: 'to-surface-paper' },
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      replacements.forEach(({ regex, replacement }) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

walkDir(directoryPath);
console.log('Done replacing colors.');
