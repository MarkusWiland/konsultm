import { Container } from "./container";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <h1>header</h1>
      </Container>
    </header>
  );
};
