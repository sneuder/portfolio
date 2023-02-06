import GeneralContext from './context'
import useSetContext from './hooks/useSetContext'
import scrolling from './config/scrolling'

import SectionContainer from './common/layouts/sectionContaner'
import Navbar from './components/navbar'
import Home from './views/home'
import Projects from './views/projects'
import Contact from './views/contact'

function App() {
  const toolsContext = useSetContext()
  scrolling()

  return (
    <GeneralContext.Provider value={toolsContext}>
      <Navbar />
      <SectionContainer>
        <Home />
        <Projects />
        <Contact />
      </SectionContainer>
    </GeneralContext.Provider>
  )
}

export default App
