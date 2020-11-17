/* ********************************************************
***********************************************************
this is the / routes controller i.e. home page route controller
its export in used in index.js router file
***********************************************************
************************************************************/


module.exports.home = function(req, res) {
    return res.render('index');
};