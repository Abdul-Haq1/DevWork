const os = require('node:os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch())

// cpu core Info
// console.log(os.cpus());

// free memeory
console.log(os.freemem())

// total memeory
console.log(os.totalmem());

// Home dir
console.log(os.homedir())

// Uptime
console.log(os.uptime());