const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function rememberPassword (req, res, next){
    
    if(req.cookies.remember != undefined &&  req.session.user == undefined){
        let user = users.find(element =>{
            return element.email == req.cookies.remember
        })
        if(user){
            req.session.user = user;      
        }        
    }        
    next();          
}

module.exports = rememberPassword