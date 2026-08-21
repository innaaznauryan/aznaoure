import { z } from "zod";
import type { TFunction } from "i18next";
import { applyRequired, applyEmail, applyPassword, applyPhone, applyConfirmPassword } from "@/lib/validation";

export function createSignInSchema(t: TFunction) {
  return z
    .object({
      email: z.string(),
      password: z.string(),
    })
    .superRefine((data, ctx) => {
      applyEmail(t, data.email, 'email', ctx);
      applyRequired(t, data.password, 'password', ctx);
    });
}

export function createSignUpSchema(t: TFunction) {
  return z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      phone: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .superRefine((data, ctx) => {
      applyRequired(t, data.firstName, 'firstName', ctx);
      applyRequired(t, data.lastName, 'lastName', ctx);
      applyEmail(t, data.email, 'email', ctx);
      applyPhone(t, data.phone, 'phone', ctx);
      const passwordOk = applyPassword(t, data.password, 'password', ctx);

      if (passwordOk) {
        applyConfirmPassword(t, data.password, data.confirmPassword, ctx);
      }
    });
}

export function createForgotPasswordSchema(t: TFunction) {
  return z
    .object({
      email: z.string(),
    })
    .superRefine((data, ctx) => {
      applyEmail(t, data.email, 'email', ctx);
    });
}

export function createResetPasswordSchema(t: TFunction) {
  return z
    .object({
      password: z.string(),
      confirmPassword: z.string(),
    })
    .superRefine((data, ctx) => {
      const passwordOk = applyPassword(t, data.password, 'password', ctx);

      if (passwordOk) {
        applyConfirmPassword(t, data.password, data.confirmPassword, ctx);
      }
    });
}

export type ForgotPasswordFormData = z.infer<ReturnType<typeof createForgotPasswordSchema>>;
export type ResetPasswordFormData = z.infer<ReturnType<typeof createResetPasswordSchema>>;
export type SignInFormData = z.infer<ReturnType<typeof createSignInSchema>>;
export type SignUpFormData = z.infer<ReturnType<typeof createSignUpSchema>>;