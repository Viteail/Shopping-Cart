import { useProductData } from "../../contexts/product-context";
import { ShopHeader } from "./components/shop-header";
import { ShopMain } from "./components/shop-main";

export const Shop = () => {
  const { data, status, onClick, activeCategory } = useProductData();

  return (
    <div>
      <ShopHeader
        activeCategory={activeCategory}
        handleActiveCategory={onClick}
      />
      <ShopMain productDatas={data} status={status}></ShopMain>
    </div>
  );
};
