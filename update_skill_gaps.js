const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const map = {
  'semester_i_ece_roadmap': [
    'Basic programming and logical problem-solving skills.<br>Need practice applying C to engineering problems.',
    'Basic circuit analysis and electronic-device understanding.<br>Need hands-on circuit building and measurement practice.'
  ],
  'semester_ii_ece_roadmap': [
    'Limited knowledge of efficient data organization.<br>Need stronger algorithmic thinking and coding practice.',
    'Limited practical understanding of circuit behaviour.<br>Need simulation, testing and circuit-debugging practice.'
  ],
  'semester_iii_ece_roadmap': [
    'Limited signal analysis and computational skills.<br>Need practical filtering and signal-processing experience.',
    'Limited digital-system design experience.<br>Need practice with logic design, simulation and verification.'
  ],
  'semester_iv_ece_roadmap': [
    'Limited exposure to AI/ML methods for ECE problems.<br>Need experience with data, models and practical applications.',
    'Limited hardware–software integration skills.<br>Need microcontroller programming and peripheral interfacing practice.'
  ],
  'semester_v_ece_roadmap': [
    'Limited computational image-analysis experience.<br>Need practical implementation of image-processing algorithms.',
    'Limited industry-oriented chip-design experience.<br>Need EDA-based design, simulation and verification practice.'
  ],
  'semester_vi_ece_roadmap': [
    'Limited experience with deep-learning models.<br>Need practical AI implementation for intelligent systems.',
    'Limited practical communication-system experience.<br>Need simulation and analysis of wireless/optical links.'
  ],
  'semester_vii_ece_roadmap': [
    'Limited exposure to software-based communication systems.<br>Need practical signal processing and SDR implementation skills.',
    'Limited understanding of security in connected devices.<br>Need practical IoT security, privacy and secure-communication skills.'
  ],
  'semester_viii_ece_roadmap': [
    'Limited experience in end-to-end technical development.<br>Need stronger documentation, coding and project-presentation skills.',
    'Limited experience in complete system implementation.<br>Need prototype development, testing, validation and demonstration skills.'
  ]
};

Object.entries(map).forEach(([folder, gaps]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let count = 0;
    content = content.replace(/(<h4 class="font-label-caps text-label-caps text-secondary mb-xs">Skill Gap<\/h4>\s*<p class="font-body-sm text-body-sm text-on-surface-variant">)([\s\S]*?)(<\/p>)/g, (match, p1, p2, p3) => {
      const newGap = gaps[count] || p2; 
      count++;
      return p1 + newGap + p3;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated skill gaps in ${folder} (replaced ${count} gaps)`);
  }
});
