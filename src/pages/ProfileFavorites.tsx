import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.tsx";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useFavorites } from "@/context/FavoritesContext";
import { fetchFavorites } from "@/lib/api";
import { Product } from "@/lib/products";

const ProfileFavorites = () => {
  const { t } = useTranslation();
  const { isFavorite } = useFavorites();

  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchFavorites()
      .then(setFavoriteProducts)
      .catch(() => setError(t("products.failedToFetch")))
      .finally(() => setLoading(false));
  }, [isFavorite, t]);

  return (
    <div className="min-h-screen">
      {/* Meta tags */}
      <SEO
        title="Favorites"
        description="View the jewelry pieces you've saved from Aznaoure Art."
        noindex
      />

      {/* Favorites Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid
            products={favoriteProducts}
            loading={loading}
            error={error}
          />
        </div>
      </section>
    </div>
  );
};

export default ProfileFavorites;
