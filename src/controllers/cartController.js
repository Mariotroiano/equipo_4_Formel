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
    form : (req, res, next)=>{
        res.render('addressesForm')
    },

    userAdresses : (req, res, next)=>{
        let user = req.session.user
        console.log(req.body, user.id)

        db.Address.create({
            ...req.body,
            user_id : user.id
        })
        .then(address =>{
            res.redirect('/')
        })
        .catch(err =>{
            console.log(err)
            res.send('no se pudo guardar la direccion')
        })
    },

    prueba: (req, res, next)=>{
        let user = req.session.user
        let cart = req.session.cart

        db.User.findByPk( user.id,{
            include : [{association : 'Address'}]
        })                     
        .then(user=>{
         
            db.Cart.create({
                total : cart.totalPrice,
                shipping_address_id : user.Address[0].id,
                user_id : user.id
            })
            .then(cart =>{
                res.redirect('/')
            })
            .catch(err=>{
                console.log(err)
                res.send('no se pudo guardar el carrito')
            })
        })    
        .catch(err=>{
            console.log(err)
            res.send('no se encontro el usuario con su direccion')
        })
    },

    prueba2 : (req, res, next)=>{
        // db.Cart.findAll({
        //     include : [{association : 'cartProduct'},{association : 'User'}, {association : 'Adress'} ]
        // })
        // .then(carts=>{
        //     res.json(carts)
        // })

        db.Product.findAll({
            include : [{association : 'cartProduct'} ]
        })
        .then(carts=>{
            res.json(carts)
        })
    }
    
}

module.exports = cartFunctions



