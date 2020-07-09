const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let userFunction = {
    getRegister : (req,res)=>{
        res.render('register')
    },
    
    register : (req, res) => {
        let user = {
            ...req.body,
            password : bcrypt.hashSync( req.body.password, 10),
            confirmPassword : bcrypt.hashSync( req.body.confirmPassword, 10)
        }
        
        users.push(user);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/');
    },
    getLogin : (req, res)=>{
        res.render('login')
    },
    
    login : (req, res)=>{
        let user = users.find(element =>{
            return element.email == req.body.email && bcrypt.compareSync( req.body.password,element.password);
        })
        
        if(user){
            req.session.user = user;
            res.redirect('/');
        }else{
            req.session.loginError = "usuario no registrado, revise su email o contraseña para tener acceso a todas nuestras secciones"
            res.redirect('/')
        }
    },
    
    logout : (req, res)=>{
        req.session.destroy(()=>{
            res.redirect('/')
        });        
    }
}
module.exports = userFunction