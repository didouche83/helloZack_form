import React from 'react';
import logo from '../assets/logo.png';
import './Validation.css';

const Validation = () => {
  return (
    <div className="validation">
      <img className="logo" src={logo} alt="Logo" />
      <div className="validationText">
        Vos informations ont bien été enregistrées. <br/>
        Nous reviendrons vers vous par mail sous 48h !
      </div>
    </div>
  )
}

export default Validation;
