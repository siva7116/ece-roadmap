const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const SITE_DIR = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap', 'site');
const ROOT_DIR = path.join(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const SEM_MAP = {
  '1': 'semester-1.html', 'i': 'semester-1.html', 'sem1': 'semester-1.html', 'sem-1': 'semester-1.html', 'semester1': 'semester-1.html', 'semester-1': 'semester-1.html', 'semester_1': 'semester-1.html', 'semester_i': 'semester-1.html',
  '2': 'semester-2.html', 'ii': 'semester-2.html', 'sem2': 'semester-2.html', 'sem-2': 'semester-2.html', 'semester2': 'semester-2.html', 'semester-2': 'semester-2.html', 'semester_2': 'semester-2.html', 'semester_ii': 'semester-2.html',
  '3': 'semester-3.html', 'iii': 'semester-3.html', 'sem3': 'semester-3.html', 'sem-3': 'semester-3.html', 'semester3': 'semester-3.html', 'semester-3': 'semester-3.html', 'semester_3': 'semester-3.html', 'semester_iii': 'semester-3.html',
  '4': 'semester-4.html', 'iv': 'semester-4.html', 'sem4': 'semester-4.html', 'sem-4': 'semester-4.html', 'semester4': 'semester-4.html', 'semester-4': 'semester-4.html', 'semester_4': 'semester-4.html', 'semester_iv': 'semester-4.html',
  '5': 'semester-5.html', 'v': 'semester-5.html', 'sem5': 'semester-5.html', 'sem-5': 'semester-5.html', 'semester5': 'semester-5.html', 'semester-5': 'semester-5.html', 'semester_5': 'semester-5.html', 'semester_v': 'semester-5.html',
  '6': 'semester-6.html', 'vi': 'semester-6.html', 'sem6': 'semester-6.html', 'sem-6': 'semester-6.html', 'semester6': 'semester-6.html', 'semester-6': 'semester-6.html', 'semester_6': 'semester-6.html', 'semester_vi': 'semester-6.html',
  '7': 'semester-7.html', 'vii': 'semester-7.html', 'sem7': 'semester-7.html', 'sem-7': 'semester-7.html', 'semester7': 'semester-7.html', 'semester-7': 'semester-7.html', 'semester_7': 'semester-7.html', 'semester_vii': 'semester-7.html',
  '8': 'semester-8.html', 'viii': 'semester-8.html', 'sem8': 'semester-8.html', 'sem-8': 'semester-8.html', 'semester8': 'semester-8.html', 'semester-8': 'semester-8.html', 'semester_8': 'semester-8.html', 'semester_viii': 'semester-8.html',
};

function resolveFilePath(reqPath) {
  const cleanPath = reqPath.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();
  
  if (!cleanPath || cleanPath === 'index' || cleanPath === 'index.html' || cleanPath === 'home') {
    return path.join(SITE_DIR, 'index.html');
  }

  // Check alias map (e.g., /semester-1, /sem1, /1)
  if (SEM_MAP[cleanPath]) {
    return path.join(SITE_DIR, SEM_MAP[cleanPath]);
  }

  // Try direct path in SITE_DIR
  let candidate = path.join(SITE_DIR, reqPath);
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  // Try appending .html
  if (fs.existsSync(candidate + '.html') && fs.statSync(candidate + '.html').isFile()) {
    return candidate + '.html';
  }

  // Try direct path in ROOT_DIR
  let rootCandidate = path.join(ROOT_DIR, reqPath);
  if (fs.existsSync(rootCandidate) && fs.statSync(rootCandidate).isFile()) {
    return rootCandidate;
  }

  // Try inside stitch_ece_industry_readiness_roadmap
  let nestedCandidate = path.join(ROOT_DIR, 'stitch_ece_industry_readiness_roadmap', reqPath);
  if (fs.existsSync(nestedCandidate) && fs.statSync(nestedCandidate).isFile()) {
    return nestedCandidate;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const rawUrl = req.url.split('?')[0];
  const decodedUrl = decodeURIComponent(rawUrl);
  
  const targetFile = resolveFilePath(decodedUrl);

  if (!targetFile || !fs.existsSync(targetFile)) {
    console.log(`[404] ${req.method} ${rawUrl} (Not found)`);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>404 - Page Not Found | ECE Roadmap</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-slate-50 min-h-screen flex items-center justify-center p-6 font-sans">
        <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-2xl">404</div>
          <h1 class="text-2xl font-extrabold text-slate-900 mb-2">Page Not Found</h1>
          <p class="text-sm text-slate-500 mb-6">The requested path <code class="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700">${rawUrl}</code> could not be found.</p>
          <div class="space-y-2">
            <a href="/" class="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-sm">Go to Home Overview</a>
            <a href="/semester-1.html" class="block w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all">Go to Semester 1 Roadmap</a>
          </div>
        </div>
      </body>
      </html>
    `);
    return;
  }

  const ext = path.extname(targetFile).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  console.log(`[200] ${req.method} ${rawUrl} -> ${path.basename(targetFile)}`);

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Access-Control-Allow-Origin': '*'
  });

  fs.createReadStream(targetFile).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`ECE Industry Readiness Server running at http://localhost:${PORT}/`);
  console.log(`Serving static files from: ${SITE_DIR}`);
});
