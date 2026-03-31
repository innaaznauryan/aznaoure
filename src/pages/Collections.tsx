import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { useCategoryChange } from "@/hooks/use-category-change.tsx";
import { products, categories, getProductsByCategory } from "@/lib/products";

const Collections = () => {
  const { selectedCategory, handleCategoryChange } = useCategoryChange();

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return getProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">Discover</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Our Collections
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
              Explore our curated selection of exquisite jewelry, each piece
              crafted to perfection.
            </p>
            <div className="luxury-divider mt-6 sm:mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sm:py-10 lg:py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
                !selectedCategory
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
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

export default Collections;
