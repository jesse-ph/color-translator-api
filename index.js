const url = require('url');
const http = require('http');
const fileReader = require('./features/file-reader');
const colorNameToHex = require('./features/color-translator');

const port = 3000;
const jsonFilePath = './data/colors.json';
const allowedOrigin = 'http://localhost:4200';

const server = http.createServer((req, res) => {
    const colorList = fileReader(jsonFilePath);
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    setHeaders(res);
    
    if (req.method === 'GET' && parsedUrl.pathname === '/color-translate') {
        const colorName = query.name || '';
        const hex = colorNameToHex(colorName, colorList);

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

server.listen(port, () => {
    console.log(`Server running at Port ${port}`);
});