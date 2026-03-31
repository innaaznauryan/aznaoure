import { ProductCard } from "@/components/products/ProductCard";
import { getFavoriteProducts } from "@/lib/products";

const Favorites = () => {
  const favoriteProducts = getFavoriteProducts();

  return (
    <div className="min-h-screen">
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
