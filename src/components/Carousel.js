import React, { Component } from 'react';
import './Carousel.css';
import Form from './Form';
import iphone6 from '../assets/iphone6.png';
import iphone6s from '../assets/iphone6S.jpg';
import iphone6sPlus from '../assets/iphone6SPlus.png';
import iphoneSE from '../assets/iphoneSE.png';
import iphone7 from '../assets/iphone7.jpeg';
import iphone7sPlus from '../assets/iphone7SPlus.png';
import iphone8 from '../assets/iphone8.png';
import iphone8Plus from '../assets/iphone8Plus.png';
import iphoneX from '../assets/iphoneX.png';
import iphoneXS from '../assets/iphoneXs.png';
import iphoneXsMax from '../assets/iphoneXsMax.png';

class Carousel extends Component {

    state = {
        picturesList : [
            {name: "iPhone 6",
            link: iphone6},
            {name: "iPhone 6+",
            link: iphone6},
            {name: "iPhone 6s",
            link: iphone6s},
            {name: "iPhone 6s +",
            link: iphone6sPlus},
            {name: "iPhone SE",
            link: iphoneSE},
            {name: "iPhone 7",
            link: iphone7},
            {name: "iPhone 7s +",
            link: iphone7sPlus},
            {name: "iPhone 8",
            link: iphone8},
            {name: "iPhone 8 +",
            link: iphone8Plus},
            {name: "iPhone X",
            link: iphoneX},
            {name: "iPhone XS",
            link: iphoneXS},
            {name: "iPhone XS Max",
            link: iphoneXsMax},
        ],
        selectedItem : 2,
        showCarousel : true,
        open: false,
        iphoneNameSelected: '',
    };

    handleClickOpen = (picture) => {
        this.setState({ open: true, iphoneNameSelected:picture });
    };

    toggleOpening = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    moveToSelected = (element) => {
        const {selectedItem, picturesList} = this.state
        switch (element) {
            case "next":
                this.setState({selectedItem: (selectedItem >= picturesList.length - 1) ? picturesList.length - 1 : selectedItem + 1})
                break;
            case "prev":
                this.setState({selectedItem: (selectedItem <= 0) ? 0 : selectedItem - 1})
                break;
            default:
            this.setState({selectedItem: (selectedItem >= picturesList.length - 1) ? picturesList.length - 1 : selectedItem + 1})
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

    legend = (i) => {
        return i === this.state.selectedItem ? "legendVisible" : "legendHidden";
    }

    render() {
        const { picturesList, open, iphoneNameSelected } = this.state
    return (
        <div className="carousel">
            <p className="carouselTitle">Quel est votre modèle d'iPhone ?</p>
            <div  className="totalCarousel" >
            <div id="carousel" >
                {picturesList.map((picture, i)=> {
                    return(
                    <div onClick={() => this.handleClickOpen(picture.name)} key={i} className={this.classNameSelector(i)}>
                    <figure>
                        <img  src={picture.link} alt={picture.name} />
                        <figcaption className={this.legend(i)}>{picture.name}</figcaption>
                        </figure>
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
