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
    return arrayNoRepeat
}
// esta funcion borra las categorias dupicadas //

let indexFunctions = {
    
    store : (req, res) => {
        let categorys = products.filter(product => product.category)
        let productsCategorys = propertysNoRepeat(categorys)
        res.render('index', {productsCategorys : productsCategorys})  
    },
    
    
    
    cart : (req, res) => {
        res.render('cart-detail');
    },
    
    locals : (req, res) => {
        res.render('locals');
    },
    
    
}



module.exports = indexFunctions;