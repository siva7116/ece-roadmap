const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const allFolders = [
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

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    const $span = $('span').filter(function() {
        return $(this).text().trim() === 'ECE Roadmap' && $(this).hasClass('font-headline-lg');
    });

    if ($span.length > 0) {
        const $parent = $span.parent();
        if ($parent.find('img.srm-logo').length === 0) {
            $span.before('<img src="srm_logo.jpeg" alt="SRM Logo" class="srm-logo h-12 w-auto object-contain mr-1 rounded-md">');
            fs.writeFileSync(filePath, $.html());
            console.log(`Added logo to ${folder}`);
        } else {
            console.log(`Logo already exists in ${folder}`);
        }
    }
  }
});
