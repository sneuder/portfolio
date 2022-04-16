import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.background}>
      <div className={style.branchContainer}>
        <p className={style.branchName}>
          Sne<span className={style.branchDecoration}>uder</span>
        </p>
      </div>

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
          <Link className={style.navItems} smooth to="#skills">
            My CV
          </Link>
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
    </nav>
  );
};

export default Navbar;
