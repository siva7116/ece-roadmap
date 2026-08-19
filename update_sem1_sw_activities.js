const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const folder = 'semester_i_ece_roadmap';

const newActivities = [
  {
    unit: 'Unit 1 – C Programming Fundamentals',
    desc: 'Develop C Programs for Arithmetic Operations, Data Types, Operators and Expression Evaluation'
  },
  {
    unit: 'Unit 2 – Control Statements',
    desc: 'Develop C Programs Using if–else, switch and Nested Control Statements for Problem Solving'
  },
  {
    unit: 'Unit 3 – Arrays & Functions',
    desc: 'Implement One-Dimensional and Two-Dimensional Arrays with User-Defined Functions in C'
  },
  {
    unit: 'Unit 4 – Pointers & Strings',
    desc: 'Implement String Manipulation and Pointer-Based Data Processing in C'
  },
  {
    unit: 'Unit 5 – Structures & File Handling',
    desc: 'Develop a C Program Using Structures and File Handling for Data Management'
  }
];

const filePath = path.join(baseDir, folder, 'code.html');
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content, { decodeEntities: false });

  // Path 1 is index 0
  const sections = $('section');
  if (sections.length > 0) {
    const section = sections.eq(0);
    const container = section.find('.mt-sm.space-y-1');

    if (container.length) {
      let html = '';
      newActivities.forEach(item => {
        html += `
          <div class="flex flex-col bg-surface-container p-2 rounded border border-surface-variant">
            <span class="font-label-caps text-[10px] text-outline">${item.unit}</span>
            <span class="font-body-sm text-on-surface">${item.desc}</span>
          </div>
        `;
      });
      container.html(html);
      console.log(`Updated Software activities in ${folder}`);
    }
  }

  fs.writeFileSync(filePath, $.html());
}
