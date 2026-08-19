const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const allFolders = [
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap'
];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace "Recommended Course" with "Value Added / NPTEL Course"
    content = content.replace(/<span class="material-symbols-outlined text-\[14px\]">school<\/span>\s*Recommended Course/g, '<span class="material-symbols-outlined text-[14px]">school</span> Value Added / NPTEL Course');
    
    fs.writeFileSync(filePath, content);
    console.log(`Renamed course section in ${folder}`);
  }
});
