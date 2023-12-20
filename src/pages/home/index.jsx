import scrolling from '../../config/scrolling'

import SectionContainer from '../../common/layouts/sectionContaner'
import Navbar from '../../components/navbar'

import Heroe from './views/heroe'
import Experience from './views/experience'
import Projects from './views/projects'
import Contact from './views/contact'

const Home = () => {
  scrolling()

  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heroe />
        <Experience />
        <Projects />
        <Contact />
      </SectionContainer>
    </>
  )
}

export default Home
