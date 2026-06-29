import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface ProductNotFoundProps {
  message?: string;
  backTo: string;
}

export const ProductNotFound = ({ message, backTo }: ProductNotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl mb-4">
          {message ?? t("products.notFound")}
        </h1>
        <Button variant="luxuryOutline" asChild>
          <Link to={backTo}>{t("products.back")}</Link>
        </Button>
      </div>
    </div>
  );
};
