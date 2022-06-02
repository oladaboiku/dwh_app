import React from "react";
import "./slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" data-value="1">image01</div>,
  <div className="item" data-value="1">image02</div>,
  <div className="item" data-value="1">image03</div>,
  <div className="item" data-value="1">image04</div>,
  <div className="item" data-value="1">image05</div>,
  <div className="item" data-value="1">image06</div>,
  <div className="item" data-value="1">image07</div>,
  <div className="item" data-value="1">image08</div>,
]
// import image01 from './pics/image01.jpg';
// import image02 from './pics/image02.jpg';
// import image03 from './pics/image03.jpg';
// import image04 from './pics/image04.jpg';
// import image05 from './pics/image05.jpg';
// import image06 from './pics/image06.jpg';
// import image07 from './pics/image07.jpg';
// import image08 from './pics/image08.jpg';

function Slider() {
  return (
    <div className="slider">
      <AliceCarousel 
      autoPlay
      autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="fadeout"
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls 
      item ={items}/>
    </div>
  );
}

export default Slider;
