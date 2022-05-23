import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';


function Nav() {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav_logo">
          {/* <link className="linking" to="/"><h1>DHW Fashion</h1></link> */}
          <h1>DHW Fashion</h1>
        </div>
        <div className="navlist">
          <ul>
            <Link  className="linking" to="/about"><li>About</li></Link>
            <Link className="linking" to="/contact"><li>Contact</li></Link>
            <Link className="linking" to="/features"><li>Features</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav