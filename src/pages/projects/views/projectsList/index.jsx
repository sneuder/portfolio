import React, { Suspense } from 'react'
import style from './index.module.scss'
import Vertical from '../../../../common/layouts/vertical'
import GoTo from '../../../../common/goTo'

// Lazy load CardProject component
const LazyCardProject = React.lazy(() =>
  import('../../../../common/cardProject')
)

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
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project) => (
            <LazyCardProject project={project} key={project.id} />
          ))}
        </Suspense>
      </div>
    </Vertical>
  )
}

export default ProjectsList
