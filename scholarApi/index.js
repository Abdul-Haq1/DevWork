const path = require('path');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient


const express = require('express');
const app = express()

// Loat enviorment variable from .env file
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;



// connect to mongodb server by using mongoose
// mongoose.connect(MONGO_URI).then(() => {
//     console.log("database is connected successfully,");
// })



// ============== middleWares ===================

// ===================>
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


// ===================>
// setup middleware for ejs view engine 
// for rendering api output
app.set('view engine', 'ejs')


// ===================>
// express JSON middleware to accept JSON data
app.use(express.json())



// ============== mongoDB CONNECtion ===================
// by using mongodb
MongoClient.connect(MONGO_URI).then(
    client => {
        const db = client.db('scholar-details')
        const schloarCollection = db.collection('schloarDeatils')

        app.post('/quotes', (req, res) => {
            schloarCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                }
                )
        });

        app.get('/', (req, res) => {
            db.collection('schloarDeatils')
                .find()
                .toArray()
                .then(results => {
                    res.render('index.ejs', { schloarDeatils: results })
                }
                ).catch((error) => console.log(error))
        });

        app.put('/quotes', (req, res) => {
            schloarCollection
                .findOneAndUpdate({ name: 'Late Ilyas Kandhlawi' },
                    {
                        $set: {
                            name: req.body.name,
                            bornIn: req.body.bornIn,
                            age: req.body.age,
                        }
                    },
                    {
                        upsert: true,
                    }
                )
                .then(result => {
                    res.json('success')
                }).catch(err => console.error(err))
        })


        app.delete('/quotes', (req, res) => {
            schloarCollection
                .deleteOne({ name: req.body.name })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No information to delete')
                    }
                    res.json(`Deleted Late Syed Abul Hasan Ali Hasani Nadw (Ali Miyan) details`)
                })
                .catch(error => console.error(error))
        })
    }
).catch((error) => console.log(error))




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})






