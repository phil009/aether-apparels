"use client";
import { useEffect, useRef, useState } from "react";
import FeaturedProductsSkeleton from "./featured-products-skeleton";
import ProductCard from "../ui/product-card";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

// Sample product data
const products = [
  {
    id: "1",
    name: "Cotton T-Shirt",
    price: 199,
    image: "/placeholder.svg?height=400&width=300",
    category: "Cotton T-Shirt",
    slug: "cotton-t-shirt-1",
  },
  {
    id: "2",
    name: "Full Sleeve Zipper",
    price: 199,
    image: "/placeholder.svg?height=400&width=300",
    category: "Cotton T-Shirt",
    slug: "full-sleeve-zipper-1",
  },
  {
    id: "3",
    name: "Basic Slim Fit T-Shirt",
    price: 199,
    image: "/placeholder.svg?height=400&width=300",
    category: "Cotton T-Shirt",
    slug: "basic-slim-fit-t-shirt",
  },
  {
    id: "4",
    name: "Abstract Print Shirt",
    price: 199,
    image: "/placeholder.svg?height=400&width=300",
    category: "Cotton T-Shirt",
    slug: "abstract-print-shirt",
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);

    const section = sectionRef.current;

    if (section && !isLoading) {
      gsap.fromTo(
        section.querySelector(".section-title"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".product-item"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
          },
        }
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  return (
    <div ref={sectionRef} className="py-16 px-4 sm:px-6 mx-auto">
      <h2 className="section-title text-3xl font-bold text-gray-900 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
