import { useState, useEffect } from "react";
import { Category, Product } from "@/lib/products.ts";
import { fetchProducts } from "@/lib/api.ts";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

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
    loading,
    error,
    getProductsByCategory,
    getFeaturedProducts,
    getFavoriteProducts,
    getProductById,
    toggleFavorite,
  };
};