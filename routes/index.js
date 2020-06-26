var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/local', function(req, res, next) {
  res.render('locals');
});
 

router.get('/cart', function(req, res, next) {
   res.render('cart-detail');
  
});

module.exports = router;
