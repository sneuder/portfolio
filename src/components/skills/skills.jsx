import React from "react";
import style from "./skills.module.scss";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "NodeJS",
    "Express",
    "Postgres",
    "Sequelize",
    "Web design"
  ];

  return (
    <div className={style.background}>
      <div className={style.containerInfo}>
        <div className={style.containerHeader}>
          <h2 className={style.header}>
            My <span className={style.headerDecoration}>skills</span>
          </h2>
          <p className={style.text}>
            Learning is the key to improve every day{" "}
          </p>
        </div>
        <div className={style.containerSkills}>
          {skills.map((skill) => ( 
            <div className={style.containerSkill}>
              <p className={style.skill}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.containerImage}>
        <img className={style.img} src={require("../../assets/skills.png")} alt="skills" />
      </div>
    </div>
  );
};

export default Skills;
