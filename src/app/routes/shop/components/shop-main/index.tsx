import classes from "./shop-main.module.css";

import type { ActiveCategory } from "@/types/index";

interface IShopMainProps {
  activeCategory: ActiveCategory;
}

export const ShopMain: React.FC<IShopMainProps> = (props) => {
  const { activeCategory } = props;

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["main-container"]}></div>
    </div>
  );
};
