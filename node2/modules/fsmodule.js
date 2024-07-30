const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// })

// create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), "whole world is my country", err => {
//         if (err) throw err;
//         console.log('File written to >>>>')
//     }
// );

// Append in already created file 
// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     "I doing but I don't want to do it",
//     err => {
//         if (err) throw err;
//         console.log('Files written to hello file...')
//     }
// );

// create and append in file simultaneously
// fs.writeFile(
//     path.join(__dirname, '/test', 'text.txt'),
//     "hello world",
//     err => {
//         if (err) throw err;
//         console.log('File is written to.........')

//         // append in file
//         fs.appendFile(
//             path.join(__dirname, '/test', 'text.txt'),
//             "\nI love node js",
//             err => {
//                 if (err) throw err;
//                 console.log("Contetnt is appended to text.txt File..........")
//             }
//         )
//     }
// )


// read file from system
// fs.readFile(path.join(__dirname, "/test", 'text.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// reaname a file 
fs.rename(path.join(__dirname, '/test', 'helloWorld.txt'), path.join(__dirname, '/test', 'helloWorld1.txt'), (err) => {
    if (err) throw err;
    console.log("Name is changed successfully");
}
);