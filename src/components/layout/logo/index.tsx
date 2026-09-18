import classes from "./logo.module.css";

import { Image } from "@components/index";

import logoImg from "@images/logo.jpg";

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image src={logoImg}></Image>
    </div>
  );
};
