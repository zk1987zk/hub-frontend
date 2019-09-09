import React from 'react';

export default class TopNav extends React.Component {
  render(){
    return (
      <div className="nav-flex-container">
        <h1>Hulu</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who Are We</a></li>
            <li><a href="/what">What We Do</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>     
          </ul>
        </nav>
      </div>
    );
  }
}
