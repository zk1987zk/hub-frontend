import React from 'react';
import { Link } from 'react-router-dom';

export default class  Footer extends React.Component {
  render(){
    return (
      <div className="nav-flex-container">
        <footer>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Twitter</li>
            <li>Facebook</li>     
          </ul>
        </footer>
      </div>
    );
  }
}
