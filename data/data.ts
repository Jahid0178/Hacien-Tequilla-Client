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
    title: "HACIEN ROCKSTAR MARTINI",
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
  testProfile?: string | undefined;
  aroma?: string | undefined;
  color?: string | undefined;
  size?: string | undefined;
  price?: number | undefined;
}[] = [
  {
    id: 1,
    flavour: "BLANCO",
    title: "TEQUILA BLANCO",
    description:
      "Our 100% agave Tequila Blanco has the clean, aromatic taste of Jalisco's finest blue agave. Smooth and subtle yet full of distinctive flavour. Shake into a cocktail, pour it straight, or serve over ice with your favourite mixer.",
    src: "/assets/images/bottle-clear.png",
    colorCode: "#6DD4CA",
    testProfile:
      "Peppery Spice, Herby Agave, Citrus Sorbet and Wisps of Tropical Fruit",
    aroma: "Fresh Mint, Herbal, Straw and Citrus",
    color: "Clear",
    size: "70cl",
    price: 54.95,
  },
  {
    id: 2,
    flavour: "PINEAPPLE",
    title: "PINEAPPLE TEQUILA BLANCO",
    description:
      "Our signature Tequila Blanco, infused with sweet, aromatic pineapple to create an easy-drinking, smooth and naturally flavoured Tequila. Shake into a cocktail, pour it straight, or serve over ice with your favourite mixer.",
    src: "/assets/images/bottle-yellow.png",
    colorCode: "#FFC000",
    testProfile:
      "Ripe Pineapple, Crunchy Citrus Sorbet, Earthy Agave and Prickly Pepper",
    aroma: "Citrus, Pineapple, Straw, Mint",
    color: "Clear",
    size: "70cl",
    price: 59.95,
  },
  {
    id: 3,
    flavour: "CRISTALINO",
    title: "AÑEJO CRISTALINO",
    description:
      "Our Tequila Añejo Cristalino is classically barrel-aged, with the distinctive smooth taste of Jalisco’s finest agave. Named for its crystal clear complexion, it’s filtered with charcoal to remove colour and retain a bold and complex flavour. Best served over ice and enjoyed slowly.",
    src: "/assets/images/bottle-black.png",
    colorCode: "#696868",
    testProfile:
      "Notes of Honey, Forest Floor, Roasted Agave, Sweet Toffee, Truffle and Pink Peppercorn",
    aroma: "Caramel, Vanilla, Butterscotch",
    color: "Clear",
    size: "70cl",
    price: 104.95,
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

export const upcomingEvents: {
  id: number;
  imageSrc: string;
  name: string;
  date: string;
  time: string;
  location: string;
}[] = [
  {
    id: 1,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6462053a162d6947a07d74f6_Screenshot%202023-05-15%20at%2011.10.46-p-500.png",
    name: "Tequila Town Festival",
    date: "August 25, 2023",
    time: "12.00",
    location:
      "Copeland Gallery, Unit 9, Copeland Park, 133 Copeland Rd, London, SE15 3SN",
  },
  {
    id: 2,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/63d2a8898c266aeed77539d2_Screenshot%202023-01-26%20at%2016.08.36-p-500.png",
    name: "HACIEN AT IMBIBE LIVE",
    date: "July 3, 2023",
    time: "12.00",
    location: "Olympia London",
  },
  {
    id: 3,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6489aa4039ebe8144aeaf709_Screenshot%202023-06-14%20at%2012.53.24.png",
    name: "Henley Festival",
    date: "July 5, 2023",
    time: "12.00",
    location: "Henley Bridge, Henley-on-Thames, RG9 2LY",
  },
  {
    id: 4,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/645e02d546082e012946c198_Screenshot%202023-05-12%20at%2010.11.38-p-500.png",
    name: "Tequila & Mezcal Fest",
    date: "September 8, 2023",
    time: "12.30",
    location: "Studio 9294 - Hackney Wick",
  },
];

export const pastEvents: {
  id: number;
  imageSrc: string;
  name: string;
  date: string;
  time: string;
  location: string;
}[] = [
  {
    id: 1,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6462053a162d6947a07d74f6_Screenshot%202023-05-15%20at%2011.10.46-p-500.png",
    name: "Summer Music Festival",
    date: "August 25, 2023",
    time: "12.00",
    location: "Central Park, New York City, USA",
  },
  {
    id: 2,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/63d2a8898c266aeed77539d2_Screenshot%202023-01-26%20at%2016.08.36-p-500.png",
    name: "Art Exhibition Showcase",
    date: "July 3, 2023",
    time: "12.00",
    location: "Metropolitan Museum of Art, New York City, USA",
  },
  {
    id: 3,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6489aa4039ebe8144aeaf709_Screenshot%202023-06-14%20at%2012.53.24.png",
    name: "Cultural Dance Performance",
    date: "July 5, 2023",
    time: "12.00",
    location: "Royal Albert Hall, London, UK",
  },
  {
    id: 4,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/645e02d546082e012946c198_Screenshot%202023-05-12%20at%2010.11.38-p-500.png",
    name: "Food and Wine Festival",
    date: "September 8, 2023",
    time: "12.30",
    location: "Napa Valley, California, USA",
  },
  {
    id: 5,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6462053a162d6947a07d74f6_Screenshot%202023-05-15%20at%2011.10.46-p-500.png",
    name: "International Film Festival",
    date: "October 12, 2023",
    time: "18.00",
    location: "Cannes, France",
  },
  {
    id: 6,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/63d2a8898c266aeed77539d2_Screenshot%202023-01-26%20at%2016.08.36-p-500.png",
    name: "Fashion Week",
    date: "September 20, 2023",
    time: "14.00",
    location: "Milan, Italy",
  },
  {
    id: 7,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6489aa4039ebe8144aeaf709_Screenshot%202023-06-14%20at%2012.53.24.png",
    name: "Tech Conference",
    date: "November 5, 2023",
    time: "10.00",
    location: "San Francisco, California, USA",
  },
  {
    id: 8,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/645e02d546082e012946c198_Screenshot%202023-05-12%20at%2010.11.38-p-500.png",
    name: "Wine Tasting Event",
    date: "October 30, 2023",
    time: "16.00",
    location: "Barcelona, Spain",
  },
  {
    id: 9,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6462053a162d6947a07d74f6_Screenshot%202023-05-15%20at%2011.10.46-p-500.png",
    name: "Artisan Market",
    date: "November 15, 2023",
    time: "11.00",
    location: "Brooklyn, New York City, USA",
  },
  {
    id: 10,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/63d2a8898c266aeed77539d2_Screenshot%202023-01-26%20at%2016.08.36-p-500.png",
    name: "Jazz Festival",
    date: "October 8, 2023",
    time: "19.30",
    location: "New Orleans, Louisiana, USA",
  },
  {
    id: 11,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/6489aa4039ebe8144aeaf709_Screenshot%202023-06-14%20at%2012.53.24.png",
    name: "Carnival Parade",
    date: "February 28, 2024",
    time: "15.00",
    location: "Rio de Janeiro, Brazil",
  },
  {
    id: 12,
    imageSrc:
      "https://assets.website-files.com/632dbcb1ceeecc08dd04742c/645e02d546082e012946c198_Screenshot%202023-05-12%20at%2010.11.38-p-500.png",
    name: "Beer Festival",
    date: "September 22, 2023",
    time: "16.00",
    location: "Munich, Germany",
  },
];
