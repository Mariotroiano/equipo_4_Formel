let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController')

router.get('/', adminController.info)

router.get('/create', adminController.create)
router.post('/add', adminController.add)
router.get('/edit/:categoryId', adminController.edit)
router.put('/:categoryId', adminController.update)
router.delete('/:categoryId', adminController.delete)



router.get('/create/color', adminController.createColor)
router.post('/add/color', adminController.addColor)
router.get('/edit/color/:colorId', adminController.editColor)
router.put('/color/:colorId', adminController.updateColor)
router.delete('/color/:colorId', adminController.deleteColor)


router.get('/create/size', adminController.createSize)
router.post('/add/size', adminController.addSize)
router.get('/edit/size/:sizeId', adminController.editSize)
router.put('/size/:sizeId', adminController.updateSize)
router.delete('/size/:sizeId', adminController.deleteSize)
module.exports = router