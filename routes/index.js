var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { categorys } = require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.store )

router.get('/cart', indexController.cart)





////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
router.get('/local', indexController.locals)
////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////



module.exports = router;
