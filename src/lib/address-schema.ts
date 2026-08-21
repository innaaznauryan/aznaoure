import { useMemo } from "react";
import { z } from "zod";
import type { TFunction } from "i18next";
import { applyRequired, applyPhone } from "@/lib/validation";

export function createAddressSchema(t: TFunction) {
  return z
    .object({
      phone: z.string(),
      address: z.string().max(255),
      city: z.string().max(100),
      zip_code: z.string().max(20),
      country: z.string().max(100),
      is_default: z.boolean(),
    })
    .superRefine((data, ctx) => {
      applyPhone(t, data.phone, "phone", ctx);
      applyRequired(t, data.address, "address", ctx);
      applyRequired(t, data.city, "city", ctx);
      applyRequired(t, data.zip_code, "zip_code", ctx);
      applyRequired(t, data.country, "country", ctx);
    });
}

export function useAddressSchema(t: TFunction) {
  return useMemo(() => createAddressSchema(t), [t]);
}

export interface AddressFormValues {
  phone: string;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  is_default: boolean;
}