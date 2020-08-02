let db = require('../db/models')
const Op = db.Sequelize.Op

function rememberPassword (req, res, next){
    
    if(req.cookies.remember != undefined &&  req.session.user == undefined){      
        db.User.findOne({
            where : {
                email : {
                    [Op.eq] : req.cookies.remember
                }
            }
        })
        .then(user =>{
            req.session.user = user;
        })
        .catch(err => {
            console.log(err)
            res.send('no se encontro el usuario')
        })
    }        
    next();          
}

module.exports = rememberPassword