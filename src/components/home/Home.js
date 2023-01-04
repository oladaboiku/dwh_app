import React from 'react';
import Features from '../../pages/features/Features';
import Nav from '../nav/Nav';
import Products from '../../pages/products/Products';
// import Slider from '../../pages/slider/Slider';
import Works from '../../pages/works/Works';
import Footer from '../../pages/footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Nav/>
        {/* <Slider/> */}
        <Features/>
        <Works/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home