import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Rating from "./Rating";

type Props = {
  title: string;
  rating: string;
  author: string;
  review: string;
};

export default function ReviewCard({ title, rating, author, review }: Props) {
  return (
    <article className="w-full bg-accent p-5 rounded-lg">
      <div className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="@shadcn"
          />
          <AvatarFallback>USR</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="text-lg font-semibold">{author}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="">
        <h3 className=" font-medium mt-3">{title}</h3>
        <p className="text-muted-foreground mt-2">{review}</p>
      </div>
    </article>
  );
}
