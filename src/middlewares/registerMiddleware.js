const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


let {check, body, validationResult}  = require('express-validator');

module.exports = [
    check('first_name').isLength({min : 1}).withMessage('el nombre no puede estar vacio'), 
    check('last_name').isLength({min : 1}).withMessage('el apellido no puede estar vacio'), 

    check('email').isEmail().withMessage('El email debe ser un email valido'),
    check('password').isLength({min : 5, max : 15}).withMessage('la contraseña debe tener mas de 5 caracteres y menos de 15'),
    body('confirmPassword').custom((value, { req }) => {    
        if (value != req.body.password) {
           throw new Error ('verifique que su confirmacion y contraseña coincidan');
        }
        return true
    }),

    body('email').custom((value) => {
       
        let user = users.find(user => {
          return  user.email == value
        }) 
         if(user){
           throw new Error ('El email ya esta en uso');
         }
        return true
    }),

    // body('image').custom((value) => {   
    //     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ' + value.files) 
    //      if (!value) {
    //         throw new Error ('debe subir alguna foto');
    //      }
    //      return true
    // }),
    
]