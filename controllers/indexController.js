const fs = require('fs')
let products = require('../data/products.json')
function readJson(file){
    return  fs.readFileSync(file, {encoding : 'utf-8'})
}
// esta funcion borra las categorias dupicadas //
function propertysNoRepeat (array){
    arrayNoRepeat = []
    array.forEach(element =>{
        if(!arrayNoRepeat.includes(element.category)){
            arrayNoRepeat.push(element.category)
        }
    });
    return arrayNoRepeat.sort()
}
// esta funcion borra las categorias dupicadas //

let indexFunctions = {
    
    store : (req, res) => {
        let categorys = products.filter(product => product.category)
        let productsCategorys = propertysNoRepeat(categorys)
        
        res.render('index', {productsCategorys : productsCategorys, user : req.session.user, loginError : req.session.loginError})  
    },
    
    
    
    cart : (req, res) => {
        res.render('cart-detail');
    },
    
    locals : (req, res) => {
        res.render('locals');
    },
  
    products : (req, res)=>{
        res.render('products')
    },
    
    productsDetail : (req, res)=>{
      res.render('products-detail')
    },
    
    create : (req, res)=>{
        res.render('products-create')
    }

}



module.exports = indexFunctions;