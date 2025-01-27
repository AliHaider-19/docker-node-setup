const https = require('https');

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello There!')
});
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listinig on ${PORT} port`)
})