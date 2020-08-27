let db = require('../db/models');
const { products } = require('./indexController');
const Op = db.Sequelize.Op



let adminFunctions = {
    
    info : (req, res, next)=>{
        let totalProducts = db.Product.findAll()
        let totalUsers = db.User.findAll()
        let totalCategorys = db.Product_category.findAll()

        Promise.all([totalProducts, totalUsers, totalCategorys])
        .then(([products, users, categorys])=>{
           res.render('admin/dashboard', {products : products, users : users, categorys : categorys})
        })
    },
    create : (req, res, next) =>{
        res.render('admin/create')
    },

    add : (req, res, next)=>{
      db.Product_category.create({
          ...req.body
      })
      .then(category =>{
          res.redirect('/')
      })
    },

    edit : (req, res, next)=>{
        db.Product_category.findByPk(req.params.categoryId)
        .then(cat =>{
            res.render('admin/edit', {category : cat})

        })
    },

    update : (req, res, next) =>{
        db.Product_category.update({
            ...req.body
        }, {
            where : {
                id : req.params.categoryId
            }
        })
        .then(category => {
            res.redirect('/')
        })
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