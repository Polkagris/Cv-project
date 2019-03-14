
var express = require('express');
var router = express.Router();

const dataRouter = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OK' });
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.json(dataRouter);
});


module.exports = router;
