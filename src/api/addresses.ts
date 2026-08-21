import { BASE_URL, apiFetch, ApiError } from "@/api/client";
import { Address, AddressFormData } from "@/lib/addresses";

export async function fetchAddresses(): Promise<Address[]> {
  const response = await apiFetch(`${BASE_URL}/api/addresses/`);
  if (!response.ok) throw new Error("Failed to fetch addresses");
  return response.json();
}

export async function createAddress(data: AddressFormData): Promise<Address> {
  const response = await apiFetch(`${BASE_URL}/api/addresses/`, {
    method: "POST",
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

export async function deleteAddress(id: number): Promise<void> {
  const response = await apiFetch(`${BASE_URL}/api/addresses/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete address");
}