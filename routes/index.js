
var express = require('express');
var router = express.Router();

const data = require('../data/data.json');

/* GET HOME PAGE. */
router.get('/', function(req, res, next) {
  res.render('index', { title : 'Hello World!', data : data });
});

/* GET HOME PAGE. */
router.get('/portfolio', function(req, res, next) {

  res.render('portfolio', { data : data });
});

/* GET HOME PAGE. */
router.get('/about', function(req, res, next) {
  
  res.render('about', { data : data });
});


/* JSON DATA. */
router.get('/data', function(req, res, next) {
  res.json(dataRouter);

});


module.exports = router;
