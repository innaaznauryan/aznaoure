import { useState, useEffect } from "react";
import { Product } from "@/lib/products.ts";
import { fetchProductById } from "@/api/products.ts";
import { useTranslation } from "react-i18next";

export const useProduct = (id: string) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .catch(() => setError(t("products.notFound")))
      .finally(() => setLoading(false));
  }, [t, id]);

  return { product, loading, error };
};
