import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import patternBackgroundDesktop from "./images/pattern-background-desktop.svg";
import patternBackgroundMobile from "./images/pattern-background-mobile.svg";

function App() {
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleMediaQuery = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setBackgroundImage(patternBackgroundMobile);
        } else {
            setBackgroundImage(patternBackgroundDesktop);
        }
    };

    useEffect(() => {
        handleMediaQuery(); // Set initial background image on load

        window.addEventListener('resize', handleMediaQuery);
        return () => {
            window.removeEventListener('resize', handleMediaQuery);
        };
    }, []);

    return (
        <div className='App' >
            <img
                src={backgroundImage}
                alt='Pattern background'
                className='PatternBackground'
            />
            <Card/>
        </div>
    );
}

export default App;
