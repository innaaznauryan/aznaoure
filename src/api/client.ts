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

export async function apiFetch(url: string, options: RequestInit = {}) {
    const response = await fetch(url, {
        ...options,
        headers: {
            ...authHeaders(),
            ...(options.headers || {}),
        },
    });
    if (response.status === 401) {
        localStorage.removeItem("aznaoure_token");
        if (!window.location.pathname.startsWith("/signin")) {
            window.location.href = "/signin?sessionExpired=1";
        }
    }
    return response;
}

export function getMediaUrl(path: string): string {
    return `${BASE_URL}/media/${path}`;
}

export { BASE_URL };