import { Product } from "@/lib/products.ts";

export const setImageUrl = (url: string, product: Product): Product => ({
  ...product,
  image: `${url}/media/${product.image}`,
});
