const express = require('express');
const path = require('node:path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');


const app = express();

// body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engines', 'handlers');

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!</h1>');
    
//     // send a file
//     // res.sendFile(path.join(__dirname, 'public','index.html'));
// });



// init middleware (run when you do request to server)
// app.use(logger);



// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// member api route
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));