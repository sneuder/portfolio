import linksPage from '../constants/linksPage'

import Vertical from "../common/layouts/vertical"
import ProjectsComponent from "../components/projects"
import Title from "../common/title"

const Projects = () => {
  return (
    <Vertical idPage={linksPage.projects}>
      <Title
        title="Some of my work"
        description="As a full stack web developer I have completed some personal projects"
      />
      <ProjectsComponent />
    </Vertical>
  )
}

export default Projects