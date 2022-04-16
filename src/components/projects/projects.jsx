import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import style from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={style.background}>
      <div className={style.headerContainer}>
        <h1 className={style.header}>
          Some of my <span className={style.headerDecoration}>work</span>
        </h1>
        <p className={style.text}>
          As a full stack web developer I have completing some personal projects
        </p>
        <div className={style.linkRepositoriesContainer}>
          <FontAwesomeIcon className={style.gitHubIcon} icon={faGithubSquare} />
          <p className={style.linkRepositories}>Check repositories</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
