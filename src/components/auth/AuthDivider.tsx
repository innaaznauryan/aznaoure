import { useTranslation } from "react-i18next";

export default function AuthDivider() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
        {t("signIn.orContinueWith")}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}