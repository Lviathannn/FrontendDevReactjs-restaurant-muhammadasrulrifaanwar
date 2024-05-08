import DetailSkeleton from "@/components/features/DetailSkeleton";
import Rating from "@/components/features/Rating";
import ReviewCard from "@/components/features/ReviewCard";
import { getRestaurantDetail } from "@/service/getRestaurantDetail";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => getRestaurantDetail(id as string),
  });

  return (
    <main className="container py-24 space-y-10">
      {isLoading && <DetailSkeleton />}
      {data && (
        <>
          <img
            src={data?.photo.images.large.url}
            alt=""
            className="object-cover w-full h-96 rounded-lg shadow-md"
          />
          <section>
            <article className="space-y-3">
              <h1 className="text-3xl font-medium">{data?.name}</h1>
              <p className="text-muted-foreground text-lg">{data?.address}</p>
              <Rating rating={data?.rating as string} />
              <p className="text-muted-foreground text-lg">
                {data?.num_reviews} Review
              </p>
              <p className="text-muted-foreground max-w-2xl">
                {data?.description}
              </p>
            </article>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-medium">Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.reviews.map((review) => (
                <ReviewCard
                  key={review.review_id}
                  author={review.author}
                  rating={review.rating}
                  title={review.title}
                  review={review.summary}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
