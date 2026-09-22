import { Button, ButtonLink } from "@components/index";
import classes from "../../home.module.css";
import { useNavigateToShop } from "../../hooks/navigateToShop";

export const MainSection = () => {
  const { handleShopNavigation } = useNavigateToShop();

  return (
    <div className={classes["wrapper-section"]}>
      <div className={classes["main-section"]}>
        <p className={classes["main-headline"]}>Upgrade Your Everyday Tech</p>
        <p className={classes["sub-headline"]}>
          Discover industry-leading laptops, next-gen smartphones, and immersive
          headphones designed to keep you ahead.
        </p>
        <div className={classes["btns-wrapper"]}>
          <Button onClick={handleShopNavigation} classesToAppend={["primary"]}>
            Discover Shop
          </Button>
          <ButtonLink href="about-store">Discover TechStore</ButtonLink>
        </div>
      </div>
    </div>
  );
};
