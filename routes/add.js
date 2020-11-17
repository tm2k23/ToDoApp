/* ********************************************************
***********************************************************
this is the add router .... 
on hitting the router /add , 
index router will direct to this router (line 16 17 18)
***********************************************************
************************************************************/

const express = require('express'); // required express
const router = express.Router(); // initialised router

/* Now we need to use the controller for this route 
for that first we need to require the controller */
const addTask = require('../controllers/add.js'); // requiring the controller for this route
router.get('/', addTask.add); // using the controller
/* In the above controller I have used only "/" 
because it already comes here after using its route address /add and only "/" is left in the route
because add of the route is already used in index route file */

module.exports = router; // export is used in index.js router file