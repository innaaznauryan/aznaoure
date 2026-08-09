const BASE_URL = import.meta.env.VITE_API_URL;

export class ApiError extends Error {
    code: string;
    constructor(code: string) {
        super(code);
        this.code = code;
    }
}

function authHeaders(): HeadersInit {
    const token = localStorage.getItem("aznaoure_token");
    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}

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

export async function fetchFavorites() {
    const response = await fetch(`${BASE_URL}/api/favorites/`, {
        headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch favorites");
    const favorites = await response.json();
    return favorites.map((p) => ({ ...p, image: getMediaUrl(p.image) }));
}

export async function addFavorite(productId: string) {
    const response = await fetch(`${BASE_URL}/api/favorites/${productId}`, {
        method: "POST",
        headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Failed to add favorite");
    return response.json();
}

export async function removeFavorite(productId: string): Promise<void> {
    const response = await fetch(`${BASE_URL}/api/favorites/${productId}`, {
        method: "DELETE",
        headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Failed to remove favorite");
}

export async function signup(data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
}) {
    let response: Response;
    try {
        response = await fetch(`${BASE_URL}/api/auth/signup/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    } catch {
        throw new ApiError('network_error');
    }
    if (!response.ok) {
        let code = 'server_error';
        try {
            const err = await response.json();
            code = err.detail?.code || code;
        } catch {
            // response wasn't JSON, keep server_error fallback
        }
        throw new ApiError(code);
    }
    return response.json();
}

export async function login(data: { email: string; password: string }) {
    let response: Response;

    try {
        response = await fetch(`${BASE_URL}/api/auth/login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    } catch {
        throw new ApiError('network_error');
    }
    if (!response.ok) {
        let code = 'server_error';
        try {
            const err = await response.json();
            code = err.detail?.code || code;
        } catch {
            // response wasn't JSON, keep server_error fallback
        }
        throw new ApiError(code);
    }
    return response.json();
}

export async function googleAuth(credential: string) {
    let response: Response;
    try {
        response = await fetch(`${BASE_URL}/api/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credential }),
        });
    } catch {
        throw new ApiError('network_error');
    }

    if (!response.ok) {
        let code = 'server_error';
        try {
            const err = await response.json();
            code = err.detail?.code || code;
        } catch {
            // response wasn't JSON, keep server_error fallback
        }
        throw new ApiError(code);
    }

    return response.json();
}