import React from 'react';
import './about.css'; 
import Footer from '../../pages/footer/Footer';
import Nav from '../../components/nav/Nav';
import image01 from '../pics/image01.jpg'

function About() {
  return (
    <div className='about'> 
      <Nav/>
      <div className="aboutWrapper">
        <h1>About US</h1>
        <div className='aboutCon'>
          <div className="aboutImg">
            <img src={image01} alt="" />
            <p>Mrs Damilola O Daboiku</p>
            <span>C.E.O</span>
          </div>
          <div className="aboutProfile">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsam nam ullam aut! Debitis cupiditate qui, nisi quod, possimus atque obcaecati quis quia molestiae fugit quas doloremque, sint eos ex?</p><br/> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsam nam ullam aut! Debitis cupiditate qui, nisi quod, possimus atque obcaecati quis quia molestiae fugit quas doloremque, sint eos ex?</p><br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsam nam ullam aut! Debitis cupiditate qui, nisi quod, possimus atque obcaecati quis quia molestiae fugit quas doloremque, sint eos ex?</p><br/> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsam nam ullam aut! Debitis cupiditate qui, nisi quod, possimus atque obcaecati quis quia molestiae fugit quas doloremque, sint eos ex?</p>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default About