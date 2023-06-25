import { teamMembersProps } from "@/types/types";

export const partnersIcon: { id: number | string; src: string }[] = [
  {
    id: 1,
    src: "/assets/images/partners/logo-1.png",
  },
  {
    id: 2,
    src: "/assets/images/partners/logo-2.png",
  },
  {
    id: 3,
    src: "/assets/images/partners/logo-3.png",
  },
  {
    id: 4,
    src: "/assets/images/partners/logo-4.png",
  },
  {
    id: 5,
    src: "/assets/images/partners/logo-5.png",
  },
  {
    id: 6,
    src: "/assets/images/partners/logo-6.png",
  },
];

export const recipeData: {
  id: number | string;
  src: string;
  category: string;
  title: string;
  description: string;
  recipeInfo: {
    difficulty: string;
    ice: string;
    glass: string;
    garnish: string;
  };
}[] = [
  {
    id: 1,
    src: "/assets/images/recipe/slider-1.jpeg",
    category: "TEQUILA BLANCO",
    title: "WATERMELON MARGARITA",
    description:
      "Mexico’s favourite classic - the Margarita - now made extra refreshing with cucumber, watermelon and 100% agave spirit.",
    recipeInfo: {
      difficulty: "Intermediate",
      ice: "Cubed",
      glass: "Rocks",
      garnish: "Watermelon wedge and a mint sprig",
    },
  },
  {
    id: 2,
    src: "/assets/images/recipe/slider-2.jpeg",
    category: "AÑEJO CRISTALINO",
    title: "MEXICAN 75",
    description:
      "A French 75 with a Jalisco twist. Put some bubbles in your Tequila Blanco with this classic Champagne cocktail.",
    recipeInfo: {
      difficulty: "Intermediate",
      ice: "Served Up",
      glass: "Champagne flute",
      garnish: "Raspberries & Mint",
    },
  },
  {
    id: 3,
    src: "/assets/images/recipe/slider-3.jpeg",
    category: "TEQUILA BLANCO",
    title: "MINT & CUCUMBER SPRITZ",
    description:
      "A light and fuss-free spritz with Tequila, Sauvignon Blanc, agave & lime. A clean and crisp celebration of our original Blanco flavour.",
    recipeInfo: {
      difficulty: "Easy",
      ice: "Cubed",
      glass: "Wine glass",
      garnish: "Mint & Cucumber",
    },
  },
  {
    id: 4,
    src: "/assets/images/recipe/slider-4.jpeg",
    category: "TEQUILA BLANCO",
    title: "BASIL & GRAPEFRUIT TOMMY'S",
    description:
      "A short, refreshing drink combining our Tequila Blanco, zingy grapefruit and fresh basil - perfect for a summer BBQ.",
    recipeInfo: {
      difficulty: "Easy",
      ice: "Cubed",
      glass: "Rocks",
      garnish: "Basil & grapefruit",
    },
  },
  {
    id: 5,
    src: "/assets/images/recipe/slider-5.jpeg",
    category: "TEQUILA BLANCO",
    title: "DUSK APERITIVO",
    description:
      "This light and delicate HACIEN based aperitif uses Aperol and Lillet Blanc to get the mouth watering.",
    recipeInfo: {
      difficulty: "Intermediate",
      ice: "Cubed",
      glass: "Rocks",
      garnish: "Orange slice",
    },
  },
  {
    id: 6,
    src: "/assets/images/recipe/slider-6.jpeg",
    category: "TEQUILA BLANCO",
    title: "HACIEN BLOODY MARY",
    description: "The perfect way to start the morning after... HACIEN style.",
    recipeInfo: {
      difficulty: "Advanced",
      ice: "Cubed",
      glass: "Highball",
      garnish: "Rosemary & olives",
    },
  },
  {
    id: 7,
    src: "/assets/images/recipe/slider-7.jpeg",
    category: "AÑEJO CRISTALINO",
    title: "HACIEN ESPRESSO MARTINI",
    description:
      "An indulgent twist on the espresso martini, using our Tequila Añejo Cristalino, orange cognac liqueur, coffee liqueur and caramel syrup.",
    recipeInfo: {
      difficulty: "Easy",
      ice: "Served Up",
      glass: "Coupe",
      garnish: "Orange Twist",
    },
  },
  {
    id: 8,
    src: "/assets/images/recipe/slider-8.jpeg",
    category: "TEQUILA BLANCO",
    title: "HACIEN PORNSTAR MARTINI",
    description: "A HACIEN twist on a contemporary classic cocktail.",
    recipeInfo: {
      difficulty: "Easy",
      ice: "Served Up",
      glass: "Coupe",
      garnish: "Passionfruit",
    },
  },
  {
    id: 9,
    src: "/assets/images/recipe/slider-9.jpeg",
    category: "PINEAPPLE TEQUILA BLANCO",
    title: "COCONUT & CHILLI MARGARITA",
    description:
      "Inspired by the flavours of Thailand, this beautifully balanced drink certainly packs a punch. HACIEN Tequila Blanco shaken with chilli, ginger, coconut and lime.",
    recipeInfo: {
      difficulty: "Intermediate",
      ice: "Served Up",
      glass: "Coupe",
      garnish: "Lime Twist",
    },
  },
  {
    id: 10,
    src: "/assets/images/recipe/slider-10.jpeg",
    category: "PINEAPPLE TEQUILA BLANCO",
    title: "BOTANICAL GARDEN",
    description:
      "A wonderfully crisp and herbaceous drink that’s bound to get the taste buds going.",
    recipeInfo: {
      difficulty: "Intermediate",
      ice: "Served Up",
      glass: "Coupe",
      garnish: "Basil leaf",
    },
  },
  {
    id: 11,
    src: "/assets/images/recipe/slider-11.jpeg",
    category: "TEQUILA BLANCO",
    title: "GRAPE & ELDERFLOWER SPRITZ",
    description:
      "A revitalising pairing of elderflower and grapes with vibrant Prosecco and our smooth, subtle Tequila Blanco.",
    recipeInfo: {
      difficulty: "Advanced",
      ice: "Cubed",
      glass: "Highball",
      garnish: "Skewered Grapes & a Mint Sprig",
    },
  },
  {
    id: 12,
    src: "/assets/images/recipe/slider-12.png",
    category: "AÑEJO CRISTALINO",
    title: "CRISTALINO OLD FASHIONED",
    description:
      "The smooth, silky tones of a classic Old Fashioned, with the bolder flavour of our barrel-aged tequila. Sweetened with agave and balanced with bitters.",
    recipeInfo: {
      difficulty: "Easy",
      ice: "Cubed",
      glass: "Rocks",
      garnish: "Orange Twist",
    },
  },
];

export const productsData: {
  id: number;
  flavour: string;
  title: string;
  description: string;
  src: string;
  colorCode: string;
}[] = [
  {
    id: 1,
    flavour: "BLANCO",
    title: "TEQUILA BLANCO",
    description:
      "Our 100% agave Tequila Blanco has the clean, aromatic taste of Jalisco's finest blue agave. Smooth and subtle yet full of distinctive flavour. Shake into a cocktail, pour it straight, or serve over ice with your favourite mixer.",
    src: "/assets/images/bottle-clear.png",
    colorCode: "#6DD4CA",
  },
  {
    id: 2,
    flavour: "PINEAPPLE",
    title: "PINEAPPLE TEQUILA BLANCO",
    description:
      "Our signature Tequila Blanco, infused with sweet, aromatic pineapple to create an easy-drinking, smooth and naturally flavoured Tequila. Shake into a cocktail, pour it straight, or serve over ice with your favourite mixer.",
    src: "/assets/images/bottle-yellow.png",
    colorCode: "#FFC000",
  },
  {
    id: 3,
    flavour: "CRISTALINO",
    title: "AÑEJO CRISTALINO",
    description:
      "Our Tequila Añejo Cristalino is classically barrel-aged, with the distinctive smooth taste of Jalisco’s finest agave. Named for its crystal clear complexion, it’s filtered with charcoal to remove colour and retain a bold and complex flavour. Best served over ice and enjoyed slowly.",
    src: "/assets/images/bottle-black.png",
    colorCode: "#696868",
  },
];

export const teamMembers: teamMembersProps = [
  {
    id: 1,
    name: "Seb Francis",
    role: "Co-Founder",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6346c7820f6a407fdd4d9427_seb-01%20copy-p-800.webp",
    description:
      "On a mission to bring a more accessible and authentic premium tequila experience to the UK market.",
  },
  {
    id: 2,
    name: "Jordan Myers",
    role: "Co-Founder",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6346c769e1a8d65d337b7f2a_Jordan-01%20copy-p-800.webp",
    description:
      "Once a big tequila sceptic - until he discovered a more authentic experience on a visit to Mexico.",
  },
  {
    id: 3,
    name: "Ashley Mitchell",
    role: "Business Development Manager",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6374c9bcd3414256a760c7f7_Ashley-01%20copy-p-800.webp",
    description:
      "Knows his way around the bar - in the best way possible - with 15 years of hospitality experience.",
  },
  {
    id: 4,
    name: "Chris Delaney",
    role: "Business Development Manager",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/63f6246e71cde4f7b92872af_Chris%20Delaney%20photo-p-800.jpeg",
    description:
      "Has a strong background in the hospitality industry, managing multiple venues across the UK, and curating numerous cocktail menus.",
  },
  {
    id: 5,
    name: "Henry Vaughan",
    role: "Mixologist",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6346c71ce08571d20d4fce0f_Henry-Vaughan%402x%20(1)%20copy.webp",
    description:
      "If he's not inventing new HACIEN cocktails he's inspiring our partners through product training.",
  },
  {
    id: 6,
    name: "Mike Davis",
    role: "Marketing",
    profile:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6346c6fe26e4e81df16802ea_Mike-Davis%402x%20(1)%20copy.webp",
    description:
      "Brings extensive knowledge of the food and beverage market to our brand strategy and partnerships.",
  },
];
