const fs = require('fs')
let path = require('path');

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

function writeJson(file, arr){
    fs.writeFileSync(file, JSON.stringify(arr), 'utf8');
}

let indexFunctions = {
    
    store : (req, res) => {
        let categorys = products.filter(product => product.category)
        let productsCategorys = propertysNoRepeat(categorys)
        
        let offerProducts = products.filter(product => product.price <= 1200)
        res.render('index', { user : req.session.user, loginError : req.session.loginError,registered : req.session.registered,offerProducts})  
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
        let position = products.length + 2
        let product = {
            ...req.body,
            id : position,
            image : req.files[0].filename            
        }        
        console.log(product)
        products.push(product)
        
        writeJson(productsFilePath, products)       
        res.redirect('/products/create') 
    },
    
    edit : (req, res)=> {
        let productToEdit = products.filter(product => product.id == req.params.productId)
        res.render('products-edit', {productToEdit : productToEdit})
    },
    
    update : (req, res)=> {        
        let productEdit = products.map(function(product){
            if(product.id == req.params.productId){
                
                return {
                    ...product, ...req.body,
                }
            }
            return product
        });
        writeJson(productsFilePath, productEdit)        
        res.redirect('/products')
    },
    
    delete : (req, res) => {
        let productDelete = products.filter(product => product.id != req.params.productId)
        
        writeJson(productsFilePath, productDelete )        
        res.redirect('/products')
    },
    
    cart : (req, res) => {
        res.render('cart-detail');
    },
    
    locals : (req, res) => {
        res.render('locals');
    },
    
}

module.exports = indexFunctions;