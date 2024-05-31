import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css';

function App() {

  //animate

  return (
    <div className="App">
      <Navbar />
      <Home/>
      <AboutMe />
      <Skills />
      <Projects />
      <footer className="text-center text-white bg-dark p-3 mt-4">
        <p>&copy; 2024 - Ernesto Orozco</p>
        <p>Este portafolio fue creado con React</p>
      </footer>
    </div>
  );
}

export default App;
