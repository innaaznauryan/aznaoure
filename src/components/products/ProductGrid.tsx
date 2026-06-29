import { useTranslation } from "react-i18next";
import { Product } from "@/lib/products.ts";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  columns?: string;
}

export const ProductGrid = ({
  products,
  loading,
  error,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}: ProductGridProps) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin"/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animate-fade-in text-center py-16 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className={`grid ${columns} gap-6 sm:gap-8`}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index}/>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("products.noProducts")}
          </p>
        </div>
      )}
    </div>
  );
};
