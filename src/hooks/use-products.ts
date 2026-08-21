import { useState, useEffect } from "react";
import { Category, Product } from "@/lib/products.ts";
import { fetchProducts } from "@/api/products.ts";
import { useTranslation } from "react-i18next";

export const useProducts = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError(t("products.failedToFetch")))
      .finally(() => setLoading(false));
  }, [t]);

  const getProductsByCategory = (category: Category) => {
    return products.filter((p) => p.category === category);
  };

  const getFeaturedProducts = () => {
    return products.filter((p) => p.featured);
  };

  return {
    products,
    loading,
    error,
    getProductsByCategory,
    getFeaturedProducts,
  };
};