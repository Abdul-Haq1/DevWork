const EventEmitter = require('node:events');

// create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

// Init event
myEmitter.emit('event');