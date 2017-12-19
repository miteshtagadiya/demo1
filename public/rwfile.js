//fs variable is used to read and write file in node.js

var fs = require('fs');

//this is a async method ,when this is calles then first print test then file is read.
/*fs.readFile('redme.txt','utf8', function(err, data){
	console.log(data);
});
console.log('test');
*/

//sync method
var redme = fs.readFileSync('redme.txt', 'utf8');

fs.writeFileSync('writeme.txt', redme);
//console.log(redme);

