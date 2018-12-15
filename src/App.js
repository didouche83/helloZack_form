import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header';
// import Carousel from './components/Carouseltest';
import Capacity from './components/Questions/Capacity';
import State from './components/Questions/State';
import Accessories from './components/Questions/Accessories';
import PromotionalCode from './components/Questions/PromotionalCode';
import Mail from './components/Questions/Mail';
import Carousel from './components/Carousel';
import Validation from './components/Validation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Carousel} />
            <Route path="/questionnaire_capacité" component={Capacity} />
            <Route path="/questionnaire_état" component={State} />
            <Route path="/questionaire_accessoires" component={Accessories} />
            <Route path="/questionnaire_code_promotionnel" component={PromotionalCode} />
            <Route path="/questionnaire_mail" component={Mail} />
            <Route path="/questionnaire_validé" component={Validation} />
            {/* <Route path="/questionnaire" component={Form} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
