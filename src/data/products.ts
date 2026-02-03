import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  care: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Essential",
    category: "Basics",
    price: 49,
    image: product1,
    description: "Our signature essential tee crafted from premium 100% organic cotton. Features a relaxed fit with reinforced stitching for lasting comfort and durability.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
    material: "100% Organic Cotton",
    care: "Machine wash cold, tumble dry low",
  },
  {
    id: "2",
    name: "Cloud Nine",
    category: "Premium",
    price: 59,
    image: product2,
    description: "Experience ultimate softness with our Cloud Nine premium tee. Made from a luxurious combed cotton blend that feels like a dream against your skin.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Sky Blue", "Lavender"],
    material: "100% Super Combed Cotton",
    care: "Machine wash cold, hang dry",
  },
  {
    id: "3",
    name: "Urban Fog",
    category: "Street",
    price: 54,
    image: product3,
    description: "Street-ready style meets everyday comfort. The Urban Fog features a relaxed silhouette with dropped shoulders for that effortlessly cool look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Olive", "Burgundy"],
    material: "100% Premium Cotton (180 GSM)",
    care: "Machine wash cold, tumble dry low",
  },
  {
    id: "4",
    name: "Deep Ocean",
    category: "Limited",
    price: 69,
    image: product4,
    description: "Limited edition release inspired by the depths of the ocean. Features exclusive artwork and premium heavyweight cotton construction.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Deep Blue", "Midnight"],
    material: "100% Heavyweight Cotton (240 GSM)",
    care: "Machine wash cold, inside out",
  },
];
