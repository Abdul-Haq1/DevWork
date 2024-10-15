const http = require('http');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8')
            }
        )
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(content)
            }
        )
    } else if (req.url === '/css/index.css') {
        fs.readFile(path.join(__dirname, 'public', 'css/index.css'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/css' })
                res.end(content, 'utf-8')
            }
        )
    } else if (req.url === '/js/main.js') {
        fs.readFile(path.join(__dirname, 'public', req.url),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Conent-Type': 'text/javaScript' })
                res.end(content, 'utf-8')
            }
        )
    }


    // fs.readFile(`${filePath}.html`, (err, content) => {
    //     if (err) {
    //         if (err.code == 'ENOENT') {
    //             // page not found
    //             fs.readFile(path.join(__dirname, 'public', 'notFound.html'),
    //                 (err, content) => {
    //                     res.writeHead(200, { 'Content-Type': 'text/html' });
    //                     res.end(content, 'utf8');
    //                 })
    //         } else {
    //             res.writeHead(500);
    //             res.end(`server error: ${err.code}`);
    //         }
    //     } else {
    //         res.writeHead(200, { 'Content-Type': contentType })
    //         res.end(content, 'utf8');
    //     }
    // })


})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Sever running on port ${PORT}`))