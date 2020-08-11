let db = require('../db/models')
const Op = db.Sequelize.Op
let {check, body, validationResult}  = require('express-validator');

module.exports = [
  check('first_name').isLength({min : 1}).withMessage('El nombre no puede estar vacio'), 
  check('last_name').isLength({min : 1}).withMessage('El apellido no puede estar vacio'), 
  
  check('email').isEmail().withMessage('El email debe ser un email valido'),
  check('password').isLength({min : 5, max : 15}).withMessage('La contraseña debe tener mas de 5 caracteres y menos de 15'),
  body('confirmPassword').custom((value, { req }) => {    
    if (value != req.body.password) {
      throw new Error ('Verifique que su confirmacion y contraseña coincidan');
    }
    return true
  }),
  
  body('email').custom((value) => {
  return db.User.findOne({
      where : {
        email : {
          [Op.eq] : value
        }
      }
    })

    .then(function(user){
      if (user) {
        return Promise.reject('El email ya esta en uso');
      }
    })
    

    

  }),
  
 
]
