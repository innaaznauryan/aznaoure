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

export const categories: Record<
  Category,
  {
    name: TranslatedString
    description: TranslatedString
  }
> = {
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
      hy: "Նուրբ փուսեթներից մինչև աչքի ընկնող ինքնատիպ ականջօղեր"
    }
  },
  bracelets: {
    name: {
      en: "Bracelets",
      hy: "Թևնոցներ"
    },
    description: {
      en: "Wrist adornments of distinction",
      hy: "Եվ նրբագեղ ապարանջաններ"
    }
  },
  brooches: {
    name: {
      en: "Brooches",
      hy: "Կրծքազարդեր"
    },
    description: {
      en: "Elegant brooches to add a refined touch",
      hy: "Շքեղ շեշտադրման համար"
    }
  },
}

export const products: Product[] = [
  {
    id: "three-apples-necklace",
    name: {
      en: "Three Apples Fell from the Sky Necklace",
      hy: "Երկնքից ընկավ երեք խնձոր` Կախազարդ"
    },
    price: 38000,
    category: "necklaces",
    image: images["product-necklace-3apples.webp"],
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
      hy: "Դիլիջանի հինգ սյուները՝ Ականջօղեր"
    },
    price: 30000,
    category: "earrings",
    image: images["product-earrings-dilijan.webp"],
    description: {
      en: "Inspired by Armenian post-modernism and Five Pillars of Dilijan Monument",
      hy: "Ոգեշնչված է հայկական պոստմոդեռնիզմից և Դիլիջանի «Հինգ սյուներ» հայտնի հուշարձանից։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "16 g", hy: "16 գ" }
    ],
    featured: true,
  },
  {
    id: "fountains-gyumri-earrings",
    name: {
      en: "Fountains of Gyumri Studs and Mono Earring",
      hy: "Գյումրու շատրվաններ՝ Փուսեթներ և մոնո ականջօղ"
    },
    price: 46000,
    category: "earrings",
    image: images["product-earrings-gyumri.webp"],
    description: {
      en: "Inspired by Armenian post-modernism and famous Fountains of Gyumri",
      hy: "Ոգեշնչված է հայկական պոստմոդեռնիզմից և Գյումրու հայտնի շատրվաններից։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "12 g", hy: "12 գ" }
    ],
    featured: true,
  },
  {
    id: "melancholy-necklace",
    name: {
      en: "Melancholy Necklace",
      hy: "Մելանխոլիա՝ Կախազարդ"
    },
    price: 36000,
    category: "necklaces",
    image: images["product-necklace-melancholy.webp"],
    description: {
      en: "Inspired by Albrecht Dürer’s artwork Melencolia I, with a magic square where all sums are equal - a perfect balance of art and logic.",
      hy: "Ոգեշնչված է Ալբրեխտ Դյուրերի «Melencolia I» ստեղծագործությունից՝ մոգական քառակուսիով, որտեղ բոլոր ուղղություններով թվերի գումարները հավասար են իրար։ Արվեստի և տրամաբանության կատարյալ հավասարակշռություն։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "9 գ", hy: "9 գ" }
    ],
    featured: true,
    favorite: true,
  },
  {
    id: "manuscripts-ring",
    name: {
      en: "Manuscripts don't burn Ring",
      hy: "Ձեռագրերը չեն այրվում՝ Մատանի"
    },
    price: 26000,
    category: "rings",
    image: images["product-ring-manuscripts.webp"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: "Ոգեշնչված է Միխայիլ Բուլգակովի անմահ խոսքերից՝ «Ձեռագրերը չեն այրվում»։ Այն հիշեցնում է, որ նույնիսկ եթե բառերը ջնջվեն կամ էջերն անհետանան, նրանց ասելիքն անմահ է։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "5.5 g", hy: "5.5 գ" }
    ],
    favorite: true,
  },
  {
    id: "manuscripts-bracelet",
    name: {
      en: "Manuscripts don't burn Bracelet",
      hy: "Ձեռագրերը չեն այրվում՝ Թևնոց"
    },
    price: 17000,
    category: "bracelets",
    image: images["product-bracelet-manuscripts.webp"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: "Ոգեշնչված է Միխայիլ Բուլգակովի անմահ խոսքերից՝ «Ձեռագրերը չեն այրվում»։ Այն հիշեցնում է, որ նույնիսկ եթե բառերը ջնջվեն կամ էջերն անհետանան, նրանց ասելիքն անմահ է։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "4.5 g", hy: "4.5 գ" }
    ],
  },
  {
    id: "manuscripts-brooch",
    name: {
      en: "Manuscripts don't burn Brooch",
      hy: "Ձեռագրերը չեն այրվում՝ Կրծքազարդ"
    },
    price: 28000,
    category: "brooches",
    image: images["product-brooch-manuscripts.webp"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: "Ոգեշնչված է Միխայիլ Բուլգակովի անմահ խոսքերից՝ «Ձեռագրերը չեն այրվում»։ Այն հիշեցնում է, որ նույնիսկ եթե բառերը ջնջվեն կամ էջերն անհետանան, նրանց ասելիքն անմահ է։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "5 g", hy: "5 գ" }
    ],
  },
  {
    id: "manuscripts-earrings",
    name: {
      en: "Manuscripts don't burn Earrings",
      hy: "Ձեռագրերը չեն այրվում՝ Ականջօղեր"
    },
    price: 19000,
    category: "earrings",
    image: images["product-earrings-manuscripts.webp"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: "Ոգեշնչված է Միխայիլ Բուլգակովի անմահ խոսքերից՝ «Ձեռագրերը չեն այրվում»։ Այն հիշեցնում է, որ նույնիսկ եթե բառերը ջնջվեն կամ էջերն անհետանան, նրանց ասելիքն անմահ է։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "5.6 g", hy: "5.6 գ" }
    ],
  },
  {
    id: "manuscripts-necklace",
    name: {
      en: "Manuscripts don't burn Necklace",
      hy: "Ձեռագրերը չեն այրվում՝ Կախազարդ"
    },
    price: 28000,
    category: "necklaces",
    image: images["product-necklace-manuscripts.webp"],
    description: {
      en: "Inspired by Mikhail Bulgakov’s timeless words: ‘Manuscripts don’t burn’. It reminds us that even if words are erased or pages disappear, the meaning behind them continues to live.",
      hy: "Ոգեշնչված է Միխայիլ Բուլգակովի անմահ խոսքերից՝ «Ձեռագրերը չեն այրվում»։ Այն հիշեցնում է, որ նույնիսկ եթե բառերը ջնջվեն կամ էջերն անհետանան, նրանց ասելիքն անմահ է։"
    },
    details: [
      { en: "925 Sterling Silver", hy: "Արծաթ՝ 925 հարգի" },
      { en: "6 g", hy: "6 գ" }
    ],
  },
];
