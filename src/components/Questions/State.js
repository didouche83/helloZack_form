import React from 'react';
import {Link} from 'react-router-dom';

const State = () => {
  return (
    <div>
      Quel est l'état de votre iPhone ?
      <Link to="/questionaire_accessoires"> <button>ok</button></Link>
      <Link to="/questionnaire_capacité"> <button>Question précédente</button></Link>
    </div>
  )
}

export default State;
