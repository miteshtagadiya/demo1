//util is use to inherit the objects.
//The Util module provides access to some utility functions.

var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var marry = new Person('marry');
var ryun = new Person('ryun');

var people = [james,marry,ryun];

people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name + ' said: ' + msg)
	});
});

james.emit('speak', 'hello');
ryun.emit('speak', 'World');