var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJs Express', scripts: ['/javascripts/global.js','http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'] });
});

module.exports = router;
