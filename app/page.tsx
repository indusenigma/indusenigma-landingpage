
import LandingPage from "./_components/LandingPage";
import { Hero } from "./_components/sections/Hero";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero/>
      </div>
        {/* <LandingPage /> */}
    </div>
  );
}
