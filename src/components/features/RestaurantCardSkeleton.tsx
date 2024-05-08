import { Skeleton } from "../ui/skeleton";

export default function RestaurantCardSkeleton() {
  return (
    <div className="w-full space-y-3 shadow-md rounded-lg overflow-hidden">
      <div className="w-full aspect-video bg-accent" />
      <div className=" px-3 pb-3 flex flex-col gap-4">
        <Skeleton className="w-52 h-6 bg-accent" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-5 h-5 bg-primary" key={index} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="w-1/4 h-5 bg-accent" />
          <Skeleton className="w-1/4 h-5 bg-accent" />
        </div>
        <div className="pt-3 justify-self-end">
          <Skeleton className="h-10 bg-primary w-full" />
        </div>
      </div>
    </div>
  );
}
