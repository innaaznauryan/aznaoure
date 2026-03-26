import productRing1 from "@/assets/product-ring-1.jpg";
import productNecklace1 from "@/assets/product-necklace-1.jpg";
import productEarrings1 from "@/assets/product-earrings-1.jpg";
import productBracelet1 from "@/assets/product-bracelet-1.jpg";

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
    id: "celestial-diamond-ring",
    name: "Celestial Diamond Ring",
    price: 4850,
    category: "rings",
    image: productRing1,
    description: "A breathtaking 2-carat diamond set in 18k rose gold, featuring an intricate halo design that captures light from every angle.",
    details: [
      "2-carat center diamond, VS1 clarity",
      "18k rose gold band",
      "Halo setting with 24 accent diamonds",
      "Handcrafted in our Paris atelier",
    ],
    featured: true,
  },
  {
    id: "aurora-pendant-necklace",
    name: "Aurora Pendant Necklace",
    price: 3200,
    category: "necklaces",
    image: productNecklace1,
    description: "Inspired by the northern lights, this stunning pendant features a brilliant-cut diamond encircled by delicate gold filigree.",
    details: [
      "1.5-carat brilliant-cut diamond",
      "18k yellow gold chain and setting",
      "Adjustable 16-18 inch chain",
      "Certificate of authenticity included",
    ],
    featured: true,
  },
  {
    id: "eternal-hoop-earrings",
    name: "Eternal Hoop Earrings",
    price: 2400,
    category: "earrings",
    image: productEarrings1,
    description: "Classic hoops reimagined with pavé-set diamonds along the exterior, creating an endless sparkle that moves with you.",
    details: [
      "48 pavé-set diamonds totaling 1.2 carats",
      "18k yellow gold",
      "30mm diameter",
      "Secure click-top closure",
    ],
    featured: true,
  },
  {
    id: "heritage-chain-bracelet",
    name: "Heritage Chain Bracelet",
    price: 2800,
    category: "bracelets",
    image: productBracelet1,
    description: "A modern interpretation of our signature chain link design, adorned with diamond accents at each connection.",
    details: [
      "18k yellow gold",
      "12 bezel-set diamonds",
      "7.5 inch length",
      "Double safety clasp",
    ],
    featured: true,
  },
  {
    id: "moonlight-solitaire-ring",
    name: "Moonlight Solitaire",
    price: 6200,
    category: "rings",
    image: productRing1,
    description: "Pure elegance in its simplest form. A flawless 3-carat diamond mounted on a whisper-thin platinum band.",
    details: [
      "3-carat round brilliant diamond",
      "Platinum band",
      "Six-prong setting",
      "GIA certified",
    ],
  },
  {
    id: "cascade-drop-earrings",
    name: "Cascade Drop Earrings",
    price: 1850,
    category: "earrings",
    image: productEarrings1,
    description: "Delicate drops of diamonds that dance with your every movement, creating a cascade of brilliance.",
    details: [
      "18k white gold",
      "32 graduated diamonds",
      "2.5 inch drop length",
      "Lever-back closure",
    ],
  },
  {
    id: "serpent-cuff-bracelet",
    name: "Serpent Cuff",
    price: 3400,
    category: "bracelets",
    image: productBracelet1,
    description: "A bold statement piece featuring our iconic serpent motif, with emerald eyes and diamond scales.",
    details: [
      "18k yellow gold",
      "2 emerald eyes (0.8ct total)",
      "Diamond scales (2.4ct total)",
      "Adjustable cuff design",
    ],
  },
  {
    id: "pearl-strand-necklace",
    name: "South Sea Pearl Strand",
    price: 5600,
    category: "necklaces",
    image: productNecklace1,
    description: "Luminous South Sea pearls, hand-selected for their perfect luster and matched in a graduated strand.",
    details: [
      "33 South Sea pearls",
      "9-12mm graduated size",
      "18k gold clasp with diamonds",
      "18 inch length",
    ],
  },
];

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
