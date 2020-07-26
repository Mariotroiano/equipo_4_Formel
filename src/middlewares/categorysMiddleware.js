const fs = require('fs')
let path = require('path');
const { runInNewContext } = require('vm');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
 function getCategorys(req, res, next){
  
   
    let categorys = products.filter(product => product.category)
    let productsCategorys = propertysNoRepeat(categorys)
 
    next()
}

module.exports = getCategorys