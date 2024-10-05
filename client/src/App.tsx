import "react-multi-carousel/lib/styles.css";

import HomeBanner from "./ui/HomeBanner";
import Categories from "./ui/Categories";
import Hightlights from "./ui/Hightlights";
import BannerCategories from "./ui/BannerCategories";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Hightlights />
      <Categories />
    </main>
  );
}

export default App;
