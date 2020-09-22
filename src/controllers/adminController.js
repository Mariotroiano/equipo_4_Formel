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
            res.send('error al eliminar categoría')
        }
        
    },
    
    delete : (req, res, next)=>{
        db.Product_category.destroy({
            where : {
                id : {
                    [Op.eq] : req.params.categoryId
                } 
            }
        })
        .then(category =>{
            res.redirect('/')
        })
    }
    
    
}

module.exports = adminFunctions

// let productId = db.Product.findByPk(req.params.productId)
// let categorys = db.Product_category.findAll()
// Promise.all([productId, categorys])
// .then(function([product, cat]){
//     res.render('products-edit', {productToEdit : product, categorys : cat})
// })