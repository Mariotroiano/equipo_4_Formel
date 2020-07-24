var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
let registerMiddleware = require('../middlewares/registerMiddleware')
let uploadMiddleware = require('../middlewares/uploadMiddleware')


let userPermissionMiddleware = require('../middlewares/userPermissionMiddleware');


var upload = uploadMiddleware('public/images/users')
/* GET users listing. */
router.get('/register', userController.getRegister)
router.post('/register',[upload.any(),registerMiddleware], userController.register)

router.get('/login', userController.getLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/profile',userPermissionMiddleware, userController.profile)

router.get('/edit/:userId', userController.edit)

router.put('/edit/:userId',registerMiddleware,userController.update)

module.exports = router;
