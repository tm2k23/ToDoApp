const { urlencoded } = require('body-parser');
const express = require('express'); // to use the express module

const app = express(); // now app contain all the functionalities of express

const port = 8000; // defining the port

const db = require('./config/mongoose'); // requiring the config b/w mongo and mongodb

/* // const ToDoList = require('../models/todolist.js'); // requiring the model 
// commented the above line , bcz I wont require that database here 
// I will need that in controller, so these models are required there */

//setting up the view engine
app.set('view engine', 'ejs'); // defining the view engine
app.set('views', './views'); // setting the views path

app.use(express.static('assets')); // middleware for static files
app.use(express.urlencoded()); //  middleware

app.use('/', require('./routes/index')); // defining the router

// listening to the port 8000
app.listen(port, function(err) {
    // on error
    if (err) {
        console.log(`error in starting the server : ${err}`);
    }

    // on successful starting of the server
    else {
        console.log(`Server running at port : ${port}`);
    }
});