import About from 'components/about/About';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';
import Home from 'components/home/Home';
import Skills from 'components/skills/Skills';
import React from 'react';
import './App.scss';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
