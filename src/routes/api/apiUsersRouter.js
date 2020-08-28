let express = require('express');
let router = express.Router();
let usersController = require('../../controllers/api/usersController')

router.get('/', usersController.show)

module.exports = router