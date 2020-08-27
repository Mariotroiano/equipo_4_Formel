let db = require('../db/models');
const { products } = require('./indexController');
const Op = db.Sequelize.Op



let adminFunctions = {
    
    info : (req, res, next)=>{
        let totalUsers = []
        let totalProducts = []
        let totalCategorys = []
        
        db.User.findAll()
        .then(users =>{
            totalUsers = users 
        })
        .catch(err=>{
            console.log(err)
            res.send('no se encontraron usuarios')
        })       
       

        db.Product.findAll()
        .then(products =>{
            totalProducts = products
        })
        .catch(err =>{
            console.log(err);
            res.send('ocurrio un error')
        })    
        console.log(' productssssssssssss ' + totalProducts)
        res.render('admin/dashboard', {users : totalUsers, products : totalProducts, categorys : totalCategorys })
    }
}

module.exports = adminFunctions