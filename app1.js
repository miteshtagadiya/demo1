
//normal function
function hi(){
	console.log('hii');
}

hi();

//function expression
var hi1 = function(){
	console.log('byeee');
};
hi1();

//pass function inside another function
function callFunction(fun){
	fun();
}
var s1 = function(){
	console.log('bye with function');
}
callFunction(s1);