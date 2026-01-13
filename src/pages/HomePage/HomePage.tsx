import { MOCK_CITIES, MOCK_HOTELS } from "../../constants";
import TrendingDestinations from "../../features/cities/components/TrendingDestinations";
import FeaturedDeals from "../../features/hotels/components/FeaturedDeals";
import RecentlyVisited from "../../features/hotels/components/RecentlyVisited";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return <main>
    <HeroSection />
    <FeaturedDeals featured={MOCK_HOTELS} />
    <RecentlyVisited recent={MOCK_HOTELS} />
    <TrendingDestinations trending={MOCK_CITIES} />
  </main>;
};
export default HomePage;
