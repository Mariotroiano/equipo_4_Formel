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
    let color = document.getElementById('color')
    let size = document.getElementById('size')
    let description = document.getElementById('description')
    

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

        if(validator.isLength(color.value, {min: 0, max:30}) == false || validator.isEmpty(color.value)){
            selectClass('hideSpan', 'showSpan', 'color')
            errorList++     
        }else{
            selectClass('showSpan', 'hideSpan', 'color')
            data.color = color.value;           
        }

        if(size.value != "S" && size.value != "M" && size.value != "L" && size.value != "XL"){
            selectClass('hideSpan', 'showSpan', 'size')
            errorList++     
        }else{
            selectClass('showSpan', 'hideSpan', 'size')
            data.size = size.value;           
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
