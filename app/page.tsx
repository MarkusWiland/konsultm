import { Button } from "@/components/ui/button";
import { Hero, HeroSubtitle, HeroTitle } from "./_components/hero";
import { ButtonComponent } from "./_components/button";
import { Container } from "./_components/container";
import { cn } from "@/lib/utils";
import {
  Card,

} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "lucide-react";
import Image from "next/image";
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
              variant="primary"
            >
              <span>Konsultmatch 2024 – Skapad för skalbarhet</span>
            </ButtonComponent>
            <HeroTitle className="">
              Hitta enkelt din konsult
              <br className="hidden md:block" /> eller ditt uppdrag!
            </HeroTitle>
            <HeroSubtitle className="">
              Hitta din drömkonsult eller det perfekta uppdraget snabbt och
              enkelt.
              <br className="hidden md:block" />
              Anslut dig nu och upplev skillnaden!
            </HeroSubtitle>
            <ButtonComponent
              href="/"
              variant="primary"
              size="large"
              className="rounded-full"
            >
              <span>Starta här</span>
            </ButtonComponent>
          </Hero>
        </Container>
      </div>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container>
          <div className="flex  flex-col space-y-8">
            <div className="flex flex-col items-center space-y-4  max-w-[70rem] text-center mx-auto">
              <HeroTitle className="md:text-4xl my-0">
                Hitta proffs du verkligen kommer att älska att arbeta med
              </HeroTitle>
              <HeroSubtitle className="mb-2 md:text-xs">
                Träffa toppexperter som förstår dina behov. Våra noggrant
                utvalda konsulter är redo att skapa framgång tillsammans med
                dig. Anslut dig idag och upptäck skillnaden!
              </HeroSubtitle>
            </div>
            <div className="flex-1 basis-2/3 relative">
              <Carousel opts={{ align: "start" }} className="w-full relative">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 "
                    >
                      <div className="">
                        <Card className="bg-glass-gradient flex flex-col items-center justify-center  text-white hover:bg-whiteopaque transition-colors duration-300 cursor-pointer">
                          <div className="flex flex-col space-y-4 items-center pt-4 p-6 justify-center text-center">
                            <Image
                              src="https://via.placeholder.com/100"
                              width={100}
                              height={100}
                              alt="placeholder"
                        
                              className={`${true ? "blur" : ""} rounded-full w-[10rem] h-[10rem]`}
                            />

                            <div className="space-y-2 w-[1/2]">
                              <h1 className="font-bold text-sm">
                                Markus Wiland
                              </h1>
                              <h3 className="text-[1rem]">Göteborg</h3>
                              <p className="text-[1rem]">
                                <span className={`${true ? "blur" : ""} `}>Frontend utvecklare</span>
                                <span>React, Next.js, Tailwind</span>
                              </p>
                            </div>

                            <ButtonComponent
                              href="/"
                              variant="primary"
                              size="small"
                              className="rounded-full uppercase"
                            >
                              Gå till profil
                            </ButtonComponent>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[10rem] bg-gradient-to-l from-[#000212] to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[10rem] bg-gradient-to-r from-[#000212] to-transparent"></div>
            </div>
          </div>
        </Container>
        <Container className="mt-[12.8rem] ">
          <div className="flex  flex-col space-y-8">
            <div className="flex flex-col items-center space-y-4 max-w-[70rem] text-center mx-auto">
              <HeroTitle className="md:text-4xl my-0">
                Hitta spännande uppdrag som passar dig{" "}
              </HeroTitle>
              <HeroSubtitle className="mb-2 md:text-xs">
                Utforska nya möjligheter med uppdrag som utmanar och inspirerar.
                Vårt nätverk erbjuder handplockade möjligheter som matchar dina
                talanger och ambitioner perfekt. Anslut dig idag och ta steget
                mot din nästa professionella prestation.
              </HeroSubtitle>
            </div>
            <div className="flex-1 basis-2/3 relative">
              <Carousel opts={{ align: "start" }} className="w-full relative">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 "
                    >
                      <div className="">
                        <Card className="bg-glass-gradient flex flex-col items-center justify-center  text-white hover:bg-whiteopaque transition-colors duration-300 cursor-pointer">
                          <div className="flex flex-col space-y-4 items-center pt-4 p-6 justify-center text-center">
                          <Image
                              src="https://via.placeholder.com/100"
                              width={1000}
                              height={100}
                              alt="placeholder"
                        
                              className={`${true ? "blur" : ""} rounded-lg w-[100rem] h-[10rem]`}
                            />

                            <div className="space-y-2 w-[1/2]">
                              <h1 className="font-bold text-sm">
                                Markus Wiland
                              </h1>
                              <h3 className="text-[1rem]">Göteborg</h3>
                              <p className="text-[1rem]">
                                <span>Frontend utvecklare</span>
                                <span>React, Next.js, Tailwind</span>
                              </p>
                            </div>

                            <ButtonComponent
                              href="/"
                              variant="primary"
                              size="small"
                              className="rounded-full uppercase"
                            >
                              Gå till uppdrag
                            </ButtonComponent>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[10rem] bg-gradient-to-l from-[#000212] to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[10rem] bg-gradient-to-r from-[#000212] to-transparent"></div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <HeroSubtitle className="mb-12 text-center text-lg text-white md:text-xl">
          <span className="text-primary-text">
            Powering the world’s best product teams.
          </span>
          <br className="hidden md:block" /> From next-gen startups to
          established enterprises.
        </HeroSubtitle>

        <div className="flex flex-wrap justify-around gap-x-6 gap-y-8  ">
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
        </div>
      </Container>
      <div
        className={cn(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      />

      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            Unlike any tool
            <br className="hidden md:inline-block" /> youve used before
          </h2>
          <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col justify-end min-h-[48rem] text-center basis-[calc(66.66%-12px)] bg-glass-gradient p-8 border rounded-[4.8rem] border-transparent-white md:p-14">
            <p className="text-3xl">Build for keyobard</p>
            <p className="text-md">asdasdasd</p>
          </div>
          <div className="flex flex-col justify-end min-h-[48rem]  text-center basis-[calc(33.33%-12px)] bg-glass-gradient p-8 border rounded-[4.8rem] border-transparent-white md:p-14">
            <p className="text-3xl">Build for keyobard</p>
            <p className="text-md">asdasdasd</p>
          </div>
          <div className="flex flex-col justify-end min-h-[48rem]  text-center basis-[calc(33.33%-12px)] bg-glass-gradient p-8 border rounded-[4.8rem] border-transparent-white md:p-14">
            <p className="text-3xl">Build for keyobard</p>
            <p className="text-md">asdasdasd</p>
          </div>
          <div className="flex flex-col justify-end min-h-[48rem]  text-center basis-[calc(66.66%-12px)] bg-glass-gradient p-8 border rounded-[4.8rem] border-transparent-white md:p-14">
            <p className="text-3xl">Build for keyobard</p>
            <p className="text-md">asdasdasd</p>
          </div>
        </div>
      </Container>
    </>
  );
}
