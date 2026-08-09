import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.tsx";
import { useFavorites } from "@/context/FavoritesContext";

export const SignInPromptModal = () => {
  const { showSignInPrompt, closeSignInPrompt } = useFavorites();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignIn = () => {
    closeSignInPrompt();
    navigate("/signin");
  };

  return (
    <Dialog open={showSignInPrompt} onOpenChange={(open) => !open && closeSignInPrompt()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{t("favorites.save")}</DialogTitle>
          <DialogDescription>
            {t("favorites.description")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-2">
          <Button variant="outline" onClick={closeSignInPrompt} className="w-full sm:w-auto">
            {t("favorites.cancel")}
          </Button>
          <Button variant="luxuryOutline" onClick={handleSignIn} className="w-full sm:w-auto">
            {t("favorites.signIn")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
