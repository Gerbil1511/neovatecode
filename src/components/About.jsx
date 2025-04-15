import React from 'react';
import '../App.scss';

const About = () => {
    return (
        <section className="col-span-full border-t-4 border-brand pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <h2 className="font-heading text-5xl uppercase tracking-tight md:col-span-1" data-aos="fade-left">
                    About 
                </h2>


                <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
                    <p data-aos="fade-up" data-aos-delay="100">
                        We build bold, stylish, accessible, mobile-first websites that tell your story and make an impact.
                        From design to development we build digital experiences that look as good as they feel
                    </p>
                    <p>
                        Whether you're a creative business, agency, or independent brand, we’ll collaborate
                        to create something that feels unique and unforgettable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;