const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const links = {
    'CodeChef Starters': 'https://www.codechef.com/',
    'Smart India Hackathon – Internal/Beginner Track': 'https://www.sih.gov.in/',
    'MATLAB Student Competition / Challenge': 'https://www.mathworks.com/academia/student-competitions.html',
    'IEEEXtreme Programming Competition': 'https://ieeextreme.org/',
    'IEEE CASS Student Design Competition': 'https://ieee-cas.org/',
    'MathWorks Minidrone Competition': 'https://www.mathworks.com/academia/student-competitions/minidrones.html',
    'Kaggle Competitions': 'https://www.kaggle.com/competitions',
    'Texas Instruments Innovation Challenge (TIIC)': 'https://www.ti.com/',
    'MATLAB/Simulink Design Challenge': 'https://www.mathworks.com/academia/student-competitions.html',
    'Cadence Design Contest': 'https://www.cadence.com/',
    'AIoT Design Challenge': 'https://www.hackerearth.com/',
    'e-Yantra Robotics Competition (eYRC)': 'https://www.e-yantra.org/',
    'Techgium (LTTS)': 'https://techgium.ltts.com/',
    'Techgium': 'https://techgium.ltts.com/',
    'TCS CodeVita / TCS NQT / Cognizant GenC': 'https://www.tcs.com/careers/tcs-codevita',
    'L&T / Core Industry Assessment': 'https://www.lntecc.com/',
    'GitHub / Portfolio': 'https://github.com/',
    'Final Placement Drives': 'https://www.linkedin.com/',
    'Core Placement Drives': 'https://www.naukri.com/',
    'Final Industry-Ready Portfolio': 'https://github.com/'
};

const getRoman = (num) => {
  const map = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii', 8: 'viii' };
  return map[num];
};

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');

[1,2,3,4,5,6,7,8].forEach(semNum => {
  const roman = getRoman(semNum);
  const filePath = path.join(baseDir, `semester_${roman}_ece_roadmap`, 'code.html');
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content, { decodeEntities: false });
  
  $('h3.font-title-md').each((i, el) => {
      const titleText = $(el).text().trim();
      if (links[titleText]) {
          // Check if link already exists
          if (!$(el).next().is('a')) {
              // Add a link based on the path (Software gets secondary color, Hardware gets surface-tint color)
              let colorClass = 'text-secondary';
              if ($(el).closest('section').find('h2').text().includes('Hardware') || $(el).closest('section').find('h2').text().includes('Core')) {
                  colorClass = 'text-surface-tint';
              } else if ($(el).closest('section').find('h2').text().includes('Portfolio')) {
                  colorClass = 'text-tertiary';
              }
              
              const anchor = `
        <a href="${links[titleText]}" target="_blank" class="font-label-caps text-label-caps ${colorClass} hover:underline flex items-center gap-1 mb-2 w-max">
            <span class="material-symbols-outlined text-[14px]">link</span> Visit Website
        </a>`;
              $(el).after(anchor);
          }
      }
  });
  
  fs.writeFileSync(filePath, $.html());
  console.log('Processed Sem ' + semNum);
});
