import { Button } from "@/components/ui/button";
import { Hero, HeroSubtitle, HeroTitle } from "./_components/hero";

export default function HomePageHero() {
  return (
    <Hero>
      <button className="">
        <span>Linear 2022 Release – Built for scale</span>{" "}
      </button>
      <HeroTitle className="">
        Linear is a better way
        <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubtitle className="">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>
      <button className="">
        <span>Get Started </span>
      </button>
    </Hero>
  );
}
