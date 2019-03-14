
var express = require('express');
var router = express.Router();

const dataRouter = require('../data/data.json');

/* GET HOME PAGE. */
router.get('/', function(req, res, next) {

  res.render('index', { title : 'CV', data : dataRouter });
  console.log(dataRouter);
});

/* JSON DATA. */
router.get('/data', function(req, res, next) {
  res.json(dataRouter);
});


module.exports = router;
