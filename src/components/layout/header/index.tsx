import classes from "./header.module.css";

import { Logo } from "../logo";
import { NavBar } from "../nav-bar";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <NavBar />
    </div>
  );
};
