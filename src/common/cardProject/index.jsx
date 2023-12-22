import style from './index.module.scss'
import StackTag from '../stackTag'

const CardProject = ({ project }) => {
  return (
    <div className={style.containerProject} key={project.id}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label="Link to check project"
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={require(`../../assets/projects/${project.img}`)}
            alt=""
            loading="lazy"
          />
          <img
            src={require(`../../assets/projects/mobile/${project.img}`)}
            alt=""
            loading="lazy"
          />
        </picture>
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
