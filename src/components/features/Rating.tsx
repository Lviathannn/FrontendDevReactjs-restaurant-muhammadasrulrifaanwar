import { Star, StarHalf } from "lucide-react";

type Props = {
  rating: string;
};

export default function Rating({ rating }: Props) {
  const ratingNumber = parseFloat(rating);
  const integerPart = Math.floor(ratingNumber);
  const fractionalPart = ratingNumber - integerPart;

  return (
    <div className="flex gap-1">
      {Array.from({ length: integerPart }).map((_, index) => (
        <Star
          className="w-5 h-5"
          fill="hsl(var(--primary))"
          strokeWidth={0}
          key={index}
        />
      ))}
      {fractionalPart > 0 && (
        <StarHalf
          className="w-5 h-5"
          fill="hsl(var(--primary))"
          strokeWidth={0}
        />
      )}
    </div>
  );
}
