const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const courseData = {
  'semester_iv_ece_roadmap': {
    'Software': 'Introduction to Embedded System Design',
    'Hardware': 'Digital Design with Verilog'
  },
  'semester_v_ece_roadmap': {
    'Software': 'Digital Signal Processing',
    'Hardware': 'VLSI Design Flow: RTL to GDS'
  },
  'semester_vi_ece_roadmap': {
    'Software': 'Foundation of Cloud IoT Edge ML',
    'Hardware': 'Embedded System Design with ARM'
  }
};

Object.entries(courseData).forEach(([folder, courses]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Iterate through the two sections (Path 1 and Path 2)
    const sections = $('section');
    sections.each((i, section) => {
      const pathType = i === 0 ? 'Software' : 'Hardware';
      const courseName = courses[pathType];

      // Find the Pre-Contest header and its parent div
      const preContestHeader = $(section).find('h4:contains("Pre-Contest / Pre-Placement")');
      if (preContestHeader.length) {
        const preContestDiv = preContestHeader.parent();
        
        // Ensure we don't insert it multiple times if script is run twice
        const existing = $(section).find('h4:contains("Recommended Course")');
        if (existing.length === 0) {
            const courseHtml = `
        <div>
            <h4 class="font-label-caps text-label-caps text-outline mb-xs flex items-center gap-xs">
                <span class="material-symbols-outlined text-[14px]">school</span> Recommended Course
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface bg-surface-container-low p-sm rounded border border-outline-variant font-bold text-[15px]">
                ${courseName}
            </p>
        </div>`;
            preContestDiv.before(courseHtml);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Updated courses in ${folder}`);
  }
});
