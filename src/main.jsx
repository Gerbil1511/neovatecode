import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './App.scss';
import 'aos/dist/aos.css'; // AOS for scroll animations

// Initailise AOS for animations
import AOS from 'aos';
AOS.init();

// Render the app to the DOM
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
