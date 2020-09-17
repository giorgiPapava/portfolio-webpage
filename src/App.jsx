import About from 'components/about/About';
import Projects from 'components/about/Projects/Projects';
import Contact from 'components/contact/Contact';
import Home from 'components/home/Home';
import Resume from 'components/resume/Resume';
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
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
