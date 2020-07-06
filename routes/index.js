var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { categorys } = require('../controllers/indexController');
let authMiddlewares = require('../middlewares/authMiddleware');
const middlewaresFunctions = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', indexController.store )


router.get('/products', indexController.products)
router.get('/detail', indexController.productsDetail)

router.get('/create', indexController.create)
// router.post('/products/create', indexController.store)

// router.get('/products/edit/:productId', indexController.edit)
// router.put('/products/edit/:productId', indexController.update)

// router.delete('products/delete/:productId', productsController.destroy); 

router.get('/cart',middlewaresFunctions.loginMiddleware, indexController.cart)











////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
router.get('/local', indexController.locals)
////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////



module.exports = router;
