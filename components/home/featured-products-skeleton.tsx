import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedProductsSkeleton() {
  return (
    <div className="py-16">
      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-5 w-1/4" />
            </div>
          ))}
      </div>
    </div>
  );
}
