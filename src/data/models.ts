import sofia from "@/assets/model-sofia.jpg";
import emma from "@/assets/model-emma.jpg";
import aria from "@/assets/model-aria.jpg";
import olivia from "@/assets/model-olivia.jpg";
import daniel from "@/assets/model-daniel.jpg";
import noah from "@/assets/model-noah.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catMen from "@/assets/cat-men.jpg";
import catNewFaces from "@/assets/cat-newfaces.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";

export type ModelCategory = "Women" | "Men" | "New Faces";

export type Model = {
  id: string;
  name: string;
  category: ModelCategory;
  gender: "Female" | "Male";
  location: string;
  height: string;
  bust: string;
  waist: string;
  hips: string;
  shoe: string;
  hair: string;
  eyes: string;
  image: string;
  gallery: string[];
};

export const models: Model[] = [
  {
    id: "sofia-anderson",
    name: "Sofia Anderson",
    category: "Women",
    gender: "Female",
    location: "Paris",
    height: "178 cm",
    bust: "84 cm",
    waist: "60 cm",
    hips: "89 cm",
    shoe: "EU 39",
    hair: "Blonde",
    eyes: "Blue",
    image: sofia,
    gallery: [sofia, editorial1, catWomen, editorial3],
  },
  {
    id: "emma-laurent",
    name: "Emma Laurent",
    category: "Women",
    gender: "Female",
    location: "London",
    height: "176 cm",
    bust: "82 cm",
    waist: "59 cm",
    hips: "88 cm",
    shoe: "EU 38",
    hair: "Brown",
    eyes: "Green",
    image: emma,
    gallery: [emma, catWomen, editorial2, editorial1],
  },
  {
    id: "aria-williams",
    name: "Aria Williams",
    category: "Women",
    gender: "Female",
    location: "New York",
    height: "180 cm",
    bust: "83 cm",
    waist: "61 cm",
    hips: "90 cm",
    shoe: "EU 40",
    hair: "Black",
    eyes: "Brown",
    image: aria,
    gallery: [aria, editorial3, editorial1, catWomen],
  },
  {
    id: "olivia-martin",
    name: "Olivia Martin",
    category: "New Faces",
    gender: "Female",
    location: "Milan",
    height: "175 cm",
    bust: "82 cm",
    waist: "58 cm",
    hips: "87 cm",
    shoe: "EU 38",
    hair: "Dark Brown",
    eyes: "Hazel",
    image: olivia,
    gallery: [olivia, catNewFaces, editorial1, editorial3],
  },
  {
    id: "daniel-carter",
    name: "Daniel Carter",
    category: "Men",
    gender: "Male",
    location: "London",
    height: "188 cm",
    bust: "98 cm",
    waist: "78 cm",
    hips: "94 cm",
    shoe: "EU 44",
    hair: "Dark Brown",
    eyes: "Grey",
    image: daniel,
    gallery: [daniel, catMen, editorial2, editorial3],
  },
  {
    id: "noah-bennett",
    name: "Noah Bennett",
    category: "New Faces",
    gender: "Male",
    location: "Paris",
    height: "186 cm",
    bust: "94 cm",
    waist: "76 cm",
    hips: "92 cm",
    shoe: "EU 43",
    hair: "Black",
    eyes: "Brown",
    image: noah,
    gallery: [noah, catMen, catNewFaces, editorial2],
  },
];

export const getModel = (id: string) => models.find((m) => m.id === id);

export const categories = [
  {
    title: "WOMEN",
    description: "Explore our female models",
    image: catWomen,
    filter: "women" as const,
  },
  {
    title: "MEN",
    description: "Explore our male models",
    image: catMen,
    filter: "men" as const,
  },
  {
    title: "NEW FACES",
    description: "Discover emerging talent",
    image: catNewFaces,
    filter: "new-faces" as const,
  },
];

export const editorials = [
  {
    title: "Summer 2026 — New Perspectives",
    date: "12 June 2026",
    category: "Editorial",
    image: editorial1,
  },
  {
    title: "Paris Fashion Week — Behind the Scenes",
    date: "04 March 2026",
    category: "Runway",
    image: editorial2,
  },
  {
    title: "New Faces — Editorial Collection",
    date: "21 January 2026",
    category: "Portfolio",
    image: editorial3,
  },
];
