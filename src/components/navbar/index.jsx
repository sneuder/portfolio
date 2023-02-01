import style from "./index.module.scss";

import Modal from "../../common/modal";
import Burguer from "../../common/burguer";
import Branch from "../../common/branch";
import NavItems from "../../common/navItems";

const Navbar = () => {
  return (
    <nav>
      <div className={style.containerNav}>
      <Modal />
      <Branch />
      <div className={style.containerItems}>
        <NavItems />
      </div>
      <div className={style.containerBurguer}>
        <Burguer />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
