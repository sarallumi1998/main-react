import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 SLFoods. All rights reserved.</p>
      <h2>Contact US</h2>
      <p>support@slfoods.com</p>
      <div className="social-icons">
        <a href="#a">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#a">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#a">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
