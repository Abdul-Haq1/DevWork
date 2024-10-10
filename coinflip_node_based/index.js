const http = require('http');
const path = require('path');
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, '/public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    } else if (req.url === '/flip' && req.method === 'GET') {
        // simulate coin flip
        const outcome = Math.random() < 0.5 ? 'heads' : 'tails';

        // set response header for json 
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify({ outcome }));
    } else if (req.url == '/js/main.js') {
        fs.readFile(path.join(__dirname, '/public/js/main.js'), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 not found')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));