"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function CategoryNav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (nav) {
      gsap.fromTo(
        nav.querySelectorAll(".category-item"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <div ref={navRef} className="py-8">
      <div className="flex flex-col space-y-2">
        <Link
          href="/men"
          className="category-item text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          MEN
        </Link>
        <Link
          href="/women"
          className="category-item text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          WOMEN
        </Link>
        <Link
          href="/kids"
          className="category-item text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          KIDS
        </Link>
      </div>
    </div>
  );
}
