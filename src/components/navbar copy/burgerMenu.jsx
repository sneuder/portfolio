import React from "react";

import Branch from "./branch";
import NavItems from "./navItems";

import style from "./burgerMenu.module.scss";

const BurgerMenu = ({ open, setOpen }) => {
  if (open) {
    return (
      <div
        className={style.background}
        onClick={() => {
          document.body.style.overflow = "visible";
          setOpen(false);
        }}
      >
        <div className={style.container}>
          <Branch />
          <NavItems />
        </div>
      </div>
    );
  }

  return <></>;
};

export default BurgerMenu;
