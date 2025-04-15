import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f8f6] dark:bg-[#0d0d0d] border-b border-brand px-6 py-4 flex justify-between items-center shadow-[0_4px_6px_rgba(0,0,0,0.15)] backdrop-blur-sm">
      <h1 className="font-heading text-2xl uppercase tracking-tight text-brand dark:text-white">
        Neovate <span className="italic">Code</span>
      </h1>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-brand dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'
            }
          />
        </svg>
      </button>

      {/* Menu */}
      <ul
        className={`absolute top-full left-0 w-full bg-[#f8f8f6] dark:bg-[#0d0d0d] p-6 space-y-4 font-heading text-xl uppercase border-t border-brand shadow-md
          md:static md:flex md:space-x-6 md:p-0 md:space-y-0 
          ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <li>
          <a href="#hero" className="hover:text-accent transition-all duration-200">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-accent transition-all duration-200">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-accent transition-all duration-200">Services</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-accent transition-all duration-200">Projects</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-accent transition-all duration-200">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent transition-all duration-200">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
