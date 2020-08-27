let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController')

router.get('/', adminController.info)

router.get('/create', adminController.create)
router.post('/add', adminController.add)

router.get('/edit/:categoryId', adminController.edit)
router.put('/:categoryId', adminController.update)

router.delete('/:categoryId', adminController.delete)




module.exports = router