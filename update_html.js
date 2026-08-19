const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const data = [
  {
    semester: 1,
    track: 'Software',
    contest: 'CodeChef Starters',
    subject: 'Programming for Problem Solving',
    gap: 'Basic programming and logical thinking',
    activity: 'Solve basic C/Python problems using loops, arrays and functions',
    preContest: 'Department-level Coding Challenge'
  },
  {
    semester: 1,
    track: 'Hardware',
    contest: 'Smart India Hackathon – Internal/Beginner Track',
    subject: 'Basic Electrical & Electronics',
    gap: 'Basic circuit and prototyping skills',
    activity: 'Build a simple LED/sensor-based Arduino prototype',
    preContest: 'Basic Hardware Prototype Challenge'
  },
  {
    semester: 2,
    track: 'Software',
    contest: 'MATLAB Student Competition / Challenge',
    subject: 'Engineering Mathematics / MATLAB',
    gap: 'MATLAB programming and simulation',
    activity: 'MATLAB-based matrix, function and signal analysis activities',
    preContest: 'MATLAB Mini Challenge'
  },
  {
    semester: 2,
    track: 'Hardware',
    contest: 'Smart India Hackathon – Internal/Beginner Track',
    subject: 'Electronic Devices / Basic Electronics',
    gap: 'Sensor and microcontroller interfacing',
    activity: 'Develop an Arduino-based sensor monitoring system',
    preContest: 'Arduino Prototype Challenge'
  },
  {
    semester: 3,
    track: 'Software',
    contest: 'IEEEXtreme Programming Competition',
    subject: 'Digital System Design / Signals and Systems',
    gap: 'Algorithmic and computational problem solving',
    activity: 'Implement digital logic and signal-processing problems using C/Python/MATLAB',
    preContest: 'ECE Coding Challenge'
  },
  {
    semester: 3,
    track: 'Hardware',
    contest: 'IEEE CASS Student Design Competition',
    subject: 'Digital Electronics / Electronic Circuits',
    gap: 'Practical circuit design and debugging',
    activity: 'Design and test a small digital/analog circuit',
    preContest: 'Circuit Design & Debugging Challenge'
  },
  {
    semester: 4,
    track: 'Software',
    contest: 'MathWorks Minidrone Competition',
    subject: 'Signals and Systems / Control-related topics',
    gap: 'MATLAB/Simulink modelling and control',
    activity: 'Simulate a feedback-control system using MATLAB/Simulink',
    preContest: 'MATLAB-Control Challenge'
  },
  {
    semester: 4,
    track: 'Hardware',
    contest: 'Texas Instruments Innovation Challenge (TIIC)',
    subject: 'Microprocessors & Microcontrollers',
    gap: 'Hardware–software integration',
    activity: 'Interface sensors and actuators with a microcontroller',
    preContest: 'Embedded System Challenge'
  },
  {
    semester: 5,
    track: 'Software',
    contest: 'MATLAB/Simulink Design Challenge',
    subject: 'Digital Signal Processing',
    gap: 'Signal-processing and system-modelling skills',
    activity: 'Design and analyse digital filters using MATLAB',
    preContest: 'DSP Simulation Challenge'
  },
  {
    semester: 5,
    track: 'Hardware',
    contest: 'Cadence Design Contest',
    subject: 'VLSI Design',
    gap: 'Industry-level EDA, ASIC/FPGA and verification skills',
    activity: 'Design, simulate and verify a small digital circuit using EDA tools',
    preContest: 'VLSI Design Challenge'
  },
  {
    semester: 6,
    track: 'Software',
    contest: 'AIoT Design Challenge',
    subject: 'IoT / Communication Systems',
    gap: 'Edge AI, data handling and IoT integration',
    activity: 'Develop an IoT application with sensor data and dashboard',
    preContest: 'AIoT Mini Project Challenge'
  },
  {
    semester: 6,
    track: 'Hardware',
    contest: 'NXP / Freescale Cup',
    subject: 'Embedded Systems / Control Systems',
    gap: 'Autonomous control and sensor integration',
    activity: 'Develop a sensor-based line-following/autonomous robot',
    preContest: 'Robotics Challenge'
  },
  {
    semester: 7,
    track: 'Software',
    contest: 'Company Coding / Placement Tests',
    subject: 'Programming / Professional Skills',
    gap: 'Coding, aptitude and problem-solving skills',
    activity: 'Solve company-specific coding and aptitude problems',
    preContest: 'Mock Placement Drive – Coding + Aptitude'
  },
  {
    semester: 7,
    track: 'Core',
    contest: 'Core Company Technical Assessment',
    subject: 'VLSI / Embedded / Communication / Electronics',
    gap: 'Core technical interview readiness',
    activity: 'Practice core ECE technical problems and interview questions',
    preContest: 'Mock Technical Interview'
  },
  {
    semester: 7,
    track: 'Portfolio',
    contest: 'Professional Portfolio Development',
    subject: 'Project / Internship / Professional Skills',
    gap: 'Resume and professional presentation',
    activity: 'Prepare ATS resume, LinkedIn, GitHub and project portfolio',
    preContest: 'Resume & Portfolio Review'
  },
  {
    semester: 8,
    track: 'Software',
    contest: 'Final Placement Coding Assessment',
    subject: 'Programming / Data Handling',
    gap: 'Advanced coding and company-specific preparation',
    activity: 'Company-wise coding and technical interview preparation',
    preContest: 'Final Coding & Aptitude Assessment'
  },
  {
    semester: 8,
    track: 'Core',
    contest: 'Final Core Technical Assessment',
    subject: 'Major Project / Core ECE',
    gap: 'Project presentation and core technical interview skills',
    activity: 'Present and defend the major project before a technical panel',
    preContest: 'Final Technical Interview / Project Viva'
  },
  {
    semester: 8,
    track: 'Professional',
    contest: 'ECE Professional Portfolio',
    subject: 'Major Project / Internship / Career Skills',
    gap: 'Consolidating professional evidence',
    activity: 'Final portfolio with resume, certificates, projects, internship, publications and achievements',
    preContest: 'Final Portfolio Submission'
  }
];

const getRoman = (num) => {
  const map = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii', 8: 'viii' };
  return map[num];
};

const getPathName = (trackStr) => {
  if (trackStr.includes('Software')) return 'Software';
  if (trackStr.includes('Hardware') || trackStr.includes('Core')) return 'Hardware';
  return 'Portfolio'; 
};

const buildCardHtml = (item) => {
  const pType = getPathName(item.track);
  const isSoftware = pType === 'Software';
  const isHardware = pType === 'Hardware';
  const tagColor = isSoftware ? 'text-secondary bg-surface-container-low border-secondary-container' :
                   isHardware ? 'text-surface-tint bg-surface-container border-outline-variant' :
                   'bg-green-950 text-green-400 border-green-400';
  
  return `
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1 hover:border-secondary hover:shadow-[0_4px_12px_rgba(15,23,42,0.05)] transition-all group relative mt-md">
    <div class="absolute top-md right-md font-label-caps text-label-caps px-2 py-1 rounded border ${tagColor}">
        ${item.track} Focus
    </div>
    <div class="mb-md">
        <h3 class="font-title-md text-title-md text-on-surface mb-xs">${item.contest}</h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
            <span class="material-symbols-outlined text-[16px]">emoji_events</span> Target Contest / Goal
        </p>
    </div>
    <div class="space-y-sm mb-lg">
        <div class="p-sm bg-surface-bright rounded-lg border border-surface-variant">
            <h4 class="font-label-caps text-label-caps text-outline mb-xs flex items-center gap-xs">
                <span class="material-symbols-outlined text-[14px]">map</span> Subject Mapped
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface">${item.subject}</p>
        </div>
        <div class="pl-sm border-l-2 border-secondary-container">
            <h4 class="font-label-caps text-label-caps text-secondary mb-xs">Skill Gap</h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant">${item.gap}</p>
        </div>
    </div>
    <div class="border-t border-outline-variant pt-md space-y-md">
        <div>
            <h4 class="font-label-caps text-label-caps text-outline mb-xs">Activity</h4>
            <p class="font-body-sm text-body-sm text-on-surface">${item.activity}</p>
        </div>
        <div>
            <h4 class="font-label-caps text-label-caps text-outline mb-xs">Pre-Contest / Pre-Placement</h4>
            <p class="font-body-sm text-body-sm text-on-surface bg-surface-container-low p-sm rounded border border-outline-variant">
                ${item.preContest}
            </p>
        </div>
    </div>
</div>
`;
};

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';

[1,2,3,4,5,6,7,8].forEach(semNum => {
  const roman = getRoman(semNum);
  const dirPath = path.join(baseDir, `semester_${roman}_ece_roadmap`);
  const filePath = path.join(dirPath, 'code.html');
  if (!fs.existsSync(filePath)) {
    console.log('Skipping ' + filePath);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content, { decodeEntities: false });
  
  const items = data.filter(d => d.semester === semNum);
  
  items.forEach(item => {
    const pType = getPathName(item.track);
    let section = null;
    
    $('section h2').each((i, el) => {
      const text = $(el).text();
      if (text.includes(pType)) {
        section = $(el).closest('section');
      }
    });
    
    const cardHtml = buildCardHtml(item);
    
    if (section) {
      const cards = section.children('.bg-surface-container-lowest');
      cards.remove();
      section.append(cardHtml);
    } else {
      const newSectionHtml = `
<section class="flex flex-col">
  <div class="mb-sm flex items-center gap-sm">
    <div class="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
      <span class="material-symbols-outlined filled">folder_special</span>
    </div>
    <h2 class="font-headline-lg text-headline-lg text-on-surface">Path 3 — Portfolio</h2>
  </div>
  ${cardHtml}
</section>
      `;
      
      const grid = $('.grid.grid-cols-1').first();
      if (grid.length > 0) {
        grid.append(newSectionHtml);
      }
    }
  });
  
  fs.writeFileSync(filePath, $.html());
  console.log('Updated Sem ' + semNum);
});
