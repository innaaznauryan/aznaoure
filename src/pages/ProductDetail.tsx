import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, getFeaturedProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/products/ProductCard";
import { formatPrice } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { dispatch } = useCart();
  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Button variant="luxuryOutline" asChild>
            <Link to="/collections">Back to Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/collections"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="luxury-subheading mb-2">{product.category}</p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                {product.name}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-primary mb-4 sm:mb-6">
                {formatPrice(product.price)}
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {product.description}
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="font-sans text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm sm:text-base flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <Button
                  variant="luxury"
                  size="lg"
                  className="sm:size-xl flex-1"
                  onClick={() => dispatch({ type: "ADD_ITEM", product })}
                >
                  <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Add to Bag
                </Button>
                <Button variant="luxuryOutline" size="lg" className="sm:size-xl sm:flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm mt-4 sm:mt-6">
                Complimentary shipping worldwide. 30-day returns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">You May Also Like</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Related Pieces</h2>
            <div className="luxury-divider mt-4 sm:mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
