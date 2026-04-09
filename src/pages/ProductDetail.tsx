import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductImageViewer } from "@/components/products/ProductImageViewer";
import { useProducts } from "@/hooks/use-products.ts";
import { categories } from "@/lib/products.ts";
import { formatPrice } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { getProductById, getFeaturedProducts } = useProducts();

  const product = getProductById(id);
  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">{t("products.notFound")}</h1>
          <Button variant="luxuryOutline" asChild>
            <Link to="/collections">{t("products.back")}</Link>
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
            {t("products.back")}
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
              <ProductImageViewer image={product.image} id={product.id} />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="luxury-subheading mb-2">
                {categories[product.category].name[i18n.language]}
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                {product.name[i18n.language]}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-primary mb-4 sm:mb-6">
                {formatPrice(product.price)}
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {product.description[i18n.language]}
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="font-sans text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
                  {t("products.details")}
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm sm:text-base flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      {detail[i18n.language]}
                    </li>
                  ))}
                </ul>
              </div>

              {/*<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">*/}
              {/*  <Button*/}
              {/*    variant="luxuryOutline"*/}
              {/*    size="lg"*/}
              {/*    className="sm:size-xl sm:flex-shrink-0"*/}
              {/*    onClick={() => toggleFavorite(id)}*/}
              {/*  >*/}
              {/*    <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${product.favorite ? 'fill-gold' : ''}`} />*/}
              {/*  </Button>*/}
              {/*</div>*/}
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
            <p className="luxury-subheading mb-3 sm:mb-4">{t("products.alsoLike")}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">{t("products.related")}</h2>
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
