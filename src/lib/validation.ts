export function validateEmail(email: string): string | null {
  if (!email.trim()) return "required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "invalidEmail";
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) return "required";
  if (password.length < 8) return "passwordTooShort";
  return null;
}

export function validateRequired(value: string): string | null {
  if (!value.trim()) return "required";
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return "required";
  const phoneRegex = /^\+?[0-9\s\-()]{9,15}$/;
  if (!phoneRegex.test(phone)) return "invalidPhone";
  return null;
}

export function normalizeWhitespace(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}