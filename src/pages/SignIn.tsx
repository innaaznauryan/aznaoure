import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SEO from "@/components/SEO.tsx";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import AuthDivider from "@/components/auth/AuthDivider";
import { useAuth } from '../context/AuthContext';
import { useGoogleAuth } from "@/hooks/use-google-auth";
import { login, ApiError } from "@/lib/api";
import { validateEmail, validateRequired } from '@/lib/validation';

interface LocationState {
  from?: Location;
}

export default function SignIn() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login: setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || '/';

  const {
    handleGoogleSuccess,
    handleGoogleError,
    formError,
    setFormError,
  } = useGoogleAuth(from);

  const validate = () => {
    const errors: { email?: string; password?: string } = {};
    const emailError = validateEmail(email);
    const passwordError = validateRequired(password);
    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const data = await login({ email, password });
      setAuth(data.access_token, data.user);
      navigate(from, { replace: true });
    } catch (err) {
      const code = err instanceof ApiError ? err.code : 'network_error';
      setFormError(t(`authErrors.${code}`));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
      {/* Meta tags */}
      <SEO
        title="Sign In"
        description="Sign in to your Aznaoure Art account to view your favorites, make orders, and update your details."
        noindex
      />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">
          {t('signIn.title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <Label htmlFor="email">{t('signIn.email.label')}</Label>
            <Input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder={t('signIn.email.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!fieldErrors.email}
              className="mt-2"
            />
            {fieldErrors.email && (
              <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.email}`)}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">{t('signIn.password.label')}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder={t('signIn.password.placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={!!fieldErrors.password}
              className="mt-2"
            />
            {fieldErrors.password && (
              <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.password}`)}</p>
            )}
          </div>

          {formError && <p className="text-sm text-destructive">{formError}</p>}

          <Button
            type="submit"
            variant="luxury"
            size="lg"
            className="sm:size-xl w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('signIn.submitting') : t('signIn.submit')}
          </Button>
        </form>

        <AuthDivider />

        <GoogleAuthButton
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        <p className="mt-6 text-sm text-muted-foreground">
          {t('signIn.noAccount')}{' '}
          <Link to="/signup" className="underline text-foreground">
            {t('signIn.signUpLink')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}