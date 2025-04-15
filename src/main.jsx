import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';
import './App.scss';
import 'aos/dist/aos.css'; // AOS for scroll animations

// Render the app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

