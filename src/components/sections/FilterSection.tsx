import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { useFilterStore } from "@/lib/store";

export default function FilterSection() {
  const { setIsopen, setCategory, setPrice, reset, category, isOpen, price } =
    useFilterStore();

  return (
    <section className="bg-accent rounded-2xl w-full flex justify-between items-start p-5 flex-col gap-5 lg:flex-row">
      <div className="flex gap-8 flex-col items-start w-full lg:flex-row lg:items-center">
        <p className="text-slate-500">Filter :</p>
        <div className="flex gap-3 items-center">
          <Checkbox
            id="open-now"
            onCheckedChange={(e) => {
              setIsopen(e as boolean);
            }}
            checked={isOpen}
          />
          <label htmlFor="open-now">Open Now</label>
        </div>
        <Select
          onValueChange={(value) => {
            setPrice(value as never);
          }}
          value={price}
        >
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="$">$</SelectItem>
            <SelectItem value="$ - $$">$ - $$</SelectItem>
            <SelectItem value="$$">$$</SelectItem>
            <SelectItem value="$$ - $$$">$$ - $$$</SelectItem>
            <SelectItem value="$$$">$$$</SelectItem>
            <SelectItem value="$$$ - $$$$">$$$ - $$$$</SelectItem>
            <SelectItem value="$$$$">$$$$</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => {
            setCategory(value as never);
          }}
          value={category}
        >
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="restaurant">Restaurant</SelectItem>
            <SelectItem value="hotel">Hotel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={reset} className="w-full lg:w-auto">
        Clear All
      </Button>
    </section>
  );
}
