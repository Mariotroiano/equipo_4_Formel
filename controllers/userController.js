const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let userFunction = {
    
    register : (req, res) => {
        let user = {
            ...req.body
        }
        users.push(user);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/#');
    },
    
    login : (req, res)=>{
      let user = users.find(element =>{
          return element.email == req.body.email && element.password == req.body.password;
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
        req.session.destroy()
        res.redirect('/#')
    }
}
module.exports = userFunction