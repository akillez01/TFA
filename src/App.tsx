import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Projects from './components/Projects';
import CasaCajueiro from './components/CasaCajueiro';
import Partners from './components/Partners';
import Services from './components/Services';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ancestral-earth via-ancestral-clay to-ancestral-bark">
      <Header />
      <Hero />
      <About />
      <Members />
      <Projects />
      <CasaCajueiro />
      <Partners />
      <Services />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;