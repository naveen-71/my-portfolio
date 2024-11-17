import React from 'react';
import './Contact.css';
import ConImg from '../components/Contact.jpg';

const Contact = () => {

  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>Get in Touch</p>
      <hr className="contact-divider" />
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/naveenkumar-s 6a5659283/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/s___naveen___22/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram" ></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQLxtcXXllWWbdlHmdplBpzFmTGgzWrCDWwdRNBpSkrvvLHZMzTQdvjGMZDkghrCxdshQh">
        <i class="fa-solid fa-envelope" ></i>
        </a>
        <a href="https://github.com/naveen-71" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" ></i> 
        </a>
      </div>
      <div className="contact-image">
        <img src={ConImg} alt="Contact" />
      </div>
      <footer className="contact-footer">
        <p>© 2024 All Rights reserved by Naveenkumar</p>
      </footer>
    </div>
  );
};

export default Contact;
