let {check, body, validationResult, query}  = require('express-validator');
let db = require('../db/models');
const Op = db.Sequelize.Op;
let Cart = require('../custom-functions/cart');
let nodemailerFunction = require('../custom-functions/nodemaile')
let paginate =  require('../custom-functions/paginate')


let indexFunctions = {    
    store : (req, res, next) => {     
        db.Product.findAll({
            where : {
                price : {
                    [Op.lt] : 1200
                } 
            }
        })
        .then(products => {           
            res.render('index', {user : req.session.user, notPermission : req.session.notPermission, succesMsg : req.session.succesMsg, registered : req.session.registered, offerProducts : products })  
        })
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })
    },
    
    category : (req, res, next)=>{
        db.Product.findAll({
            where : {
                category_id : {
                    [Op.eq] : req.params.categoryId
                }
            }
        })
        .then(products => {
            
            res.render('category', {products : products})
        })
    },  
    
    products : async (req, res, next)=>{            
    let queryLimit = 3;
    let queryOffset = Number(req.query.page) * queryLimit || 0

       let productsAll = await db.Product.findAndCountAll({
            offset: queryOffset,
            limit: queryLimit
        })
           
        let products = productsAll.rows          
       
        res.render('products', {           
            products: products,                                     
            pagination: paginate(req, productsAll, queryLimit, `/products/?page=`)
        });    
       
    },
    
    productsDetail : (req, res, next)=>{
        db.Product.findByPk(req.params.productId)
        .then(productId =>{
            res.render('products-detail', {productId : productId})
        })
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })      
    },
    
    createGet : (req, res, next)=>{      
        res.render('products-create')          
    },
    
    create : (req, res, next)=>{   
        
        let errors = validationResult(req)
        if(errors.isEmpty()){
            db.Product.create({
                ...req.body,
                image : req.files[0].filename   
            })        
            .then(product => {
                res.redirect('/products/create');
            })
            .catch('ocurrio un error')
            
        }else{            
            res.render('products-create',  {errors : errors.errors})
        }       
    },
    
    edit : (req, res, next)=> {
        
        db.Product.findByPk(req.params.productId)       
        .then(product =>{
            res.render('products-edit', {productToEdit : product})
        })      
        
    },
    
    update : (req, res, next)=> {    
        db.Product.update({
            ...req.body
        }, {
            where : {
                id : req.params.productId
            }
        });
        res.redirect('/products/' + req.params.productId)
        
    },
    
    delete : (req, res, next) => {
        db.Product.destroy({
            where : {
                id : req.params.productId
            }
        });     
        res.redirect('/products')
    },
    
    stores : (req, res, next) => {
        res.render('locals');
    },
    
    info : (req, res, next)=>{
        res.render('storeInformation')
    },
    
    conditions : (req, res, next)=>{
        res.render('conditions')
    },
    
    questions : (req, res, next)=>{
        res.render('questions')
    },
    
    search : (req, res, next)=>{
        res.render('search', {products : [], msj : false})
    },
    
    show : (req, res, next)=>{
        db.Product.findAll({
            where : {
                name : {
                    [Op.like]: `${req.body.name}%`
                }
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                console.log(products.length)
            }else{
                res.render('search', {products : [], msj : true})
                console.log(products.length)
                
            }
            
            
        })                  
        
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    },
    
    form : (req, res, next) => {
        res.render('emailForm')
    },
    send : (req, res, next)=>{
        let emailContent = `
        <ul>
        <li>Nombre : ${req.body.name}</li>
        <li>Email del sujeto : <strong> ${req.body.email}</strong>
        </ul>
        <p>Mensaje : ${req.body.message}</p>
        `
        nodemailerFunction(emailContent, req.body.reference)
        res.redirect('/')        
    },      
    
    changePhoto : (req, res, next)=>{
        
        db.Product.findByPk(req.params.productId)
        .then(product =>{
            console.log(product)
            res.render('photoProductChange', {product : product})
        })
    },
    
    updatePhoto : (req, res ,next)=> {
        
        console.log( 'aaaaaaaaaaaaaaaaaaaaaaaaaaa ' + req.files[0].filename)
        
        db.Product.update({
            image : req.files[0].filename
            
        }, {
            where : {
                id :  req.params.productId
            }
        })
        .then(product => {
            db.Product.findByPk(req.params.productId)
            .then(prod => {
                res.render('products-detail', {productId : prod})
            })

        })
        
        .catch(err => {
            console.log(err)
            res.send('error al cambiar foto de producto')
        })
    }
    
}


module.exports = indexFunctions;