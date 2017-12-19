var fs = require('fs');


//Synchronous method
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');
//fs.unlink('writeme.txt');

//asynchronous method
/*fs.mkdir('stuff',function(){
	fs.readFile('redme.txt','utf8',function(err,data){
		fs.writeFile('./stuff/writeme.txt',data);
	});
});*/

fs.unlink('./stuff/writeme.txt',function(){
	fs.rmdir('stuff');
});
