var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');


let uploadMiddleware = require('../middlewares/uploadMiddleware')
let validationProductMiddleware = require('../middlewares/createProductsMiddleware')
var upload = uploadMiddleware('public/images/products')

/* GET home page. */
router.get('/', indexController.store )
router.get('/email/form', indexController.form )
router.post('/email/send', indexController.send )



router.get('/products', indexController.products)


router.get('/products/category/:categoryId', indexController.category)

router.get('/products/create', indexController.createGet)
router.post('/products',[upload.any(), validationProductMiddleware], indexController.create)

router.get('/products/search', indexController.search)
router.post('/products/search/name', indexController.show)


router.get('/products/:productId', indexController.productsDetail)

router.get('/products/:productId/edit', indexController.edit)
router.put('/products/:productId', indexController.update)

router.delete('/products/:productId', indexController.delete); 



 ////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
 router.get('/local', indexController.stores)
 router.get('/info', indexController.info)
 router.get('/conditions', indexController.conditions)
 router.get('/questions', indexController.questions)



 ////////// esta ruta no sirve para nada es para probar el mapa de google maps/////////
 module.exports = router;
