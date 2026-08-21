const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname);
const destDir = 'C:\\Users\\nanth\\stitch_ece_industry_readiness_roadmap';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    const baseName = path.basename(src);
    if (baseName === 'node_modules' || baseName === '.git') {
      return;
    }
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log(`Starting sync from ${srcDir} to ${destDir}...`);
copyRecursiveSync(srcDir, destDir);
console.log('Sync complete!');
