import style from './index.module.scss'

import linksPage from '../../../../constants/linksPage'

import Vertical from '../../../../common/layouts/vertical'
import RepositoryButton from '../../../../components/repositoryButton'
import Title from '../../../../common/title'
import CardProject from '../../../../common/cardProject'
import GoTo from '../../../../common/goTo'

import useData from '../../../../hooks/useData'

const Projects = () => {
  const { sections, mainProjects } = useData('sections', 'mainProjects')
  const { title, text } = sections.projects

  const goToInstruction = {
    text: 'View All Projects',
    to: '/projects'
  }

  return (
    <Vertical idPage={linksPage.projects}>
      <Title title={title} description={text}>
        <RepositoryButton />
      </Title>

      <div className={style.containerProjects}>
        {mainProjects.map((project) => {
          return <CardProject project={project} key={project.id} />
        })}
      </div>

      <GoTo instruction={goToInstruction} />
    </Vertical>
  )
}

export default Projects
