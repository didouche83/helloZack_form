import React, { Component } from 'react'
import './Quizz.css';

// const carousel = $(".carousel"),

// $(".next").on("click", { d: "n" }, rotate);
// $(".prev").on("click", { d: "p" }, rotate);

class Quizz extends Component {

  // carousel.css({
  //   "-webkit-transform": "rotateY("+currdeg+"deg)",
  //   "-moz-transform": "rotateY("+currdeg+"deg)",
  //   "-o-transform": "rotateY("+currdeg+"deg)",
  //   "transform": "rotateY("+currdeg+"deg)"
  // });

  render() {

    // const rotate = (e) => {
    //   let currdeg = 0;
    //   if(e.data.d=="n"){
    //     currdeg = currdeg - 30;
    //   }
    //   if(e.data.d=="p"){
    //     currdeg = currdeg + 30;
    //   }

    return (
      <div class="container">
      <div class="carousel">
        <div class="item a">A</div>
        <div class="item b">B</div>
        <div class="item c">C</div>
        <div class="item d">D</div>
        <div class="item e">E</div>
        <div class="item f">F</div>
        <div class="item g">G</div>
        <div class="item h">H</div>
        <img class="item iphone6" src="https://dyw7ncnq1en5l.cloudfront.net/optim/produits/71/17445/apple-iphone-6_7bb126b67e36c6cb.png" alt="iphone6" ></img>
        <div class="item j">J</div>
        <div class="item k">K</div>
        <div class="item l">L</div>
        <div class="item m">M</div>
      </div>
    <div class="next">Next</div>
    <div class="prev">Prev</div>
    </div>
    )
  }
}


export default Quizz;
