const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function rememberPassword (req, res, next){
    
    if(typeof req.cookies.rememberPassword != "undefined" && typeof req.session.user == "undefined"){
        let user = users.find(element =>{
            return element.email == req.cookies.rememberPassword
        })
        req.session.user = user;
    }    
    
    next();          
}

module.exports = rememberPassword