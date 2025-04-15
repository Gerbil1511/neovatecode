import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import EnquiryForm from './components/EnquiryForm';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quart',
        });
    }, []);

    return (
        <div className="font-body bg-white text-brand">
            <Navbar />
            <Hero />
            <Layout>
                <About />
                <Services />
                <Projects />
                <Testimonials />
                <EnquiryForm />
            </Layout>
            <Footer />
        </div>
    );
}

export default App