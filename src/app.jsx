import scrolling from './config/scrolling';

import SectionContainer from './common/layouts/sectionContaner';
import Navbar from './components/navbar'
import Home from './views/home'
import Projects from "./views/projects";
import Contact from "./views/contact";

function App() {
  scrolling()

  return (
    <>
      <Navbar />
      <SectionContainer>
        <Home />
        <Projects />
        <Contact />
      </SectionContainer>
    </>
  );
}

export default App;
