"use client";
import gsap from "gsap";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search",
  className = "",
}: SearchBarProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      searchRef.current,
      { width: "60%", opacity: 0 },
      { width: "100%", opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={searchRef}
      className={`relative bg-gray-200 rounded-none ${className}`}
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full pl-10 pr-3 py-3 bg-transparent border-none focus:outline-none text-gray-900 placeholder-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
}
