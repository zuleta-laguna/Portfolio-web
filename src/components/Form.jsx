import React from 'react'
import { useState } from 'react';
import emailjs from "emailjs-com"

function Form() {
    const [Form, setForm] = useState({
        user_namel:"",
        user_email:"",
        message:""
    });
    const HandleChange = (e) => {
        setForm({...Form,[e.target.name]: e.target.value })
    }
    const HandleSubmitChange = (e) => {
      e.preventDefault();
     
      try {
        emailjs.send(
            "service_d0iwidh",
            "template_u3xguvp",
            Form,
            "7yDT1OT0JAMPg-xUN"
          )
        alert("mensaje enviado con exito")
      } catch (error) {
        console.log(error)
        alert("no se pudo enviar el mensaje")
      }
    }
  return (
   <form onSubmit={HandleSubmitChange} className='flex flex-col gap-7 items-center w-full'>
    <input type="text" name='user_namel' onChange={HandleChange} required placeholder='Nombre' className='outline-none bg-[#fff] w-[40%] max-[420px]:w-[80%] h-11 rounded-3xl p-5'/>
    <input type="email" name='user_email' onChange={HandleChange} required placeholder='Email' className='bg-[#fff] outline-none w-[40%] max-[420px]:w-[80%]
     h-11 rounded-3xl p-5'/>
    <textarea name="message" onChange={HandleChange} required id="" placeholder='Mensaje' className='bg-[#fff] outline-none w-[40%] h-56  rounded-3xl p-5 resize-none max-[420px]:w-[80%]'></textarea>
    <input className='cursor-pointer font-Raleway text-white bg-black outline-none w-[30%] h-11 rounded-3xl' type="submit" value="Enviar" />
   </form>
  )
}

export default Form
