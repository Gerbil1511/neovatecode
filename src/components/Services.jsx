import React from 'react';
import '../App.scss';

const Services = () => {
    return (
        <section id="services" className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-t border-muted bg-base-100 px-6 md:px-12">
            {/* Vertical Section Heading */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center relative min-h-[200px]">
                <h2
                    className="font-heading text-5xl uppercase tracking-tight text-brand rotate-[-90deg] origin-left absolute left-6 top-1/2 -translate-y-1/2"

                >
                    Services
                </h2>
            </div>

            {/* Service Cards */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    {
                        title: "Full-Stack Development",
                        desc: "From sleek frontends to robust backends — built with clean code & creativity.",
                    },
                    {
                        title: "UI/UX Design",
                        desc: "Stylish, accessible, user-first experiences that convert and captivate.",
                    },
                    {
                        title: "API Integration",
                        desc: "Smooth, scalable connections between your app and the world.",
                    },
                    {
                        title: "Accessibility Audits & Fixes",
                        desc: "Ensure your website is inclusive, compliant, and user-friendly for everyone.",
                    },
                    {
                        title: "Performance Optimization",
                        desc: "Boost your website’s speed, SEO, and overall performance for a seamless experience.",
                    },
                    {
                        title: "Maintenance & Technical Support",
                        desc: "Ongoing updates, bug fixes, and support to keep your website running smoothly.",
                    },
                    {
                        title: "Consultancy & Strategy",
                        desc: "Got an idea? Let’s brainstorm and build a roadmap to launch.",
                    },
                ].map((service, i) => (
                    <div
                        key={i}
                        className="bg-mustard/80 p-6 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
                    >
                        <h3 className="font-heading text-xl mb-2 text-brand">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Services;
