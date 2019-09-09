import React from 'react';

import TopNav from './components/App/TopNav';
import Routes from './components/App/Routes'

function App() {
  return (
    <div>
      <TopNav></TopNav>
      <main className="container">
        <Routes />
      </main>  
    </div>
  );
}

export default App;
