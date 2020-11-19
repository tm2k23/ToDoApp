/* ********************************************************
***********************************************************
this is the / routes controller i.e. home page route controller
its export in used in index.js router file
***********************************************************
************************************************************/

// requiring the model bcz, it is required here to display tasks in the database
const ToDoList = require('../models/todolist.js');


module.exports.home = function(req, res) {
    // fetching all the tasks in database
    ToDoList.find({}, function(err, taskstodo) {
        if (err) {
            console.log('error in fetching the database');
            return;
        }
        return res.render('index', {
            tasks: taskstodo // initialising the locals
        })
    })
};