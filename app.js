//console.log('hello Patidar. . .');


/*setTimeout(function(){
	console.log('3 seconds have passed.');
},3000);*/


/*var time=0;
var timer = setInterval(function(){
	time += 2;
	console.log(time+ ' seconds have passed.');
	if(time > 5){
		clearInterval(timer);
	}
},2000);*/


/*console.log(__dirname);
console.log(__filename);*/

/*
var counter = require('./count');
console.log(counter(['one','two','three']));*/



var stuff = require('./stuff');
console.log(stuff.counter(['one','two','three']));
console.log(stuff.adder(2,3));
console.log(stuff.pi);







