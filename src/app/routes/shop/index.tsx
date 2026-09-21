import { ShopHeader } from "./components/shop-header";

import { useCategory } from "./hooks/useCategory";

export const Shop = () => {
  const { activeCategory, handleActiveCategory } = useCategory();
  return (
    <div>
      <ShopHeader shopState={{ activeCategory, handleActiveCategory }} />
    </div>
  );
};
