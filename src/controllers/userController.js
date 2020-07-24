const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let {check, body, validationResult}  = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function writeJson(file, arr){
    fs.writeFileSync(file, JSON.stringify(arr), 'utf8');
}

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
                confirmPassword : bcrypt.hashSync( req.body.confirmPassword, 10),
               
                image : req.files[0].filename
            }
            
            console.log(user)
            
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
            if(req.body.rememberPassword != undefined){
                res.cookie('remember', user.email, {maxAge :6000000})
            }
            res.redirect('/');
        }else{
            req.session.loginError = "usuario no registrado, revise su email o contraseña para tener acceso a todas nuestras secciones"
            res.redirect('/users/login')
        }
    },
    
    
    
    logout : (req, res)=>{        
        req.session.destroy(()=>{    
            res.clearCookie('remember');   
            res.redirect('/')
        });
    },
    
    profile : (req, res)=> {
        res.render('users/profile', {user : req.session.user, editMsg : req.session.edit})
    },
    
    edit : (req, res)=> {     
         res.render('users/edit-form', {userToEdit : req.session.user})
    },
    
    update : (req,res)=>{        
            let userEdit = users.map(function(user){
                if(user.id === req.params.id){
                    
                    return {
                        ...user, ...req.body,
                    }
                }
                return user
            });
         
            console.log(userEdit)
          
            fs.writeFileSync(usersFilePath, JSON.stringify(userEdit), 'utf8');
            req.session.editMsg = "Tu perfil se edito correctamente!! "
            res.redirect('/users/profile');
        },
    
    
}
module.exports = userFunction