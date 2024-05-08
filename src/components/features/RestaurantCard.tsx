import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Rating from "./Rating";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  rating: string;
  price: string;
  isClosed: boolean;
  imgUrl: string;
  category: string;
};

export default function RestaurantCard({
  id,
  name,
  rating,
  imgUrl,
  price,
  isClosed,
  category,
}: Props) {
  return (
    <div className="w-full space-y-3 shadow-md rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        className="w-full aspect-video bg-accent bgc"
        alt="Thumbnail of the restaurant"
      />
      <div className=" px-3 pb-3 flex flex-col gap-2">
        <h3 className="text-lg font-medium text-primary truncate">{name}</h3>
        <Rating rating={rating} />
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {category} • {price}
          </p>
          {isClosed ? (
            <Badge variant="destructive">Closed</Badge>
          ) : (
            <Badge variant="default">Open</Badge>
          )}
        </div>
        <div className="pt-5 justify-self-end">
          <Button className="w-full rounded-lg" asChild>
            <Link to={`/restaurant/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
