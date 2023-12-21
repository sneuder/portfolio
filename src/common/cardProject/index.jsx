import style from './index.module.scss'
import StackTag from '../stackTag'

const CardProject = ({ project }) => {
  return (
    <div className={style.containerProject} key={project.id}>
      <a href={project.link} target="_blank" rel="noreferrer">
        <img src={require(`../../assets/projects/${project.img}`)} alt="" />
      </a>
      <div className={style.projectInfo}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className={style.containerStackTags}>
          {project.stack.map((stack) => (
            <StackTag stack={stack} key={stack} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardProject
