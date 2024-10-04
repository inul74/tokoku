import "react-multi-carousel/lib/styles.css";

import HomeBanner from "./ui/HomeBanner";
import BannerCategories from "./ui/BannerCategories";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
    </main>
  );
}

export default App;
