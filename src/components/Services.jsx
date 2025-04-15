import React from 'react';
import '../App.scss';

const Services = () => {
    return (
        <section className="col-span-full border-t-4 border-brand pt-16 pb-12">
            <h2 className="font-heading text-5xl uppercase tracking-tight mb-10">
                Services
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {[
                    'Full-Stack Web Development',
                    'Responsive, Mobile-First Design',
                    'UI/UX Design & Prototyping',
                    'Landing Pages & Microsites',
                    'Accessibility Audits & Fixes',
                    'Performance Optimization',
                    'Maintenance & Technical Support',
                ].map((service, i) => (
                    <div
                        key={i}
                        className="border-l-4 border-accent pl-4 hover:bg-accent hover:text-white transition"
                    >
                        <h3 className="font-heading text-2xl uppercase mb-2">
                            {service}
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, providing sleek tailored solutions.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
