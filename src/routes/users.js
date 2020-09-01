var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
let registerMiddleware = require('../middlewares/registerMiddleware');
let uploadMiddleware = require('../middlewares/uploadMiddleware');
let registerPermissionMiddleware = require('../middlewares/registerPermission');
let userPermissionMiddleware = require('../middlewares/userPermissionMiddleware');
var upload = uploadMiddleware('public/images/users');
let editUserMiddleware = require('../middlewares/editUserMiddleware')

/* GET users listing. */
router.get('/register',registerPermissionMiddleware, userController.getRegister)
router.post('/register',[upload.any(), registerMiddleware], userController.register)

router.get('/login', userController.getLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/profile',userPermissionMiddleware, userController.profile)

router.get('/:userId', userController.edit)

router.put('/:userId', editUserMiddleware, userController.update)
router.delete('/:userId',userController.delete)


module.exports = router;
