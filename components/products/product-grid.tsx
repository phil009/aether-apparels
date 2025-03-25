"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProductCard from "../ui/product-card"
import { ProductGridSkeleton } from "./product-skeleton"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  slug: string
}

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
}

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const grid = gridRef.current

    if (grid && !isLoading) {
      // Products staggered animation
      gsap.fromTo(
        grid.querySelectorAll(".product-item"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top bottom-=100",
          },
        },
      )
    }
  }, [products, isLoading])

  if (isLoading) {
    return <ProductGridSkeleton count={products.length || 8} />
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  )
}

