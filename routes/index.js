var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { categorys } = require('../controllers/indexController');
let authMiddlewares = require('../middlewares/authMiddleware');
const middlewaresFunctions = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', indexController.store )

router.get('/cart',middlewaresFunctions.loginMiddleware, indexController.cart)

router.get('/products', indexController.products)
router.get('/products/detail', indexController.productsDetail)








////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
router.get('/local', indexController.locals)
////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////



module.exports = router;
