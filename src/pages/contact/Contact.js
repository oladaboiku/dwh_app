import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className="contactForm">
        <form >
          <div className="form">
            <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input type="text" className='formList' placeholder='Name' />
            </div>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" className='formList' placeholder='Email' />
            </div><div className='form-control'>
                <label htmlFor="phone">Phone</label>
                <input type="phone" className='formList' placeholder='Phone Number' />
            </div>
            <div className='form-control'>
              <div className="genderSelect">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="" />
              </div>
            </div>
            <div className='form-control'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Contact