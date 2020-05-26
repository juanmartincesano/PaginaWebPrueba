var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('carrito');
});

module.exports = router;
