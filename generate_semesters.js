const fs = require('fs');
const path = require('path');

function getHead(title) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Industry Readiness Framework</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            },
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: radial-gradient(circle at 10% 20%, rgba(239, 246, 255, 0.7) 0%, rgba(248, 250, 252, 1) 90%);
      color: #0f172a;
    }
    .font-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .glass-nav {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(226, 232, 240, 0.85);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .software-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248, 250, 255, 0.95) 100%);
      border: 1.5px solid rgba(219, 234, 254, 0.95);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .software-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 35px -10px rgba(37, 99, 235, 0.16), 0 0 0 1.5px rgba(59, 130, 246, 0.35);
    }
    .hardware-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(246, 254, 250, 0.95) 100%);
      border: 1.5px solid rgba(209, 250, 229, 0.95);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .hardware-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 35px -10px rgba(16, 185, 129, 0.16), 0 0 0 1.5px rgba(16, 185, 129, 0.35);
    }
    .innovation-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255, 251, 245, 0.95) 100%);
      border: 1.5px solid rgba(254, 215, 170, 0.95);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .innovation-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 35px -10px rgba(234, 88, 12, 0.16), 0 0 0 1.5px rgba(249, 115, 22, 0.35);
    }
    .activity-item {
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .activity-item:hover {
      transform: translateX(4px);
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col antialiased">
`;
}

function getNav(activeSem) {
  const sems = [
    { name: 'Home', href: 'index.html' },
    { name: 'Sem I', href: 'semester-1.html' },
    { name: 'Sem II', href: 'semester-2.html' },
    { name: 'Sem III', href: 'semester-3.html' },
    { name: 'Sem IV', href: 'semester-4.html' },
    { name: 'Sem V', href: 'semester-5.html' },
    { name: 'Sem VI', href: 'semester-6.html' },
    { name: 'Sem VII', href: 'semester-7.html' },
    { name: 'Sem VIII', href: 'semester-8.html' }
  ];

  const desktopLinks = sems.map(s => {
    if (s.name === activeSem) {
      return `<a href="${s.href}" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm text-xs tracking-wide transition-all">${s.name}</a>`;
    }
    return `<a href="${s.href}" class="text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 font-medium px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all">${s.name}</a>`;
  }).join('\n');

  const mobileLinks = sems.map(s => {
    if (s.name === activeSem) {
      return `<a href="${s.href}" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm text-xs tracking-wide transition-all">${s.name}</a>`;
    }
    return `<a href="${s.href}" class="text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 font-medium px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all">${s.name}</a>`;
  }).join('\n');

  return `
  <nav class="sticky top-0 w-full z-50 glass-nav border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3 group">
        <img src="srm_logo.jpeg" alt="SRM Logo" class="h-10 w-auto object-contain rounded-md shadow-xs group-hover:scale-105 transition-transform">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-heading font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">ECE Roadmap</span>
            <span class="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">R2026</span>
          </div>
          <p class="text-[11px] text-slate-500 font-medium hidden md:block">Contest → Career Industry Readiness</p>
        </div>
      </a>

      <!-- Nav links desktop -->
      <div class="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/60">
        ${desktopLinks}
      </div>
    </div>

    <!-- Mobile Nav Bar (scrollable) -->
    <div class="lg:hidden flex overflow-x-auto py-2 px-4 gap-1.5 bg-white/95 border-t border-slate-100 scrollbar-none">
      ${mobileLinks}
    </div>
  </nav>
  `;
}

function getHeader(badge, title, subtitle, prevLink, nextLink) {
  const prevBtn = prevLink 
    ? `<a href="${prevLink.href}" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-2xs">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> ${prevLink.label}
       </a>`
    : `<span class="opacity-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-400 cursor-not-allowed">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> Prev
       </span>`;

  const nextBtn = nextLink
    ? `<a href="${nextLink.href}" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 border border-blue-600 text-xs font-semibold text-white hover:bg-blue-700 transition-all shadow-sm">
        ${nextLink.label} <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
       </a>`
    : `<span class="opacity-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-400 cursor-not-allowed">
        Next <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
       </span>`;

  return `
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-up">
    
    <!-- Semester Breadcrumb & Header Hero -->
    <header class="mb-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 shadow-sm">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              ${badge}
            </span>
            <span class="text-xs text-slate-400">•</span>
            <span class="text-xs font-medium text-slate-500">Autonomous R2026</span>
          </div>
          <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            ${title}
          </h1>
          <p class="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
            ${subtitle}
          </p>
        </div>

        <!-- Quick Switcher Buttons -->
        <div class="flex items-center gap-2 shrink-0">
          ${prevBtn}
          ${nextBtn}
        </div>
      </div>
    </header>

    <!-- Career Pathway Progression Bar -->
    <div class="mb-8 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-2.5 text-xs font-semibold text-slate-700">
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">1</span> Curriculum</div>
      <span class="text-slate-300">→</span>
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">2</span> Skill Gap</div>
      <span class="text-slate-300">→</span>
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">3</span> 5 Hands-on Activities</div>
      <span class="text-slate-300">→</span>
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">4</span> Department Pre-Contest</div>
      <span class="text-slate-300">→</span>
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">5</span> External Hackathon</div>
      <span class="text-slate-300">→</span>
      <div class="flex items-center gap-1.5"><span class="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-[10px]">6</span> Core Placement</div>
    </div>
  `;
}

function getPriorityBadge(priority) {
  if (priority === 'RED' || priority === 'HIGH' || priority === 'VERY HIGH' || priority === 'HIGHEST') {
    return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-extrabold uppercase tracking-wider"><span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> 🔴 Core Career Priority</span>`;
  }
  if (priority === 'ORANGE' || priority === 'MEDIUM' || priority === 'INNOVATION') {
    return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-[10px] font-extrabold uppercase tracking-wider"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 🟠 Innovation / Domain Priority</span>`;
  }
  return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-50 text-yellow-800 border border-yellow-300 text-[10px] font-extrabold uppercase tracking-wider"><span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> 🟡 Foundation / GATE Support</span>`;
}

function getCard({
  cardType = 'software',
  trackCode,
  trackName,
  trackTitle,
  courseType,
  bannerImg = 'path1_software.png',
  bannerIcon = 'code',
  priority = 'RED',
  targetGoal,
  targetLinks = [],
  subjectCode,
  subjectName,
  skillGap,
  activities = [],
  toolTitle,
  toolDesc,
  toolIcon = 'laptop_mac',
  preContestTitle,
  preContestSubtitle = 'Pre-Contest / Department Challenge'
}) {
  const cardClass = cardType === 'hardware' ? 'hardware-card' : (cardType === 'innovation' ? 'innovation-card' : 'software-card');
  const gradientClass = cardType === 'hardware' 
    ? 'from-emerald-700 via-emerald-800 to-teal-800' 
    : (cardType === 'innovation' 
      ? 'from-amber-600 via-orange-700 to-amber-800' 
      : 'from-blue-700 via-blue-800 to-indigo-800');
  const numGradient = cardType === 'hardware'
    ? 'from-emerald-600 to-teal-600'
    : (cardType === 'innovation'
      ? 'from-amber-600 to-orange-600'
      : 'from-blue-600 to-indigo-600');
  const borderClr = cardType === 'hardware' ? 'border-emerald-200/70' : (cardType === 'innovation' ? 'border-amber-200/70' : 'border-blue-200/70');
  const iconClr = cardType === 'hardware' ? 'text-emerald-200' : (cardType === 'innovation' ? 'text-amber-200' : 'text-blue-200');
  const toolClr = cardType === 'hardware' ? 'text-emerald-600' : (cardType === 'innovation' ? 'text-amber-600' : 'text-blue-600');
  const preContestBg = cardType === 'hardware'
    ? 'from-emerald-50 to-teal-50/50 border-emerald-200/80 text-emerald-700'
    : (cardType === 'innovation'
      ? 'from-amber-50 to-orange-50/50 border-amber-200/80 text-amber-800'
      : 'from-blue-50 to-indigo-50/50 border-blue-200/80 text-blue-700');
  const preContestIconBg = cardType === 'hardware' ? 'bg-emerald-600' : (cardType === 'innovation' ? 'bg-amber-600' : 'bg-blue-600');

  const linkButtons = targetLinks.map(l => `
    <a href="${l.href}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold ${toolClr} hover:underline bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 transition-colors w-max group">
      <span class="material-symbols-outlined text-[14px]">link</span> ${l.label} 
      <span class="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
    </a>
  `).join('\n');

  const activityItems = activities.map((act, idx) => `
    <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
      <span class="w-7 h-7 rounded-lg bg-gradient-to-br ${numGradient} text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">${idx + 1}</span>
      <div>
        <h5 class="text-base font-bold text-slate-900">${act.title}</h5>
        <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${act.desc}</p>
      </div>
    </div>
  `).join('\n');

  return `
  <!-- ${trackTitle} -->
  <section class="flex flex-col ${cardClass} rounded-2xl p-6 sm:p-7 shadow-xs">
    
    <!-- Header Banner -->
    <div class="rounded-xl overflow-hidden mb-6 border ${borderClr} shadow-xs">
      <div class="h-40 w-full overflow-hidden relative bg-slate-950">
        <img src="${bannerImg}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500" alt="${trackTitle}">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold ${toolClr} shadow-xs flex items-center gap-1">
          <span class="material-symbols-outlined text-[14px]">${bannerIcon}</span> ${trackCode}
        </div>
      </div>
      <div class="bg-gradient-to-r ${gradientClass} py-3.5 px-5 text-white flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest ${iconClr}">${trackName}</span>
          <h2 class="font-heading font-extrabold text-lg text-white tracking-wide">${trackTitle}</h2>
        </div>
        <span class="material-symbols-outlined text-2xl ${iconClr}">${bannerIcon}</span>
      </div>
    </div>

    <!-- Target Contest Card -->
    <div class="bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-2xs">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <span class="text-[11px] font-bold uppercase tracking-wider ${toolClr} flex items-center gap-1">
          <span class="material-symbols-outlined text-[15px]">emoji_events</span> Target Contest / Goal
        </span>
        ${getPriorityBadge(priority)}
      </div>
      <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">${targetGoal}</h3>
      <div class="flex flex-wrap gap-2">
        ${linkButtons}
      </div>
    </div>

    <!-- Subject Mapped & Skill Gap -->
    <div class="space-y-3.5 mb-5">
      <div class="p-4 bg-slate-50/90 rounded-xl border border-slate-200/80">
        <div class="flex items-center justify-between mb-1.5">
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] ${toolClr}">book</span> Subject Mapped
          </h4>
          <div class="flex items-center gap-1.5">
            ${courseType ? `<span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">${courseType}</span>` : ''}
            ${subjectCode ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">${subjectCode}</span>` : ''}
          </div>
        </div>
        <p class="font-heading font-extrabold text-lg sm:text-xl text-slate-900">${subjectName}</p>
      </div>

      <div class="p-4 bg-amber-50/70 rounded-xl border-l-4 border-amber-500 border-t border-r border-b border-amber-200/70">
        <h4 class="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-[15px] text-amber-600">psychology_alt</span> Skill Gap Identified
        </h4>
        <p class="text-base text-slate-800 leading-relaxed font-normal">${skillGap}</p>
      </div>
    </div>

    <!-- 5 Core Hands-on Activities -->
    <div class="mb-5">
      <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1">
        <span class="material-symbols-outlined text-[15px] ${toolClr}">task_alt</span> Core Hands-on Activities (5 Units)
      </h4>
      <div class="space-y-3">
        ${activityItems}
      </div>
    </div>

    <!-- Platform & Pre-Contest Challenge -->
    <div class="mt-auto pt-4 border-t border-slate-200/80 space-y-3">
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
        <span class="material-symbols-outlined text-xl ${toolClr} mt-0.5">${toolIcon}</span>
        <div>
          <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Recommended Platform / Tool</span>
          <span class="text-base font-bold text-slate-900">${toolTitle}</span>
          <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${toolDesc}</p>
        </div>
      </div>

      <div class="p-3.5 bg-gradient-to-r ${preContestBg} rounded-xl border flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg ${preContestIconBg} text-white flex items-center justify-center shrink-0 shadow-2xs">
          <span class="material-symbols-outlined text-base">military_tech</span>
        </span>
        <div>
          <span class="text-[10px] uppercase font-bold tracking-wider block">${preContestSubtitle}</span>
          <span class="text-base font-bold text-slate-900">${preContestTitle}</span>
        </div>
      </div>
    </div>

  </section>
  `;
}

function getFooter(prevLink, nextLink) {
  const prevBtn = prevLink 
    ? `<a href="${prevLink.href}" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> ${prevLink.label}
       </a>`
    : `<span class="opacity-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-400 cursor-not-allowed">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> Prev
       </span>`;

  const nextBtn = nextLink
    ? `<a href="${nextLink.href}" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 transition-all shadow-xs">
        ${nextLink.label} <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
       </a>`
    : `<span class="opacity-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-400 cursor-not-allowed">
        Next <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
       </span>`;

  return `
    <!-- Bottom Navigation Footer Bar -->
    <nav class="mt-12 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
      <div>
        ${prevBtn}
      </div>
      <div class="flex items-center gap-2">
        <a href="index.html" class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
          <span class="material-symbols-outlined text-[16px]">home</span> Roadmap Overview
        </a>
      </div>
      <div>
        ${nextBtn}
      </div>
    </nav>

  </main>

  <!-- Footer -->
  <footer class="w-full py-6 px-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500 mt-auto">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-medium">© 2026 SRM TRP Engineering College • Department of Electronics &amp; Communication Engineering</p>
      <p class="text-slate-400">R2026 Autonomous Curriculum &amp; Syllabi Framework</p>
    </div>
  </footer>
</body>
</html>
`;
}

module.exports = {
  getHead,
  getNav,
  getHeader,
  getCard,
  getPriorityBadge,
  getFooter
};
