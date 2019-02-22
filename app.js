/*var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});*/

var http = require('http');

var port = 9000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello there, world!\n');
}).listen(port);

console.log('Listening on port', port);