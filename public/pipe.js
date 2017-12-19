var http = require('http');
var fs = require('fs');

//only shows buffers
//var myReadStream = fs.createReadStream(__dirname + '/redme.txt');
/* piping.....
//for display text 
var myReadStream = fs.createReadStream(__dirname + '/redme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

//piping myReadStream into the myWriteStream
myReadStream.pipe(myWriteStream);

*/

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + '/redme.txt', 'utf8');
	myReadStream.pipe(res);


});

server.listen(3000,'127.0.0.1');
console.log('Port number is 3000');