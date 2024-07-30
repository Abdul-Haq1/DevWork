const path = require('path');

// basefile name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension 
console.log(path.extname(__filename))

// create path object (parse path)
console.log(path.parse(__filename));
// get file name by parsing path object
console.log(path.parse(__filename).base);

// concatinate path by using join function
console.log((path.join(__dirname, 'test', 'windjets.html')))