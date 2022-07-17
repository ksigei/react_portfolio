import React from 'react';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';


import './sass/main.scss';

const Main = () => (
  <div className="main">
    {/* <About />
    <Experience />
    <Projects /> */}
    <Skills />
    <Education />   
    {/* <Contact />
    <Footer /> */}
  </div>
);

export default Main;
