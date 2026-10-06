import type { ActiveCategory, ProductsCategories } from "@/types/index";
import { useState } from "react";

export const useCategory = (cats: ProductsCategories[]) => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(() => {
    if (cats.length === 3) return "all";
    else return cats[0];
  });

  return { activeCategory, setActiveCategory };
};
