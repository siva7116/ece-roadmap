const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const allFolders = [
  'home_ece_roadmap',
  'semester_i_ece_roadmap',
  'semester_ii_ece_roadmap',
  'semester_iii_ece_roadmap',
  'semester_iv_ece_roadmap',
  'semester_v_ece_roadmap',
  'semester_vi_ece_roadmap',
  'semester_vii_ece_roadmap',
  'semester_viii_ece_roadmap'
];

const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

allFolders.forEach(folder => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    let activeSem = '';
    if (folder.startsWith('semester_')) {
        const parts = folder.split('_'); // 'semester', 'i', 'ece', 'roadmap'
        const roman = parts[1].toUpperCase();
        const map = { 'I': '1', 'II': '2', 'III': '3', 'IV': '4', 'V': '5', 'VI': '6', 'VII': '7', 'VIII': '8' };
        activeSem = map[roman];
    }

    let newNavLinksHTML = '';
    
    const romanMap = { '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII' };
    const fontStyle = "font-family: 'Inter', sans-serif;";

    // Home link
    const isHomeActive = folder === 'home_ece_roadmap';
    const homeClass = isHomeActive 
        ? 'bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-xl transition-all duration-300 text-title-sm tracking-wide'
        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container font-bold px-3 py-2 rounded-xl text-title-sm transition-all duration-300 tracking-wide';
    newNavLinksHTML += `<a class="${homeClass}" style="${fontStyle}" href="#">Home</a>\n`;

    // Semester links
    semesters.forEach((sem) => {
        const isActive = sem === activeSem;
        const className = isActive 
            ? 'bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-xl transition-all duration-300 text-title-sm tracking-wide'
            : 'text-on-surface-variant hover:text-primary hover:bg-surface-container font-bold px-3 py-2 rounded-xl text-title-sm transition-all duration-300 tracking-wide';
        newNavLinksHTML += `<a class="${className}" style="${fontStyle}" href="#">Sem ${romanMap[sem]}</a>\n`;
    });

    const topNavLinksContainer = $('nav.sticky').find('.hidden.md\\:flex');
    if (topNavLinksContainer.length) {
        topNavLinksContainer.html(newNavLinksHTML);
        // Add ml-auto to push everything to the right side
        topNavLinksContainer
          .removeClass('gap-margin gap-md gap-1 p-1 bg-surface-container-low shadow-inner border border-outline-variant rounded-full justify-center')
          .addClass('gap-1 flex-wrap items-center ml-auto mr-md');
    }
    
    // Add stylish font
    const fontLink = '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet">';
    if ($('head link[href*="Playfair"]').length === 0) {
        $('head').append(fontLink);
    }
    
    // Add View Transitions API for smooth cross-page switching
    const transitionCSS = `
      <style class="view-transitions">
        @view-transition { navigation: auto; }
        ::view-transition-old(root), ::view-transition-new(root) {
          animation-duration: 0.3s;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        ::view-transition-old(root) {
          animation-name: fade-out, slide-out;
        }
        ::view-transition-new(root) {
          animation-name: fade-in, slide-in;
        }
        @keyframes fade-out { to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } }
        @keyframes slide-out { to { transform: translateY(-10px); } }
        @keyframes slide-in { from { transform: translateY(10px); } }
      </style>
    `;
    if ($('head style.view-transitions').length === 0) {
        $('head').append(transitionCSS);
    } else {
        $('head style.view-transitions').replaceWith(transitionCSS);
    }

    fs.writeFileSync(filePath, $.html());
    console.log(`Updated layout in ${folder}`);
  }
});
