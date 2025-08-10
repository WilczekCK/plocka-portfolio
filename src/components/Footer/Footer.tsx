import React, { useState } from "react";
import "./Footer.scss";
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import BehanceIcon from '../../assets/icons/behance.svg';


const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <h3>Stwórzmy wspólnie coś niesamowitego!</h3>
        <div className="footer__copyright">
          <p>© Natalia Płocka {new Date().getFullYear()}</p>
          <div className="footer__copyright--socials">
            <a href="https://www.instagram.com/plocka.natalia/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/natalia.plocka.design" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/natalia-plocka-2b4b6b1b8/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
            <a href="https://www.behance.net/plockanatalia" target="_blank" rel="noopener noreferrer">
              <BehanceIcon />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
