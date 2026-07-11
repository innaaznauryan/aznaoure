const BASE_URL = import.meta.env.VITE_API_URL;

export function getMediaUrl(path: string): string {
    return `${BASE_URL}/media/${path}`;
}

export async function fetchProducts() {
    const response = await fetch(`${BASE_URL}/api/products/`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    return products.map((p) => ({...p, image: getMediaUrl(p.image)}));
}

export async function fetchProductById(id: string) {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    const product = await response.json();
    return {...product, image: getMediaUrl(product.image)};
}