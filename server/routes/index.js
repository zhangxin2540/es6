var express = require('express');
var mockjs= require('mock');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: 'Express' 
    });
});
var maskIssue = function(){
    var date = new Date();
}
module.exports = router;
