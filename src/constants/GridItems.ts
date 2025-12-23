import dairyProducts from "@/assets/optimized/dairy-products.webp";
import dryFruits from "@/assets/optimized/dry-fruits.webp";
import fruits from "@/assets/optimized/fruits.webp";
import otherSpices from "@/assets/optimized/other-spices.webp";
import seedSpices from "@/assets/optimized/seed-spices.webp";
import wholeSpices from "@/assets/optimized/whole-spices.webp";

import almond from "@/assets/optimized/almond.webp";
import amla from "@/assets/optimized/amla.webp";
import blackGrapes from "@/assets/optimized/black-grapes.webp"
import cardamom from "@/assets/optimized/cardamom.webp";
import cashew from "@/assets/optimized/cashew.webp";
import cinnamon from "@/assets/optimized/cinnamon.webp";
import clove from "@/assets/optimized/clove.webp";
import fenugreek from "@/assets/optimized/fenugreek.webp";
import fennel from "@/assets/optimized/fennel.webp";
import fig from "@/assets/optimized/fig.webp"
import grapes from "@/assets/optimized/grapes.webp"
import kiwi from "@/assets/optimized/kiwi.webp"
import nutmeg from "@/assets/optimized/nutmeg.webp";
import pista from "@/assets/optimized/pista.webp"
import starAnise from "@/assets/optimized/star-anise.webp";
import walnut from "@/assets/optimized/walnut.webp"

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
    name: "Dairy & Sweeteners",
    image: dairyProducts,
    route: "/products",
  },
];

export const allProducts = [
  // Dry Fruits
  {
    name: "Cashew",
    image: cashew,
    category: "Dry Fruits",
    price: 700,
    quantity: "250g",
    showAddToCart: true,
    description: "Premium quality cashews rich in nutrients"
  },
  {
    name: "Almond",
    image: almond,
    category: "Dry Fruits",
    price: 600,
    quantity: "500g",
    showAddToCart: true,
    description: "Fresh almonds perfect for snacking"
  },
  {
    name: "Pistachio",
    image: pista,
    category: "Dry Fruits",
    price: 900,
    quantity: "200g",
    showAddToCart: true,
    description: "Premium pistachios with rich flavor"
  },
  {
    name: "Fig",
    image: fig,
    category: "Dry Fruits",
    price: 400,
    quantity: "15 pieces",
    showAddToCart: true,
    description: "Sweet dried figs with natural goodness"
  },
  {
    name: "Walnut",
    image: walnut,
    category: "Dry Fruits",
    price: 800,
    quantity: "12 pieces",
    showAddToCart: true,
    description: "Brain-healthy walnuts with omega-3"
  },
  
  // Fruits
  {
    name: "Kiwi",
    image: kiwi,
    category: "Fruits",
    price: 150,
    quantity: "4 pieces",
    showAddToCart: true,
    description: "Fresh kiwi fruits rich in vitamin C"
  },
  {
    name: "Grapes",
    image: grapes,
    category: "Fruits",
    price: 120,
    quantity: "500g",
    showAddToCart: true,
    description: "Sweet and juicy grapes"
  },
  {
    name: "Black Grapes",
    image: blackGrapes,
    category: "Fruits",
    price: 140,
    quantity: "500g",
    showAddToCart: true,
    description: "Premium black grapes with rich flavor"
  },
  {
    name: "Indian Gooseberry",
    image: amla,
    category: "Fruits",
    price: 80,
    quantity: "250g",
    showAddToCart: true,
    description: "Fresh amla rich in vitamin C"
  },
  
  // Whole Spices
  {
    name: "Cinnamon",
    image: cinnamon,
    category: "Whole Spices",
    price: 120,
    quantity: "50g",
    showAddToCart: true,
    description: "Premium quality cinnamon sticks"
  },
  {
    name: "Clove",
    image: clove,
    category: "Whole Spices",
    price: 200,
    quantity: "25g",
    showAddToCart: true,
    description: "Aromatic cloves perfect for spice blends"
  },
  {
    name: "Cardamom",
    image: cardamom,
    category: "Whole Spices",
    price: 300,
    quantity: "50g",
    showAddToCart: true,
    description: "Premium green cardamom pods"
  },
  {
    name: "Nutmeg",
    image: nutmeg,
    category: "Whole Spices",
    price: 250,
    quantity: "25g",
    showAddToCart: true,
    description: "Whole nutmeg with warm aromatic flavor"
  },
  {
    name: "Black Pepper",
    image: wholeSpices,
    category: "Whole Spices",
    price: 180,
    quantity: "100g",
    showAddToCart: true,
    description: "Fresh black peppercorns with intense flavor"
  },
  {
    name: "Fenugreek",
    image: fenugreek,
    category: "Whole Spices",
    price: 60,
    quantity: "200g",
    showAddToCart: true,
    description: "Whole fenugreek seeds for tempering"
  },
  {
    name: "Mustard Seeds",
    image: wholeSpices,
    category: "Whole Spices",
    price: 60,
    quantity: "100g",
    showAddToCart: true,
    description: "Pungent mustard seeds for tempering"
  },
  {
    name: "Bird's Eye Chili",
    image: wholeSpices,
    category: "Whole Spices",
    price: 150,
    quantity: "50g",
    showAddToCart: true,
    description: "Hot and spicy bird's eye chilies"
  },
  {
    name: "Star Anise",
    image: starAnise,
    category: "Whole Spices",
    price: 150,
    quantity: "8 pieces",
    showAddToCart: true,
    description: "Star-shaped spice with sweet licorice flavor"
  },
  
  // Seed Spices
  {
    name: "Cumin",
    image: seedSpices,
    category: "Seed Spices",
    price: 80,
    quantity: "250g",
    showAddToCart: true,
    description: "Essential cumin seeds for Indian cooking"
  },
  {
    name: "Poppy Seeds",
    image: seedSpices,
    category: "Seed Spices",
    price: 120,
    quantity: "100g",
    showAddToCart: true,
    description: "White poppy seeds for gravies and desserts"
  },
  {
    name: "Carom Seeds",
    image: seedSpices,
    category: "Seed Spices",
    price: 100,
    quantity: "100g",
    showAddToCart: true,
    description: "Ajwain seeds with digestive properties"
  },
  {
    name: "Fennel Seeds",
    image: fennel,
    category: "Seed Spices",
    price: 90,
    quantity: "150g",
    showAddToCart: true,
    description: "Sweet fennel seeds for digestive benefits"
  },
  
  // Other Spices
  {
    name: "Mace",
    image: otherSpices,
    category: "Other Spices",
    price: 400,
    quantity: "25g",
    showAddToCart: true,
    description: "Aromatic mace spice for rich flavor"
  },
  {
    name: "Black Stone Flower",
    image: otherSpices,
    category: "Other Spices",
    price: 200,
    quantity: "50g",
    showAddToCart: true,
    description: "Unique black stone flower for authentic taste"
  },
  
  // Dairy & Sweeteners
  {
    name: "Honey",
    image: dairyProducts,
    category: "Dairy & Sweeteners",
    price: 300,
    quantity: "500ml",
    showAddToCart: true,
    description: "Pure natural honey"
  },
  {
    name: "Cow Ghee",
    image: dairyProducts,
    category: "Dairy & Sweeteners",
    price: 500,
    quantity: "500ml",
    showAddToCart: true,
    description: "Pure cow ghee made traditionally"
  }
]