const fs = require('fs');
const path = require('path');

const getRoman = (num) => {
  const map = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii', 8: 'viii' };
  return map[num];
};

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');

[1,2,3,4,5,6,7,8].forEach(semNum => {
  const roman = getRoman(semNum);
  const filePath = path.join(baseDir, `semester_${roman}_ece_roadmap`, 'code.html');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/<div class="mb-md">/g, '<div class="mb-md pr-32">');
  fs.writeFileSync(filePath, content);
  console.log('Fixed Sem ' + semNum);
});
