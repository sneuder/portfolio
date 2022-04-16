import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/about_me/about_me";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="app">
     <Navbar />
     <AboutMe />
     <Projects />
    </div>
  );
}

export default App;
