var http = require('http');
const lmodule = require('./module1.js')
const PORT = 3500;

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>The biggest of 20 and 30 is ${lmodule.findBiggest(20,30)}`)
    res.write(`<h1>sum of 20 and 30 is ${lmodule.add(20,30)}`)
    res.end();
}).listen(PORT);

console.log(`Server started at http://localhost:${PORT}`);
