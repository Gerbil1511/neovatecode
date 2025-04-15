import React from 'react';

const About = () => {
    return (
        <section id="about" className="col-span-full border-t-4 border-brand pt-20 pb-24 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

                {/* Vertical Heading for MD+ */}
                <div className="hidden md:flex md:col-span-1 justify-center items-center relative min-h-[200px]">
                    <h2 className="font-heading text-5xl uppercase tracking-tight text-brand rotate-[-90deg] origin-left absolute left-6 top-1/2 -translate-y-1/2 ">
                        About
                    </h2>
                </div>

                {/* Horizontal Heading for SM */}
                <h2 className="font-heading text-5xl uppercase tracking-tight text-brand md:hidden mb-6">
                    About
                </h2>

                <div className="md:col-span-2 space-y-6 text-lg leading-relaxed max-w-3xl">
                    <p>
                        We build bold, stylish, accessible, mobile-first websites that tell your story and make an impact. From design to development, we craft digital experiences that look as good as they feel.
                    </p>
                    <p >
                        Whether you're a creative business, agency, or independent brand, we’ll collaborate to create something unique, unforgettable, and unapologetically you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
