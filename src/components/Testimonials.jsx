import React from 'react';
import '../App.scss';

const Testimonials = () => {
    return (
        <section className="col-span-full border-t-4 border-brand pt-16 pb-12">
      <h2 className="font-heading text-5xl uppercase tracking-tight mb-10">
        Testimonials
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        {[
          {
            quote: 'Neovate Code absolutely nailed the brief. Our launch day was flawless.',
            name: '— Creative Director, Unfiltered Studio',
          },
          {
            quote: 'Stylish, smart, and technically sharp. Will be hiring again.',
            name: '— Founder, Bold Bloom Agency',
          },
        ].map((t, i) => (
          <blockquote
            key={i}
            className="border-l-4 border-accent pl-6 italic text-lg leading-relaxed"
          >
            “{t.quote}”
            <footer className="mt-4 font-heading uppercase tracking-wide text-sm">
              {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
    )
}

export default Testimonials
