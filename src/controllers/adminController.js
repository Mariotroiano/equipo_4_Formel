let db = require('../db/models');
const { products } = require('./indexController');
const Op = db.Sequelize.Op
let paginate =  require('../custom-functions/paginate');


let adminFunctions = {
    
    info : async (req, res, next)=>{
        
        let totalUsers = await db.User.findAll()
        let totalCategorys = await db.Product_category.findAll()
        let totalColors = await db.Color.findAll()
        let totalSizes = await db.Size.findAll()
        let queryLimit = 4;
        let queryOffset = Number(req.query.page) * queryLimit || 0
        
        let totalProducts = await db.Product.findAndCountAll({
            offset: queryOffset,
            limit: queryLimit
        })
        
        try{
            res.render('admin/dashboard', {
                products : totalProducts.rows, 
                users : totalUsers, categorys : totalCategorys,
                colors : totalColors,
                sizes : totalSizes,
                pagination: paginate(req, totalProducts, queryLimit, `/admin/?page=`)
            })
        }
        
        catch(err){
            console.log(err)
            res.send('error al consultar informacion')
        }
        
    },
    
    
    createColor : (req, res, next) =>{
        res.render('admin/createColor')
    },
    
    addColor : async (req, res, next)=>{
        await  db.Color.create({
            ...req.body
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al crear nuevo color')
        }     
    },
    editColor : async (req, res, next)=>{
        let color = await db.Color.findByPk(req.params.colorId)
        try{
            res.render('admin/editColor', {color : color})
        }
        catch(err){
            console.log(err)
            res.send('error al buscar color')
        }        
    },
    
    updateColor : async (req, res, next) =>{
        await  db.Color.update({
            ...req.body
        }, {
            where : {
                id : req.params.colorId
            }
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al editar color')
        }
        
    },
    
    deleteColor : async (req, res, next)=>{
        let colorDefault = await db.Color.findOne({
            where : {
                name : {
                    [Op.eq] : 'ninguno'
                }
            }
        })        
        
        await db.Product.update({
           colors_id : colorDefault.id
        },{
            where : {
                colors_id : {
                    [Op.eq] :  Number(req.params.colorId)
                }
            }
        })        
               
        await db.Color.destroy({
            where : {
                id : {
                    [Op.eq] : req.params.colorId
                } 
            }
        })
        try{
            
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al eliminar color')
        }
    },
    
    create : (req, res, next) =>{
        res.render('admin/create')
    },
    
    add : async (req, res, next)=>{
        await  db.Product_category.create({
            ...req.body
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al cargar categoría')
        }     
    },
    
    edit : async (req, res, next)=>{
        let category = await db.Product_category.findByPk(req.params.categoryId)
        try{
            res.render('admin/edit', {category : category})
        }
        catch(err){
            console.log(err)
            res.send('error al editar categoria')
        }        
    },
    
    update : async (req, res, next) =>{
        await  db.Product_category.update({
            ...req.body
        }, {
            where : {
                id : req.params.categoryId
            }
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al editar categoría')
        }
        
    },
    
    delete : async (req, res, next)=>{
        await db.Product_category.destroy({
            where : {
                id : {
                    [Op.eq] : req.params.categoryId
                } 
            }
        })
        try{
            res.redirect('/')
        }
        catch(err){
            res.send('error al eliminar categoría')
        }   
    },

    createSize : (req, res, next) =>{
        res.render('admin/createSize')
    },
    
    addSize : async (req, res, next)=>{
        await  db.Size.create({
            ...req.body
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al cargar categoría')
        }     
    },
    
    editSize : async (req, res, next)=>{
        let size = await db.Size.findByPk(req.params.sizeId)
        try{
            res.render('admin/editSize', {size : size})
        }
        catch(err){
            console.log(err)
            res.send('error al encontrar talle a editar')
        }        
    },
    
    updateSize : async (req, res, next) =>{
        await  db.Size.update({
            ...req.body
        }, {
            where : {
                id : req.params.sizeId
            }
        })
        try{
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al editar talle')
        }
        
    },
    
    deleteSize : async (req, res, next)=>{
        
        
        let sizeDefault = await db.Size.findOne({
            where : {
                name : {
                    [Op.eq] : 'ninguno'
                }
            }
        })        
        
        await db.Product.update({
           sizes_id : sizeDefault.id
        },{

            where : {
                sizes_id : {
                    [Op.eq] :  Number(req.params.sizeId)
                }
            }
        })        
               
        await db.Size.destroy({
            where : {
                id : {
                    [Op.eq] : req.params.sizeId
                } 
            }
        })
        try{
            
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.send('error al eliminar talle')
        }
        
    },
}

module.exports = adminFunctions

// let productId = db.Product.findByPk(req.params.productId)
// let categorys = db.Product_category.findAll()
// Promise.all([productId, categorys])
// .then(function([product, cat]){
//     res.render('products-edit', {productToEdit : product, categorys : cat})
// })