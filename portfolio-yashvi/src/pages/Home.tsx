import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="relative bg-[#020617] text-white min-h-screen font-sans selection:bg-[#06b6d4]/30">
            <Navbar />
            <div className="w-full">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
