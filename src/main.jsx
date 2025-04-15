import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './App.scss';
import 'aos/dist/aos.css'; // AOS for scroll animations

// Initailise AOS for animations
import AOS from 'aos';

useEffect(() => {
AOS.init({
  duration: 1000,
  once: true, // Only animate on first scroll
  easing: 'ease-out-quart',
});
}, []);

// Render the app to the DOM
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

