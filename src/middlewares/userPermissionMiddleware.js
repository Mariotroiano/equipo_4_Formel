
module.exports = function userPermissionMiddleware (req, res, next){
    if(req.session.user){
        next()        
       
    }else{
        req.session.notPermission = "Lo sentimos, no cuenta con los permisos para ingresar a esta sección, para eso registrese o inicie sesión"
        res.redirect('/')
    }
}