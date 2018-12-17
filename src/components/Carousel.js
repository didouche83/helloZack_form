import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iphone6 from '../assets/iphone6legend.png';
import iphoneX from '../assets/iphoneX.png';
import iphoneX4 from '../assets/iPhoneX4.jpeg';
import './Carousel.css';
import Form from './Form';


class Carousel extends Component {

    state = {
        picturesList : [
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphone6},
        ],
        selectedItem : 2,
        showCarousel : true,
        open: false,
        iphoneNameSelected: '',
    };
    
      handleClickOpen = () => {
        this.setState({ open: true, iphoneNameSelected:this.state.picturesList.name });
      };

      toggleOpening = () => {
        const { open } = this.state;
        this.setState({ open: !open });
      }

    moveToSelected = (element) => {
        switch (element) {
            case "next":
                this.setState({selectedItem: (this.state.selectedItem >= this.state.picturesList.length - 1) ? this.state.picturesList.length - 1 :   this.state.selectedItem + 1})
                break;
            case "prev":
                this.setState({selectedItem: (this.state.selectedItem <= 0) ? 0  : this.state.selectedItem - 1})
                break;
            default:
            this.setState({selectedItem: (this.state.selectedItem >= this.state.picturesList.length - 1) ? this.state.picturesList.length - 1 :   this.state.selectedItem + 1})
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

    visibilityCarouseliPhones = () => {
        this.setState({showCarousel: false})
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
      const { picturesList, selectedItem, open, iphoneNameSelected } = this.state
      console.log('name', this.state.iphoneNameSelected)

    return (
        <div>{/*onClick={this.visibilityCarouseliPhones} */}
            <p className="carouselTitle">Quel est votre modèle d'iPhone ?</p>
            <div  className="totalCarousel" id="totalCarousel" >
            <div id="carousel" >
                {picturesList.map((picture, i)=> {
                    return( <div key={i} className={this.classNameSelector(i)}>
                         <img onClick={this.handleClickOpen} src={picture.link} alt={picture.name} /> {/*onClick={() => this.moveToSelected(i < selectedItem ? 'prev' : 'next' )}  */}
                    </div>)}

                )}
            </div>
            <div className="buttons">
                <button id="prev" onClick={() => this.moveToSelected('prev')}>Prec</button>
                <button id="next" onClick={() => this.moveToSelected('next')}>Suiv</button>
            </div>
            </div>
            <Form onOpen={() => this.toggleOpening()} name={iphoneNameSelected} openOrNot={open} />
        </div>
    )
    }
}

export default Carousel;
