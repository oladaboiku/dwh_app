import React from 'react';
import './footer.css';
import Logo from '../pics/logo.png';

function Footer() {

  const today = new Date();
  // const getYear()=>{
  //   return new Date().getFullYear();
  // };
  return (
    <div className='footer'>
        <div className="footerCon">
          <div className="footerLogo">
            <img src={Logo} alt="logo"  />
          </div>
          <div className="footer_contact">
            <h2>we are here</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Mpape District, FCT, Abuja</p>
            <p><span>Phone:</span> +234 706 123 6123</p>
            <p><span>email:</span> info@dammywiseheartfashion.com</p>

          </div>
          <div className="footer_links">
          <h2>social media platforms</h2>
            <ul className="footerList">
              <li className="lists">Facebook</li>
              <li className="lists">Twitter</li>
              <li className="lists">Instagram</li>
              <li className="lists">Youtube</li>
              <li className="lists">Google+</li>
            </ul>
          </div>
        </div>
        <div className="footerCopyright">
          <p>greenTech<span>&copy; {today.getFullYear()}</span>| all reserve </p>
        </div>
    </div>
  )
}

export default Footer