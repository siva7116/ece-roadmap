const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const allFolders = [
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap'
];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace "COLLEGE PRACTICE TOOL" with "PLATFORM"
    content = content.replace(/COLLEGE PRACTICE TOOL/g, 'PLATFORM');
    
    fs.writeFileSync(filePath, content);
    console.log(`Renamed practice tool section to PLATFORM in ${folder}`);
  }
});
