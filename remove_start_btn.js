const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const getRoman = (num) => {
  const map = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii', 8: 'viii' };
  return map[num];
};

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';

[1,2,3,4,5,6,7,8].forEach(semNum => {
  const roman = getRoman(semNum);
  const filePath = path.join(baseDir, `semester_${roman}_ece_roadmap`, 'code.html');
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content, { decodeEntities: false });
  
  $('button').each((i, el) => {
      const text = $(el).text();
      if (text.includes('Start Semester')) {
          const parent = $(el).parent('div.mt-lg');
          if (parent.length) {
              parent.remove();
          } else {
              $(el).remove();
          }
      }
  });
  
  fs.writeFileSync(filePath, $.html());
  console.log('Removed button from Sem ' + semNum);
});
