import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", label: "EN" },
  { code: "hy", label: "АМ" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => {
        const isActive = currentLang.startsWith(code);

        return (
          <Button
            key={code}
            size="sm"
            variant="ghost"
            onClick={() => i18n.changeLanguage(code)}
            className={isActive ? "outline outline-primary pointer-events-none" : ""}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;