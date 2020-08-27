const bcrypt = require('bcrypt');
let {check, body, validationResult}  = require('express-validator');
let db = require('../db/models');
const Op = db.Sequelize.Op

let userFunction = {
    getRegister : (req,res)=>{
        res.render('users/register')
    },
    
    register : (req, res) => {
        console.log(validationResult(req))
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            db.User.create({
                ...req.body,
                password : bcrypt.hashSync( req.body.password, 10),
                confirmPassword : bcrypt.hashSync( req.body.confirmPassword, 10),
                image : req.files[0].filename,
                permissions : 2
            })
            .then(result =>{
                req.session.registered = "Tu cuenta se creo correctamente!! ahora solo resta iniciar sesión"
                res.redirect('/');
            })
            .catch(err =>{
                console.log("aaaaaaaaaaaaaaaaaaa" + err)
                res.send('ocurrio un error')
            })
        }else{
            res.render('users/register', {errors : errors.errors})
        }
    },
    
    getLogin : (req, res)=>{
        res.render('users/login', {loginError : req.session.loginError})
    },
    
    login : (req, res)=>{   
    // let hash = bcrypt.hashSync('marito', 10)
    // console.log('hash de prueba ' + hash)
    // let saracundo = bcrypt.compareSync('marito', hash)
    // console.log('saraundooooooooooooooooooooooooooooooooooo ' + saracundo)    

        db.User.findOne({
            where : {
                email : {                   
                    [Op.eq] : req.body.email
                },             
            }
        }) 
        .then(user => {
            console.log('contraseña encriptada ' + user.password)
            console.log('contraseña desde el formulario ' + req.body.password)
             var result = bcrypt.compareSync(req.body.password, user.password);
             console.log('resultado de compareSync de ambas contraseñas  ' + result)

            if(user && bcrypt.compareSync(req.body.password, user.password)){                     
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
        })     
        .catch(err =>{
            res.send("no se pudo encontrar al usuario")
        })
        
    },  
    
    logout : (req, res)=>{        
        req.session.destroy(()=>{    
            res.clearCookie('remember');   
            res.redirect('/')
        });
    },
    
    profile : (req, res)=> {
        res.render('users/profile', {user : req.session.user})
      
    },
    
    edit : (req, res)=> {          
        res.render('users/edit-form', {user : req.session.user})        
    },            
    
    update : (req, res, next)=>{              
        console.log(validationResult(req))
        let errors = validationResult(req)
        
        if (errors.isEmpty()){
            db.User.update({
                ...req.body,
                password : bcrypt.hashSync( req.body.password, 10),
                confirmPassword : bcrypt.hashSync( req.body.confirmPassword, 10),
            }, {
                where : {
                    id :  req.params.userId
                }
            })
            .then(response =>{
                
                db.User.findByPk(req.params.userId)
                .then(user => {
                    let editMsg =  "Tu perfil se edito correctamente!! "         
                    req.session.user = user
                    res.render('users/profile', {user : user, editMsg : editMsg});
                })
                .catch(err =>{
                    console.log(err)
                    res.send('error al cargar usuario')
                });
            })
            .catch(err =>{
                console.log(err)
                res.send('error al editar usuario')
            }) 
        }else{
            res.render('users/edit-form', {errors : errors.errors, user : req.session.user})
        }
    }, 
    
    delete : (req, res, next)=>{
        db.User.destroy({
            where : {
                id : {
                    [Op.eq] : req.params.userId
                } 
            }
        })
        .then(()=>{
            res.redirect('/')
        })
        .catch(err =>{
            console.log(err)
            res.send('No se encontro la cuenta para borrar')
        })
    } 
    
}
module.exports = userFunction




