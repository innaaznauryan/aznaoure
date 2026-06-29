import { setImageUrl } from "@/lib/product-images.ts";
const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts() {
    const response = await fetch(`${BASE_URL}/api/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    return products.map((p) => setImageUrl(BASE_URL, p));
}

export async function fetchProductById(id: string) {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    const product = await response.json();
    return setImageUrl(BASE_URL, product);
}