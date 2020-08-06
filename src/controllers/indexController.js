let {check, body, validationResult}  = require('express-validator');
let db = require('../db/models');
const Op = db.Sequelize.Op

let Cart = require('../custom-functions/cart')

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
    
    products : (req, res, next)=>{  
        
        db.Product.findAll()
        .then(products => {
            res.render('products', {products : products})
        })
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })
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
    
}

module.exports = indexFunctions;