let db = require('../db/models');
const Op = db.Sequelize.Op
let Cart = require('../custom-functions/cart')
let mp = require('mercadopago');
const { sequelize } = require('../db/models');

mp.configure({
    sandbox: true,
    access_token: process.env.MP_ACCESS_TOKEN
});

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
        
    }, // en el detalle recorro todos los productos del getItems, por cada uno hago un
    // let product = await db.product.findByPk(prod.item.id) if(product.stock > prod.)
    
    remove : (req, res, next)=>{        
        var cart = new Cart(req.session.cart ? req.session.cart : {});        
        cart.remove(req.params.productId);
        req.session.cart = cart;
        res.redirect('/cart');
    },
    form : (req, res, next)=>{
        res.render('addressesForm')
    },
    
    userAdresses :  (req, res, next)=>{
        let user = req.session.user
        let cart = new Cart (req.session.cart)
        let products = cart.getItems()
        let preference = {
            back_urls : {
                success : 'http://localhost:3030/cart/mp'
            },
            items: [
                {
                    title: 'Total',
                    unit_price: cart.totalPrice,
                    quantity: 1,
                }
            ]
        };
        
        db.Address.create({
            ...req.body,
            user_id : user.id
        })
        .then(userAdress=>{           
            
            mp.preferences.create(preference)
            .then(function(response){
                // Crea un objeto de preferencia
                
                // Este valor reemplazará el string "<%= global.id %>" en tu HTML
                global.id = response.body.id;
                res.redirect(response.body.sandbox_init_point)
            })
            .catch(function(error){
                console.log(error);
            });
            
        })                      
        
    },
    mpSucces : async (req, res, next)=>{
        
        
        
        let user = req.session.user
        let cart = new Cart( req.session.cart)
        let products = cart.getItems()
        
        let userAddress = await db.User.findByPk( user.id,{
            include : [{association : 'Address'}]
        })                 
        
        let cartCreated =  await db.Cart.create({
            total : cart.totalPrice,
            shipping_address_id : userAddress.Address[0].id,
            user_id : user.id
        })
        
        let lastCart = await  db.Cart.findOne({
            where : {
                user_id : {
                    [Op.eq] : user.id
                }
            },
            order: [
                ['created_at', 'DESC']
            ] 
        })        
        
        products.forEach(prod =>{
            db.Cart_product.create( {                
                cart_id : lastCart.id,
                product_id : prod.item.id,
                quantity : prod.quantity,
                price : prod.price                
            })


           
            let subsStock = Number(prod.quantity) 
            
            db.Product.decrement({
                stock : +subsStock 
            },
            {
                where : {
                    id : prod.item.id                    
                }
            })
        })
        
        try{                      
            res.redirect('/')
        }
        catch(err){
            res.send('no se pudo guardar el carrito')
            
        }
        
        res.render('cart_mp')
    },
    prueba: async (req, res, next)=>{
        
        
    },
    
    prueba2 : (req, res, next)=>{
        let user = req.session.user
        db.Cart.findAll({
            where : {
                user_id : user.id
            },
            include : [{association : 'product'},{association : 'User'}, {association : 'Adress'} ]
        })
        .then(carts=>{
            res.json(carts)
        })
        
    },
    
    
}

module.exports = cartFunctions



