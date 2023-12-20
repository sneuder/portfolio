import style from './index.module.scss'

const Projects = () => {
  const { projects } = require('../../assets/data/index.json')

  return (
    <div className={style.containerProjects}>
      {projects.map((project) => {
        return (
          <div className={style.containerProject} key={project.id}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/projects/${project.img}`)}
                alt=""
              />
            </a>
            <div className={style.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className={style.containerStackTags}>
                {
                  project.stack.map((stack, index) => (
                    <div key={`${project.id}-${index}`} className={style.stackTag}>{ stack }</div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
