import React from 'react';
import '../App.scss';


const EnquiryForm = () => {
    return (
        <section className="col-span-full border-t-4 border-brand pt-16 pb-24">
            <h2 className="font-heading text-5xl uppercase tracking-tight mb-10">
                Work With Us
            </h2>
            <form className="grid gap-6 max-w-3xl">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-brand px-4 py-2 bg-white text-brand placeholder:text-brand"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-brand px-4 py-2 bg-white text-brand placeholder:text-brand"
                />
                <textarea
                    placeholder="Tell us about your project..."
                    className="border border-brand px-4 py-2 h-32 bg-white text-brand placeholder:text-brand"
                ></textarea>
                <button
                    type="submit"
                    className="font-heading uppercase border-2 border-brand px-6 py-3 hover:bg-brand hover:text-white transition"
                >
                    Send Enquiry
                </button>
            </form>
        </section>
    )
}

export default EnquiryForm