/* ********************************************************
***********************************************************
        here we define the schema of the database 
***********************************************************
************************************************************/

const mongoose = require("mongoose"); // require mongoose

// define the schema
const todoSchema = new mongoose.Schema({
    // this is the description of the todo task
    description: {
        type: String,
        required: true
    },
    // this is the category of the todo task
    category: {
        type: String,
        required: true
    },
    // this is the due date of todo task
    dueDate: {
        type: Date,
        required: true
    }
});
const ToDo = mongoose.model('ToDo', todoSchema); // creating model with todoSchema as the schema
module.exports = ToDo;