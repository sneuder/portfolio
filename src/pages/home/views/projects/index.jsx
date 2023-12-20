import style from './index.module.scss'

import linksPage from '../../../../constants/linksPage'

import Vertical from '../../../../common/layouts/vertical'
import RepositoryButton from '../../../../components/repositoryButton'
import Title from '../../../../common/title'
import CardProject from '../../../../common/cardProject'

const Projects = () => {
  const { sections, projects } = require('../../../../assets/data/index.json')
  const { title, text } = sections.projects

  return (
    <Vertical idPage={linksPage.projects}>
      <Title title={title} description={text}>
        <RepositoryButton />
      </Title>

      <div className={style.containerProjects}>
        {projects.map((project) => {
          return <CardProject project={project} key={project.id} />
        })}
      </div>
    </Vertical>
  )
}

export default Projects
