import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Carousel.scss";

import iphone6 from '../assets/iphone6legend.png';
import iphone6Plus from '../assets/iphone6+++.png';

class Carousel extends Component {

  state = {
    currdeg: 0
  }

  rotate = (direction) => {

    switch (direction) {
      case 'next':
        this.setState({
          currdeg: this.state.currdeg + 30
        })
        break;
      case 'prev':
        this.setState({
          currdeg: this.state.currdeg - 30
        })
        break;

      default:
        this.setState({
          currdeg: this.state.currdeg + 30
        })
        break;
    }
  }

  render() {
    const { currdeg } = this.state;

    return (
      <div className="CarouselApp">
        <h2 className="carouselTitle">Quel est votre modèle d'iPhone ?</h2>
        <div className="container">
          <div className="carousel" style={{ transform: `rotateY(${currdeg}deg)` }}>
            <Link to="/questionnaire_capacité">
                <img src={iphone6} className="iphone six" alt="iphone6" />
                <img src={iphone6Plus} className="iphone sixPlus" alt="iphone6" />
                <img src={iphone6} className="iphone sixS" alt="iphone6"/>
                <img src={iphone6} className="iphone sixSPlus" alt="iphone6" />
                <img src={iphone6} className="iphone se" alt="iphone6" />
                <img src={iphone6} className="iphone sept" alt="iphone6" />
                <img src={iphone6} className="iphone septPlus" alt="iphone6" />
                <img src={iphone6} className="iphone huit" alt="iphone6" />
                <img src={iphone6} className="iphone huitPlus" alt="iphone6" />
                <img src={iphone6} className="iphone x" alt="iphone6" />
                <img src={iphone6} className="iphone xs" alt="iphone XS" />
                <img src={iphone6} className="iphone xsMax" alt="iphone6" />
            </Link>
          </div>
        </div>
        <div className="next" onClick={() => this.rotate('next')} >Next</div>
        <div className="prev" onClick={() => this.rotate('prev')}>Prev</div>
      </div>
    )
  }
}

export default Carousel;
