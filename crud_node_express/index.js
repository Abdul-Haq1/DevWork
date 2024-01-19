const express = require('express');
const path = require('node:path');

const app = express();

app.get('/', (req, res)=>{

    // res.send(`<h1>Hello World!</h1> ${path.join(__dirname, 'public', 'index.html')}`);
    
    // Used to find a file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));