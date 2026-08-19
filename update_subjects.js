const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const map = {
  'semester_ii_ece_roadmap': ['Data Structures using C++', 'Electronic Circuits'],
  'semester_iii_ece_roadmap': ['Digital Signal Processing', 'Digital System Design'],
  'semester_iv_ece_roadmap': ['Artificial Intelligence and Machine Learning', 'Embedded C Programming'],
  'semester_v_ece_roadmap': ['Digital Image Processing', 'ASIC Design'],
  'semester_vi_ece_roadmap': ['Deep Learning', 'Wireless and Optical Communication'],
  'semester_vii_ece_roadmap': ['Software Defined Radio', 'IOT Security'],
  'semester_viii_ece_roadmap': ['Project Work', 'Project Work']
};

Object.entries(map).forEach(([folder, subjects]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let count = 0;
    content = content.replace(/(<span class="material-symbols-outlined text-\[14px\]">map<\/span>\s*Subject Mapped\s*<\/h4>\s*<p class="font-body-sm text-body-sm text-on-surface">)([^<]*)(<\/p>)/g, (match, p1, p2, p3) => {
      const newSubject = subjects[count] || p2; // Fallback if more than 2 found somehow
      count++;
      return p1 + newSubject + p3;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated subjects in ${folder} (replaced ${count} subjects)`);
  }
});
