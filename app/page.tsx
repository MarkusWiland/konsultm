import { Button } from "@/components/ui/button";
import { Hero, HeroSubtitle, HeroTitle } from "./_components/hero";
import { ButtonComponent } from "./_components/button";
import { Container } from "./_components/container";
import { cn } from "@/lib/utils";

export default function HomePageHero() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Hero>
            <ButtonComponent
              href="/"
              className="rounded-3xl"
              size="small"
              variant="tertiary"
            >
              <span>Linear 2022 Release – Built for scale</span>{" "}
            </ButtonComponent>
            <HeroTitle className="">
              Linear is a better way
              <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubtitle className="">
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <ButtonComponent
              href="/"
              variant="primary"
              size="large"
              className="rounded-full"
            >
              <span>Get Started </span>
            </ButtonComponent>
          </Hero>
        </Container>
      </div>
      <Container>
        <div className="mt-[12.8rem] [perspective:2000px]">
          <div className="rounded-lg border border-transparent-white bg-white bg-opacity-10">
            <img src="/football.jpg" alt="" className="mt-[12.8rem] " height={400} width="100%"/>
          </div>
        </div>
      </Container>
      <div
        className={cn(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      />
      <div className="">
        <Container>
        <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Unlike any tool
          <br className="hidden md:inline-block" /> you've used before
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
        </Container>
      </div>
      
      
    </>
  );
}
