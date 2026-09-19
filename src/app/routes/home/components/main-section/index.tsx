import { Button } from "@components/index";
import classes from "../../home.module.css";

export const MainSection = () => {
  return (
    <div className={classes["wrapper-section"]}>
      <div className={classes["main-section"]}>
        <p className={classes["main-headline"]}>Upgrade Your Everyday Tech</p>
        <p className={classes["sub-headline"]}>
          Discover industry-leading laptops, next-gen smartphones, and immersive
          headphones designed to keep you ahead.
        </p>
        <div className={classes["btns-wrapper"]}>
          <Button classesToAppend={["primary"]}>Shop Laptops</Button>
          <Button classesToAppend={["secondary"]}>Discover TechStore</Button>
        </div>
      </div>
    </div>
  );
};
