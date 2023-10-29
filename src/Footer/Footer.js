import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="features">
              <ul className="list-unstyled">
                <li><Link className='link-style' to={'/'}>Home</Link></li>
                <li><Link className='link-style' to={'/about'}>About</Link></li>
                <li><Link className='link-style' to={'/contect'}>Contect</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-media">
              <ul className="list-unstyled">
                <li><Link  className='link-style'  to="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                <li><Link className='link-style'  to="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
                <li><Link className='link-style' to="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
              &copy; {new Date().getFullYear()} Your DCompany. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
