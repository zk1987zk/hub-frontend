import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default class TopNav extends React.Component {
  render() {
    return (
        <nav className="nav-container">
          <ul className="nav__left">
            <li ><img className="nav__logo" src={logo} alt="logo" /></li>
            <li >Hub</li>
          </ul>
          <ul className="nav__right">
            <li ><Link to="/" >Home</Link></li>
            <li ><Link to="/register" >Register</Link></li>
            <li ><Link to="/login" >Login</Link></li>
          </ul>
        </nav>
    );
  }
}
