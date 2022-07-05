import React from 'react';
import './services.css';
import Nav from '../../components/nav/Nav';
import Footer from '../footer/Footer';
import image11 from '../pics/image11.jpg';
import {Link} from 'react-router-dom';

function Services() {
  // const [register , setRegister] = useState([])
  return (
    <div className='services'>
      <Nav/> 
      <div className="serviceCon">
          <div className="serviceTitle">
              <h1>our services</h1>
          </div>
        <div className="serviceList">
          <div className="serviceTitle service_sewing">
            <h1>Sewing</h1>
          <div className="serviceSewing">
            <div className="servicsSewingImg">
              <img src={image11} alt="pics" />
            </div>
            <div className="serviceSewingTxt"> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae tenetur temporibus, pariatur voluptates modi optio exercitationem, autem non expedita vel quod blanditiis consequatur eaque.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae tenetur temporibus, pariatur voluptates modi optio exercitationem, autem non expedita vel quod blanditiis consequatur eaque.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae tenetur temporibus, pariatur voluptates modi optio exercitationem, autem non expedita vel quod blanditiis consequatur eaque.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae tenetur temporibus, pariatur voluptates modi optio exercitationem, autem non expedita vel quod blanditiis consequatur eaque.</p>
            </div>
          </div>
          </div>
          <hr />
          <div className="serviceTitle service_academy">
              <h1>academy</h1>
          <div className="serviceAcademy">
            <div className="serviceAcademyImg">
            <img src={image11} alt="academy" />
            </div>
            <div className="serviceAcademyTxt">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam ab saepe laudantium! Laboriosam delectus totam ut ab minima consectetur, expedita accusantium molestias accusamus eligendi sed consequatur vero consequuntur suscipit voluptates architecto dolores. Similique, nulla deserunt vitae facere iste quisquam! Velit repellat ullam esse nemo dolorum beatae natus reprehenderit. Maxime.</p>
            <button className="btnAcadamy" type='button'>
              <Link to="/register" className="linking">Register</Link>
              </button>
            </div>
            </div>
            </div>
            <hr />
          <div className="serviceTitle service_accessories">
            <h1>accessories</h1>
          <div className="serviceAccessories">
            <div className="card">
              <div className="cardImg">
                <img src={image11} alt="bag" />
              </div>
              <div className="cardTitle">Bag</div>
            </div>
            <div className="card">
              <div className="cardImg">
                <img src={image11} alt="Facinilator" />
                </div>
              <div className="cardTitle">Facinilator</div>
            </div>
            <div className="card">
              <div className="cardImg">
                <img src={image11} alt="Beeds" />
                </div>
              <div className="cardTitle">Beeds</div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Services