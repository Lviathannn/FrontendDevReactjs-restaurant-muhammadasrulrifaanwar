import { useInfiniteQuery } from "@tanstack/react-query";
import RestaurantCard from "@/components/features/RestaurantCard";
import { getRestaurantList } from "@/service/getRestaurantList";
import RestaurantCardSkeleton from "@/components/features/RestaurantCardSkeleton";
import { Button } from "@/components/ui/button";
import { useFilterStore } from "@/lib/store";

export default function RestaurantListSection() {
  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["restaurantList"],
    queryFn: getRestaurantList,
    initialPageParam: 0,
    getNextPageParam: (_, allpage) => {
      return (allpage.length + 1) * 20;
    },
  });

  const { category, isOpen, price } = useFilterStore();

  return (
    <section className="space-y-10 flex flex-col justify-center">
      <h2 className="text-2xl font-medium">All Restaurant</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.pages.map((page) => {
          const filteredRestaurants = page?.results.data.filter(
            (restaurant: Restaurant) => {
              return (
                (price === "all" || restaurant.price_level === price) &&
                (category === "all" || restaurant.category.key === category) &&
                (!isOpen || !restaurant.is_closed)
              );
            }
          );

          return filteredRestaurants.map((restaurant: Restaurant) => (
            <RestaurantCard
              key={restaurant.location_id}
              id={restaurant.location_id}
              name={restaurant.name}
              rating={restaurant.rating}
              price={restaurant.price_level}
              isClosed={restaurant.is_closed}
              imgUrl={restaurant.photo.images.medium.url}
              category={restaurant.category.name}
            />
          ));
        })}

        {isFetching &&
          Array.from({ length: 4 }).map((_, index) => (
            <RestaurantCardSkeleton key={index} />
          ))}
      </div>

      {data?.pages[0] !== undefined && (
        <Button
          className="max-w-sm w-full mx-auto"
          variant="outline"
          size="lg"
          onClick={() => {
            fetchNextPage();
          }}
        >
          Load More
        </Button>
      )}
    </section>
  );
}
