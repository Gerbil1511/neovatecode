import React from 'react';
import '../App.scss';

const Projects = () => {
    return (
        <section className="col-span-full border-t-4 border-brand pt-16 pb-12">
            <h2 className="font-heading text-5xl uppercase tracking-tight mb-10">
                Projects
            </h2>
            

            <div className="grid gap-10">
                {[1, 2, 3].map((project) => (
                    <div key={project} className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
                        <img
                            src={`https://placehold.co/600x400?text=Project+${project}`}
                            alt={`Project ${project}`}
                            className="w-full border-2 border-brandgrayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition duration-700 ease-in-out shadow-lg rotate-[-1deg]"
                            data-aos="zoom-in"
                        />
                        <div>
                            <h3 className="font-heading text-3xl uppercase mb-2">Project {project}</h3>
                            <p className="text-base leading-relaxed">
                                A custom web experience for a bold brand. This project combined aesthetic impact
                                with responsive architecture, built with React, Django, and creative confidence.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
