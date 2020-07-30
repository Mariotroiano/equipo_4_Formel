
let db = require('../db/models');

 function getCategorys(req, res, next){
    db.Product_category.findAll()
    .then(categorys =>{        
        res.locals.categorys = categorys       
        next()
    })
    .catch(err =>{
        console.log(err);
        res.send('ocurrio un error')
    })    

}

module.exports = getCategorys