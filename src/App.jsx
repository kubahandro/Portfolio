import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
