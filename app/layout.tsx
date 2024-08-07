import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
