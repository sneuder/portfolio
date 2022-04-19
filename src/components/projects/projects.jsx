import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import style from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={style.background} id="projects">
      <div className={style.headerContainer}>
        <h1 className={style.header}>
          Some of my <span className={style.headerDecoration}>work</span>
        </h1>
        <p className={style.text}>
          As a full stack web developer I have completed some personal projects
        </p>
        <div className={style.linkRepositoriesContainer}>
          <a
            href="https://github.com/sneuder"
            target="_blank"
          >
            <FontAwesomeIcon
              href="https://github.com/sneuder"
              className={style.gitHubIcon}
              icon={faGithubSquare}
            />
          </a>
          <a
            className={style.linkRepositories}
            href="https://github.com/sneuder"
            target="_blank"
          >
            Check repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
