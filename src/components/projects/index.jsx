import style from "./index.module.scss";

const Projects = () => {
  const data = require("../../assets/projects.json");

  return (
    <div className={style.containerProjects}>
      {data.map((project) => {
        return (
          <div className={style.containerProject} key={project.id}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/img-project/${project.img}`)}
                alt=""
              />
            </a>
            <div className={style.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Projects