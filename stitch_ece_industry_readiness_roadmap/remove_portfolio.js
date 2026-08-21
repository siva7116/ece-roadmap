const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const targetFolders = [
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap'
];

targetFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Find all sections
    const sections = $('section');
    
    // Check if there is a third section (index 2)
    if (sections.length > 2) {
      sections.eq(2).remove();
      console.log(`Removed Path 3 (Portfolio) section from ${folder}`);
    }

    fs.writeFileSync(filePath, $.html());
  }
});
