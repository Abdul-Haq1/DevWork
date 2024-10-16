const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const queryObject = parsedUrl.query;

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
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'),
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
    } else if (req.url == '/api') {

        // Example: Mock database or logic to return data based on student name
        const responseData = {
            name: 'Rohit Sharma',
            status: 'Boss Man',
            currentOccupation: 'Baller'
        };

        // Send a 200 status code and the JSON response
        res.writeHead(200);
        res.end(JSON.stringify(responseData));

    } else {
        figlet('404!!', (err, data) => {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data)
            res.end()
        })
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