let db = require('../../db/models')
const Op = db.Sequelize.Op


let productsFunctions = {
    show : (req, res, next)=>{
        db.Product.findAll()
        .then(products => {
            let prices = []
            products.forEach(prod => prices.push(prod.price))            
            let totalPrices = prices.reduce((a, b)=> a = a + b)            
            
            let response = {
                meta : {
                    method : 'GET',
                    status : 200,
                    endpoint : "http://localhost:3030/api/products"
                    
                },
                data : {
                    totalProducts : products.length,
                    totalPrice : totalPrices,
                    products : products
                }
                
            }     
            res.send(response)
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
            
            let response = {
                meta : {
                    method : 'GET',
                    status : 200,
                    endpoint : "http://localhost:3030/api/products/categorys"
                    
                },
                 data : {               
                    categorysName : categorysName
                }
                
            }     
           
            res.send(response)      
            
        })
        .catch(err =>{
            console.log(err);
            res.send('ocurrio un error')
        })   
        
    }
    
}

module.exports = productsFunctions