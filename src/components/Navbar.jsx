



import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-brand px-4 py-3 flex justify-between items-center">
            <h1 className="font-heading text-2xl uppercase">Neovate Code</h1>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-brand dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
            </button>

            {/* Menu */}
            <ul className={`absolute top-full left-0 w-full bg-white dark:bg-black p-6 space-y-4 font-heading text-xl uppercase 
                      md:static md:flex md:space-x-6 md:p-0 md:space-y-0 
                      ${isOpen ? 'block' : 'hidden'} md:block`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}