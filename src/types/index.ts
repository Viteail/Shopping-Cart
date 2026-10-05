export type ProductsCategories = "laptop" | "smartphone" | "audio";

export type ActiveCategory = ProductsCategories | "all";



export interface IProductData {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
  image: string;
}

export type FetchStatus = "stale" | "loading" | "finished" | "error";

export type ProductsContextState = {
  data: IProductData[];
  status: FetchStatus;
  onClick: (cats: ProductsCategories[]) => Promise<void>;
  activeCategory: ActiveCategory;
};
