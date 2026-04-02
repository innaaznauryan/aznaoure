import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/use-products.ts";

const Favorites = () => {
  const { getFavoriteProducts } = useProducts();
  const favoriteProducts = getFavoriteProducts();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">Your Treasured Picks</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Favorites
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
              A curated collection of the pieces you love most.
            </p>
            <div className="luxury-divider mt-6 sm:mt-8"/>
          </motion.div>
        </div>
      </section>

      {/* Favorites Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {favoriteProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index}/>
            ))}
          </div>

          {favoriteProducts.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-muted-foreground text-base sm:text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
