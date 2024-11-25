import React from 'react';
import CryptoBanner from './components/CryptoBanner';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BlackHoleButton from './components/BlackHoleButton';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <CryptoBanner/>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      {/* Gradient Background */}

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <AboutMe />
      </motion.div>

      {/* Gradient Background */}

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.div>


      {/* Gradient Background */}

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.div>

      {/* Gradient Background */}

      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Resume />
      </motion.div>

      {/* Gradient Background */}

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;