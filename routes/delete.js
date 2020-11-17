/* ********************************************************
***********************************************************
this is the delete router .... 
on hitting the router /delete , 
index router will direct to this router (line 20 21 22)
***********************************************************
************************************************************/

const express = require('express'); // required express
const router = express.Router(); // initialised router

/* Now we need to use the controller for this route 
for that first we need to require the controller */
const deleteTask = require('../controllers/delete.js'); // requiring the controller for this route
router.get('/', deleteTask.delete); // using the controller 
/* In the above controller I have used only "/" 
because it already comes here after using its route address /delete and only "/" is left in the route
because delete of the route is already used in index route file */

module.exports = router; // export is used in index.js router file