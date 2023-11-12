import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const FeaturedItemSkeleton = () => {
  return (
    <div className="space-y-8">
      {Array.from({ length: 2 }).map((_, ix) => (
        <div key={`skeleton-${ix}`} className="flex space-x-4 md:space-x-8">
          {Array.from({ length: 3 }).map((_, iy) => (
            <Skeleton
              key={`skeleton-${ix}-item-${iy}`}
              className="w-full h-20 md:h-24"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeaturedItemSkeleton;
