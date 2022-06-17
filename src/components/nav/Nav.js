import React from 'react';
import './nav.css';
// import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
        <div className="navCon">
            <div className="navlogo">
                    <h1>DWH Fashion</h1>
                </div>
            <div className="navList">
                <ul className="list">
                    <li className="list_nav">home</li>
                    <li className="list_nav">about</li>
                    <li className="list_nav">services</li>
                    <li className="list_nav">blog</li>
                    <li className="list_nav">contact</li>
                </ul>
                <div className="navBtn">
                    <button className="btnVisit">visit us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav