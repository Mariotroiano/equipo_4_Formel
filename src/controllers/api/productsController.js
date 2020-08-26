let db = require('../../db/models')
const Op = db.Sequelize.Op


let productsFunctions = {
    show : (req, res, next)=>{
        db.Product.findAll()
        .then(products => {
            let prices = []
            products.forEach(prod => prices.push(prod.price))            
            let totalPrices = prices.reduce((a, b)=> a = a + b)            
            
            let data = {
                status : 200,
                totalProducts : products.length,
                totalPrice : totalPrices,
                products : products
            }     
            res.send(data)
        })
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })
    },
    
    categorys : (req, res, next)=>{
        db.Product_category.findAll()
    .then(categorys =>{ 
       let categorysName = []
        categorys.forEach(cat => categorysName.push(cat.name))
        let data = {
            status : 200,
            categorysName : categorysName
            
        }
        res.send(data)      
       
    })
    .catch(err =>{
        console.log(err);
        res.send('ocurrio un error')
    })   
        
    }
    
}

module.exports = productsFunctions