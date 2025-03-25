import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/hero-section";
import CategoryNav from "@/components/home/category-nav";
import SearchBar from "@/components/ui/search-bar";
import FeaturedProducts from "@/components/home/featured-products";

export default function Home() {
  return (
    <Layout>
      <div className="pt-8 px-4 sm:px-6mx-auto">
        <CategoryNav />
        <SearchBar placeholder="Search" className="max-w-md mb-8" />
      </div>
      <HeroSection />
      <FeaturedProducts />
    </Layout>
  );
}
