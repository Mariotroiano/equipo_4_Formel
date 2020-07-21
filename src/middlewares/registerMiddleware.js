let {check, body, validationResult}  = require('express-validator');

module.exports = [
    check('first_name').isLength({min : 1}).withMessage('el nombre no puede estar vacio'), 
    check('last_name').isLength({min : 1}).withMessage('el apellido no puede estar vacio'), 

    check('email').isEmail().withMessage('El email debe ser un email valido'),
    check('password').isLength({min : 5, max : 15}).withMessage('la contraseña debe tener mas de 5 caracteres y menos de 15'),
    // body('confirmPassword').custom((value, { req }) => {
    //     console.log(req)
    //     console.log("la contraseña essssssssssssssssssss " + req.body.password)
    //     console.log("la confirmacion de la contra essssssssssssssssssss " + req.body.confirmPassword)


    //     if (value != req.body.password) {
    //       throw new Error('verifique que su confirmacion y contraseña coincidan');
    //     }
    // })
    
    
]
// Promise.reject('verifique que su confirmacion y contraseña coincidan');