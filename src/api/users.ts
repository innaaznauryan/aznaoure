import { BASE_URL, apiFetch, ApiError } from "@/api/client";

export async function fetchCurrentUser() {
  const response = await apiFetch(`${BASE_URL}/api/users/me`);
  if (!response.ok) throw new Error("Failed to fetch current user");
  return response.json();
}

export async function updateProfile(data: {
  first_name?: string;
  last_name?: string;
  phone?: string;
}) {
  const response = await apiFetch(`${BASE_URL}/api/users/me`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    let code = "server_error";
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