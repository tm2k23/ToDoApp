/* ********************************************************
***********************************************************
this is the index route file or the basr route , 
all further routes will be directed from here .
***********************************************************
************************************************************/

const express = require('express'); // required express
const router = express.Router(); // initialised router

// this is the base router or the home page route
// first we need to require the controller
const homePageContoller = require('../controllers/home.js'); // requiring the home controller
router.get('/', homePageContoller.home); // using the controller

// this is another router
// this is for the route /add , fot this router , index router will direct to the add.js router file
router.use('/add', require('./add'));

// this is another router
// this is for the route /delete , fot this router , index router will direct to the delete.js router file
router.use('/delete', require('./delete'));


module.exports = router; // export will be used in parent index.js file to define router