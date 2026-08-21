const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const outputDir = path.join(baseDir, 'site');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const map = {
  'home_ece_roadmap': 'index.html',
  'semester_i_ece_roadmap': 'semester-1.html',
  'semester_ii_ece_roadmap': 'semester-2.html',
  'semester_iii_ece_roadmap': 'semester-3.html',
  'semester_iv_ece_roadmap': 'semester-4.html',
  'semester_v_ece_roadmap': 'semester-5.html',
  'semester_vi_ece_roadmap': 'semester-6.html',
  'semester_vii_ece_roadmap': 'semester-7.html',
  'semester_viii_ece_roadmap': 'semester-8.html',
};

const links = [
  { pattern: 'Home', target: 'index.html' },
  { pattern: 'Roadmap', target: 'index.html' },
  { pattern: 'Sem VIII', target: 'semester-8.html' },
  { pattern: 'Sem VII', target: 'semester-7.html' },
  { pattern: 'Sem VI', target: 'semester-6.html' },
  { pattern: 'Sem V', target: 'semester-5.html' },
  { pattern: 'Sem IV', target: 'semester-4.html' },
  { pattern: 'Sem III', target: 'semester-3.html' },
  { pattern: 'Sem II', target: 'semester-2.html' },
  { pattern: 'Sem I', target: 'semester-1.html' },
];

Object.entries(map).forEach(([folder, filename]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Process navigation links
    content = content.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2) => {
      let matchedLink = null;
      // strip html tags from p2 for clean text comparison
      const cleanText = p2.replace(/<[^>]*>/g, '').trim();
      const lowerCleanText = cleanText.toLowerCase();
      
      // Remove Career Paths, Analytics, Settings, Support links completely
      if (lowerCleanText.includes('career paths') || 
          lowerCleanText.includes('analytics') ||
          lowerCleanText.includes('settings') ||
          lowerCleanText.includes('support')) {
        return '';
      }
      
      for (const link of links) {
        if (cleanText === link.pattern || cleanText.endsWith(link.pattern)) {
           matchedLink = link.target;
           break;
        }
      }
      
      if (matchedLink) {
        if (p1.includes('href=')) {
          p1 = p1.replace(/href="[^"]*"/, `href="${matchedLink}"`);
        } else {
          p1 = p1 + ` href="${matchedLink}"`;
        }
      }
      return `<a${p1}>${p2}</a>`;
    });
    
    // 2. Replace Academic Progress icon with "ECE"
    content = content.replace(
      /<div class="w-10 h-10 ([^>]*)>([\s\S]*?)<\/div>(\s*<div>\s*<h2[^>]*>Academic Progress<\/h2>)/gi,
      (match, classes, iconContent, afterText) => {
        classes = classes.replace('text-xl', 'text-sm font-bold');
        if (!classes.includes('text-sm')) classes += ' text-sm font-bold';
        return `<div class="w-10 h-10 ${classes.trim()}">ECE</div>${afterText}`;
      }
    );
    
    // 3. Remove notification and profile buttons
    content = content.replace(/<button[^>]*>\s*<span[^>]*>notifications<\/span>\s*<\/button>/gi, '');
    content = content.replace(/<button[^>]*>\s*<span[^>]*>account_circle<\/span>\s*<\/button>/gi, '');

    fs.writeFileSync(path.join(outputDir, filename), content);
    const rootOutputDir = path.join(__dirname, 'site');
    if (!fs.existsSync(rootOutputDir)) fs.mkdirSync(rootOutputDir, { recursive: true });
    fs.writeFileSync(path.join(rootOutputDir, filename), content);
    console.log(`Processed ${filename}`);
  } else {
    console.log(`Missing ${filePath}`);
  }
});
