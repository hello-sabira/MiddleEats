import HeroSection from "../components/HeroSection";
import Signup from "../components/Signup";
import Quote from "../components/Quote";
import Chefs from "../components/Chefs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Signup />
      <Quote />
      <Chefs />
    </div>
  );
}
