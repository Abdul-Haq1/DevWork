const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Homepage<\h1>')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))