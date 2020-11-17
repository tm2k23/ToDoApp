const express = require('express'); // to use the express module

const app = express(); // now app contain all the functionalities of express

const port = 8000; // defining the port

//setting up the view engine
app.set('view engine', 'ejs'); // defining the view engine
app.set('views', './views'); // setting the views path

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