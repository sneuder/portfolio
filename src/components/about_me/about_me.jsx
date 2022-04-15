import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import style from "./about_me.module.scss";

const AboutMe = () => {
  return (
    <div className={style.background}>
      <div className={style.containerAboutMe}>
        <div className={style.subContainerAboutMe}>
          <h2 className={style.header}>Hi,</h2>
          <h2 className={style.header}>
            I'm <span className={style.headerDecoration}>Esneider</span>
          </h2>
          <h3 className={style.subHeader}>Full Stack Web Developer</h3>
          <p className={style.text}>
            Hey, are looking for a web developer to build your{" "}
            <span className={style.textDecoration}>Brand and grow your business?</span> Let's shake hands with
            me.
          </p>
          <div className={style.containerButtons}>
            <FontAwesomeIcon className={style.linkedinIcon} icon={faLinkedin} />
            <button className={style.button}>Hire me</button>
          </div>
        </div>
      </div>

      <div className={style.containerImage}>
        <img className={style.image} src={require("../../assets/aboutme.png")} alt="about me" />
      </div>
    </div>
  );
};

export default AboutMe;
