const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const allFolders = [
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap',
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap',
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap'
];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Using Regex to find Subject Mapped content and make it bold
    content = content.replace(/(<span class="material-symbols-outlined text-\[14px\]">map<\/span>\s*Subject Mapped\s*<\/h4>\s*<p class=")(font-body-sm text-body-sm text-on-surface)(")/g, '$1$2 font-bold text-[15px]$3');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated boldness in ${folder}`);
  }
});
