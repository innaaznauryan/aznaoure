import { BASE_URL, ApiError } from "@/api/client";

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
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new ApiError("network_error");
  }
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

export async function login(data: { email: string; password: string }) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new ApiError("network_error");
  }
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

export async function googleAuth(credential: string) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential }),
    });
  } catch {
    throw new ApiError("network_error");
  }
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

export async function forgotPassword(email: string) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  } catch {
    throw new ApiError("network_error");
  }
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

export async function resetPassword(data: { token: string; new_password: string }) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new ApiError("network_error");
  }
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