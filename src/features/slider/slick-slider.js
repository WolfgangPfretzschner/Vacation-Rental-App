import React, { Component } from "react";
import Slider from "react-slick";
// import "./slider.css";

export default class AutoPlay extends Component {
   picMaker = () => {
       return (
          this.props.images && this.props.images.map(url => {
          return  <div > <img src={url} style={{height: '400px'}} alt={"potato"}/>  </div> }
          )
          
       )
   }
  
  
   render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay: true,
      centerMode:true,
      // centerPadding:'400px,',
      
    };
    
    return (
      <div className="slick-slider">
        <Slider {...settings}>
        {this.picMaker()}
        </Slider>
      </div>
    );
  }
}