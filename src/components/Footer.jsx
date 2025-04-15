import React from 'react';
import '../App.scss';

const Footer = () => {
    return (
        <footer className="footer-section">
            <p>&copy; {new Date().getFullYear()} Neovate Code. All rights reserved.</p>
            <p>
                <a href="mailto:info@neovatecode.com">info@neovatecode.com</a>
            </p>
        </footer>
    )
}

export default Footer
