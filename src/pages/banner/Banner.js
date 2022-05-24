import React from "react";
import "./banner.css";
import Dammy from "../pics/Dammy.png";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerCon">
        <div
          className="bannerLeft bannerImg"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <p>
            We make dresses that is fitting and suited for all occassion and we
            always have you on our mind for that event
          </p>
        </div>
        <div className="bannerRight">
          <img src={Dammy} alt="" />
          {/* <p>
            We make dresses that is fitting and suited for all occassion and we
            always have you on our mind for that event
          </p> */}
        </div>
      </div>
      <div className="bannerBtn">
        <button className="btnEnter" id="btnEnter" >Enter</button>
        </div>
    </div>
  );
}

export default Banner;
