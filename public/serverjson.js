var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type':'application/json'});
	var obj = {
		name: 'ryu',
		job: 'Ninja',
		age: 22
	};

	res.end(JSON.stringify(obj));
	
});

server.listen(3000,'127.0.0.1');
console.log('Port number is 3000');