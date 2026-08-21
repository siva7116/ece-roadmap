const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'home_ece_roadmap', 'code.html');
let content = fs.readFileSync(homePath, 'utf-8');

const newGrid = `      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
      <!-- Semester 1 -->
      <a href="semester-1.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem I</span>
          <span class="text-[11px] font-semibold text-slate-400">1st Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester I</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Problem Solving Using C</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Electric Circuits and Electronic Devices</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Introduction to Engineering-I</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Matrices and Applications of Calculus</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">e-Yantra • SIH • Matrices</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 2 -->
      <a href="semester-2.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem II</span>
          <span class="text-[11px] font-semibold text-slate-400">1st Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester II</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Data Structures Using C++</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Digital Electronics</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Electronic Circuits</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Introduction to Engineering-II</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">C2S • e-Yantra • SIH</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 3 -->
      <a href="semester-3.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem III</span>
          <span class="text-[11px] font-semibold text-slate-400">2nd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester III</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Control System Engineering</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Analog Integrated Circuits</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Probability, Statistics and Stochastic Process</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">e-YRC • C2S Analog • GATE</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 4 -->
      <a href="semester-4.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem IV</span>
          <span class="text-[11px] font-semibold text-slate-400">2nd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester IV</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">VLSI Design</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Embedded C Programming</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Artificial Intelligence and Machine Learning</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Linear Algebra</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">C2S • e-YRC • Edge-AI</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 5 -->
      <a href="semester-5.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem V</span>
          <span class="text-[11px] font-semibold text-slate-400">3rd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester V</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">ASIC Design</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>RTL-to-GDSII Physical Flow</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">C2S • RISC-V • SEMICON</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 6 -->
      <a href="semester-6.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VI</span>
          <span class="text-[11px] font-semibold text-slate-400">3rd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VI</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Deep Learning</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>Edge AI &amp; Inference Optimization</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">Edge-AI • SIH • AI Hackathons</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 7 -->
      <a href="semester-7.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VII</span>
          <span class="text-[11px] font-semibold text-slate-400">4th Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VII</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">IoT Security</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Professional Elective IV</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Professional Elective V</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">Secure IoT • Domain Challenges</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 8 -->
      <a href="semester-8.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VIII</span>
          <span class="text-[11px] font-semibold text-slate-400">4th Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VIII</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span><span class="truncate font-medium">Project Work / Capstone</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span><span class="truncate font-medium">Core Industry Placement</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">External Contests • Placements</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      </div>`;

// Replace from '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">' up to '</div>\s*</section>'
content = content.replace(/<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">[\s\S]*?<\/div>\s*<\/section>/, `${newGrid}\n    </section>`);

fs.writeFileSync(homePath, content);
console.log('✓ Successfully injected all subject chips into Home overview page');
