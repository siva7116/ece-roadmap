const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const allFolders = [
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap'
];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace "COLLEGE PRACTICE PORTAL" with "PLATFORM"
    content = content.replace(/COLLEGE PRACTICE PORTAL/g, 'PLATFORM');
    
    fs.writeFileSync(filePath, content);
    console.log(`Renamed COLLEGE PRACTICE PORTAL to PLATFORM in ${folder}`);
  }
});
