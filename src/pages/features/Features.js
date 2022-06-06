import React from "react";
import "./features.css";
import image09 from "../pics/image09.jpg";

function Features() {
  return (
    <div className="features">
        <h1>what we offer of clients</h1>
      <div className="featureCon">
        <div className="featureList">
          <div className="card-view">
            <div className="card-view-img">
              <img src={image09} alt="" />
            </div>
            <div className="card-view-title">
              <h2>services</h2>
            </div>
          </div>
        </div>
        <div className="featureList">
        <div className="card-view">
            <div className="card-view-img">
              <img src={image09} alt="" />
            </div>
            <div className="card-view-title">
              <h2>services</h2>
            </div>
          </div>
        </div>
        <div className="featureList">
        <div className="card-view">
            <div className="card-view-img">
              <img src={image09} alt="" />
            </div>
            <div className="card-view-title">
              <h2>services</h2>
            </div>
          </div>
        </div>
        <div className="featureList">
            <div className="card-view">
            <div className="card-view-img">
              <img src={image09} alt="" />
            </div>
            <div className="card-view-title">
              <h2>services</h2>
            </div>
          </div></div>
        <div className="featureList">
        <div className="card-view">
            <div className="card-view-img">
              <img src={image09} alt="" />
            </div>
            <div className="card-view-title">
              <h2>services</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
