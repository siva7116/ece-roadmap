const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const allFolders = [
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap'
];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Iterate through the two sections (Path 1 and Path 2)
    const sections = $('section');
    sections.each((i, section) => {
      // Index 1 is Path 2 (Hardware)
      if (i === 1) {
        const practiceHeader = $(section).find('h4:contains("COLLEGE PRACTICE TOOL")');
        if (practiceHeader.length) {
          const practiceDiv = practiceHeader.parent();
          practiceDiv.remove();
          console.log(`Removed COLLEGE PRACTICE TOOL from Path 2 in ${folder}`);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
  }
});
