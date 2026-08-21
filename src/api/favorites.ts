import { BASE_URL, apiFetch, getMediaUrl } from "@/api/client";

export async function fetchFavorites() {
  const response = await apiFetch(`${BASE_URL}/api/favorites/`);
  if (!response.ok) throw new Error("Failed to fetch favorites");
  const favorites = await response.json();
  return favorites.map((p) => ({ ...p, image: getMediaUrl(p.image) }));
}

export async function addFavorite(productId: string) {
  const response = await apiFetch(`${BASE_URL}/api/favorites/${productId}`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to add favorite");
  return response.json();
}

export async function removeFavorite(productId: string): Promise<void> {
  const response = await apiFetch(`${BASE_URL}/api/favorites/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to remove favorite");
}