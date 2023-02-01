import React, { useState } from "react";

import NavItems from "./navItems";
import BurgerMenu from "./burgerMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.background}>

      <FontAwesomeIcon
        icon={faBars}
        className={style.bars}
        onClick={() => {
          document.body.style.overflow = "hidden";
          setOpen(true);
        }}
      />
      <BurgerMenu open={open} setOpen={setOpen} />
      <div className={style.containerItems}>
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
