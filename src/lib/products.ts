import images from "./product-images";

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
    image: images["product-necklace-3apples.jpg"],
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
    image: images["product-earrings-dilijan.jpg"],
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
    image: images["product-earrings-gyumri.jpg"],
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
    image: images["product-necklace-melancholy.jpg"],
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
    image: images["product-ring-manuscripts.jpg"],
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
    image: images["product-bracelet-manuscripts.jpg"],
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
    image: images["product-brooch-manuscripts.jpg"],
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
    image: images["product-earrings-manuscripts.jpg"],
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
    image: images["product-necklace-manuscripts.jpg"],
    description: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
    details: [
      "925 Sterling Silver",
      "6 g",
    ],
  },
];
