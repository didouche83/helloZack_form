import React, { Component } from 'react'
import "./Carousel.scss";

import iphone6 from '../assets/iphone6.png';
import iphoneXs from '../assets/iphoneXs.jpg'

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
        <div class="container">
          <div class="carousel" style={{ transform: `rotateY(${currdeg}deg)` }}> 
            <img src={iphone6} class="iphone six" alt="iphone6" />
            <img src={iphone6} class="iphone sixPlus" alt="iphone6" />
            <img src={iphone6} class="iphone sixS" alt="iphone6"/>
            <img src={iphone6} class="iphone sixSPlus" alt="iphone6" />
            <img src={iphone6} class="iphone se" alt="iphone6" />
            <img src={iphone6} class="iphone sept" alt="iphone6" />
            <img src={iphone6} class="iphone septPlus" alt="iphone6" />
            <img src={iphone6} class="iphone huit" alt="iphone6" />
            <img src={iphone6} class="iphone huitPlus" alt="iphone6" />
            <img src={iphone6} class="iphone x" alt="iphone6" />
            <img src={iphone6} class="iphone xs" alt="iphone XS" />
            <img src={iphone6} class="iphone xsMax" alt="iphone6" />
          </div>
        </div>
        <div class="next" onClick={() => this.rotate('next')} >Next</div>
        <div class="prev" onClick={() => this.rotate('prev')}>Prev</div>
      </div>
    )
  }
}

export default Carousel;
