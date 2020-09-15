
let db = require('../db/models');

 async function getCategorys(req, res, next){
   let categorys = await db.Product_category.findAll()
   let colors = await db.Color.findAll()
   let sizes = await db.Size.findAll()
    try{
        res.locals.categorys = categorys
        res.locals.colors = colors       
        res.locals.sizes = sizes    
        next()
    }
    catch(error){
        console.log(error)
        res.send('ocurrio un error')

    }
    

}

module.exports = getCategorys