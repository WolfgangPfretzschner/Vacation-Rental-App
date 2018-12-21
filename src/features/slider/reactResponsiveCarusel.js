import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import ImageSlide from "./ImageSlide";

import uuid from "uuid";

class ReactResponsiveCarousel extends React.Component {
  renderImageSlides = () => {
    return this.props.images && this.props.images.map(url => {
      return  <div > <img src={url} style={{width: '900px', backgroundColor: "#e6e6e6"}} alt={"potato"}/>  </div> });
  };

  render() {
    return (
      <Carousel
        className="my-carousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
      >
        {this.renderImageSlides()}
      </Carousel>
    );
  }
}

export default ReactResponsiveCarousel;