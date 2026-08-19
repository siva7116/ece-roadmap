const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const folders = [
  'semester_ii_ece_roadmap',
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap',
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap'
];

const replacements = {
  'semester_ii_ece_roadmap': {
    oldStr: 'STRUCTURED PROBLEM SOLVING',
    newStr: 'MATLAB + Arduino/Sensors'
  },
  'semester_iii_ece_roadmap': {
    oldStr: 'DIGITAL DESIGN &amp; SIGNAL PROCESSING',
    newStr: 'Digital Logic + Coding'
  },
  'semester_iv_ece_roadmap': {
    oldStr: 'VLSI, EMBEDDED &amp; ARCHITECTURE',
    newStr: 'MATLAB/Control + Microcontrollers'
  },
  'semester_v_ece_roadmap': {
    oldStr: 'ASIC, NETWORKS &amp; APPLICATION SYSTEMS',
    newStr: 'DSP + VLSI'
  },
  'semester_vi_ece_roadmap': {
    oldStr: 'COMMUNICATION, RF &amp; INTELLIGENT SYSTEMS',
    newStr: 'AIoT + Robotics'
  },
  'semester_vii_ece_roadmap': {
    oldStr: 'INDUSTRY PROBLEM SOLVING',
    newStr: 'Placement Preparation + Portfolio'
  },
  'semester_viii_ece_roadmap': {
    oldStr: 'FINAL DEMONSTRATION &amp; PORTFOLIO',
    newStr: 'Final Placement + Professional Portfolio'
  }
};

folders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const oldStr = replacements[folder].oldStr;
    const newStr = replacements[folder].newStr;
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated title in ${folder}`);
  }
});
