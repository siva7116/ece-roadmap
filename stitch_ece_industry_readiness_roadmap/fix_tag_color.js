const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
const allFolders = [
  'stitch_ece_industry_readiness_roadmap/semester_vii_ece_roadmap',
  'stitch_ece_industry_readiness_roadmap/semester_viii_ece_roadmap',
  'stitch_ece_industry_readiness_roadmap/site'
];

const oldClass = 'text-on-tertiary-container bg-tertiary-container border-tertiary-fixed';
const newClass = 'bg-green-950 text-green-400 border-green-400';

// Also update update_html.js
let updateHtmlPath = path.join(baseDir, 'update_html.js');
if (fs.existsSync(updateHtmlPath)) {
    let content = fs.readFileSync(updateHtmlPath, 'utf-8');
    content = content.replace(new RegExp(oldClass, 'g'), newClass);
    fs.writeFileSync(updateHtmlPath, content);
}

// Update code.html files
allFolders.forEach(folder => {
    const folderPath = path.join(baseDir, folder);
    if (!fs.existsSync(folderPath)) return;
    
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(folderPath, file);
            let content = fs.readFileSync(filePath, 'utf-8');
            content = content.replace(new RegExp(oldClass, 'g'), newClass);
            fs.writeFileSync(filePath, content);
        }
    });
});
console.log('Done fixing tag colors!');
