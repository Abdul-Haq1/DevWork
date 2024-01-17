const path = require('path');

// Base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

// file Extension
console.log(path.extname(__filename));

// path Object
console.log(path.parse(__filename));
// we can access all the elements by using object accessingmethods

// coancatenates path
console.log(path.join(__dirname, 'test', 'hello.html'))