
let db = require('../../db/models')
const Op = db.Sequelize.Op



let usersFunctions = {

    show : (req, res, next)=>{
        db.User.findAll()
        .then(user => {                
            
            let response = {
                meta : {
                    method : 'GET',
                    status : 200,
                    endpoint : "http://localhost:3030/api/users"
                    
                },
                data : {
                    totalUsers : user.length
                }
            }                        
                
            res.send(response)
        })
        .catch(err =>{
            console.log(err)
            res.send('ocurrio un error')
        })
    }
}

module.exports = usersFunctions