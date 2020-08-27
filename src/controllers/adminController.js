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
    }
}

module.exports = adminFunctions

// let productId = db.Product.findByPk(req.params.productId)
// let categorys = db.Product_category.findAll()
// Promise.all([productId, categorys])
// .then(function([product, cat]){
//     res.render('products-edit', {productToEdit : product, categorys : cat})
// })