import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <footer className="text-center text-white p-6 mt-8 muted">
          <p>&copy; {new Date().getFullYear()} - Ernesto Orozco</p>
          <p className="text-sm mt-1">Portafolio creado con Vite+React</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
