var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/home2', mainController.main2);
router.get('/home3/:?nombre', mainController.main2);
