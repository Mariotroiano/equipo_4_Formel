var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

let userPermissionMiddleware = require('../middlewares/userPermissionMiddleware');
let uploadMiddleware = require('../middlewares/uploadMiddleware')

var upload = uploadMiddleware('public/images/products')

/* GET home page. */
router.get('/', indexController.store )

router.get('/products', indexController.products)

// router.get('/products/category', indexController.getCategorys)
router.get('/products/create', indexController.createGet)
router.post('/products',upload.any(), indexController.create)

router.get('/products/cart',userPermissionMiddleware, indexController.detailCart)
router.get('/products/add/:productId', indexController.addProduct)
router.get('/products/remove/:productId', indexController.remove); 


router.get('/products/:productId', indexController.productsDetail)

router.get('/products/:productId/edit', indexController.edit)
router.put('/products/:productId', indexController.update)

router.delete('/products/:productId', indexController.delete); 




 ////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
 router.get('/local', indexController.stores)
 ////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
 module.exports = router;
