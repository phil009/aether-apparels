"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, Heart, User } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import Logo from "../logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Animation for navbar elements
    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );

    // Check if page is scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white"
      )}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-item inline-flex md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8 nav-item">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Collections
            </Link>
            <Link
              href="/new"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              New
            </Link>
          </nav>

          {/* Logo/Center element */}
          <div className="flex justify-center nav-item">
            <Logo />
          </div>

          {/* Right navigation */}
          <div className="flex items-center space-x-4">
            <button className="nav-item p-2 rounded-full hover:bg-gray-100">
              <Heart className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="nav-item relative p-2 rounded-full bg-gray-900 text-white"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link
              href={"/profile"}
              className="nav-item p-2 rounded-full hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/collections"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Collections
          </Link>
          <Link
            href="/new"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            New
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3">
              <div className="text-sm font-medium text-gray-500">SHOP BY</div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/men"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                MEN
              </Link>
              <Link
                href="/women"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                WOMEN
              </Link>
              <Link
                href="/kids"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                KIDS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
