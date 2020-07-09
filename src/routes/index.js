var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { categorys } = require('../controllers/indexController');
let authMiddlewares = require('../middlewares/authMiddleware');
const middlewaresFunctions = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', indexController.store )

router.get('/products', indexController.products)

router.get('/products/category', indexController.productsCategory)

router.get('/products/detail/:productId', indexController.productsDetail)

router.get('/products/create', indexController.createGet)
router.post('/products/create', indexController.create)

router.get('/products/edit/:productId', indexController.edit)
router.put('/products/edit/:productId', indexController.update)

 router.delete('/products/delete/:productId', indexController.deleteProduct); 



router.get('/cart',middlewaresFunctions.loginMiddleware, indexController.cart)











////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
router.get('/local', indexController.locals)
////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////



module.exports = router;
