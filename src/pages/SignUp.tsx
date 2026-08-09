import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import { signup, ApiError } from "@/lib/api";
import { validateEmail, validatePassword, validateRequired, validatePhone } from '@/lib/validation';

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignUp() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login: setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    handleGoogleSuccess,
    handleGoogleError,
    formError,
    setFormError,
  } = useGoogleAuth();

  const validate = () => {
    const errors: FieldErrors = {};
    const firstNameError = validateRequired(firstName);
    const lastNameError = validateRequired(lastName);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const passwordError = validatePassword(password);

    if (firstNameError) errors.firstName = firstNameError;
    if (lastNameError) errors.lastName = lastNameError;
    if (emailError) errors.email = emailError;
    if (phoneError) errors.phone = phoneError;
    if (passwordError) errors.password = passwordError;

    if (!passwordError) {
      if (!confirmPassword) {
        errors.confirmPassword = 'required';
      } else if (confirmPassword !== password) {
        errors.confirmPassword = 'passwordMismatch';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const data = await signup({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        phone,
      });
      setAuth(data.access_token, data.user);
      navigate('/', { replace: true });
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
        title="Sign Up"
        description="Create an Aznaoure Art account to save your favorite pieces, place orders, and track their status."
        noindex
      />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">
          {t('signUp.title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="firstName">{t('signUp.firstName.label')}</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder={t('signUp.firstName.placeholder')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                aria-invalid={!!fieldErrors.firstName}
                className="mt-2"
              />
              {fieldErrors.firstName && (
                <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.firstName}`)}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">{t('signUp.lastName.label')}</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder={t('signUp.lastName.placeholder')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                aria-invalid={!!fieldErrors.lastName}
                className="mt-2"
              />
              {fieldErrors.lastName && (
                <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.lastName}`)}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">{t('signUp.email.label')}</Label>
            <Input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder={t('signUp.email.placeholder')}
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
            <Label htmlFor="phone">{t('signUp.phone.label')}</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t('signUp.phone.placeholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!fieldErrors.phone}
              className="mt-2"
            />
            {fieldErrors.phone && (
              <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.phone}`)}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">{t('signUp.password.label')}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder={t('signUp.password.placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={!!fieldErrors.password}
              className="mt-2"
            />
            {fieldErrors.password && (
              <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.password}`)}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">{t('signUp.confirmPassword.label')}</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder={t('signUp.confirmPassword.placeholder')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-invalid={!!fieldErrors.confirmPassword}
              className="mt-2"
            />
            {fieldErrors.confirmPassword && (
              <p className="text-sm text-destructive mt-1">{t(`validation.${fieldErrors.confirmPassword}`)}</p>
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
            {isSubmitting ? t('signUp.submitting') : t('signUp.submit')}
          </Button>
        </form>

        <AuthDivider />

        <GoogleAuthButton
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        <p className="mt-6 text-sm text-muted-foreground">
          {t('signUp.haveAccount')}{' '}
          <Link to="/signin" className="underline text-foreground">
            {t('signUp.signInLink')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}