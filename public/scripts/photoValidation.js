
window.onload = function(){
    let data = {     
        image : ""
    }
    let form = document.getElementById('form_photo')
   
    let image = document.getElementById('image')
    
    function selectClass(classRemove, classAdd, smallIdName){
        let span = document.querySelector(`span#${smallIdName}`)
        span.classList.remove(`${classRemove}`)
        span.classList.add(`${classAdd}`)         
    }
    
    
    form.addEventListener('submit', e=>{
      let errors = 0;
                            
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