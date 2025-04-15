import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import EnquiryForm from './components/EnquiryForm'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
    return (
        <div className="font-body bg-white text-brand">
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