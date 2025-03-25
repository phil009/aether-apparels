import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
