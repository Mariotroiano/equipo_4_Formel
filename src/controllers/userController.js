const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let {check, body, validationResult}  = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let userFunction = {
    getRegister : (req,res)=>{
        res.render('users/register')
    },
    
    register : (req, res) => {
        console.log(validationResult(req))
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            let position = users.length + 2
            
            let user = {
                id : position,
                ...req.body,
                password : bcrypt.hashSync( req.body.password, 10),
                confirmPassword : bcrypt.hashSync( req.body.confirmPassword, 10)
            }
            // if(user.first_name == 'admin' && user.email == 'admin@gmail.com'){
            //     req.session.admin = user
            // }
            users.push(user);
            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            req.session.registered = "Tu cuenta se creo correctamente!! ahora solo resta iniciar sesión"
            res.redirect('/');
            
        }else{
            res.render('users/register', {errors : errors.errors})
            
        }
        
    },
    getLogin : (req, res)=>{
        res.render('users/login', {loginError : req.session.loginError})
    },
    
    login : (req, res)=>{
        let user = users.find(element =>{
            return element.email == req.body.email && bcrypt.compareSync( req.body.password,element.password);
        })
        
        if(user){                     
            req.session.user = user;
            req.session.succesMsg = `Bienvenid@ ${user.first_name} ${user.last_name}`
            if(req.body.rememberPassword != "undefined"){
                res.cookie('rememberPassword', user.email, {maxAge :60000})
            }
            res.redirect('/');
        }else{
            req.session.loginError = "usuario no registrado, revise su email o contraseña para tener acceso a todas nuestras secciones"
            res.redirect('/users/login')
        }
    },
    
    
    
    logout : (req, res)=>{
        
        req.session.destroy(()=>{           
            res.redirect('/')
        });
        
        
    }
}
module.exports = userFunction