let {check, body, validationResult, query}  = require('express-validator');
let db = require('../db/models');
const Op = db.Sequelize.Op;
let Cart = require('../custom-functions/cart');
let nodemailerFunction = require('../custom-functions/nodemaile')
let paginate =  require('../custom-functions/paginate');
let filter = require('../custom-functions/filter')


let indexFunctions = {    
    store : async (req, res, next) => {     
        let products = await db.Product.findAll({
            where : {
                price : {
                    [Op.lt] : 1200
                } 
            },
            include : [{association : 'color' }, {association : 'size'}]
        })
        try{
            res.render('index', {user : req.session.user, notPermission : req.session.notPermission, succesMsg : req.session.succesMsg, registered : req.session.registered, offerProducts : products })  
            
        }
        catch(err){
            console.log(err)
            res.send('ocurrio un error')
        }      
    },
    
    category : async (req, res, next)=>{
        let products = await db.Product.findAll({
            where : {
                category_id : req.params.categoryId                 
            }                
        })
        let category = await db.Product_category.findByPk(req.params.categoryId)
        try{
            res.render('category', {products : products, categoryName : category.name})
            
        }
        catch(err){
            console.log(err)
            res.send('error al buscar productos')
        }       
    },  
    
    products : async (req, res, next)=>{            
        let queryLimit = 4;
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
    
    productsDetail : async (req, res, next)=>{
        let product = await db.Product.findByPk(req.params.productId, {
            include : [{association : 'color'}, {association : 'size'}]
        })
        try{
            res.render('products-detail', {productId : product})
        }
        catch(err){
            console.log(err)
            res.send('ocurrio un error')
        }         
    },
    
    createGet : async (req, res, next)=>{      
        res.render('products-create')   
    },
    
    create : async (req, res, next)=>{   
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let product = await  db.Product.create({
                ...req.body,
                image : req.files[0].filename   
            })
            try{
                res.redirect('/products/create');
                
            }   
            catch(err){
                console.log(err)
                res.send('error al crear producto')
            }    
            
        }else{            
            res.render('products-create',  {errors : errors.errors})
        }       
    },
    
    edit : async (req, res, next)=> {
        
        const product = await db.Product.findByPk(req.params.productId)
        try{
            res.render('products-edit', {productToEdit : product})
            
        }
        catch(error){
            console.log(error)
            res.send('error al editar producto')
        }  
    },    
    
    update : (req, res, next)=> {    
        db.Product.update({
            ...req.body
        }, {
            where : {
                id : req.params.productId
            },
            
        });
        res.redirect('/products/' + req.params.productId)
        
    },
    
    delete : (req, res, next) => {
        console.log(req.params.id)
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

        let color = req.body.colors_id;
        let size = req.body.sizes_id;
        let price = Number(req.body.price)
        let name = req.body.name        
        filter(color, size, price, name, req, res)    
        
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
    
    changePhoto : async (req, res, next)=>{
        
        let product = await db.Product.findByPk(req.params.productId)
        try{
            res.render('photoProductChange', {product : product})
        }
        catch(err){
            console.log(err)
            res.send('error al buscar producto')
        }       
    },
    
    updatePhoto : async (req, res ,next)=> {        
        
        let product = await  db.Product.update({
            image : req.files[0].filename
            
        }, {
            where : {
                id :  req.params.productId
            }
        })
        
        let productEdited =  db.Product.findByPk(req.params.productId)
        try{
            res.render('products-detail', {productId : productEdited})          
            
        }
        catch(err){
            console.log(err)
            res.send('error al cambiar foto de producto')
            
        }
        
    }    
}


module.exports = indexFunctions;