import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import patternBackgroundDesktop from "./images/pattern-background-desktop.svg";

function App() {

  return (
    <div className='App' >
        <img
            src={patternBackgroundDesktop}
            alt='Pattern background'
            className='PatternBackground'
        />
        <Card/>
    </div>
  );
}

export default App;
