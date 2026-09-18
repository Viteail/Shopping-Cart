import classes from "../../home.module.css";

import { CatergorieCard } from "../categorie-card/";

import imgLaptop from "@images/laptop.webp";
import imgSmartphone from "@images/smartphone.webp";
import imgHeadphone from "@images/headphone.webp";

export const CategorySection = () => {
  return (
    <div className={classes["category-container"]}>
      <div className={classes["category-wrapper"]}>
        <p className={classes["category-headline"]}>Featured Categories</p>
        <div className={classes["cards-wrapper"]}>
          <CatergorieCard src={imgLaptop}>Laptops</CatergorieCard>
          <CatergorieCard src={imgSmartphone}>Smartphones</CatergorieCard>
          <CatergorieCard src={imgHeadphone}>Headphones</CatergorieCard>
        </div>
      </div>
    </div>
  );
};
