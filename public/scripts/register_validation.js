

window.onload = function(){
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
        }

        if(validator.isEmpty( lastName.value)){
            selectClass('hideSpan', 'showSpan', 'last_name')     
        }else{
            selectClass('showSpan', 'hideSpan', 'last_name')
        }

        if(validator.isEmail(email.value)){
            selectClass('showSpan', 'hideSpan', 'email')
        }else{
            selectClass('hideSpan', 'showSpan', 'email')     
        }

        if(password.value.length < 5 || password.value.length > 15){
            selectClass('hideSpan', 'showSpan', 'password')  
        }else{
            selectClass('showSpan', 'hideSpan', 'password')  
        }
        
        if(confirmPassword.value != password.value){
            selectClass('hideSpan', 'showSpan', 'confirmPassword')  
        }else{
            selectClass('showSpan', 'hideSpan', 'confirmPassword')  
        }                
    })
    
}