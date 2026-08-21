import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import SEO from "@/components/SEO.tsx";
import AuthFormField from "@/components/auth/AuthFormField";
import { ApiError } from "@/api/client.ts";
import { forgotPassword } from "@/api/auth.ts";
import { createForgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/auth-schema.ts';

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const forgotPasswordSchema = useMemo(() => createForgotPasswordSchema(t), [t]);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setServerError('');
    setIsSubmitting(true);
    try {
      await forgotPassword(data.email);
      setSubmitted(true);
    } catch (err) {
      const code = err instanceof ApiError ? err.code : 'network_error';
      setServerError(t(`authErrors.${code}`));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
      <SEO
        title="Forgot Password"
        description="Reset your Aznaoure Art account password."
        noindex
      />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">
          {t('forgotPassword.title')}
        </h2>

        {submitted ? (
          <p className="text-sm text-muted-foreground">
            {t('forgotPassword.checkEmail')}
          </p>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <p className="text-sm text-muted-foreground">
                {t('forgotPassword.instructions')}
              </p>

              <AuthFormField
                control={form.control}
                name="email"
                label={t('forgotPassword.email.label')}
                placeholder={t('forgotPassword.email.placeholder')}
                inputMode="email"
                autoComplete="username email"
              />

              {serverError && (
                <p className="text-sm text-destructive">{serverError}</p>
              )}

              <Button
                type="submit"
                variant="luxury"
                size="lg"
                className="sm:size-xl w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('forgotPassword.submitting') : t('forgotPassword.submit')}
              </Button>
            </form>
          </Form>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          <Link to="/signin" className="underline text-foreground">
            {t('forgotPassword.backToSignIn')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}