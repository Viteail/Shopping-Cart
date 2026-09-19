import classes from "./shop-header.module.css";

import { Button } from "@components/index";

export const ShopHeader = () => {
  return (
    <div className={classes["shop-header"]}>
      <div className={classes["shop-wrapper"]}>
        <h1 className={classes["main-headline"]}>Categories</h1>
        <div className={classes["btns-wrapper"]}>
          <Button classesToAppend={["category", "active"]}>Laptops</Button>
          <Button classesToAppend={["category"]}>Smartphones</Button>
          <Button classesToAppend={["category"]}>Audio</Button>
        </div>
      </div>
    </div>
  );
};
