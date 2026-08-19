const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';

const updates = {
  'semester_iii_ece_roadmap': {
    contest: 'ChipForge – RTL',
    subject: 'Digital System Design',
    skill: 'Design the Logic'
  },
  'semester_iv_ece_roadmap': {
    contest: 'ChipForge – Verify',
    subject: 'VLSI Design',
    skill: 'Break/Verify the Design'
  },
  'semester_v_ece_roadmap': {
    contest: 'ChipForge – Silicon',
    subject: 'ASIC Design',
    skill: 'Build the Chip'
  }
};

Object.entries(updates).forEach(([folder, data]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Path 2 is index 1
    const sections = $('section');
    if (sections.length > 1) {
      const section = sections.eq(1);
      
      // Update Contest Track
      const contestH3 = section.find('.mb-md.pr-32 h3');
      if (contestH3.length) {
        contestH3.text(data.contest);
      }

      // Update Main Skill
      const skillP = section.find('.mb-md.pr-32 p:has(.material-symbols-outlined:contains("emoji_events"))');
      if (skillP.length) {
        skillP.html(`<span class="material-symbols-outlined text-[16px]">emoji_events</span> ${data.skill}`);
      }

      // Update Subject Mapped
      const subjectHeader = section.find('h4:contains("Subject Mapped")');
      if (subjectHeader.length) {
        const subjectP = subjectHeader.next('p');
        if (subjectP.length) {
          subjectP.text(data.subject);
        }
      }
    }

    fs.writeFileSync(filePath, $.html());
    console.log(`Updated Contests and Subjects in ${folder}`);
  }
});
