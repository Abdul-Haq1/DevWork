const EventEmitter = require('events')

// create class
class MyEmitter extends EventEmitter { }

// init object "Initializing event emitter instances "
const myEmmiter = new MyEmitter();

// Event listener "Registering to myEvent"
myEmmiter.on('event', () => console.log('Event Fired!'));

// triggring my event
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');