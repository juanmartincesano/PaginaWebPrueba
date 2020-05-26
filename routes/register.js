var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

module.exports = router;
