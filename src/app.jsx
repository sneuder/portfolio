import SectionContainer from './common/layouts/sectionContaner';
import Navbar from './components/navbar'
import Projects from "./views/projects";
import Contact from "./views/contact";

function App() {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Projects />
        <Contact />
      </SectionContainer>
    </>
  );
}

export default App;
