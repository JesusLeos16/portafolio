import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Footer />
        </Layout>
    );
}

export default App;
