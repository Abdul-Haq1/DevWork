const { error } = require('console')
const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.listen(3000, () => {
    console.log("server running on 3000")
})

// we are using ---ejs--- templating engine
app.set('view engine', 'ejs')

// get all the stactic files like ----css, javascript ---- using middleware
app.use(express.static('public'))

// middleware to get the data from form 
app.use(express.urlencoded({ extended: true }))


// connceting mongodb Server
MONGO_URI = 'mongodb+srv://omeon:omeon@merncluster.eqkfofh.mongodb.net/'
MongoClient.connect(MONGO_URI).then(client => {
    const db = client.db("to-do-app")
    const taskCollection = db.collection('tasks')






    // put the data in database
    app.post('/task', (req, res) => {
        taskCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
    })

    // get all the data stored in web page
    app.get('/', (req, res) => {
        taskCollection
            .find()
            .toArray()
            .then(results => {
                res.render('index.ejs', { tasks: results })
            }).catch(err => console.log(err))

    })

    // update method
    app.put('/update-task', (req, res) => {
        let { id, task } = req.body
        console.log(id, task)
    })

}
).catch(err => console.error(err))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'view', 'index.html'))
// })



