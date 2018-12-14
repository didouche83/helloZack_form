import React from 'react';
import {Link} from 'react-router-dom';

const Mail = () => {
  return (
    <div>
      Quelle est votre adresse mail ?
      <Link to="/questionnaire_code_promotionnel"> <button>Question précédente</button></Link>
    </div>
  )
}

export default Mail;
