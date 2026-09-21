import { useState } from "react";

import type { Category } from "../types";

export const useCategory = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Laptops");

  const handleActiveCategory = (category: Category) => {
    setActiveCategory(category);
  };

  return { activeCategory, handleActiveCategory };
};
