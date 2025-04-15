import React from 'react';
import '../App.scss';

const Hero = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-10 border-b-2 border-brand">
      <div className="flex-1">
        <h1 className="text-6xl md:text-8xl font-heading uppercase leading-none tracking-tight" data-aos="fade-down">
          Neovate Code
        </h1>
        <p className="mt-6 text-lg max-w-xl font-light tracking-wide">
          Full-stack web development with a creative, editorial twist. Let’s make your next digital project unforgettable.
        </p>
        <button className="mt-10 px-6 py-3 border-2 border-brand text-brand font-heading uppercase hover:bg-brand hover:text-white transition-all duration-300">
          Work with me
        </button>
      </div>
      <div className="flex-1">
        <img src="/hero-img.png" alt="Hero visual" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}

export default Hero;
