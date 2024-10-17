const path = require('path')
// const fs = require('fs')

const MongoClient = require('mongodb').MongoClient

const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

// ============== middleWares ===================


// middleware use to get input value from form
app.use(express.urlencoded({ extended: true }))

// ===================>
// setup static folder (middleware) to get rid of ***** app.get() ***** method. 
// to handle all static pages

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'))
// })

app.use(express.static(path.join(__dirname, 'public')))





app.post('/quotes', (req, res) => {
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})



