const fs = require('node:fs');
const path = require('node:path');

// create folder
// fs.mkdir(path.join(__dirname, '/meter'), {}, err => {
//     if(err) throw err;
//     console.log("Folder is created....")
// });


// create a write file
// fs.writeFile(path.join(__dirname, '/test', 'docmentation.txt'), 'we put necessary documantion here manually.',
//     err => {
//         if (err) throw err;
//         console.log("File is created....")
//     }
// );

/*a way to append in this file*/
// fs.writeFile(path.join(__dirname, '/test', 'docmentation.txt'), 'we put necessary documantion here manually.', 
//     err => {
//         if(err) throw err;

//         fs.appendFile(path.join(__dirname, '/test', 'documentation.txt'),'when we send some a nodo code folder we alwayes delete node_modeule file', (err) => {
//             if(err) throw err;
//             console.log("file is updated...");
//         });    
//     }
// );

// append content in already created file
// fs.appendFile(path.join(__dirname, '/test', 'docmentation.txt'), '/n Because when run cmd node init this folder dowanloaded automaticaly.', (err) => {
//     if (err) throw err;
//     console.log("file is updated...");
// });

// read file

// fs.readFile(path.join(__dirname, '/test', 'documentation.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename File

fs.rename(
    path.join(__dirname, '/test', 'docmentation.txt'),
    path.join(__dirname, '/test', 'miDocmentation.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed...');
    }
);