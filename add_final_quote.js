const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const filePath = path.join(baseDir, 'semester_viii_ece_roadmap', 'code.html');

const quoteHTML = `
<div class="mt-xl pt-lg border-t border-outline-variant text-center pb-xl">
    <p class="font-title-lg text-title-lg text-[#1b629b] font-bold italic tracking-wide">
        "Transform classroom knowledge into demonstrable skills, real-world solutions and career-ready portfolios."
    </p>
</div>
`;

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('Transform classroom knowledge')) {
    content = content.replace('</main>', `${quoteHTML}\n</main>`);
    fs.writeFileSync(filePath, content);
    console.log('Added final quote to Semester VIII');
  } else {
    console.log('Quote already exists.');
  }
}
