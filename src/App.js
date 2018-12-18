import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header';
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
            <Route path="/questionnaire_validé" component={Validation} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
