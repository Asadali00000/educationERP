"use client"
import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginFormErrors = {
  email?: string;
  password?: string;
  auth?: string;
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof LoginFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = () => {
    const newErrors: LoginFormErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempted:', {
        email: formData.email,
        rememberMe: formData.rememberMe
      });
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ auth: 'Invalid email or password. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Log in to access your institution&apos;s dashboard</p>

        <form onSubmit={handleSubmit}>
          {errors.auth && (
            <div className={styles.authError}>
              <p>{errors.auth}</p>
            </div>
          )}

          <div className={styles.formField}>
            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={errors.email ? `${styles.input} ${styles.inputError}` : styles.input}
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.formField}>
            <div className={styles.inputWrapper}>
              <FaLock className={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={errors.password ? `${styles.input} ${styles.inputError}` : styles.input}
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <div
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>

          <div className={styles.loginOptions}>
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className={styles.checkbox}
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className={styles.signupLink}>
				<p>
  Don&apos;t have an account? <Link href="/auth/signup" className={styles.signupLinkText}>Create account</Link>
</p>

        </div>
      </div>

      <div className={styles.illustrationSection}>
        <div className={styles.illustrationContent}>
          <Image
            src="/loginimage.png"
            alt='Institution login illustration'
            width={400}
            height={400}
            priority
            className={styles.illustrationImage}
          />
          <div className={styles.featuresList}>
            <h3 className={styles.featuresTitle}>Your institution dashboard includes:</h3>
            <ul className={styles.features}>
              <li>Complete administrative controls</li>
              <li>Resource management tools</li>
              <li>User analytics dashboard</li>
              <li>Secure data storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
