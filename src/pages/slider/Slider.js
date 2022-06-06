import React from "react";
import "./slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image01 from "../pics/image01.jpg";
import image02 from "../pics/image02.jpg";
import image03 from "../pics/image03.jpg";
import image04 from "../pics/image04.jpg";
import image05 from "../pics/image05.jpg";
import image06 from "../pics/image06.jpg";
import image07 from "../pics/image07.jpg";
import image08 from "../pics/image08.jpg";

function Slider() {
  return (
    <div className="slider">
      <AliceCarousel
        activeIndex={200}
        autoPlay
        autoHeight
        autoWidth
        autoPlayDirection
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={2000}
        animationType="slide"
        infinite
        touchTracking
        disableDotsControls
        disableButtonsControls
      >
        <img src={image01} className="sliderimg" alt="" />
        <img src={image02} className="sliderimg" alt="" />
        <img src={image03} className="sliderimg" alt="" />
        <img src={image04} className="sliderimg" alt="" />
        <img src={image05} className="sliderimg" alt="" />
        <img src={image06} className="sliderimg" alt="" />
        <img src={image07} className="sliderimg" alt="" />
        <img src={image08} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}

export default Slider;
