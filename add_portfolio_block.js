const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const folder = 'semester_viii_ece_roadmap';

const portfolioHTML = `
<div class="mt-xl border-t border-outline-variant pt-xl mb-xl">
    <div class="font-label-caps text-label-caps text-[#1b629b] font-bold mb-md uppercase tracking-wider">
        R2026 • INDUSTRY READY PORTFOLIO
    </div>
    
    <div class="flex flex-col lg:flex-row gap-lg mb-lg">
        <div class="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high shadow-sm p-4 flex items-center justify-center">
            <svg class="w-full h-full text-on-surface-variant opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        </div>
        <div class="flex flex-col justify-center">
            <h2 class="font-display-md text-display-md text-[#1b629b] font-bold mb-xs">Dr. Ram</h2>
            <p class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">B.E. Electronics & Communication Engineering • R2026</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                Industry-ready graduate profile combining software development, embedded systems, VLSI, communication, signal processing and hardware design skills.
            </p>
        </div>
    </div>

    <!-- PDH Banner -->
    <div class="bg-[#1a4b63] rounded-xl p-lg flex flex-col md:flex-row items-center justify-between gap-md mb-xl shadow-md">
        <div class="text-white">
            <div class="font-label-caps text-label-caps uppercase tracking-wider mb-xs opacity-90">Professional Development</div>
            <div class="font-display-lg text-display-lg font-bold mb-xs">20 PDH</div>
            <div class="font-title-sm text-title-sm opacity-90">Verified Professional Development Hours</div>
        </div>
        <div class="text-white font-body-sm text-body-sm max-w-md opacity-90 leading-relaxed md:text-right border-t md:border-l md:border-t-0 border-white/20 pt-sm md:pt-0 md:pl-md">
            Earned through verified technical activities, additional learning and internal pre-contest assessments.
        </div>
    </div>

    <!-- Technical Skills -->
    <div class="mb-xl">
        <h3 class="font-title-lg text-title-lg text-[#1b629b] font-bold uppercase tracking-wider mb-md">Technical Skills</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-md">
            <!-- Software Box -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm">
                <h4 class="font-title-md text-title-md text-[#1b629b] font-bold mb-md">Software & Computing</h4>
                <div class="flex flex-wrap gap-sm">
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">C / C++ Programming</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Data Structures & Algorithms</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Python</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">SQL & Data Handling</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Git & Version Control</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Debugging & Testing</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">TCP/IP & Client-Server</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">AI / ML & Deep Learning</span>
                </div>
            </div>
            <!-- Hardware Box -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm">
                <h4 class="font-title-md text-title-md text-[#1b629b] font-bold mb-md">Hardware & Core</h4>
                <div class="flex flex-wrap gap-sm">
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Digital Electronics & RTL</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Verilog / FPGA</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">VLSI & Synthesis</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">Embedded C & MCU</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">PCB / Hardware Prototyping</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">DSP & MATLAB / Python</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">RF & Communication Systems</span>
                    <span class="bg-surface-container-high px-3 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface font-bold shadow-sm border border-outline-variant">IoT / Edge AI</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Industry Evidence -->
    <div>
        <h3 class="font-title-lg text-title-lg text-[#1b629b] font-bold uppercase tracking-wider mb-md">Industry Evidence</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            <!-- Card 1 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Contest Participation</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Competitive programming, robotics, DSP, innovation, hackathon and advanced challenges.</p>
            </div>
            <!-- Card 2 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Technical Activities</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Verified subject-linked assignments, simulations, coding practice, prototypes and validation evidence.</p>
            </div>
            <!-- Card 3 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Projects</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Software applications, embedded/IoT systems, RTL/VLSI work, communication/DSP analysis and integrated systems.</p>
            </div>
            <!-- Card 4 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Certifications</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">NPTEL / MOOC / global certification / value-added learning evidence where prescribed.</p>
            </div>
            <!-- Card 5 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Pre-Contest Record</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Department qualifying scores, rubrics, faculty verification and improvement records.</p>
            </div>
            <!-- Card 6 -->
            <div class="border border-outline-variant rounded-xl p-md bg-surface-container-lowest shadow-sm hover:border-[#1b629b] transition-colors cursor-pointer">
                <h4 class="font-title-sm text-title-sm text-[#1b629b] font-bold mb-sm">Portfolio Evidence</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Source code, Git records, circuit/simulation files, RTL, reports, prototype photographs and demo videos.</p>
            </div>
        </div>
    </div>
</div>
`;

const filePath = path.join(baseDir, folder, 'code.html');
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // We'll append the portfolio HTML just before the closing </main> tag
  if (content.includes('</main>')) {
    // Make sure we only add it once
    let newContent = content;
    if (!newContent.includes('INDUSTRY READY PORTFOLIO')) {
      newContent = newContent.replace('</main>', `\n${portfolioHTML}\n</main>`);
      fs.writeFileSync(filePath, newContent);
      console.log('Added Portfolio HTML to Semester VIII');
    } else {
      console.log('Portfolio HTML already exists in Semester VIII');
    }
  }
}
