import { Category, products } from "@/lib/products.ts";

export const useProducts = () => {

  const getProductsByCategory = (category: Category) => {
    return products.filter((p) => p.category === category);
  };

  const getFeaturedProducts = () => {
    return products.filter((p) => p.featured);
  };

  const getFavoriteProducts = () => {
    return products.filter((p) => p.favorite);
  };

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  const toggleFavorite = (id: string) => {
    // TODO: toggleFavorite logic
  };

  return {
    products,
    getProductsByCategory,
    getFeaturedProducts,
    getFavoriteProducts,
    getProductById,
    toggleFavorite,
  };
};