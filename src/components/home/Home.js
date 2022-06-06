import React from 'react';
import Features from '../../pages/features/Features';
import Nav from '../../pages/nav/Nav';
import Slider from '../../pages/slider/Slider';
import Works from '../../pages/works/Works';

function Home() {
  return (
    <div className='home'>
        <Nav/>
        <Slider/>
        <Features/>
        <Works/>
    </div>
  )
}

export default Home