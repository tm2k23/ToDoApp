/* ********************************************************
***********************************************************
this is to establish connection between mongoose and mongodb
***********************************************************
************************************************************/

const mongoose = require('mongoose'); // require mongoose
mongoose.connect('mongodb://localhost/todolist_db'); // connect mongoose to the database

// verifying if the connection is established or not

const db = mongoose.connection; // now this db is the connection betweendatabase and mongoose
db.on('error', console.error.bind(console, 'Error in connection to database')); // if there is an error
db.once('open', function() {
    // on successful connection to database
    console.log('Successfully connected to database');
})