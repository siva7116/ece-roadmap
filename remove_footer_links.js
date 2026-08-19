const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const folders = [
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

folders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });
    
    // Find the footer
    $('footer').each((i, footer) => {
        // Find the div containing the links. It's usually the second div, but we can look for 'Privacy Policy'
        $(footer).find('a').each((j, a) => {
            const text = $(a).text();
            if (text.includes('Privacy Policy') || text.includes('Institutional Guidelines') || text.includes('Contact Faculty')) {
                // If it's inside a div, we might want to remove the whole div if it becomes empty
                const parentDiv = $(a).parent('div');
                $(a).remove();
                if (parentDiv.children().length === 0 && parentDiv.text().trim() === '') {
                    parentDiv.remove();
                }
            }
        });
    });
    
    fs.writeFileSync(filePath, $.html());
    console.log(`Removed footer links in ${folder}`);
  }
});
