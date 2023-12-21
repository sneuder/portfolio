import SectionContainer from '../../common/layouts/sectionContaner'
import ProjectsList from './views/projectsList'

const Projects = () => {
  window.scrollTo({ top: 0 })

  return (
    <SectionContainer>
      <ProjectsList />
    </SectionContainer>
  )
}

export default Projects
