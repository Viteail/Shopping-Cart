import classes from "./header.module.css";

import { NavBar } from "../nav-bar";

import logoIcon from "@images/logo.svg";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes["logo-container"]}>
          <img className={classes.logo} src={logoIcon} alt="tech store" />
          <p className={classes["logo-text"]}>Tech Store</p>
        </div>
        <NavBar />
      </div>
    </div>
  );
};
