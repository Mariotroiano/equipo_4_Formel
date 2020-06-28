const fs = require('fs')
let products = require('../data/products.json')
function readJson(file){
  return  fs.readFileSync(file, {encoding : 'utf-8'})
}

let indexFunctions = {

store : (req, res) => {
    // let productsCategorys = products.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
     let productsCategorys = products.filter(product => product.category)
    // console.log(productsCategorys)
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