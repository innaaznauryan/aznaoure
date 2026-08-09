import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFavorites } from "@/context/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Product, categories } from "@/lib/products";
import { getLang } from "@/lib/get-lang.ts";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = getLang(i18n.language);
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}${location.search}`} className="block">
        <div className="relative overflow-hidden bg-muted aspect-square mb-4">
          <img
            src={product.image}
            alt={product.id}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(product.id);
            }}
            className="absolute top-3 right-3 z-10 p-2 rounded-full aspect-square bg-background/80 transition-colors"
            aria-label="Toggle favorite"
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-rose-500" : ""}`} />
          </Button>
        </div>
      </Link>
      
      <div className="space-y-2">
        <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
          {categories[product.category].name[lang]}
        </p>
        <Link to={`/product/${product.id}${location.search}`}>
          <h3 className="font-serif text-xl group-hover:text-primary transition-colors duration-300">
            {product.name[lang]}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-2">
          <p className="font-sans text-lg">{formatPrice(product.price)}</p>
        </div>
      </div>
    </motion.article>
  );
};
