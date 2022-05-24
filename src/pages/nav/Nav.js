import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';


function Nav() {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav_logo">
          <h1>DHW Fashion</h1>
        </div>
        <div className="navlist">
          <div className="nav-list">
          <ul>
            <Link  className="linking" to="/"><li>Home</li></Link>
            <Link className="linking" to="/about"><li>About</li></Link>
            <Link className="linking" to="/services"><li>Services</li></Link>
            <Link className="linking" to="/blog"><li>Blog</li></Link>
            <Link className="linking" to="/contact"><li>Contact</li></Link>
          </ul>
          </div>
          <div className="btn-list">
          <button className="btn" id="btn">Visit Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav