var express = require('express');
var router = express.Router();
let userPermissionMiddleware = require('../middlewares/userPermissionMiddleware');
const cartController = require('../controllers/cartController');

router.get('/',userPermissionMiddleware, cartController.detailCart)
router.get('/add/:productId', cartController.addProduct)
router.get('/remove/:productId', cartController.remove); 


module.exports = router