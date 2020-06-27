var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
/* GET home page. */
router.get('/', indexController.store)

////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
router.get('/local', indexController.locals)
////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////

router.get('/cart', indexController.cart)


module.exports = router;
