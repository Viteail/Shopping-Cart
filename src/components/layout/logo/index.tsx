import classes from "./logo.module.css";

import { Image } from "../../image";

import logoImg from "../../../assets/logo.jpg";

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image src={logoImg}></Image>
    </div>
  );
};
