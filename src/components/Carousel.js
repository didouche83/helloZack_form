import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iphone6 from '../assets/iphone6legend.png';
import './Carousel.css';

class Carousel extends Component {

    state = {
        picturesList : [
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
            iphone6,
        ],
        selectedItem : 1,
    };

    moveToSelected = (element) => {
        switch (element) {
            case "next":
                this.setState({selectedItem: (this.state.selectedItem>= this.state.picturesList.length-1) ? this.state.picturesList.length-1 :   this.state.selectedItem + 1})
                break;
            case "prev":
                this.setState({selectedItem: (this.state.selectedItem<=-1) ? -1  : this.state.selectedItem - 1})
                break;
            default:
            this.setState({selectedItem: (this.state.selectedItem>= this.state.picturesList.length-1) ? this.state.picturesList.length-1 :   this.state.selectedItem + 1})
                break;
        };
    }

    classNameSelector = (id) => {
        switch (id - this.state.selectedItem) {
            case 0:
                return "selected";
            case 1:
                return "next";
            case 2:
                return "nextRightSecond";
            case 3:
                return "hideRight";
            case -1:
                return "prev";
            case -2:
                return "prevLeftSecond";
            case -3:
                return "hideLeft";
            default:
                return "hidden";
        }
    }

      
    //   // Eventos teclado
    //   $(document).keydown(function(e) {
    //       switch(e.which) {
    //           case 37: // left
    //           moveToSelected('prev');
    //           break;
      
    //           case 39: // right
    //           moveToSelected('next');
    //           break;
      
    //           default: return;
    //       }
    //       e.preventDefault();
    //   });
      
    //   $('#carousel div').click(function() {
    //     moveToSelected($(this));
    //   });
      
    //   $('#prev').click(function() {
    //     moveToSelected('prev');
    //   });
      
    //   $('#next').click(function() {
    //     moveToSelected('next');
    //   });
      
  render() {
      const { picturesList } = this.state
    return (
        <div>
            <Link to="/questionnaire_capacité">
            <div id="carousel">
                {picturesList.map((picture, i)=>
                    <div key={i} className={this.classNameSelector(i)}>
                        <img src={picture} alt={`iPhone n°${i}`} />
                    </div>)

                }
                {/* <div className="hideLeft">
                    <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg" />
                </div>

                <div className="prevLeftSecond">
                    <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg" />
                </div>

                <div className="prev">
                    <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg" />
                </div>

                <div className="selected">
                    <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg" />
                </div>

                <div className="next">
                    <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg" />
                </div>

                <div className="nextRightSecond">
                    <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg" />
                </div>

                <div className="hideRight">
                    <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg" />
                </div>*/}
            </div> 
            </Link>

            <div className="buttons">
                <button id="prev" onClick={() => this.moveToSelected('prev')}>Prev</button>
                <button id="next" onClick={() => this.moveToSelected('kuyjtyjykhjghfgj')}>Next</button>
            </div>

        </div>
    )
    }
}

export default Carousel;
