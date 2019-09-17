import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default class header extends React.Component {
  render() {
    return (
      <div className="body__header">
        <header className="header-container">
          <ul className="header__left">
            <li ><img className="header__logo" src={logo} alt="logo" /></li>
            <li >Hub</li>
          </ul>
          <nav>
          <ul className="header__right">
            <li ><Link to="/" >Home</Link></li>
            <li ><Link to="/register" >Register</Link></li>
            <li ><Link to="/login" >Login</Link></li>
          </ul>
          </nav>
        </header>
        </div>
    );
  }
}
