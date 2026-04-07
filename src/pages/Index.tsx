import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/lib/products.ts";
import { useProducts } from "@/hooks/use-products.ts";
import heroImage from "@/assets/hero-jewelry.webp";
import { ArrowRight, Diamond, Shield, Truck } from "lucide-react";

const Index = () => {
  const { t, i18n } = useTranslation();
  const { getFeaturedProducts } = useProducts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[70vh] lg:h-[90vh] flex items-center py-20 sm:py-0">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3 sm:mb-4">
              {t("home.subtitle")}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight mb-4 sm:mb-6">
              {t("home.title1")}
              <br />
              <span className="gold-gradient-text">{t("home.title2")}</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t("home.description")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button variant="hero" size="lg" className="sm:size-xl w-full sm:w-auto" asChild>
                <Link to="/collections">
                  {t("home.exploreCollections")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="sm:size-xl w-full sm:w-auto" asChild>
                <Link to="/about">{t("home.story")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">{t("home.explore")}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t("collections.title")}
            </h2>
            <div className="luxury-divider mt-4 sm:mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(categories).map(([id, category], index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/collections?category=${id}`}
                  className="h-full group block text-center p-4 sm:p-6 lg:p-8 bg-background rounded-sm hover:shadow-card transition-all duration-300"
                >
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {category.name[i18n.language]}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {category.description[i18n.language]}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">{t("home.selection")}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t("home.featured")}
            </h2>
            <div className="luxury-divider mt-4 sm:mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button variant="luxuryOutline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/collections">{t("home.view")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                icon: Diamond,
                title: t("home.quality.title"),
                description:
                  t("home.quality.description"),
              },
              {
                icon: Shield,
                title: t("home.warranty.title"),
                description:
                  t("home.warranty.description"),
              },
              {
                icon: Truck,
                title: t("home.shipping.title"),
                description:
                  t("home.shipping.description"),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 sm:mb-6 text-gold" />
                <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-background/70 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="luxury-subheading mb-6 sm:mb-8">{t("home.clients")}</p>
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-6 sm:mb-8 px-4">
              {t("home.quote")}
            </blockquote>
            <cite className="not-italic">
              <span className="font-medium">{t("home.client")}</span>
              <span className="text-muted-foreground"> - {t("home.city")}</span>
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
