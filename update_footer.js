const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const folders = [
  'home_ece_roadmap',
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap',
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap',
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap'
];

folders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/© 2024/g, '© 2026');
    fs.writeFileSync(filePath, content);
    console.log(`Updated footer in ${folder}`);
  }
});
