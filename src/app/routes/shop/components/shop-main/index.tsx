import classes from "./shop-main.module.css";

import { ShopLoading } from "../shop-loading";
import { ProductCard } from "@features/components/product-card";

import type { FetchStatus, IProductData } from "@/types/index";

interface IShopMainProps {
  productDatas: IProductData[];
  status: FetchStatus;
}

export const ShopMain: React.FC<IShopMainProps> = (props) => {
  const { productDatas, status } = props;

  const attachContent = (isLoading: boolean) => {
    if (isLoading)
      return (
        <div className={classes["main-loading"]}>
          <ShopLoading />
        </div>
      );
    else
      return (
        <div className={classes["main-container"]}>
          {productDatas.map((data) => (
            <ProductCard data={data} key={data.id}></ProductCard>
          ))}
        </div>
      );
  };

  return (
    <div className={classes["main-wrapper"]}>
      {attachContent(status === "loading")}
    </div>
  );
};
