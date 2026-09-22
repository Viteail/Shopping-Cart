import { useNavigate } from "react-router";

export const useNavigateToShop = () => {
  const navigate = useNavigate();

  const handleShopNavigation = () => navigate("/shop");

  return { handleShopNavigation };
};
