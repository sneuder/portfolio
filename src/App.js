import React from "react";

import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/about_me/about_me";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="app">
     <Navbar />
     <AboutMe />
     <Projects />
     <Skills />
    </div>
  );
}

export default App;
