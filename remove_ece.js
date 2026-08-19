const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const semesters = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];

semesters.forEach(sem => {
  const folder = `semester_${sem}_ece_roadmap`;
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // We specifically want to target the activity descriptions.
    // They are typically in <span class="font-body-sm text-on-surface">
    // and <p class="font-body-sm text-body-sm text-on-surface">
    
    // We will look inside the sections for Path 1 and Path 2
    $('section').each((i, section) => {
      
      // Inside each section, find all elements that might contain activity text
      const targetElements = $(section).find('span.font-body-sm.text-on-surface, p.font-body-sm.text-body-sm.text-on-surface');
      
      targetElements.each((j, el) => {
        let text = $(el).html();
        if (text && text.includes('ECE')) {
          // Replace "ECE " with "" and " ECE" with "" and " ECE " with " "
          // Using regex to handle word boundaries or spaces
          text = text.replace(/\bECE\s/g, '');
          text = text.replace(/\sECE\b/g, '');
          text = text.replace(/\bECE\b/g, '');
          $(el).html(text);
        }
      });
      
      // Also check the "Skill Gap" paragraphs which might mention ECE
      const skillGapP = $(section).find('h4:contains("Skill Gap")').next('p');
      if (skillGapP.length) {
        let text = skillGapP.html();
        if (text && text.includes('ECE')) {
          text = text.replace(/\bECE\s/g, '');
          text = text.replace(/\sECE\b/g, '');
          text = text.replace(/\bECE\b/g, '');
          skillGapP.html(text);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Removed "ECE" from activities in ${folder}`);
  }
});
