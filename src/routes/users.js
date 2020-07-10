var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
let registerMiddleware = require('../middlewares/registerMiddleware')
/* GET users listing. */
router.get('/register', userController.getRegister)
router.post('/register',registerMiddleware, userController.register)

router.get('/login', userController.getLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

module.exports = router;
