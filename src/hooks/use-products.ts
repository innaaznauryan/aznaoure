import { useState, useEffect } from "react";
import { Category, Product, products as defaultProducts } from "@/lib/products.ts";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");

    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
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
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, favorite: !product.favorite } : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return {
    products,
    setProducts,
    getProductsByCategory,
    getFeaturedProducts,
    getFavoriteProducts,
    getProductById,
    toggleFavorite,
  };
};