import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="body__footer">
      <footer className="footer-container">
        <ul >
          <li ><Link to="/about" className="footer__about" >About us</Link></li>
          <li ><Link to="/contact" >Contact</Link></li>
        </ul>
        <ul >
          <li >
            <a href="https://twitter.com/?lang=en" target="_blank">
            <img className="footer__icon" src={twitter} alt="twitter" />
              Twitter
          </a>
          </li>
          <li >
            <a href="https://www.facebook.com" target="_blank">
            <img className="footer__icon" src={facebook} alt="facebook" />
              Facebook
          </a>
          </li>
        </ul>
      </footer>
      </div>
    );
  }
}
