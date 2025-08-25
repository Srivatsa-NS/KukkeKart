import dairyProducts from "@/assets/categories/dairy-products.jpg";
import dryFruits from "@/assets/categories/dry-fruits.jpg";
import fruits from "@/assets/categories/fruits.jpg";
import otherSpices from "@/assets/categories/other-spices.jpg";
import seedSpices from "@/assets/categories/seed-spices.jpg";
import wholeSpices from "@/assets/categories/whole-spices.jpg";

export const categories = [
  {
    name: "Whole Spices",
    image: wholeSpices,
    route: "/products",
  },

  {
    name: "Seed Spices",
    image: seedSpices,
    route: "/products",
  },
  {
    name: "Other Spices",
    image: otherSpices,
    route: "/products",
  },
  {
    name: "Dry Fruits",
    image: dryFruits,
    route: "/products",
  },
  {
    name: "Fruits",
    image: fruits,
    route: "/products",
  },
  {
    name: "Dairy Products",
    image: dairyProducts,
    route: "/products",
  },
];
