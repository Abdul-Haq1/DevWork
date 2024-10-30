const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose')

const app = express();

// Load envirment varibale from env file
dotenv.config()

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ******************middlewares**********************

// setup template engine  for rendering ejs pages
app.set('view engine', 'ejs')

// body-parser middleware get the data from req.body 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// ******************Database Connenction*************

// mongoose.connect(MONGO_URI)
// const db = mongoose.connection
// db.once('open', _ => {
//     console.log('database connected', MONGO_URI)
// })
// db.on('error', err => {
//     console.error('connection error', err)
// })



var task = ["buy shocks", "practise with nodejs"];

// post route for adding new task
app.post('/addtask', (req, res) => {
    let newTask = req.body.newTask;

    // adding this new task to the array
    task.push(newTask);

    // go back to root route
    res.redirect("/")
});

//the completed task array with initial placeholders for removed task
var complete = ["finish jquery"];
app.post("/removetask", function (req, res) {
    var completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exist in the task when checked, then remove using the array splice method
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});



// get request to get data fro, server
app.get('/', (req, res) => {
    res.render('index', { task: task, complete: complete });
});


app.listen(PORT, () => {
    console.log('Listing ON ' + PORT)
})