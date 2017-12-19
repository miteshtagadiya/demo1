//node's event
var events = require('events');

//for create custom event use eventEmitter ,it is a constructor
var myEmitter = new events.EventEmitter();


myEmitter.on('someEvent',function(msg){
	console.log(msg);
});

//call the custom event using .emit('event name',function parameter)
myEmitter.emit('someEvent','The event was emitted.');