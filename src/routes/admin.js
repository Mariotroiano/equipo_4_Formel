let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController')

router.get('/', adminController.info)

module.exports = router