import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div id="contact"  className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name"><b>Your Name:</b></label>
        <input type="text" id="name" name="name" placeholder='Your Name' />
        

        <label htmlFor="email"><b>Your Email:</b></label>
        <input type="email" id="email" name="email" placeholder='Enter a Valid Email' />
       

        <label htmlFor="message"><b>Your Message:</b></label>
        <textarea id="message" name="message" rows="4" placeholder='Enter your Message Here'></textarea>
       

        <button type="submit"><b>Submit</b></button>
      </form>

      
      <div className="contact-sections">
       
        <div className="contact-section">
          <h3><b>Visit Us</b></h3>
          <p><b>Keela Ambikapuram, Malayappa Nagar,Trichy-620004.</b></p>
        </div>

       
        <div className="contact-section">
          <h3><b>Customer Support</b></h3>
          <p><b>Email: support@slfoods.com</b></p>
          <p><b>Phone: +1 234-567-8901</b></p>
        </div>
      </div>

      
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.298187153607!2d78.7231867380774!3d10.799890807400981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf493a0c376ff%3A0xa6bd98cf813ae473!2sKeela%20Ambikapuram%2C%20Malayappa%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620004!5e0!3m2!1sen!2sin!4v1705665158196!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
   
  
  );
};

export default Contact;
