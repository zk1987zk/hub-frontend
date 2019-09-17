import React from 'react';

import TopNav from './components/App/TopNav';
import Footer from './components/App/Footer';
import Routes from './components/App/Routes'

function App() {
  return (
    <div>
      <TopNav></TopNav>
      <main className="container">
        <Routes />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
