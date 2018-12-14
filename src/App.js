import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default App;
