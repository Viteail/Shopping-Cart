import { MainSection } from "./components/main-section";
import { BadgesSection } from "./components/badges-section";
import { CategorySection } from "./components/category-section";
import { AboutSection } from "./components/about-section";

export const Home = () => {
  return (
    <div>
      <MainSection />
      <BadgesSection />
      <CategorySection />
      <AboutSection />
    </div>
  );
};
