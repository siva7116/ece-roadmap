const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
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
      // Find the Pre-Contest header and its parent div, since this marks the end of the activity section block
      const preContestHeader = $(section).find('h4:contains("Pre-Contest / Pre-Placement")');
      if (preContestHeader.length) {
        const preContestDiv = preContestHeader.parent();
        
        // Ensure we don't insert it multiple times if script is run twice
        const existing = $(section).find('h4:contains("COLLEGE PRACTICE TOOL")');
        if (existing.length === 0) {
            const toolHtml = `
        <div>
            <h4 class="font-label-caps text-label-caps text-outline mb-xs flex items-center gap-xs">
                <span class="material-symbols-outlined text-[14px]">laptop_mac</span> COLLEGE PRACTICE TOOL
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface bg-surface-container-low p-sm rounded border border-outline-variant text-[15px]">
                <span class="font-bold">iamneo</span> — used for structured coding practice, test cases, debugging and timed problem solving.
            </p>
        </div>`;
            preContestDiv.before(toolHtml);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Added COLLEGE PRACTICE TOOL to ${folder}`);
  }
});
