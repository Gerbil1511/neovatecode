import React from 'react';
import '../App.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo"><a href="#">
                    Neovate Code</a>
                </div>
                <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;