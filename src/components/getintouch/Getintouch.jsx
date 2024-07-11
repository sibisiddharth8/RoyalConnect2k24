import React from 'react';
import './getintouch.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Getintouch() {
  return (
    <div className="contact-container" id='contact'>
    <h2 className="section__title">Get in touch</h2>
    <div className="social-media-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
    <div className="contact-info">
      <p><i className="fa fa-map-marker"></i> Coimbatore, India</p>
      <p><i className="fas fa-envelope"></i> squadofcreators@gmail.com</p>
      <p><i className="fas fa-phone"></i> +91 00000 00000</p>
    </div>
    <div className='contact-form-background'>
    <div className="contact-form-container">
      <form className="contact-form">
        <h2>Contact us</h2>
        <label>Name
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>Email
          <input type="email" name="email" placeholder="your@email.com" />
        </label>
        <label>Question
          <textarea name="question" placeholder="Enter question or feedback"></textarea>
        </label>
        <button>Submit</button>
      </form>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4872501802524!2d76.95369077405732!3d11.002022089160779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598827de564b%3A0x6d1dda0dcacfb2d7!2sBhogan%20Mediasoft!5e0!3m2!1sen!2sin!4v1720635136449!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  </div>
    );
}

export default Getintouch