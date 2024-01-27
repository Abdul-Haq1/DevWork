const express = require('express');
const path = require('node:path');
const MongoClient = require('mongodb').MongoClient

// do not need in express version above version 4.
const bodyParser = require('body-parser')

const app = express();



// middleware
// Make sure you place body-parser before CRUD HANDLERS!
// In Old version
// app.use(bodyParser.urlencoded({extended: true}))
/*in modern express we don not need body parser because it's in build-in 
 body parser Middleware*/
app.use(express.urlencoded({extended: true}))
app.use(express.json());



// crud methods
app.get('/', (req, res)=>{
    // res.send(`<h1>Hello World!</h1> ${path.join(__dirname, 'public', 'index.html')}`);
    
    // Used to find a file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/quotes', (req, res) => {
    const {name, quote} = req.body;
    // res.send(req.body)
    res.send(`Received form submission! Name: ${name}, Quote: ${quote}`);
})




// connect Database
MongoClient.connect('mongodb+srv://omeonomeon:Omeon@123@cluster0.bawbccr.mongodb.net/', (err, client) => {
    //check connection

    if(err) return console.error(err)
    console.log('Connected to Database')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));