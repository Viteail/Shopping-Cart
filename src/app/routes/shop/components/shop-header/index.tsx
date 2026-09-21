import classes from "./shop-header.module.css";

import { Button } from "@components/index";

import type { Category } from "../../types";
import type { AvailableClass } from "@components/button";

interface IShopState {
  handleActiveCategory: (category: Category) => void;
  activeCategory: Category;
}

interface IShopHeaderProps {
  shopState: IShopState;
}

export const ShopHeader: React.FC<IShopHeaderProps> = (props) => {
  const { shopState } = props;
  const { activeCategory, handleActiveCategory } = shopState;

  return (
    <div className={classes["shop-header"]}>
      <div className={classes["shop-wrapper"]}>
        <h1 className={classes["main-headline"]}>Categories</h1>
        <div className={classes["btns-wrapper"]}>
          <Button
            onClick={() => handleActiveCategory("Laptops")}
            classesToAppend={
              [
                "category",
                `${activeCategory === "Laptops" && "active"}`,
              ].filter(Boolean) as AvailableClass[]
            }
          >
            Laptops
          </Button>
          <Button
            onClick={() => handleActiveCategory("Smartphones")}
            classesToAppend={
              [
                "category",
                `${activeCategory === "Smartphones" && "active"}`,
              ].filter(Boolean) as AvailableClass[]
            }
          >
            Smartphones
          </Button>
          <Button
            onClick={() => handleActiveCategory("Audio")}
            classesToAppend={
              ["category", `${activeCategory === "Audio" && "active"}`].filter(
                Boolean,
              ) as AvailableClass[]
            }
          >
            Audio
          </Button>
        </div>
      </div>
    </div>
  );
};
