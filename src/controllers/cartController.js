let db = require('../db/models');
const Op = db.Sequelize.Op
let Cart = require('../custom-functions/cart')

let cartFunctions = {
    addProduct : (req, res, next)=>{       
        var cart = new Cart(req.session.cart ? req.session.cart : {});    
        db.Product.findByPk(req.params.productId) 
        .then(product =>{
            cart.add(product, product.id);         
            req.session.cart = cart;      
            res.redirect('/products');
            // res.json(cart)
        })   
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })
        
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
     
    remove : (req, res, next)=>{        
        var cart = new Cart(req.session.cart ? req.session.cart : {});        
        cart.remove(req.params.productId);
        req.session.cart = cart;
        res.redirect('/cart');
    },
    
    
}

module.exports = cartFunctions



