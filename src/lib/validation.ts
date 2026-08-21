import { z } from "zod";
import type { TFunction } from "i18next";

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

type IssueCtx = z.RefinementCtx;
type Validator = (value: string) => string | null;

function makeApplyValidator(validate: Validator) {
  return (t: TFunction, value: string, path: string, ctx: IssueCtx) => {
    const code = validate(value);
    if (code) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [path], message: t(`validation.${code}`) });
    return !code;
  };
}

export const applyRequired = makeApplyValidator(validateRequired);
export const applyEmail = makeApplyValidator(validateEmail);
export const applyPassword = makeApplyValidator(validatePassword);
export const applyPhone = makeApplyValidator(validatePhone);

export function applyConfirmPassword(
  t: TFunction,
  password: string,
  confirmPassword: string,
  ctx: IssueCtx
) {
  if (!confirmPassword) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["confirmPassword"], message: t("validation.required") });
  } else if (confirmPassword !== password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["confirmPassword"],
      message: t("validation.passwordMismatch"),
    });
  }
}