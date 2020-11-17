/* ********************************************************
***********************************************************
this is the /delete routes controller i.e. when we delete the task
its export in used in delete.js router file
***********************************************************
************************************************************/

module.exports.delete = function(req, res) {
    return res.end('<h1> u reached this page because u deleted a task</h1>');
};