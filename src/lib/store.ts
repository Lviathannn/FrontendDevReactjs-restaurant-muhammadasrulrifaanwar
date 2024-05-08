import { create } from "zustand";

interface FilterState {
  isOpen: boolean;
  price: "all" | "$" | "$ - $$" | "$$ - $$$" | "$$$ - $$$$" | "$$$$";
  category: "all" | "restaurant" | "hotel";
  setIsopen: (isOpen: boolean) => void;
  setPrice: (
    price: "all" | "$" | "$ - $$" | "$$ - $$$" | "$$$ - $$$$" | "$$$$"
  ) => void;
  setCategory: (category: "all" | "restaurant" | "hotel") => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  isOpen: false,
  price: "all",
  category: "all",
  setIsopen: (isOpen) => set({ isOpen }),
  setPrice: (price) => set({ price }),
  setCategory: (category) => set({ category }),
  reset: () => set({ isOpen: false, price: "all", category: "all" }),
}));
