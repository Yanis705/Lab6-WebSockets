var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/updatestats', function(req, res, next) {
  res.render('update');
});

module.exports = router;
