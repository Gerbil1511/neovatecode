import React from 'react';
import '../App.scss';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10 bg-[#f8f8f6] dark:bg-[#0d0d0d] border-b border-brand"
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl md:text-6xl font-heading tracking-tighter uppercase leading-tight text-brand dark:text-white">
          Neovate Code :  <br />
          Creative code for <span className="italic text-accent">brave brands</span>
        </h2>
        <p className="text-base md:text-lg font-sans text-neutral-700 dark:text-neutral-300 max-w-lg">
          Frontend & Full-stack tech solutions styled with attitude. Let’s make your next digital project unforgettable.
        </p>
        <a
          href="#contact"
          className="inline-block font-heading uppercase tracking-widest text-sm px-6 py-3 border-2 border-brand text-brand dark:text-white dark:border-white hover:bg-brand hover:text-white dark:hover:bg-white dark:hover:text-[#0d0d0d] transition-all"
        >
          Let’s Work Together
        </a>
      </div>

      {/* Image Placeholder */}
      <div className="md:w-1/2 relative aspect-square max-w-md w-full mx-auto">
        <div className="absolute inset-0 bg-mold -rotate-3"></div>
        <img
          src="/images/.jpg"
          alt="Coders Collaborating At Work"
          className="relative z-10 w-full h-full object-cover shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
        />
      </div>
    </section>
  );
}

export default Hero;
