import Achievement from "./_components/sections/Achievement";
import Education from "./_components/sections/Education";
import Experience from "./_components/sections/Experience";
import { Hero } from "./_components/sections/Hero";
import Profile from "./_components/sections/Profile";
import Project from "./_components/sections/Project";

export default function Home() {
  return (
    <div className="w-full h-full relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-top">
        <Hero />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto z-0 flex gap-14 flex-col">
        <Education />
        <Project />
        <Experience />
        <Achievement />
        <Profile />
      </div>
    </div>
  );
}
