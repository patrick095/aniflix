import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/Logo.png';
import './styles.css';

function Footer() {

  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Aniflix logo" />
      </a>
      <p>
        Melhor site de animes do Brasil!!!
      </p>
    </FooterBase>
  );
}

export default Footer;

