import images from "./product-images";

export type Category = "rings" | "necklaces" | "earrings" | "bracelets" | "brooches";

type TranslatedString = {
  en: string
  hy: string
}

export interface Product {
  id: string;
  name: TranslatedString;
  price: number;
  category: Category;
  image: string;
  description: TranslatedString;
  details: TranslatedString[];
  featured?: boolean;
  favorite?: boolean;
}

export const categories = {
  rings: {
    name: {
      en: "Rings",
      hy: "Մատանիներ"
    },
    description: {
      en: "Timeless elegance for every occasion",
      hy: "Ժամանակից դուրս նրբագեղություն"
    }
  },
  necklaces: {
    name: {
      en: "Necklaces",
      hy: "Կախազարդեր"
    },
    description: {
      en: "Graceful pendants and chains",
      hy: "Նրբաճաշակ կախազարդեր և շղթաներ"
    }
  },
  earrings: {
    name: {
      en: "Earrings",
      hy: "Ականջօղեր"
    },
    description: {
      en: "From subtle studs to statement pieces",
      hy: ""
    }
  },
  bracelets: {
    name: {
      en: "Bracelets",
      hy: "Թևնոցներ"
    },
    description: {
      en: "Wrist adornments of distinction",
      hy: ""
    }
  },
  brooches: {
    name: {
      en: "Brooches",
      hy: "Կրծքազարդեր"
    },
    description: {
      en: "Elegant brooches to add a refined touch",
      hy: ""
    }
  },
}

export const products: Product[] = [
  {
    id: "three-apples-necklace",
    name: {
      en: "Three Apples Fell from the Sky Necklace",
      hy: "Երկնքից ընկավ երեք խնձոր"
    },
    price: 38000,
    category: "necklaces",
    image: images["product-necklace-3apples.jpg"],
    description: {
      en: "Inspired by Armenian fairy-tales. And three apples fell from the sky: one for the teller, one for the listener, and one for the one who understands the meaning.",
      hy: "Ոգեշնչված է հայկական հեքիաթներից։ Երկնքից ընկավ երեք խնձոր․ մեկը՝ ասողին, մեկը՝ լսողին, մեկն էլ՝ ականջ դնողին։"
    },
    details: [
      {en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի"},
      {en: "16 g", hy: "16 գ"}
    ],
    featured: true,
  },
  {
    id: "five-pillars-dilijan-earrings",
    name: {
      en: "Five Pillars of Dilijan Earrings",
      hy: ""
    },
    price: 30000,
    category: "earrings",
    image: images["product-earrings-dilijan.jpg"],
    description: {
      en: "Inspired by Armenian post-modernism and Five Pillars of Dilijan Monument",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի"},
      {en: "16 g", hy: "16 գ"}
    ],
    featured: true,
  },
  {
    id: "fountains-gyumri-earrings",
    name: {
      en: "Fountains of Gyumri Studs and Mono Earring",
      hy: ""
    },
    price: 46000,
    category: "earrings",
    image: images["product-earrings-gyumri.jpg"],
    description: {
      en: "Inspired by Armenian post-modernism and famous Fountains of Gyumri",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "12 g", hy: ""}
    ],
    featured: true,
  },
  {
    id: "melancholy-necklace",
    name: {
      en: "Melancholy Necklace",
      hy: ""
    },
    price: 36000,
    category: "necklaces",
    image: images["product-necklace-melancholy.jpg"],
    description: {
      en: "Inspired by Albrecht Dürer’s artwork Melencolia I, with a magic square where all sums are equal - a perfect balance of art and logic.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "9 g", hy: ""}
    ],
    featured: true,
    favorite: true,
  },
  {
    id: "manuscripts-ring",
    name: {
      en: "Manuscripts don't burn Ring",
      hy: ""
    },
    price: 26000,
    category: "rings",
    image: images["product-ring-manuscripts.jpg"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "5.5 g", hy: ""}
    ],
    favorite: true,
  },
  {
    id: "manuscripts-bracelet",
    name: {
      en: "Manuscripts don't burn Bracelet",
      hy: ""
    },
    price: 17000,
    category: "bracelets",
    image: images["product-bracelet-manuscripts.jpg"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "4.5 g", hy: ""}
    ],
  },
  {
    id: "manuscripts-brooch",
    name: {
      en: "Manuscripts don't burn Brooch",
      hy: ""
    },
    price: 28000,
    category: "brooches",
    image: images["product-brooch-manuscripts.jpg"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "5 g", hy: ""}
    ],
  },
  {
    id: "manuscripts-earrings",
    name: {
      en: "Manuscripts don't burn Earrings",
      hy: ""
    },
    price: 19000,
    category: "earrings",
    image: images["product-earrings-manuscripts.jpg"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "5.6 g", hy: ""}
    ],
  },
  {
    id: "manuscripts-necklace",
    name: {
      en: "Manuscripts don't burn Necklace",
      hy: ""
    },
    price: 28000,
    category: "necklaces",
    image: images["product-necklace-manuscripts.jpg"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: ""
    },
    details: [
      {en: "925 Sterling Silver", hy: ""},
      {en: "6 g", hy: ""}
    ],
  },
];
