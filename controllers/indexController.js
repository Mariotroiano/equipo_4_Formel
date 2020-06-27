let indexFunctions = {

store : (req, res) => {
    res.render('index');
},
    
cart : (req, res) => {
    res.render('cart-detail');
},
   
 locals : (req, res) => {
    res.render('locals');
},
        
     
}



module.exports = indexFunctions;