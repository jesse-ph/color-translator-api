const http = require('http');

const port = 3000;
const hostname = 'localhost';
const allowedOrigin = 'http://localhost:4200';
const jsonFilePath = './colors.json';
const fileReader = require('./file-reader');
const colorNameToHex = require('./color-translator');
const colorList = fileReader(jsonFilePath);

const server = http.createServer((req, res) => {

    setHeaders(res);
    
    if (req.method === 'GET' && req.url === '/color-translate') {
        const hex = colorNameToHex('red', colorList);
        
        res.statusCode = 200;
        res.end(JSON.stringify({ hex }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const setHeaders = (response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});