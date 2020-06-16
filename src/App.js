import React from 'react';
import './App.scss';

import Features from './components/Features';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Jumbotron/>
        <Menu/>
        <Features/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
