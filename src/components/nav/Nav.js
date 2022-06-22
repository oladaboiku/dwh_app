import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Logo from '../pic/logo.png';

function Nav() {
  return (
    <div className="nav">
        <div className="navCon">
            <div className="navlogo">
                    {/* <h1>DWH Fashion</h1> */}
                    <Link to="/" className="linking">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
            <div className="navList">
                <ul className="list">
                    <li className="list_nav"><Link to="/" className="linking">home</Link></li>
                    <li className="list_nav"><Link to="/about" className="linking">about</Link></li>
                    <li className="list_nav"><Link to="/services" className="linking">services</Link></li>
                    <li className="list_nav"><Link to="/blog" className="linking">blog</Link></li>
                    <li className="list_nav"><Link to="/contact" className="linking">contact</Link></li>
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