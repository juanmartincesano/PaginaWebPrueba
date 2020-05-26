var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('allProducts');
});

module.exports = router;
