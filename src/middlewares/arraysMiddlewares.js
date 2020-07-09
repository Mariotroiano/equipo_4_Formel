let products = require('../data/products.json');

function propertysNoRepeat (array){
    arrayNoRepeat = []
    array.forEach(element =>{
        if(!arrayNoRepeat.includes(element.category)){
            arrayNoRepeat.push(element.category)
        }
    });
    return arrayNoRepeat.sort()
}


   function productsForCategorys  (req, res){
        let productsCategorys = products.filter(product => product.category)
        // let productsCategorys = propertysNoRepeat(categorys)
        
      return productsCategorys
     
    }


module.exports = productsForCategorys