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
    description: "Premium quality cashews sourced from the finest farms, rich in essential nutrients, healthy fats, and proteins. Perfect for snacking, cooking, or adding a delightful crunch to your favorite dishes.",
    keyBenefits: [
      "💪 Rich in protein and healthy fats for sustained energy",
      "❤️ Supports heart health with magnesium and copper",
      "🦴 Strengthens bones with calcium and phosphorus",
      "🧠 Boosts brain function and memory",
      "✨ Promotes healthy skin and hair"
    ]
  },
  {
    name: "Almond",
    image: almond,
    category: "Dry Fruits",
    price: 600,
    quantity: "500g",
    showAddToCart: true,
    description: "Fresh, crunchy almonds packed with vitamin E, fiber, and antioxidants. Ideal for healthy snacking, baking, or as a nutritious addition to your breakfast cereals and smoothies.",
    keyBenefits: [
      "🛡️ High in vitamin E for powerful antioxidant protection",
      "💓 Lowers bad cholesterol and supports heart health",
      "⚖️ Aids in weight management with fiber and protein",
      "🧠 Enhances cognitive function and memory",
      "🌟 Improves skin health and reduces aging signs"
    ]
  },
  {
    name: "Pistachio",
    image: pista,
    category: "Dry Fruits",
    price: 900,
    quantity: "200g",
    showAddToCart: true,
    description: "Premium quality pistachios with a rich, buttery flavor and vibrant green color. Loaded with protein, fiber, and healthy fats, these make an excellent guilt-free snack.",
    keyBenefits: [
      "👁️ Rich in lutein and zeaxanthin for eye health",
      "💪 High protein content supports muscle building",
      "🩸 Helps regulate blood sugar levels",
      "❤️ Promotes cardiovascular health",
      "😊 Contains B6 for mood enhancement"
    ]
  },
  {
    name: "Fig",
    image: fig,
    category: "Dry Fruits",
    price: 400,
    quantity: "15 pieces",
    showAddToCart: true,
    description: "Sweet, naturally dried figs bursting with natural goodness, fiber, and minerals. Perfect for desserts, energy bars, or enjoyed on their own as a wholesome sweet treat.",
    keyBenefits: [
      "🌾 Excellent source of dietary fiber for digestion",
      "🦴 Rich in calcium for strong bones and teeth",
      "⚡ Natural energy booster with quick sugars",
      "🩸 Helps regulate blood pressure with potassium",
      "🍬 Natural sweetener alternative for desserts"
    ]
  },
  {
    name: "Walnut",
    image: walnut,
    category: "Dry Fruits",
    price: 800,
    quantity: "12 pieces",
    showAddToCart: true,
    description: "Brain-healthy walnuts rich in omega-3 fatty acids, antioxidants, and essential minerals. Known for supporting heart health and cognitive function while adding a delicious nutty flavor to any dish.",
    keyBenefits: [
      "🧠 Omega-3 fatty acids boost brain health and memory",
      "❤️ Reduces inflammation and supports heart health",
      "😴 Contains melatonin for better sleep quality",
      "🛡️ Powerful antioxidants fight free radicals",
      "💪 Supports healthy aging and longevity"
    ]
  },
  
  // Fruits
  {
    name: "Kiwi",
    image: kiwi,
    category: "Fruits",
    price: 150,
    quantity: "4 pieces",
    showAddToCart: true,
    description: "Fresh, tangy kiwi fruits bursting with vitamin C, fiber, and antioxidants. These exotic fruits offer a perfect balance of sweet and tart flavors, ideal for fruit salads or healthy snacking.",
    keyBenefits: [
      "🍊 Extremely high in vitamin C for immunity boost",
      "😴 Promotes better sleep with serotonin",
      "🌾 Rich in dietary fiber for digestive health",
      "❤️ Supports heart health and blood pressure",
      "🌟 Enhances skin health and collagen production"
    ]
  },
  {
    name: "Grapes",
    image: grapes,
    category: "Fruits",
    price: 120,
    quantity: "500g",
    showAddToCart: true,
    description: "Sweet, juicy grapes handpicked at peak ripeness. Rich in natural sugars, vitamins, and antioxidants, these refreshing fruits are perfect for snacking or adding to desserts.",
    keyBenefits: [
      "💧 High water content keeps you hydrated",
      "👁️ Contains antioxidants for eye health",
      "❤️ Supports cardiovascular health",
      "🧠 Boosts brain function and memory",
      "⚡ Quick natural energy from natural sugars"
    ]
  },
  {
    name: "Black Grapes",
    image: blackGrapes,
    category: "Fruits",
    price: 140,
    quantity: "500g",
    showAddToCart: true,
    description: "Premium black grapes with a rich, sweet flavor and deep purple color. Packed with powerful antioxidants and resveratrol, these grapes support heart health and overall wellness.",
    keyBenefits: [
      "🍷 Rich in resveratrol for anti-aging benefits",
      "❤️ Protects heart and improves circulation",
      "🛡️ Powerful antioxidants fight inflammation",
      "🧠 Enhances cognitive function",
      "👁️ Supports eye health and vision"
    ]
  },
  {
    name: "Indian Gooseberry",
    image: amla,
    category: "Fruits",
    price: 80,
    quantity: "250g",
    showAddToCart: true,
    description: "Fresh amla (Indian gooseberry) exceptionally rich in vitamin C and antioxidants. Known for its immunity-boosting properties and traditional use in Ayurvedic medicine for overall health and vitality.",
    keyBenefits: [
      "🛡️ Supercharged with vitamin C for immunity",
      "💇 Promotes healthy hair growth and shine",
      "🌟 Improves skin complexion and texture",
      "🩸 Helps regulate blood sugar levels",
      "💓 Supports liver health and detoxification"
    ]
  },
  
  // Whole Spices
  {
    name: "Cinnamon",
    image: cinnamon,
    category: "Whole Spices",
    price: 120,
    quantity: "50g",
    showAddToCart: true,
    description: "Premium quality cinnamon sticks with a warm, sweet aroma and distinctive flavor. Perfect for adding depth to both sweet and savory dishes, beverages, and traditional spice blends.",
    keyBenefits: [
      "🩸 Helps regulate blood sugar levels naturally",
      "🔥 Anti-inflammatory properties reduce swelling",
      "❤️ Supports heart health and circulation",
      "🧠 Improves brain function and memory",
      "🛡️ Rich in antioxidants for overall wellness"
    ]
  },
  {
    name: "Clove",
    image: clove,
    category: "Whole Spices",
    price: 200,
    quantity: "25g",
    showAddToCart: true,
    description: "Aromatic whole cloves with an intense, warm flavor and medicinal properties. Essential for spice blends, marinades, and adding a distinctive taste to curries, rice dishes, and desserts.",
    keyBenefits: [
      "🦷 Natural remedy for toothache and oral health",
      "🌿 Powerful antibacterial and antiviral properties",
      "🌾 Aids digestion and reduces bloating",
      "🔥 Anti-inflammatory benefits for joints",
      "🛡️ High in antioxidants for immune support"
    ]
  },
  {
    name: "Cardamom",
    image: cardamom,
    category: "Whole Spices",
    price: 300,
    quantity: "50g",
    showAddToCart: true,
    description: "Premium green cardamom pods with an exotic, sweet-spicy aroma. Known as the 'Queen of Spices', perfect for flavoring desserts, chai, biryanis, and traditional Indian sweets.",
    keyBenefits: [
      "💄 Freshens breath naturally and improves oral health",
      "🌾 Aids digestion and relieves stomach discomfort",
      "🩸 Helps lower blood pressure naturally",
      "😮‍💨 Improves respiratory health and breathing",
      "🛡️ Detoxifying properties cleanse the body"
    ]
  },
  {
    name: "Nutmeg",
    image: nutmeg,
    category: "Whole Spices",
    price: 250,
    quantity: "25g",
    showAddToCart: true,
    description: "Whole nutmeg with a warm, aromatic flavor and slightly sweet taste. Freshly grated nutmeg adds incredible depth to baked goods, creamy sauces, and traditional spice mixes.",
    keyBenefits: [
      "😴 Promotes better sleep and relaxation",
      "🧠 Enhances cognitive function and focus",
      "🌾 Aids digestion and relieves indigestion",
      "💆 Relieves pain and muscle aches",
      "💓 Supports liver health and detoxification"
    ]
  },
  {
    name: "Black Pepper",
    image: wholeSpices,
    category: "Whole Spices",
    price: 180,
    quantity: "100g",
    showAddToCart: true,
    description: "Fresh black peppercorns with an intense, pungent flavor and sharp bite. The king of spices, essential for seasoning, marinades, and adding heat to virtually any savory dish.",
    keyBenefits: [
      "🌾 Enhances nutrient absorption in the body",
      "🔥 Boosts metabolism and aids weight loss",
      "🧠 Improves brain function and memory",
      "🌿 Anti-inflammatory and antibacterial properties",
      "🌾 Aids digestion and prevents gas"
    ]
  },
  {
    name: "Fenugreek",
    image: fenugreek,
    category: "Whole Spices",
    price: 60,
    quantity: "200g",
    showAddToCart: true,
    description: "Whole fenugreek seeds with a slightly bitter, nutty flavor. Commonly used for tempering in Indian cuisine, these seeds add depth to curries, pickles, and spice blends.",
    keyBenefits: [
      "🩸 Helps control blood sugar and diabetes",
      "👩‍🍼 Supports lactation in nursing mothers",
      "🌾 Aids digestion and reduces constipation",
      "💇 Promotes healthy hair growth",
      "🔥 Anti-inflammatory properties for joints"
    ]
  },
  {
    name: "Mustard Seeds",
    image: wholeSpices,
    category: "Whole Spices",
    price: 60,
    quantity: "100g",
    showAddToCart: true,
    description: "Pungent mustard seeds perfect for tempering and adding a sharp, tangy flavor. Essential in Indian cooking for tadka, pickles, and creating authentic regional dishes with bold taste.",
    keyBenefits: [
      "💆 Relieves muscle pain and inflammation",
      "😮‍💨 Clears respiratory congestion naturally",
      "🌾 Rich in omega-3 for heart health",
      "🛡️ Powerful antioxidants fight free radicals",
      "🦴 Strengthens bones with calcium and magnesium"
    ]
  },
  {
    name: "Bird's Eye Chili",
    image: wholeSpices,
    category: "Whole Spices",
    price: 150,
    quantity: "50g",
    showAddToCart: true,
    description: "Hot and fiery bird's eye chilies packed with intense heat and flavor. These small but mighty chilies are perfect for those who love spicy food and authentic Southeast Asian cuisine.",
    keyBenefits: [
      "🔥 Boosts metabolism and burns calories",
      "💆 Natural pain relief with capsaicin",
      "❤️ Improves heart health and circulation",
      "🛡️ Rich in vitamin C for immunity",
      "😊 Releases endorphins for mood boost"
    ]
  },
  {
    name: "Star Anise",
    image: starAnise,
    category: "Whole Spices",
    price: 150,
    quantity: "8 pieces",
    showAddToCart: true,
    description: "Beautiful star-shaped spice with a sweet licorice-like flavor and aromatic fragrance. Essential for Asian cuisine, spice blends, and adding a unique depth to broths, stews, and desserts.",
    keyBenefits: [
      "🌾 Aids digestion and reduces bloating",
      "😮‍💨 Relieves cough and respiratory issues",
      "🌿 Antibacterial and antifungal properties",
      "😴 Promotes better sleep and relaxation",
      "🛡️ Rich in antioxidants for wellness"
    ]
  },
  
  // Seed Spices
  {
    name: "Cumin",
    image: seedSpices,
    category: "Seed Spices",
    price: 80,
    quantity: "250g",
    showAddToCart: true,
    description: "Essential cumin seeds with an earthy, warm flavor that forms the backbone of Indian cooking. Perfect for tempering, spice blends, and adding authentic taste to curries and rice dishes.",
    keyBenefits: [
      "🌾 Aids digestion and prevents gas formation",
      "🔥 Boosts metabolism and aids weight loss",
      "🛡️ Rich in iron for healthy blood",
      "🩸 Helps control blood sugar levels",
      "💤 Improves sleep quality naturally"
    ]
  },
  {
    name: "Poppy Seeds",
    image: seedSpices,
    category: "Seed Spices",
    price: 120,
    quantity: "100g",
    showAddToCart: true,
    description: "Premium white poppy seeds with a nutty flavor and creamy texture. Ideal for thickening gravies, adding richness to desserts, and creating authentic Bengali and Mughlai dishes.",
    keyBenefits: [
      "🦴 Rich in calcium for strong bones",
      "😴 Promotes better sleep and relaxation",
      "🌾 High in dietary fiber for digestion",
      "🛡️ Contains antioxidants for immunity",
      "💆 Relieves pain and inflammation"
    ]
  },
  {
    name: "Carom Seeds",
    image: seedSpices,
    category: "Seed Spices",
    price: 100,
    quantity: "100g",
    showAddToCart: true,
    description: "Ajwain seeds with a thyme-like aroma and powerful digestive properties. Commonly used in Indian breads, snacks, and as a natural remedy for digestive issues and bloating.",
    keyBenefits: [
      "🌾 Instant relief from indigestion and acidity",
      "👶 Reduces gas and bloating naturally",
      "😮💨 Helps with respiratory problems and asthma",
      "⚖️ Aids in weight loss and metabolism",
      "🦷 Natural remedy for toothache"
    ]
  },
  {
    name: "Fennel Seeds",
    image: fennel,
    category: "Seed Spices",
    price: 90,
    quantity: "150g",
    showAddToCart: true,
    description: "Sweet, aromatic fennel seeds known for their digestive benefits and refreshing flavor. Perfect for mouth fresheners, spice blends, and adding a subtle sweetness to both savory and sweet dishes.",
    keyBenefits: [
      "🌾 Excellent for digestion and bloating relief",
      "💄 Freshens breath naturally after meals",
      "👩🍼 Supports lactation in nursing mothers",
      "👁️ Improves eye health and vision",
      "🩸 Helps regulate blood pressure"
    ]
  },
  
  // Other Spices
  {
    name: "Mace",
    image: otherSpices,
    category: "Other Spices",
    price: 400,
    quantity: "25g",
    showAddToCart: true,
    description: "Aromatic mace spice with a delicate, warm flavor similar to nutmeg but more refined. This premium spice adds a sophisticated depth to biryanis, garam masala, and rich Mughlai dishes.",
    keyBenefits: [
      "🌾 Aids digestion and reduces nausea",
      "😴 Promotes relaxation and better sleep",
      "💆 Relieves muscle and joint pain",
      "🧠 Enhances cognitive function and focus",
      "💄 Improves skin health and complexion"
    ]
  },
  {
    name: "Black Stone Flower",
    image: otherSpices,
    category: "Other Spices",
    price: 200,
    quantity: "50g",
    showAddToCart: true,
    description: "Unique black stone flower (dagad phool) with an earthy, mossy aroma. Essential for authentic Hyderabadi biryanis and traditional spice blends, adding a distinctive depth and complexity to dishes.",
    keyBenefits: [
      "🔥 Anti-inflammatory properties for joints",
      "🌿 Antibacterial and antimicrobial benefits",
      "🌾 Aids digestion and reduces bloating",
      "😮💨 Helps with respiratory health",
      "🛡️ Rich in antioxidants for immunity"
    ]
  },
  
  // Dairy & Sweeteners
  {
    name: "Honey",
    image: dairyProducts,
    category: "Dairy & Sweeteners",
    price: 300,
    quantity: "500ml",
    showAddToCart: true,
    description: "Pure, natural honey harvested from pristine sources, rich in antioxidants and natural enzymes. Perfect as a natural sweetener for beverages, desserts, or enjoyed directly for its health benefits.",
    keyBenefits: [
      "🍯 Natural energy booster with quick sugars",
      "🛡️ Rich in antioxidants for immunity",
      "😷 Soothes cough and throat irritation",
      "💄 Promotes healthy skin and wound healing",
      "🌾 Aids digestion and gut health"
    ]
  },
  {
    name: "Cow Ghee",
    image: dairyProducts,
    category: "Dairy & Sweeteners",
    price: 500,
    quantity: "500ml",
    showAddToCart: true,
    description: "Pure cow ghee made using traditional methods from high-quality milk. Rich in healthy fats and vitamins, this golden elixir enhances the flavor of any dish while offering numerous health benefits.",
    keyBenefits: [
      "🧠 Boosts brain function and memory",
      "🌾 Aids digestion and nutrient absorption",
      "🛡️ Rich in vitamins A, D, E, and K",
      "👁️ Improves eye health and vision",
      "💆 Promotes healthy skin and joints"
    ]
  }
]