import React, { Component } from 'react';
import './Carousel.css';
import Form from './Form';
import list from '../iphones.js';

class Carousel extends Component {

    state = {
        picturesList : [],
        selectedItem : 2,
        showCarousel : true,
        open: false,
        iphoneNameSelected: '',
    };

    componentDidMount(){
        this.setState({picturesList: list})
    }

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
