import React from 'react';
import './App.scss';  // Import the global css file for now
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Contact />
        </div>
    );
};

export default App;