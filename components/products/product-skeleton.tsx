import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-5 w-1/4" />
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  )
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <Skeleton className="h-[500px] w-full mb-4" />
        <div className="flex space-x-2">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} className="h-20 w-16 flex-shrink-0" />
            ))}
        </div>
      </div>
      <div className="space-y-6">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-24 w-full" />
        <div className="space-y-4">
          <Skeleton className="h-5 w-1/4" />
          <div className="flex space-x-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} className="h-8 w-8 rounded-sm" />
              ))}
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-5 w-1/4" />
          <div className="grid grid-cols-6 gap-2">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} className="h-10" />
              ))}
          </div>
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  )
}

