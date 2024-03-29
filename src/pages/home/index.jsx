import { createPortal } from 'react-dom'

import scrolling from '../../config/scrolling'

import SectionContainer from '../../common/layouts/sectionContaner'
import Navbar from '../../components/navbar'

import Heroe from './views/heroe'
import Experience from './views/experience'

import React from 'react'

const Projects = React.lazy(() => import('./views/projects'))
const Contact = React.lazy(() => import('./views/contact'))

const Home = () => {
  scrolling()

  return (
    <>
      {createPortal(<Navbar />, document.getElementById('navbar'))}
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
