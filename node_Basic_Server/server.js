const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath)

    // intial content type
    let contentType = 'text/html';

    // check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css'
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == ENONET) {
                // page not found
                fs.readfile(path.join('__dirname', 'public', 'notFound.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    })
            } else {
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8');
        }
    })


})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Sever running on port ${PORT}`))