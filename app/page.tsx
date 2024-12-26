import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import HeroForm from "./components/heroForm";
import TripPlanningSection from "./components/TripPlanningSection";
import InteractiveMapSection from "./components/InteractiveMap";
import ServicesSlider from "./components/ServicesSlider";

export default function Home() {
  return (
    <div >
      <Navbar />
      <HeroCarousel />
      <TripPlanningSection />
      <InteractiveMapSection />
      <ServicesSlider />
    </div>
  );
}
