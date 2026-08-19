const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const filePath = path.join(baseDir, 'semester_viii_ece_roadmap', 'code.html');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace('Dr. Ram', 'NO NAME');
  fs.writeFileSync(filePath, content);
  console.log('Replaced Dr. Ram with NO NAME in semester_viii_ece_roadmap');
}
