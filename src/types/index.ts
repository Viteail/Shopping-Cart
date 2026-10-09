export type ProductsCategories = "laptop" | "smartphone" | "audio";

export type ActiveCategory = ProductsCategories | "all";

export interface IProductData {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
  image: string;
  warrantyInformation: string;
}

export interface ICartProductData {
  product: IProductData;
  amount: number;
}

export type FetchStatus = "stale" | "loading" | "finished" | "error";

export type ProductsContextState = {
  data: IProductData[];
  status: FetchStatus;
  onClick: (cats: ProductsCategories[]) => Promise<void>;
  activeCategory: ActiveCategory;
};

export type CardProductContextState = {
  data: ICartProductData[];
  handleAddToCart: (product: IProductData, amount: number) => void;
  handleChangeAmount: (product: IProductData, amount: number) => void;
  handleRemoveProduct: (product: IProductData) => void;
  handleEmptyCart: () => void;
  getTotalPriceProducts: () => number;
  getProductsQuantity: () => number;
};
