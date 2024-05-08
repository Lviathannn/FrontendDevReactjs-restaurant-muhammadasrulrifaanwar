import HomeSection from "@/components/sections/HomeSection";
import FilterSection from "@/components/sections/FilterSection";
import RestaurantListSection from "@/components/sections/RestaurantListSection";

export default function Home() {
  return (
    <main className="container py-24 space-y-16">
      <HomeSection />
      <FilterSection />
      <RestaurantListSection />
    </main>
  );
}
