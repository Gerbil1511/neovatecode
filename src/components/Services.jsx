import React from 'react';
import '../App.scss';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service">
                <h3>Responsive Web Design</h3>
                <p>Custom websites built with semantic HTML and CSS/SCSS, optimized for all devices and screen sizes.</p>
            </div>
            <div className="service">
                <h3>Interactive Web Development</h3>
                <p>Enhance your website with dynamic, interactive elements using JavaScript and TypeScript.</p>
            </div>
            <div className="service">
                <h3>Backend Development</h3>
                <p>Secure, scalable backend solutions with Python, Django, and Node.js, tailored to your needs.</p>
            </div>
        </section>
    );
};

export default Services;
