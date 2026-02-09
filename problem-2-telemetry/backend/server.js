const http = require('http');
const fs = require('fs');

const PORT = 3000;

// Load initial sensor data
let data = JSON.parse(fs.readFileSync('sensor_data_500.json'));
let telemetry = [...data]; // Copy into FIFO array
if (telemetry.length > 100) telemetry = telemetry.slice(-100);

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/telemetry/latest' && req.method === 'GET') {
    res.end(JSON.stringify(telemetry[telemetry.length - 1]));
  } else if (req.url.startsWith('/api/telemetry/history') && req.method === 'GET') {
    const limit = Number(new URL(req.url, 'http://x').searchParams.get('limit')) || 10;
    res.end(JSON.stringify(telemetry.slice(-limit)));
  } else if (req.url === '/api/telemetry' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const obj = JSON.parse(body);
        // Minimal validation
        if (typeof obj.depth !== 'number' || typeof obj.pressure !== 'number') {
          res.writeHead(400); res.end('Invalid payload'); return;
        }
        telemetry.push(obj);
        if (telemetry.length > 100) telemetry.shift();
        res.end('OK');
      } catch(e) {
        res.writeHead(400); res.end('Invalid JSON');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));