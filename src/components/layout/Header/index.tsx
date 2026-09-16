import classes from "./header.module.css";

import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <NavBar />
    </div>
  );
};
