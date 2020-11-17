/* ********************************************************
***********************************************************
this is the /add routes controller i.e. when we add the task
its export in used in add.js router file
***********************************************************
************************************************************/

module.exports.add = function(req, res) {
    console.log(req.query);
    return res.end('<h1> u reached this page because u added a task</h1>');
};