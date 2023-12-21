import style from './index.module.scss'

import CardProject from '../../../../common/cardProject'
import Vertical from '../../../../common/layouts/vertical'
import GoTo from '../../../../common/goTo'

const ProjectsList = () => {
  const { projects } = require('../../../../assets/data/index.json')

  const goToInstruction = {
    text: 'Come Back',
    to: '/',
    reverse: true
  }

  return (
    <Vertical>
      <GoTo instruction={goToInstruction} />

      <div className={style.containerProjects}>
        {projects.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </Vertical>
  )
}

export default ProjectsList
