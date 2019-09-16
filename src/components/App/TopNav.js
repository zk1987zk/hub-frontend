import React from 'react';
import { Link } from 'react-router-dom';

export default class TopNav extends React.Component {
  render(){
    return (
      <div className="nav-flex-container">
        <h1>Hub</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>     
          </ul>
        </nav>
      </div>
    );
  }
}
