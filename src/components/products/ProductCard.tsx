import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { dispatch } = useCart();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-muted aspect-square mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>
      </Link>
      
      <div className="space-y-2">
        <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-2">
          <p className="font-sans text-lg">{formatPrice(product.price)}</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch({ type: "ADD_ITEM", product })}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
};
