import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ReactTypingEffect from "react-typing-effect";
import Typewriter from 'typewriter-effect';

const App = () => {
  return (
    <div className="w-full h-20 bg-pink-100"> {/* Light pink base */}

      
      {/* Grid overlay with slightly darker pink lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fca5a52e_1px,transparent_1px),linear-gradient(to_bottom,#fca5a52e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
};

export default App;
