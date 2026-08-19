const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';

const targetFolders = [
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap'
];

targetFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Path 2 is index 1
    const sections = $('section');
    if (sections.length > 1) {
      const section = sections.eq(1);
      
      // Find the anchor tag immediately following the contest header
      const contestAnchor = section.find('.mb-md.pr-32 h3:contains("ChipForge")').next('a');
      if (contestAnchor.length) {
        contestAnchor.attr('href', 'https://chipforge.io');
        console.log(`Updated contest URL to https://chipforge.io in ${folder}`);
      }
    }

    fs.writeFileSync(filePath, $.html());
  }
});
