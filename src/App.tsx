import React from 'react';
import './App.css';
import mobileDesign from './design/mobile-design.jpg'
import Card from "./components/Card/Card";

function App() {
  return (
    <div className='App'>
        <Card/>
      <img
        src={mobileDesign}
      />
    </div>
  );
}

export default App;
