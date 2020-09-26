let db = require('../db/models');
const Op = db.Sequelize.Op;

module.exports = (color, size, price, name, req, res)=>{

    // SOLO POR COLOR
    if(color != "" && size == "" && name == ""){
        db.Product.findAll({
            where : {
                colors_id : color,  
                price : {
                    [Op.lte] : price
                }                    
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    // SOLO POR TALLE
    
    if(color == "" && size != "" && name == ""){
        db.Product.findAll({
            where : {
                sizes_id : size,                    
                price : {
                    [Op.lte] : price
                }  
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    
    
    // SOLO POR NOMBRE
    
    if(color == "" && size == "" && name != ""){
        db.Product.findAll({
            where : {
                name : {
                    [Op.like]: `${req.body.name}%`
                },
                price : {
                    [Op.lte] : price
                }  
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    
    
    // POR COLOR  Y NOMBRE
    
    if(color != "" && size == "" && name != ""){
        db.Product.findAll({
            where : {                   
                colors_id: color, 
                name : {
                    [Op.like]: `${name}%`
                },                        
                price : {
                    [Op.lte] : price
                }  
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    
    // POR COLOR Y TALLE
    
    
    if(color != "" && size != "" && name == ""){
        db.Product.findAll({
            where : {                    
                sizes_id: size, 
                colors_id: color,
                price : {
                    [Op.lte] : price
                }                                   
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    // POR TALLE Y NOMBRE
    
    if(color == "" && size != "" && name != ""){
        db.Product.findAll({
            where : {                                  
                sizes_id: size, 
                name : {
                    [Op.like]: `${name}%`
                },   
                price : {
                    [Op.lte] : price
                }    
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    
    
    
    
    if(color != "" && size != "" && name != ""){
        db.Product.findAll({
            where : {                                     
                sizes_id: size, 
                colors_id : color,
                name : {
                    [Op.like]: `${name}%`
                }, 
                price : {
                    [Op.lte] : price
                }                        
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }
    
    // SI NO HAY NIGUNO FILTRO
    
    if(color == "" && size == "" && name == ""){
        db.Product.findAll({
            where : {                                   
                price : {
                    [Op.lte] : price
                }                        
            }
        })
        .then(products =>{
            if(products.length != 0){
                res.render('search', {products : products, msj : false})
                
            }else{
                res.render('search', {products : [], msj : true})
                
            }          
        })                
        .catch(err=>{
            console.log(err)
            res.send('fallo la consulta')
        })
    }        




}