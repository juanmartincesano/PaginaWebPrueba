var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
