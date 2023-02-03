import linksPage from '../constants/linksPage'

import Vertical from "../common/layouts/vertical"
import ProjectsComponent from "../components/projects"
import Title from "../common/title"

const Projects = () => {
  const { sections } = require("../assets/data/index.json");
  const {title, text} = sections.projects

  return (
    <Vertical idPage={linksPage.projects}>
      <Title
        title={title}
        description={text}
      />
      <ProjectsComponent />
    </Vertical>
  )
}

export default Projects