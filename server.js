var http = require('http');

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);

	//Response Header
	res.writeHead(200,{'Content-Type':'text/plain'});
	//Send Response
	res.end('Hello World');
});

server.listen(3000,'127.0.0.1');
console.log('Port number is 3000');