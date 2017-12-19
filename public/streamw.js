var http = require('http');
var fs = require('fs');

//only shows buffers
//var myReadStream = fs.createReadStream(__dirname + '/redme.txt');

//for display text 
var myReadStream = fs.createReadStream(__dirname + '/redme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

//.on is for listen for an event
myReadStream.on('data',function(chunk){
	console.log('New chunk Received:');
	myWriteStream.write(chunk);
});