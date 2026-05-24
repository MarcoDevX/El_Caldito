// server.js — Servidor de archivos estáticos para El Caldito de Abuela
// Sirve todos los archivos del directorio raíz en el puerto 8080.
// No requiere dependencias externas (solo módulos nativos de Node.js).

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 — Archivo no encontrado');
      return;
    }
    const ext      = path.extname(filePath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // Normalizar la URL y evitar path traversal
  const urlPath   = req.url.split('?')[0];
  const safePath  = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  let   filePath  = path.join(ROOT, safePath);

  // Ruta raíz → index.html
  if (safePath === '/' || safePath === '') {
    filePath = path.join(ROOT, 'index.html');
    serveFile(res, filePath);
    return;
  }

  // Intentar servir el archivo tal cual; si es directorio, buscar index.html
  fs.stat(filePath, (err, stat) => {
    if (err) {
      // Último recurso: devolver index.html (SPA fallback)
      serveFile(res, path.join(ROOT, 'index.html'));
      return;
    }

    if (stat.isDirectory()) {
      serveFile(res, path.join(filePath, 'index.html'));
    } else {
      serveFile(res, filePath);
    }
  });
});

server.listen(PORT, () => {
  console.log(`El Caldito de Abuela — servidor corriendo en http://0.0.0.0:${PORT}`);
});
