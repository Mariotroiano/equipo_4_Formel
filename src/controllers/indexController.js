const fs = require('fs')
let path = require('path');

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let productPruebaFilePath = path.join(__dirname, '../data/pruebasRegistro.json');
let products2 = JSON.parse(fs.readFileSync(productPruebaFilePath, 'utf-8'));

let products = require('../data/products.json');

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
       
        let offerProducts = products.filter(product => product.price <= 1200)
        res.render('index', { user : req.session.user, loginError : req.session.loginError, offerProducts})  
    },
    
    
    
    cart : (req, res) => {
        res.render('cart-detail');
    },
    
    locals : (req, res) => {
        res.render('locals');
    },

    products : (req, res)=>{
        
        res.render('products', {products : products})
    },
  
    productsCategory : (req, res)=>{
        res.render('products-category')
    },
    
    productsDetail : (req, res)=>{
        let productId = products.filter(product => product.id == req.params.productId)
		res.render('products-detail', {productId : productId})
    },
    
    createGet : (req, res)=>{
        res.render('products-create')
    },

    create : (req, res)=>{
        let product = {
           ...req.body
        }

        console.log(product)
        products2.push(product)

        fs.writeFileSync(productPruebaFilePath, JSON.stringify(products2))
        res.redirect('/products/create') 
    },

    edit : (req, res)=> {
        let productToEdit = products.filter(product => product.id == req.params.productId)
        res.render('products-edit', {productToEdit : productToEdit})
    },

    update : (req, res)=> {
       

    },

    deleteProduct : (req, res) => {
		let productDelete = products.filter(product => product.id != req.params.productId)
		
		fs.writeFileSync('products.json', JSON.stringify(productDelete), 'utf8');
		res.redirect('/products')
	}
}



module.exports = indexFunctions;