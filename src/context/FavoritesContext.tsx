import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useAuth } from "@/context/AuthContext.tsx";
import { fetchFavorites, addFavorite, removeFavorite } from "@/lib/api";

interface FavoritesContextValue {
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  loading: boolean;
  showSignInPrompt: boolean;
  closeSignInPrompt: () => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  useEffect(() => {
    if (!user) {
      setFavoriteIds(new Set());
      return;
    }
    setLoading(true);
    fetchFavorites()
      .then((products) => setFavoriteIds(new Set(products.map((p) => p.id))))
      .finally(() => setLoading(false));
  }, [user]);

  const isFavorite = useCallback((id: string) => favoriteIds.has(id), [favoriteIds]);

  const closeSignInPrompt = useCallback(() => setShowSignInPrompt(false), []);

  const toggleFavorite = useCallback(
    async (id: string) => {
      if (!user) {
        setShowSignInPrompt(true);
        return;
      }

      const wasFavorited = favoriteIds.has(id);
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (wasFavorited) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });

      try {
        if (wasFavorited) {
          await removeFavorite(id);
        } else {
          await addFavorite(id);
        }
      } catch (err) {
        // roll back on failure
        setFavoriteIds((prev) => {
          const next = new Set(prev);
          if (wasFavorited) {
            next.add(id);
          } else {
            next.delete(id);
          }
          return next;
        });
      }
    },
    [favoriteIds, user]
  );

  return (
    <FavoritesContext.Provider
      value={{ isFavorite, toggleFavorite, loading, showSignInPrompt, closeSignInPrompt }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within a FavoritesProvider");
  return ctx;
};
