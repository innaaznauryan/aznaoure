import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import SEO from "@/components/SEO.tsx";
import AuthFormField from "@/components/auth/AuthFormField";
import { ApiError } from "@/api/client.ts";
import { resetPassword } from "@/api/auth.ts";
import { createResetPasswordSchema, type ResetPasswordFormData } from '@/lib/authSchemas';

export default function ResetPassword() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const resetPasswordSchema = useMemo(() => createResetPasswordSchema(t), [t]);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setServerError('');
    setIsSubmitting(true);
    try {
      await resetPassword({ token, new_password: data.password });
      navigate('/signin?resetSuccess=1');
    } catch (err) {
      const code = err instanceof ApiError ? err.code : 'network_error';
      setServerError(t(`authErrors.${code}`));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
        <SEO
          title="Reset Password"
          description="Set a new password for your Aznaoure Art account."
          noindex
        />
        <p className="text-sm text-destructive">{t('resetPassword.invalidLink')}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          <Link to="/forgot-password" className="underline text-foreground">
            {t('resetPassword.requestNewLink')}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
      <SEO
        title="Reset Password"
        description="Set a new password for your Aznaoure Art account."
        noindex
      />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">
          {t('resetPassword.title')}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <AuthFormField
              control={form.control}
              name="password"
              label={t('resetPassword.password.label')}
              placeholder={t('resetPassword.password.placeholder')}
              type="password"
              autoComplete="new-password"
            />

            <AuthFormField
              control={form.control}
              name="confirmPassword"
              label={t('resetPassword.confirmPassword.label')}
              placeholder={t('resetPassword.confirmPassword.placeholder')}
              type="password"
              autoComplete="new-password"
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
              {isSubmitting ? t('resetPassword.submitting') : t('resetPassword.submit')}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}