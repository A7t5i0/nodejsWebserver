var http = require('http');
const fs = require('fs');

var server= http.createServer( (req,res) => {
    if (req.url == '/') {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(fs.readFileSync('index.html'));
        res.end();
    }

    if (req.url == '/about') {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(fs.readFileSync('about.html'));
        res.end();
    }
});

server.listen(5000);

console.log('nodejs server running on port 5000')