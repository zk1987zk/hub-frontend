import React from 'react';

import Header from './components/App/Header';
import Footer from './components/App/Footer';
import Routes from './components/App/Routes'

function App() {
  return (
    <div>
      <Header></Header>
      <main className="container">
        <Routes />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
