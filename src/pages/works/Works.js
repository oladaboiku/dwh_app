import React from 'react';
import './works.css';
import image10 from '../pics/image10.jpg';

function Works() {
  return (
    <div className='work'>
        <div className="workCon">
            <div className="workTitle">
                <h1>our works</h1>
            </div>
            <div className="workTxt">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt temporibus magni sequi ullam unde nihil repellat eligendi autem impedit nostrum.</p>
            </div>
            <div className="workImg">
                <img src={image10} alt="" />
                <img src={image10} alt="" />
                <img src={image10} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Works