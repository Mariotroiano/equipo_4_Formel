let db = require('../db/models');

module.exports = (req, res, next) => {
    let user = req.session.user
    console.log(user)
    if(user == undefined || user.permissions != 2){

        res.redirect('/')
    }else{
        next()
    }
       
}