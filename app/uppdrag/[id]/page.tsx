import { ButtonComponent } from "@/app/_components/button";
import { Container } from "@/app/_components/container";
import { HeroTitle } from "@/app/_components/hero";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
interface Uppdrag {
  id: string;
  title: string;
  description: string;
  image: string;
}
export default function UppdragPage({ params }: { params: { id: string } }) {
  return (
    <Container className="pt-[6.4rem]">
      <ButtonComponent
        href="/uppdrag"
        variant="primary"
        size="large"
        className="mb-6"
      >
        Gå tillbaka
      </ButtonComponent>
      <Card className="p-6">
        <CardHeader className="p-0">
          <Image
            src="https://via.placeholder.com/1000"
            width={1000}
            height={200}
            className="w-full h-[20rem] rounded-lg"
            objectFit="cover"
            alt="placeholder"
          />
          <CardTitle>
            <HeroTitle>Front End Utvecklare</HeroTitle>
          </CardTitle>
        </CardHeader>
        <CardDescription
          className="flex gap-4 bg-[#201726]
        p-4 rounded-xl"
        >
          <div className="md:basis-2/3">
            VI söker just nu en Front End utvecklare som kan hjälpa oss med att
            bygga en ny hemsida. Vi söker dig som har erfarenhet av att arbeta
            med React och Typescript.
          </div>
          <div className="flex gap-4 md:basis-1/3">
            <div className="space-y-4">
              <h2 className="font-bold uppercase">Erfarenheter</h2>
              <ul className=" list-disc md:text-[1.2rem]">
                <li>3 års erfarenhet</li>
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold uppercase">Meriterande erfarenheter</h2>
              <ul className=" list-disc md:text-[1.2rem]">
                <li>3 års erfarenhet</li>
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </CardDescription>
        <CardFooter className="mt-6 p-0">
          <ButtonComponent href="/" variant="primary" size="large">
            Ansök
          </ButtonComponent>
        </CardFooter>
      </Card>
    </Container>
  );
}
