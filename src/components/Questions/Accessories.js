import React from 'react';
import {Link} from 'react-router-dom';

const Accessories = () => {
  return (
    <div>
      Avez-vous des accessoires ?
      <Link to="/questionnaire_code_promotionnel"> <button>ok</button></Link>
    </div>
  )
}

export default Accessories;
