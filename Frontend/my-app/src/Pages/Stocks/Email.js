import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../Styles/Email.css";
import Sidebar from '../admin/components/Sidebar/Sidebar';
 const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v8u6btq', 'template_60ibgwf', form.current, '7FgDreAwYX4zaZxmU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div>
      <div className="layout">
        <Sidebar />
      <div className="main__layout">
        {/* <TopNav /> */}

        <div className="content">
        </div>
      </div>
    </div>

    <div className="email-container">
        <h1 className='email-head'>Contact Us</h1>
         {/* <div className='bg-container'> */}
        <div className = "email-form">
      <form ref={form} onSubmit={sendEmail}>
      <label><h2 className='email-name'>Name</h2></label>
      <input type="text" name="user_name" />
      <label><h2 className='email-name'>Email</h2></label>
      <input type="email" name="user_email"/>
      <label><h2 className='email-name'>Message</h2></label>
      <textarea name="message" rows="4"/>
      <input type="submit" value="Send" className='email-btn'/>
    </form></div>
    </div>
   </div> 
    
  );
};
export default Email