import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <ul className="footer__left">
          <li ><Link to="/about" >About us</Link></li>
          <li ><Link to="/contact" >Contact</Link></li>
        </ul>
        <ul className="footer__right">
          <li >
            <a href="https://twitter.com/?lang=en" target="_blank">
              Twitter
          </a>
          </li>
          <li >
            <a href="https://www.facebook.com" target="_blank">
              Facebook
          </a>
          </li>
        </ul>
      </footer>
    );
  }
}
