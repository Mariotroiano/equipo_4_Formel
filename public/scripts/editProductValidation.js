window.onload = function(){
    let data = {
        productName : "",
        price: "",
        color: "",
        size: "",
        description: "",
        image: ""
    }
    let form = document.getElementById('form_register')
    let productName = document.getElementById('name')
    let price = document.getElementById('price')  
    let description = document.getElementById('description')
    let stock = document.getElementById('stock') 

    function selectClass(classRemove, classAdd, smallIdName){
        let span = document.querySelector(`span#${smallIdName}`)
        span.classList.remove(`${classRemove}`)
        span.classList.add(`${classAdd}`)         
    }


    window.addEventListener("submit", function(e){
        let errorList = 0      
        
        if(validator.isEmpty(productName.value)){
            selectClass('hideSpan', 'showSpan', 'product_name')
            errorList++    
        }else{
            selectClass('showSpan', 'hideSpan', 'product_name')
            data.productName = productName.value;      
        }

        if(validator.isEmpty(price.value)){
            selectClass('hideSpan', 'showSpan', 'price')
            errorList++     
        }else{
            selectClass('showSpan', 'hideSpan', 'price')
            data.price = price.value;           
        }  

        if(validator.isEmpty(stock.value)){
            selectClass('hideSpan', 'showSpan', 'stock')
            errorList++     
        }else{
            selectClass('showSpan', 'hideSpan', 'stock')
            data.price = stock.value;           
        }
        
        if(validator.isLength(description.value, {min: 0, max:255}) == false || validator.isEmpty(description.value)){
            selectClass('hideSpan', 'showSpan', 'description')
            errorList++     
        }else{
            selectClass('showSpan', 'hideSpan', 'description')
            data.description = description.value;           
        }

        if (errorList > 0){
            e.preventDefault();
            console.log(errorList)
        }

    })
}   
