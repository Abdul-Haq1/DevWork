const http = require('http');
const path = require('path');
const fs = require('fs');
const prettyjson = require('prettyjson');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
            if (err) throw err;

            // Parse Json Data
            const jsonData = JSON.parse(data)

            // Make it more readable by using prettyjson
            const readableJson = prettyjson.render(jsonData, { noColor: true });
            res.end(readableJson)
            // console.log(readableJson)

        })
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server runing....`));


