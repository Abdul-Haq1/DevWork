const Logger = require('./logger');

const logger = new Logger()

logger.on('message', data => console.log('called listener', data));

logger.log("hello world");
logger.log("world");
logger.log("hello");
