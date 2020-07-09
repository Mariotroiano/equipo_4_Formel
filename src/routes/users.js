var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
/* GET users listing. */
router.get('/register', userController.getRegister)
router.post('/register', userController.register)

router.get('/login', userController.getLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

module.exports = router;
