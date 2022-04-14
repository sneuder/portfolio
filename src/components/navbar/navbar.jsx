import React from "react";
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
        <li className={style.navItems}>About Me</li>
        <li className={style.navItems}>Projects</li>
        <li className={style.navItems}>My CV</li>
        <li className={style.navItems}>Skills</li>
        <li className={style.navItems}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
