const fs = require('fs');
const path = require('path');

const srcRoot = 'c:\\Users\\nanth\\Downloads\\stitch_ece_industry_readiness_roadmap';
const targetRoot = 'c:\\Users\\nanth\\stitch_ece_industry_readiness_roadmap';

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git') {
      continue;
    }

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Synchronize nested and root folders within current workspace
const folders = [
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap',
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap',
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap',
  'home_ece_roadmap'
];

folders.forEach(f => {
  const rootCode = path.join(srcRoot, f, 'code.html');
  const nestedCode = path.join(srcRoot, 'stitch_ece_industry_readiness_roadmap', f, 'code.html');
  if (fs.existsSync(rootCode)) {
    if (!fs.existsSync(path.dirname(nestedCode))) {
      fs.mkdirSync(path.dirname(nestedCode), { recursive: true });
    }
    fs.copyFileSync(rootCode, nestedCode);
  }
});

// 2. Sync built site/ from nestedSite to rootSite
const rootSite = path.join(srcRoot, 'site');
const nestedSite = path.join(srcRoot, 'stitch_ece_industry_readiness_roadmap', 'site');
if (fs.existsSync(nestedSite)) {
  if (!fs.existsSync(rootSite)) {
    fs.mkdirSync(rootSite, { recursive: true });
  }
  fs.readdirSync(nestedSite).forEach(file => {
    fs.copyFileSync(path.join(nestedSite, file), path.join(rootSite, file));
  });
}

// 3. Mirror all to target directory
copyDirRecursive(srcRoot, targetRoot);
console.log('✓ Successfully synchronized both directories:');
console.log('  1. ' + srcRoot);
console.log('  2. ' + targetRoot);
