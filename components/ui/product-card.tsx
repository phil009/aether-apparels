"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  slug: string
}

export default function ProductCard({ name, price, image, category, slug }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current

    if (card) {
      // Initial animation
      gsap.fromTo(card, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })

      // Hover animation setup
      const timeline = gsap.timeline({ paused: true })
      timeline.to(card.querySelector(".product-image"), { scale: 1.05, duration: 0.3 })

      card.addEventListener("mouseenter", () => timeline.play())
      card.addEventListener("mouseleave", () => timeline.reverse())

      return () => {
        card.removeEventListener("mouseenter", () => timeline.play())
        card.removeEventListener("mouseleave", () => timeline.reverse())
      }
    }
  }, [])

  return (
    <div ref={cardRef} className="group">
      <Link href={`/products/${slug}`}>
        <div className="overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=300"}
            alt={name}
            width={300}
            height={400}
            className="product-image w-full h-auto object-cover transition-transform duration-300"
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-gray-500">{category}</div>
          <h3 className="text-base font-medium text-gray-900 mt-1">{name}</h3>
          <p className="text-base font-medium text-gray-900 mt-1">${price}</p>
        </div>
      </Link>
    </div>
  )
}

