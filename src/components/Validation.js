import React from 'react';
import logo from '../logos/logo.png';
import './Validation.css';

const Validation = () => {
  return (
    <div className="validation">
      <a href="https://www.hellozack.fr" >
      <img className="logo" src={logo} alt="Logo" />
      </a>
      <div className="validationText">
        Vos informations ont bien été enregistrées. <br/>
        Nous reviendrons vers vous par mail sous 48h !
      </div>
    </div>
  )
}

export default Validation;
