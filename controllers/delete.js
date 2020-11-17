/* ********************************************************
***********************************************************
this is the /delete routes controller i.e. when we delete the task
its export in used in delete.js router file
***********************************************************
************************************************************/

// requiring the model bcz, it is required here to delete task from the database
const ToDoList = require('../models/todolist.js');


module.exports.delete = function(req, res) {
    // console.log(req.query, 'is type of ', typeof(req.query));
    // console.log(req.query.tasksToDelete, 'is type of ', typeof(req.query.tasksToDelete));
    /* 
    
        ****************************    NOTE    *********************************
        Note that, when you select 2 or more tasks then typeof(req.query.tasksToDelete) is object
        When u select only one task to delete then  typeof(req.query.tasksToDelete) is string
        so we need to make seperate case for single deletion 
        if we wont do so , loop will iterate over each letter of the key of the single task 
        and hence will search for them , 
        and the parameter should be a single String of 12 bytes or a string of 24 hex characters
        error will be ::    "Cast to ObjectId failed for value ... "
    
    */
    // single task deletion 
    if (typeof(req.query.tasksToDelete) == "string") {
        ToDoList.findByIdAndDelete(req.query.tasksToDelete, function(err) {
            if (err) {
                console.log('error in deleting the task from database', err);
                return;
            }
        });
        return res.redirect('back');
    }

    // miltiple task deletion
    else {
        for (var i = 0; i < req.query.tasksToDelete.length; i++) {
            req.query.tasksToDelete[i].toString();
            ToDoList.findByIdAndDelete(req.query.tasksToDelete[i], function(err) {
                if (err) {
                    console.log('error in deleting the task from database', err);
                    return;
                }
            });
        }
    }
    return res.redirect('back');
};