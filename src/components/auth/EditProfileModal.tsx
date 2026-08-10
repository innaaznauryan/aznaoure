import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { updateProfile, ApiError } from "@/lib/api";
import { validatePhone, normalizeWhitespace } from "@/lib/validation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface EditProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FIELDS = [
  { name: "first_name", labelKey: "profile.firstName" },
  { name: "last_name", labelKey: "profile.lastName" },
  { name: "phone", labelKey: "profile.phone" },
] as const;

export default function EditProfileModal({ open, onOpenChange }: EditProfileModalProps) {
  const { t } = useTranslation();
  const { user, updateUser } = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);

  const profileSchema = useMemo(
    () =>
      z.object({
        first_name: z.string().transform(normalizeWhitespace),
        last_name: z.string().transform(normalizeWhitespace),
        phone: z.string().transform((v) => v.trim()),
      }).superRefine((data, ctx) => {
        if (!data.first_name) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["first_name"],
            message: t("validation.required"),
          });
        }
        if (!data.last_name) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["last_name"],
            message: t("validation.required"),
          });
        }
        const phoneError = validatePhone(data.phone);
        if (phoneError) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["phone"],
            message: t(`validation.${phoneError}`),
          });
        }
      }),
    [t]
  );

  type ProfileFormData = z.infer<typeof profileSchema>;

  const getDefaults = (): ProfileFormData => ({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    phone: user?.phone || "",
  });

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: getDefaults(),
  });

  useEffect(() => {
    if (open) {
      form.reset(getDefaults());
      setServerError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, user]);

  const onSubmit = async (data: ProfileFormData) => {
    setServerError(null);
    try {
      const updated = await updateProfile(data);
      updateUser(updated);
      onOpenChange(false);
    } catch (err) {
      const code = err instanceof ApiError ? err.code : "server_error";
      setServerError(t(`authErrors.${code}`));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {t("profile.edit")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {FIELDS.map(({ name, labelKey }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t(labelKey)}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {serverError && (
              <p className="text-sm text-destructive">{serverError}</p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? t("profile.saving") : t("profile.save")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}