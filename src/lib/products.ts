import productNecklace3Apples from "@/assets/product-necklace-3apples.jpg";
import productEarringsDilijan from "@/assets/product-earrings-dilijan.jpg";
import productEarringsGyumri from "@/assets/product-earrings-gyumri.jpg";
import productNecklaceMelancholy from "@/assets/product-necklace-melancholy.jpg";
import productRingManuscripts from "@/assets/product-ring-manuscripts.jpg";
import productBraceletManuscripts from "@/assets/product-bracelet-manuscripts.jpg";
import productBroochManuscripts from "@/assets/product-brooch-manuscripts.jpg";
import productEarringsManuscripts from "@/assets/product-earrings-manuscripts.jpg";
import productNecklaceManuscripts from "@/assets/product-necklace-manuscripts.jpg";

export type Category = "rings" | "necklaces" | "earrings" | "bracelets" | "brooches";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  favorite?: boolean;
}

export const categories: { id: Category; name: string; description: string }[] = [
  { id: "rings", name: "Rings", description: "Timeless elegance for every occasion" },
  { id: "necklaces", name: "Necklaces", description: "Graceful pendants and chains" },
  { id: "earrings", name: "Earrings", description: "From subtle studs to statement pieces" },
  { id: "bracelets", name: "Bracelets", description: "Wrist adornments of distinction" },
  { id: "brooches", name: "Brooches", description: "Elegant brooches to add a refined touch" },
];

export const products: Product[] = [
  {
    id: "three-apples-necklace",
    name: "Three Apples Fell from the Sky Necklace",
    price: 38000,
    category: "necklaces",
    image: productNecklace3Apples,
    description: "Inspired by Armenian fairy-tales. And three apples fell from the sky: one for the teller, one for the listener, and one for the one who understands the meaning.",
    details: [
      "925 Sterling Silver",
      "16 g",
    ],
    featured: true,
  },
  {
    id: "five-pillars-dilijan-earrings",
    name: "Five Pillars of Dilijan Earrings",
    price: 30000,
    category: "earrings",
    image: productEarringsDilijan,
    description: "Inspired by Armenian post-modernism and Five Pillars of Dilijan Monument",
    details: [
      "925 Sterling Silver",
      "8.5 g",
    ],
    featured: true,
  },
  {
    id: "fountains-gyumri-earrings",
    name: "Fountains of Gyumri Studs and Mono Earring",
    price: 46000,
    category: "earrings",
    image: productEarringsGyumri,
    description: "Inspired by Armenian post-modernism and famous Fountains of Gyumri",
    details: [
      "925 Sterling Silver",
      "12 g",
    ],
    featured: true,
  },
  {
    id: "melancholy-necklace",
    name: "Melancholy Necklace",
    price: 36000,
    category: "necklaces",
    image: productNecklaceMelancholy,
    description: "Inspired by Albrecht Dürer’s artwork Melencolia I, with a magic square where all sums are equal - a perfect balance of art and logic.",
    details: [
      "925 Sterling Silver",
      "9 g",
    ],
    featured: true,
    favorite: true,
  },
  {
    id: "manuscripts-ring",
    name: "Manuscripts don't burn Ring",
    price: 26000,
    category: "rings",
    image: productRingManuscripts,
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "5.5 g",
    ],
    favorite: true,
  },
  {
    id: "manuscripts-bracelet",
    name: "Manuscripts don't burn Bracelet",
    price: 17000,
    category: "bracelets",
    image: productBraceletManuscripts,
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "4.5 g",
    ],
  },
  {
    id: "manuscripts-brooch",
    name: "Manuscripts don't burn Brooch",
    price: 28000,
    category: "brooches",
    image: productBroochManuscripts,
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "5 g",
    ],
  },
  {
    id: "manuscripts-earrings",
    name: "Manuscripts don't burn Earrings",
    price: 19000,
    category: "earrings",
    image: productEarringsManuscripts,
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "5.6 g",
    ],
  },
  {
    id: "manuscripts-necklace",
    name: "Manuscripts don't burn Necklace",
    price: 28000,
    category: "necklaces",
    image: productNecklaceManuscripts,
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "6 g",
    ],
  },
];

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getFavoriteProducts = (): Product[] => {
  return products.filter((product) => product.favorite);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
