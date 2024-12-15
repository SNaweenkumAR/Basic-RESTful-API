var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
var my = function () {
    console.log('Let do it!');
  }
  

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('let',my);

//Fire the 'scream' event:
eventEmitter.emit('let');