const fs = require('fs')
let path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let Cart = require('../custom-functions/cart')

function writeJson(file, arr){
    fs.writeFileSync(file, JSON.stringify(arr), 'utf8');
}

let indexFunctions = {
    
    store : (req, res, next) => {     
              
        let offerProducts = products.filter(product => product.price <= 1200)
        res.render('index', {user : req.session.user, notPermission : req.session.notPermission, succesMsg : req.session.succesMsg, registered : req.session.registered,offerProducts})  
    },
    
    products : (req, res, next)=>{        
        res.render('products', {products : products})
    },
    
    productsDetail : (req, res, next)=>{
        let productId = products.find(product => product.id == req.params.productId)       
        res.render('products-detail', {productId : productId})
    },
    
    createGet : (req, res, next)=>{
        res.render('products-create')
    },
    
    create : (req, res, next)=>{        
        let position = products.length + 2
        let product = {
            ...req.body,
            id : position,
            image : req.files[0].filename            
        }        
        
        products.push(product)
        
        writeJson(productsFilePath, products)       
        res.redirect('/products/create') 
    },
    
    edit : (req, res, next)=> {
        let productToEdit = products.filter(product => product.id == req.params.productId)
        res.render('products-edit', {productToEdit : productToEdit})
    },
    
    update : (req, res, next)=> {        
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
    
    delete : (req, res, next) => {
        let productDelete = products.filter(product => product.id != req.params.productId)        
        writeJson(productsFilePath, productDelete )        
        res.redirect('/products')
    },
    
    
    
    addProduct : (req, res, next)=>{
        let productId = req.params.productId;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        
        let product = products.find(item => item.id == productId)
        
        cart.add(product, product.id);            
        req.session.cart = cart;      
        res.redirect('/products');
    },
    
    remove : (req, res, next)=>{
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        
        cart.remove(productId);
        req.session.cart = cart;
        res.redirect('/cart');
    },
    
    detailCart : (req, res, next) => {        
        if (!req.session.cart) {
            res.render('cart', {
                products: null
            });
        }
        var cart = new Cart(req.session.cart);
        res.render('cart', {              
            products: cart.getItems(),
            totalPrice: cart.totalPrice
        });
        
    },
    
    stores : (req, res, next) => {
        res.render('locals');
    },
    
}

module.exports = indexFunctions;