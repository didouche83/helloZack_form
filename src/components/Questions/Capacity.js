import React from 'react';
import {Link} from 'react-router-dom';

const Capacity = () => {
  return (
    <div>
      Quelle est la capacité de votre iPhone ?
      <Link to="/questionnaire_état"> <button>ok</button></Link>
    </div>
  )
}

export default Capacity;
