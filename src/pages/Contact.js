import React,{useRef,useState} from 'react';
import emailjs from 'emailjs-com';
import '../pages/Contact.css'
const Contact = () => {
  const form = useRef()
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_o2pw4zw', 'template_734q9eg', form.current, 'bMmhet3pS-LYVKqsY')
    .then((result) => {
        console.log(result.text);
        console.log("message sent")
    }, (error) => {
        console.log(error.text);
    });
    
};

  return (
    <>
    <div>
     
    </div>
     <div className='total'>
     <form ref={form} onSubmit={sendEmail} className="form">
     <h1>Contact Us</h1>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Address</label>
     <input type="text" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input className='btn' type="submit" value="Send" />
   </form>
   </div>
   </>
  )

}

export default Contact