import classes from "./shop-header.module.css";

import { Button } from "@components/button";

import type { ActiveCategory, ProductsCategories } from "@/types/index";
import type { AvailableClass } from "@components/button";

interface IShopHeaderProps {
  handleActiveCategory: (category: ProductsCategories[]) => void;
  activeCategory: ActiveCategory;
}

export const ShopHeader: React.FC<IShopHeaderProps> = (props) => {
  const { activeCategory, handleActiveCategory } = props;

  return (
    <div className={classes["shop-header"]}>
      <div className={classes["shop-wrapper"]}>
        <h1 className={classes["main-headline"]}>Categories</h1>
        <div className={classes["btns-wrapper"]}>
          <Button
            onClick={() =>
              handleActiveCategory(["laptop", "smartphone", "audio"])
            }
            classesToAppend={
              ["category", `${activeCategory === "all" && "active"}`].filter(
                Boolean,
              ) as AvailableClass[]
            }
          >
            All
          </Button>
          <Button
            onClick={() => handleActiveCategory(["laptop"])}
            classesToAppend={
              ["category", `${activeCategory === "laptop" && "active"}`].filter(
                Boolean,
              ) as AvailableClass[]
            }
          >
            Laptops
          </Button>
          <Button
            onClick={() => handleActiveCategory(["smartphone"])}
            classesToAppend={
              [
                "category",
                `${activeCategory === "smartphone" && "active"}`,
              ].filter(Boolean) as AvailableClass[]
            }
          >
            Smartphones
          </Button>
          <Button
            onClick={() => handleActiveCategory(["audio"])}
            classesToAppend={
              ["category", `${activeCategory === "audio" && "active"}`].filter(
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
