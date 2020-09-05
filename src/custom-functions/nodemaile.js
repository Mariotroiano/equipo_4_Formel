const nodemailer = require('nodemailer')

module.exports =  (emailContent, ref)=>{

       let transporter = nodemailer.createTransport({
        service: 'gmail',        
        auth: {
            user: "formelarg@gmail.com",
            pass: "123formelarg!!"
        },
          
                  
       });       

       let mailOptions = {
           from:  "formelarg@gmail.com",
           to: "formelarg@gmail.com",
           subject: ref,
           html: emailContent
       }           
       
       transporter.sendMail(mailOptions, (error, info)=>{
           if(error){
               console.log('no se pudo enviar el email ' + error)
           }
           else{
               console.log('Email enviado con exito');               
           }
       })     

    }