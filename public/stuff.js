//module.exports.counter = function(arr){
var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array.';
};

//module.exports.adder = function(a,b){
var adder = function(a,b){
	return `The sum of two number is ${a+b}`;
};


//module.exports.pi = 3.142
var pi = 3.142;

//to available counter variable outside
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

/*console.log(counter(['one','two','three']));*/

//or also write this
/*module.exports ={
	counter: counter;
	adder: adder;
	pi: pi
};*/