import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../footer/Footer';
import './blog.css';

function Blog() {
  return (
    <div className='blog'>
        <Nav/>
        <div className="blogCon">
          <div className="blogMain">
          <h1>latest fashion news</h1>
          <p>gsfnvafjcj</p>
          </div>
          {/* <div className="blogAside">
            <p>Lorem ipsum dolor sit amet.</p>
          </div> */}
        </div>
        <Footer/>
    </div>
  )
}

export default Blog