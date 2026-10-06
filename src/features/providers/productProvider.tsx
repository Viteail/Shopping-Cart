import { useEffect, useMemo, useState } from "react";

import type {
  FetchStatus,
  IProductData,
  ProductsCategories,
} from "@/types/index";

import { ProductContext } from "../../app/contexts/product-context";
import { useCategory } from "../../app/routes/shop/hooks/useCategory";

interface IProductDataProviderProps {
  children: React.ReactNode;
}

type ProductDTO = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  images: string[];
};

type DummyJsonResponse = {
  products: ProductDTO;
  total: number;
  skip: number;
  limit: number;
};

type ProductDTOState = { data: ProductDTO[]; status: FetchStatus };

const useProductsRepo = (cats: ProductsCategories[]) => {
  const [productData, setProductData] = useState<ProductDTOState>({
    data: [],
    status: "stale",
  });

  const getProducts = async (cateogries: ProductsCategories[]) => {
    try {
      setProductData({ data: [], status: "loading" });
      const res: DummyJsonResponse[] = await Promise.all(
        cateogries.map((c) =>
          fetch(`https://dummyjson.com/products/search?q=${c}`).then((r) => {
            if (!r.ok) throw new Error("failed to fetch");
            return r.json();
          }),
        ),
      );

      const flatData = res.flatMap((r) => r.products);
      setProductData({ data: flatData, status: "finished" });
    } catch {
      setProductData({ data: [], status: "error" });
    }
  };

  // oxlint-disable-next-line react/set-state-in-effect
  useEffect(() => void getProducts(cats).then(), [cats]);

  return {
    getProducts,
    data: productData.data,
    status: productData.status,
  };
};

const productsMapper = (dto: ProductDTO[]): IProductData[] =>
  dto.map((d) => ({
    id: d.id,
    title: d.title,
    discountPercentage: d.discountPercentage,
    stock: d.stock,
    price: d.price,
    image: d.images[0],
  }));

export const ProductDataProvider: React.FC<IProductDataProviderProps> = (
  props,
) => {
  const { children } = props;

  const initCats = useMemo<ProductsCategories[]>(
    () => ["laptop", "smartphone", "audio"],
    [],
  );
  const { data, status, getProducts } = useProductsRepo(initCats);
  const { activeCategory, setActiveCategory } = useCategory(initCats);

  const products = useMemo(() => productsMapper(data), [data]);

  const handleActiveCategory = async (category: ProductsCategories[]) => {
    await getProducts(category);
    setActiveCategory(() => {
      if (category.length === 3) return "all";
      else return category[0];
    });
  };

  return (
    <ProductContext.Provider
      value={{
        data: products,
        status: status,
        onClick: handleActiveCategory,
        activeCategory: activeCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
