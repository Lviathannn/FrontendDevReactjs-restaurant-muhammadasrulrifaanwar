import { Skeleton } from "../ui/skeleton";

export default function DetailSkeleton() {
  return (
    <>
      <Skeleton className=" w-full h-96 rounded-lg bg-accent" />
      <section>
        <article className="space-y-4">
          <Skeleton className="h-8 w-40 bg-accent" />
          <Skeleton className="bg-accent h-5 w-80" />
          <Skeleton className="bg-primary w-40 h-5" />
          <Skeleton className="bg-accent w-28 h-5" />

          <Skeleton className="bg-accent w-full max-w-2xl h-5" />
          <Skeleton className="bg-accent w-full max-w-2xl h-5" />
          <Skeleton className="bg-accent w-full max-w-xl h-5" />
          <Skeleton className="bg-accent w-full max-w-lg h-5" />
        </article>
      </section>

      <section className="space-y-5">
        <Skeleton className="bg-accent h-8 w-32" />{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Skeleton className="w-full rounded-xl bg-accent aspect-video" />
          <Skeleton className="w-full rounded-xl bg-accent aspect-video" />
          <Skeleton className="w-full rounded-xl bg-accent aspect-video" />
        </div>
      </section>
    </>
  );
}
