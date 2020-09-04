let express = require('express');
let router = express.Router();
let productsController = require('../../controllers/api/productsController')

router.get('/', productsController.show)
router.get('/categorys', productsController.categorys)
router.get('/lastProduct', productsController.lastProduct)

module.exports = router