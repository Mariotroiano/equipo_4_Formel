let {check, body, validationResult}  = require('express-validator');

module.exports = [
    check('first_name').isLength({min : 1}).withMessage('el nombre no puede estar vacio'), 
    check('last_name').isLength({min : 1}).withMessage('el apellido no puede estar vacio'), 

    check('email').isEmail().withMessage('El email debe ser un email valido'),
    check('password').isLength({min : 5, max : 15}).withMessage('la contraseña debe tener mas de 5 caracteres y menos de 15'),
    // falta verificar confirmacion de contraseña//
   
    // body('confirmPassword').equals(body.password).withMessage('verifique que su confirmacion y contraseña coincidan'),   
    // body('password').isLength({ min: 5 }).withMessage('la contraseña debe tener mas de 5 caracteres'), 
      
    
]