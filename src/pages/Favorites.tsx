import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useProducts } from "@/hooks/use-products.ts";

const Favorites = () => {
  const { t } = useTranslation();
  const { loading, error, getFavoriteProducts } = useProducts();
  const favoriteProducts = getFavoriteProducts();

  return (
    <div className="min-h-screen">
      {/* Meta tags */}
      <Helmet>
        <title>Favorites | Aznaoure Art</title>
        <meta name="description" content="View the jewelry pieces you've saved from Aznaoure Art." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

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

export default Favorites;
