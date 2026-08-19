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
  
  $('section.flex.flex-col').each((i, el) => {
      const headerDiv = $(el).find('> div.mb-sm.flex.items-center.gap-sm');
      if (headerDiv.length) {
          const titleText = headerDiv.find('h2').text();
          let newHtml = '';
          
          if (titleText.includes('Path 1')) {
              newHtml = `
<div class="mb-md rounded-xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
    <div class="h-48 w-full overflow-hidden">
        <img src="../path1_software.png" class="w-full h-full object-cover" alt="Software Path">
    </div>
    <div class="bg-[#1b629b] py-4 px-5">
        <h2 class="font-title-lg text-title-lg text-white font-bold uppercase tracking-wider">PATH 1 (SOFTWARE)</h2>
    </div>
</div>`;
          } else if (titleText.includes('Path 2')) {
              newHtml = `
<div class="mb-md rounded-xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
    <div class="h-48 w-full overflow-hidden">
        <img src="../path2_hardware.png" class="w-full h-full object-cover" alt="ECE Core Path">
    </div>
    <div class="bg-[#187f62] py-4 px-5">
        <h2 class="font-title-lg text-title-lg text-white font-bold uppercase tracking-wider">PATH 2 (ECE CORE)</h2>
    </div>
</div>`;
          } else if (titleText.includes('Path 3')) {
              newHtml = `
<div class="mb-md rounded-xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
    <div class="h-48 w-full overflow-hidden">
        <img src="../path3_portfolio.png" class="w-full h-full object-cover" alt="Portfolio Path">
    </div>
    <div class="bg-[#5c4a72] py-4 px-5">
        <h2 class="font-title-lg text-title-lg text-white font-bold uppercase tracking-wider">PATH 3 (PORTFOLIO)</h2>
    </div>
</div>`;
          }
          
          if (newHtml) {
              headerDiv.replaceWith(newHtml);
          }
      }
  });
  
  fs.writeFileSync(filePath, $.html());
  console.log('Processed Sem ' + semNum);
});
