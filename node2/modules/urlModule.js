const url = require('url')

const myUrl = new URL("https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu")

// serilziec URL
// console.log(myUrl.href);
// console.log(myUrl.toString());


// HOst (root name) (root domin)
// console.log(myUrl.host)

// HostName (does not have port)
// console.log(myUrl.hostname);

// PathName
console.log(myUrl.pathname);

// serlized query
// console.log(myUrl.search)

// params Object
// console.log(myUrl.searchParams);

// Add in search params
// myUrl.searchParams.append('abc', '123');
// console.log(myUrl.searchParams);

//loop through parmas 
myUrl.searchParams.forEach((name, value) => console.log(`${name}: ${value}`));