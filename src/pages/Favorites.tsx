import SEO from "@/components/SEO.tsx";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useProducts } from "@/hooks/use-products.ts";

const Favorites = () => {
  const { loading, error, getFavoriteProducts } = useProducts();
  const favoriteProducts = getFavoriteProducts();

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

export default Favorites;
