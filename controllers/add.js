/* ********************************************************
***********************************************************
this is the /add routes controller i.e. when we add the task
its export in used in add.js router file
***********************************************************
************************************************************/

// requiring the model bcz, it is required here to add task to the database
const ToDoList = require('../models/todolist.js');

module.exports.add = function(req, res) {
    console.log(typeof(req.query.dueDate));

    // adding the task to database
    ToDoList.create(req.query, function(err, newTask) {
        if (err) {
            console.log('Error in adding the task');
            return;
        }
        // console.log('new added task is ', newTask)
        return res.redirect('back');
    })

};