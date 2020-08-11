
window.onload = function(){
    let data = {
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        confirmPassword : "",
        image : ""
    }
    let form = document.getElementById('form_register')
    let firstName = document.getElementById('first_name')
    let lastName = document.getElementById('last_name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('confirmPassword')
    let image = document.getElementById('image')
    
    function selectClass(classRemove, classAdd, smallIdName){
        let span = document.querySelector(`span#${smallIdName}`)
        span.classList.remove(`${classRemove}`)
        span.classList.add(`${classAdd}`)         
    }
    
    
    form.addEventListener('submit', e=>{
        e.preventDefault()
        
        if(validator.isEmpty(firstName.value)){
            selectClass('hideSpan', 'showSpan', 'first_name')     
        }else{
            selectClass('showSpan', 'hideSpan', 'first_name')
            data.first_name = firstName.value;
        }

        if(validator.isEmpty( lastName.value)){
            selectClass('hideSpan', 'showSpan', 'last_name')     
        }else{
            selectClass('showSpan', 'hideSpan', 'last_name')
            data.last_name = lastName.value;
        }

        if(validator.isEmail(email.value)){
            selectClass('showSpan', 'hideSpan', 'email')
            data.email = email.value
        }else{
            selectClass('hideSpan', 'showSpan', 'email')     
        }

        if(password.value.length < 5 || password.value.length > 15){
            selectClass('hideSpan', 'showSpan', 'password')  
        }else{
            selectClass('showSpan', 'hideSpan', 'password')  
            data.password = password.value
        }
        
        if(confirmPassword.value != password.value){
            selectClass('hideSpan', 'showSpan', 'confirmPassword')  
        }else{
            selectClass('showSpan', 'hideSpan', 'confirmPassword')  
            data.confirmPassword = confirmPassword.value
        } 
        
        if(!image.value){
           
            selectClass('hideSpan', 'showSpan', 'image')  
        }else{
            selectClass('showSpan', 'hideSpan', 'image')  
            data.image = image.value
          
        } 
        console.log(data)
    })
    
}