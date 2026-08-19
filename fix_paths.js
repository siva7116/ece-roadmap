const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const files = fs.readdirSync(rootDir);

files.forEach(file => {
  if (file.endsWith('.js') && file !== 'fix_paths.js') {
    const filePath = path.join(rootDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('C:\\\\Users\\\\yogesh') || content.includes('C:\\Users\\yogesh')) {
      content = content.replace(/const baseDir = ['"]C:\\\\Users\\\\yogesh\\\\Downloads\\\\stitch_ece_industry_readiness_roadmap\\\\stitch_ece_industry_readiness_roadmap['"];/g, "const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');");
      content = content.replace(/const baseDir = ['"]C:\\\\Users\\\\yogesh\\\\Downloads\\\\stitch_ece_industry_readiness_roadmap['"];/g, "const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');");
      content = content.replace(/const baseDir = ['"]C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap['"];/g, "const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');");
      content = content.replace(/const baseDir = ['"]C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap['"];/g, "const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');");
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned paths in ${file}`);
    }
  }
});
