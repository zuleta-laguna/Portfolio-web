import React from 'react'
import { useState } from 'react';
import emailjs from "emailjs-com"

function Form() {
    const [Form, setForm] = useState({
        user_name:"",
        user_email:"",
        message:""
    });
    const SERVICE_ID = "service_w7tf9ks";
    const TEMPLATE_ID ="template_eqw6ljo"
    const PUBLIC_KEY = "TtRM6jcA7EJcv7aAt"
    const HandleChange = (e) => {
        setForm({...Form,[e.target.name]: e.target.value })
    }
    const templateParams = {
    from_name: Form.user_name,   
    reply_to: Form.user_email,   
    message: Form.message
  };
    const HandleSubmitChange = (e) => {
      e.preventDefault();
     
      try {
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        ).then(
          (response) => {
           console.log('SUCCESS!', response.status, response.text);  
          },
          (error) => {
            return console.log("error", error)
          }
        )
        alert("mensaje enviado con exito")
        
      } catch (error) {
        console.log(error)
        alert("no se pudo enviar el mensaje")
       
      }
    }
  return (
   <form onSubmit={HandleSubmitChange}>
    <input type="text" name='user_name' onChange={HandleChange} required placeholder='Nombre'/>
    <input type="email" name='user_email' onChange={HandleChange} required placeholder='Email'/>
    <textarea name="message" onChange={HandleChange} required id="" placeholder='Mensaje' className='bg-[#fff]  outline-none w-[40%] h-56  rounded-3xl p-5 resize-none max-[420px]:w-[80%]'></textarea>
    <input className='ButtonSubmit' type="submit" value="Enviar" />
   </form>
  )
}

export default Form
