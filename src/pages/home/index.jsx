import { createPortal } from 'react-dom'

import scrolling from '../../config/scrolling'

import SectionContainer from '../../common/layouts/sectionContaner'
import Navbar from '../../components/navbar'

import React, { Suspense } from 'react'

const Heroe = React.lazy(() => import('./views/heroe'))
const Experience = React.lazy(() => import('./views/experience'))
const Projects = React.lazy(() => import('./views/projects'))
const Contact = React.lazy(() => import('./views/contact'))

const Home = () => {
  scrolling()

  return (
    <>
      {createPortal(<Navbar />, document.getElementById('navbar'))}
      <SectionContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Heroe />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </SectionContainer>
    </>
  )
}

export default Home
