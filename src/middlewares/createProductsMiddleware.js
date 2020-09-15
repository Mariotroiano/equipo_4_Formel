let {check, body, validationResult}  = require('express-validator');

module.exports = [
    check('name').isLength({min : 1}).withMessage('El producto debe tener un nombre'), 
    check('price').isLength({min : 1}).withMessage('El producto debe tener un precio'),     
    check('description').isLength({min : 1}).withMessage('El producto debe tener una descripción'), 
]