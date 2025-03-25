"use client";
import gsap from "gsap";
import { Link, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const tl = gsap.timeline();
      tl.fromTo(
        section.querySelector(".hero-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          section.querySelector(".hero-subtitle"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          section.querySelectorAll(".hero-image"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          section.querySelector(".hero-cta"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
    }
  }, []);

  return (
    <div ref={sectionRef} className="pt-16 pb-12 md:py-24 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="hero-title text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            NEW
            <br />
            COLLECTION
          </h1>
          <p className="hero-subtitle mt-4 text-xl text-gray-600">
            Summer 2024
          </p>
          <Link
            href="/collections"
            className="hero-cta mt-8 inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
          >
            Go To Shop <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="hero-image">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="New collection item"
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="hero-image">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="New collection item"
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
