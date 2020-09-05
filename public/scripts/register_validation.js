
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
      let errors = 0;

        if(validator.isEmpty(firstName.value)){
            selectClass('hideSpan', 'showSpan', 'first_name')
            errors++     
        }else{
            selectClass('showSpan', 'hideSpan', 'first_name')
            data.first_name = firstName.value;           
        }

        if(validator.isEmpty( lastName.value)){
            selectClass('hideSpan', 'showSpan', 'last_name') 
            errors++    
        }else{
            selectClass('showSpan', 'hideSpan', 'last_name')
            data.last_name = lastName.value;
        }

        if(validator.isEmail(email.value)){
            selectClass('showSpan', 'hideSpan', 'email')
            data.email = email.value
        }else{
            selectClass('hideSpan', 'showSpan', 'email')
            errors++     
        }

        if(password.value.length < 5 || password.value.length > 15){
            selectClass('hideSpan', 'showSpan', 'password')
            errors++  
        }else{
            selectClass('showSpan', 'hideSpan', 'password')  
            data.password = password.value
        }
        
        if(validator.isEmpty( lastName.value) || confirmPassword.value != password.value){
            selectClass('hideSpan', 'showSpan', 'confirmPassword') 
            errors++ 
        }else{
            selectClass('showSpan', 'hideSpan', 'confirmPassword')  
            data.confirmPassword = confirmPassword.value
        } 
        
        if(!image.value){
           
            selectClass('hideSpan', 'showSpan', 'image')
            errors++  
        }else{
            selectClass('showSpan', 'hideSpan', 'image')  
            data.image = image.value
        } 
          if(errors > 0){
              e.preventDefault()
          }
        console.log(data)
    })
    
}