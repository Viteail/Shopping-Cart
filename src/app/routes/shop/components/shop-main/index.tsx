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

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["main-container"]}>
        {status === "loading" ? (
          <ShopLoading />
        ) : (
          productDatas.map((data) => (
            <ProductCard data={data} key={data.id}></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};
