let db = require('../db/models')
const Op = db.Sequelize.Op
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
  
  // body('email').custom((value) => {
  //  db.User.findOne({
  //     where : {
  //       email : {
  //         [Op.eq] : value
  //       }
  //     }
  //   })
  //   .then(function(user){
  //     if(user){
  //       throw new Error ('el email esta en uso ');
  //      }
  //     return true

  //   })
    
  // }),
  
 
  
]

    // body('image').custom((value) => {   
    //     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ' + value.files) 
    //      if (!value) {
    //         throw new Error ('debe subir alguna foto');
    //      }
    //      return true
    // }),
    
