import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
 const Contact = () => {
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
     

    <div className="custom-container">
        <h1 className='head1'>Contact Us</h1>
        <div class="mapouter">
          <div className="gmap_canvas">
            <iframe className="gmap_iframe" frameborder="100" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Home Ahmedabad - Luxury Home Decor, Cushion Covers, Dinner Set, Table lamps&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div></div>
         <div className='bg-container'>
        <div className = "form-box">
      <form ref={form} onSubmit={sendEmail}>
      <label><h2 className='head'>Name</h2></label>
      <input type="text" name="user_name" />
      <label><h2 className='head'>Email</h2></label>
      <input type="email" name="user_email"/>
      <label><h2 className='head'>Message</h2></label>
      <textarea name="message" rows="4"/>
      <input type="submit" value="Send" className='button-75'/>
    </form></div>
    </div>
   </div> </div>
    
  );
};
export default Contact