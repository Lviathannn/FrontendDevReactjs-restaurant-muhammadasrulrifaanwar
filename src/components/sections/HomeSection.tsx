import HeroImg from "@/assets/image/hero.png";
import { Button } from "../ui/button";

export default function HomeSection() {
  return (
    <section className="flex justify-between items-center gap-10 flex-col lg:flex-row">
      <article className="space-y-5">
        <h1 className="text-[50px] font-bold text-primary">
          Welcome to FlavorFindr!
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Explore a world of dining delights with us. From cozy cafes to
          Michelin-starred eateries, find your perfect spot for any occasion.
          Join our community and start your culinary journey today!
        </p>
        <Button className="rounded-lg" size="lg">
          Explore
        </Button>
      </article>
      <img src={HeroImg} alt="Hero" className="w-[600px]" />
    </section>
  );
}
