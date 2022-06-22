import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../footer/Footer';
import './contact.css';
import avatar from '../pics/avatar.png';

function Contact
() {
  return (
        <div className='contact'>
          <Nav/>
            <div className="contactCon">
              <h1>Get in touch</h1>
              <div className="contactWrapper">
                <div className="address">
                    <div className="contactImg">
                        <img src={avatar} alt="avater" />
                    </div>
                    <div className="calUs">
                      <p>(+234) 07061231623</p>
                      <p>(+234) 07061231623</p>
                    </div>
                    <div className="emailUs">
                      <p> 
                      info@dammywiseheartfashion.com
                      </p>
                    </div>
                    <div className="locateUs">
                      <p>Adjacent L.E.A Primary school Katampe 1, Mpape District, FCT Abuja. Nigeria</p>
                    </div>
                </div>
                <div className="form">
                  <form>
                    <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" placeholder='Enter your name' />
                    </div>
                    <div className="form-control">
                    <label htmlFor="name">email</label>
                    <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="form-control">
                    <label htmlFor="name">phone</label>
                    <input type="phone" placeholder='Enter your phone' />
                    </div>
                    <div className="form_control">
                    <label htmlFor="name">message</label>
                    <textarea name="message"  cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <div className="form-control">
                    <input type="submit" value='Submit' />
                    </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Contact
