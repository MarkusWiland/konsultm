import React from "react";
import { Container } from "../_components/container";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { HeroSubtitle, HeroTitle } from "../_components/hero";
import { ButtonComponent } from "../_components/button";
import Link from "next/link";
const uppdrag = [
  {
    id: 1,
    title: "Uppdrag 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus sed justo tincidunt cursus. Sed nec eros vel nulla lacinia lacinia",
  },
  {
    id: 2,
    title: "Uppdrag 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus sed justo tincidunt cursus. Sed nec eros vel nulla lacinia lacinia",
  },
  {
    id: 3,
    title: "Uppdrag 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus sed justo tincidunt cursus. Sed nec eros vel nulla lacinia lacinia",
  },
  {
    id: 4,
    title: "Uppdrag 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus sed justo tincidunt cursus. Sed nec eros vel nulla lacinia lacinia",
  },
  {
    id: 5,
    title: "Uppdrag 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus sed justo tincidunt cursus. Sed nec eros vel nulla lacinia lacinia",
  },
];
export default function Uppdrag() {
  return (
    <Container className="pt-[6.4rem]">
      <HeroTitle>Uppdrag</HeroTitle>
      <HeroSubtitle>Hitta ditt uppdrag</HeroSubtitle>
      <div className="divide-y divide-whiteopaque bg-[#201726] border border-whiteopaque rounded-2xl">
        {uppdrag.map((item, index) => (
          <Link href={`uppdrag/${item.id}`} key={index}>
            <div
              key={index}
              className={`p-3 md:p-7 group flex hover:bg-whiteopaque transition-colors duration-300 cursor-pointer`}
            >
              <div className="">
                <img
                  src="https://via.placeholder.com/300"
                  alt="placeholder"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-6 px-6 flex flex-col">
                <CardHeader className="p-0">
                  <HeroTitle className="md:text-xl my-0">
                    {item.title}
                  </HeroTitle>
                </CardHeader>
                <CardDescription>
                  <HeroSubtitle className="md:text-sm">
                    {item.description}
                  </HeroSubtitle>
                </CardDescription>
                <CardFooter className="p-0">
                  <ButtonComponent href={"/"} variant="primary" size="large">
                    Läs mer{" "}
                  </ButtonComponent>
                </CardFooter>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Container>
  );
}
