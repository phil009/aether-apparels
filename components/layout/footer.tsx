"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Play, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for footer elements
    gsap.fromTo(
      ".footer-item",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-item">
            <Link href="/" className="flex items-center mb-4">
              <Play className="h-6 w-6 fill-white mr-2" />
              <span className="font-bold text-xl">BRAND</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium quality clothing with minimalist design aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="footer-item">
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/men" className="text-gray-400 hover:text-white">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="text-gray-400 hover:text-white">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="text-gray-400 hover:text-white">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/new" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-400 hover:text-white"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-gray-400 hover:text-white"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and early access to new
              collections.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-4 py-2 font-medium hover:bg-gray-200"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 footer-item">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Brand. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
