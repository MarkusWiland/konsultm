import { cn } from "@/lib/utils";
import { Container } from "./container";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ButtonComponent } from "./button";
const navLinks = [
  {
    title: "Hem",
    href: "/",
  },
  {
    title: "Konsult",
    href: "/konsult",
  },
  {
    title: "Uppdrag",
    href: "/uppdrag",
  },
  {
    title: "Om",
    href: "/om",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-[rgba(120,_119,_198,_0.4)] backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link href="/" className="flex items-center text-md">
          <h1>header</h1>
        </Link>
        <div>
          <nav className={cn("h-full")}>
            <ul
              className={cn(
                "flex h-full items-center [&_a]:text-sm [&_li]:ml-6"
              )}
            >
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="ml-auto flex h-full items-center">
          {true ? (
            <>
              <Link className="mr-6 text-sm" href="#">
                Logga in
              </Link>
              <ButtonComponent
                href="#"
                className="rounded-full"
                variant="primary"
                size="medium"
              >
                Registrera
              </ButtonComponent>
            </>
          ) : (
            <Link className="mr-6 text-sm" href="#">
              Logga ut
            </Link>
          )}
        </div>

        <ButtonComponent
          className="ml-6 md:hidden"
          variant="primary"
          size="medium"
          href="#"
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerMenuIcon />
        </ButtonComponent>
      </Container>
    </header>
  );
};
