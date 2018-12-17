import React, { Component } from 'react';
import './Carousel.css';
import Form from './Form';
import iphone6 from '../assets/iphone6legend.png';
import iphonex from '../assets/iphoneX8.png';


class Carousel extends Component {

    state = {
        picturesList : [
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6",
            link: iphonex},
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
                this.setState({selectedItem: (this.state.selectedItem >= this.state.picturesList.length - 1) ? this.state.picturesList.length - 1 : this.state.selectedItem + 1})
                break;
            case "prev":
                this.setState({selectedItem: (this.state.selectedItem <= 0) ? 0 : this.state.selectedItem - 1})
                break;
            default:
            this.setState({selectedItem: (this.state.selectedItem >= this.state.picturesList.length - 1) ? this.state.picturesList.length - 1 : this.state.selectedItem + 1})
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

  render() {
      const { picturesList, selectedItem, open, iphoneNameSelected } = this.state

    return (
        <div>
            <p className="carouselTitle">Quel est votre modèle d'iPhone ?</p>
            <div  className="totalCarousel" >
            <div id="carousel" >
                {picturesList.map((picture, i)=> {
                    return(
                    <div key={i} className={this.classNameSelector(i)}>
                        <img onClick={this.handleClickOpen} src={picture.link} alt={picture.name} />
                    </div>)}

                )}
            </div>
            <div className="buttons">
                <button id="prev" onClick={() => this.moveToSelected('prev')}>&#60;</button>
                <button id="next" onClick={() => this.moveToSelected('next')}>&#62;</button>
            </div>
            </div>
            <Form onOpen={() => this.toggleOpening()} name={iphoneNameSelected} openOrNot={open} />
        </div>
    )
    }
}

export default Carousel;
