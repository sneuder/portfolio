import React from "react";
import style from "./navbar.module.scss";
import { NavHashLink as Link } from "react-router-hash-link";

const NavItems = () => {
  return (
    <ul className={style.navItemsContainer}>
      <li>
        <Link className={style.navItems} smooth to="#aboutme">
          About Me
        </Link>
      </li>
      <li>
        <Link className={style.navItems} smooth to="#projects">
          Projects
        </Link>
      </li>
      <li>
        <a
          className={style.navItems}
          href="https://drive.google.com/file/d/1n9srZYUShhNjkI3BDSOcECASz7lQ_1j7/view?usp=sharing"
          target="_blank"
        >
          My CV
        </a>
      </li>
      <li>
        <Link className={style.navItems} smooth to="#skills">
          Skills
        </Link>
      </li>
      <li>
        <Link className={style.navItems} smooth to="#contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavItems;