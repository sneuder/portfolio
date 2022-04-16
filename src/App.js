import React from "react";

import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/about_me/about_me";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="app">
     <Navbar />
     <AboutMe />
     <Projects />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;
