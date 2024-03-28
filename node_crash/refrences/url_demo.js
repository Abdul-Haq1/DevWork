const url = require('node:url');

const myUrl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

// serlized url
// console.log(myUrl.href);
// console.log(myUrl.toString())

// Host (root domain) and
// console.log(myUrl.host);

// // hostname
// console.log(myUrl.hostname);
// console.log(myUrl.password, myUrl.username)

// // pathname
// console.log(myUrl.pathname)

// // searched Query
// console.log(myUrl.search)
// console.log(myUrl.query)

// search params object
// console.log(myUrl.searchParams)

// add params
// myUrl.searchParams.append('abc', '123');
// console.log(myUrl.searchParams);

// // Loop through

// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));