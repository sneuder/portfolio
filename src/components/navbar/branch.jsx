import React from "react";

import style from "./navbar.module.scss";

const Branch = () => {
  return (
    <div className={style.branchContainer}>
      <p className={style.branchName}>
        Sne<span className={style.branchDecoration}>uder</span>
      </p>
    </div>
  );
};

export default Branch;
