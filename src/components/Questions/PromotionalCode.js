import React from 'react';
import {Link} from 'react-router-dom';

const PromotionalCode = () => {
  return (
    <div>
      Avez-vous un code promotionnel ?
      <Link to="/questionnaire_mail"> <button>ok</button></Link>
      <Link to="/questionnaire_accessoires"> <button>Question précédente</button></Link>
    </div>
  )
}

export default PromotionalCode;
