import React from 'react';

export default class TopNav extends React.Component {
  render(){
    return (
      <div className="nav-flex-container">
        <h1>Hulu</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Who Are We</li>
            <li>What We Do</li>
            <li>Register</li>
            <li>Login</li>     
          </ul>
        </nav>
      </div>
    );
  }
}
