"use client"
import React, { useState } from 'react';
import styles from '../styles/signup.module.css';
import { FaUniversity, FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {

	type FormData = {
		institute: string;
		admin: string;
		password: string;
		confirmPassword: string;
		email: string;
		termsAccepted: boolean;
	};

	const [formData, setFormData] = useState<FormData>({
		institute: '',
		admin: '',
		password: '',
		confirmPassword: '',
		email: '',
		termsAccepted: false,
	});
	type FormErrors = {
		institute?: string;
		admin?: string;
		password?: string;
		confirmPassword?: string;
		email?: string;
		termsAccepted?: string;
		submit?: string;
		[key: string]: string | undefined;
	};

	const [errors, setErrors] = useState<FormErrors>({});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formStep, setFormStep] = useState(1);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));

		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: undefined
			}));
		}
	};

	const validate = () => {
		const newErrors: FormErrors = {


		};
		// Step 1 validation
		if (formStep === 1) {
			if (!formData.institute.trim()) newErrors.institute = 'Institute name is required';
			if (!formData.admin.trim()) newErrors.admin = 'Admin name is required';
		}
		// Step 2 validation
		else if (formStep === 2) {
			if (!formData.email) newErrors.email = 'Email is required';
			else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

			if (!formData.password) newErrors.password = 'Password is required';
			else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
			else if (!/(?=.*[A-Z])/.test(formData.password)) newErrors.password = 'Password must contain at least one uppercase letter';
			else if (!/(?=.*[0-9])/.test(formData.password)) newErrors.password = 'Password must contain at least one number';

			if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
			else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

			if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the  termsAccepted and conditions';
		}
		return newErrors;
	};

	const handleNextStep = () => {
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else if (formStep === 1) {
			setFormStep(2);
		} else {
			setFormStep(3);

		}
	};

	const handlePrevStep = () => {
		setFormStep(1);
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
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));
			console.log('Form submitted:', formData);
			// Redirect or show success message
			alert("Account created successfully!");
		} catch (error) {
			console.error('Error submitting form:', error);
			setErrors({ submit: 'Failed to create account. Please try again.' });
		} finally {
			setIsSubmitting(false);
		}
	};

	const getPasswordStrength = () => {
		const { password } = formData;
		if (!password) return { strength: 0, label: '' };

		let strength = 0;
		if (password.length >= 8) strength += 1;
		if (/[A-Z]/.test(password)) strength += 1;
		if (/[0-9]/.test(password)) strength += 1;
		if (/[^A-Za-z0-9]/.test(password)) strength += 1;

		const labels = ['Weak', 'Fair', 'Good', 'Strong'];
		return {
			strength: strength,
			label: labels[strength - 1] || ''
		};
	};

	const passwordStrength = getPasswordStrength();

	const renderStep1 = () => (
		<>
			<div className={styles.stepIndicator}>
				<div className={styles.stepActive}>1</div>

				<div className={`${styles.stepLine} ${formStep === 2 ? styles.animate : ''}`}></div>
				<div className={formStep === 2 ? styles.stepActive : styles.step}>2</div>
			</div>

			<h2 className={styles.stepTitle}>Institute Details</h2>

			<div className={styles.formField}>
				<div className={styles.inputWrapper}>


					<FaUniversity className={styles.icon} />
					<input
						type="text"
						name="institute"
						placeholder="Institute Name"
						className={errors.institute ? `${styles.input} ${styles.inputError}` : styles.input}
						value={formData.institute}
						onChange={handleChange}
					/>
				</div>
				{errors.institute && <p className={styles.error}>{errors.institute}</p>}
			</div>

			<div className={styles.formField}>
				<div className={styles.inputWrapper}>

					<FaUser className={styles.icon} />
					<input
						type="text"
						name="admin"
						placeholder="Admin Name"
						className={errors.admin ? `${styles.input} ${styles.inputError}` : styles.input}
						value={formData.admin}
						onChange={handleChange}
					/>
				</div>
				{errors.admin && <p className={styles.error}>{errors.admin}</p>}
			</div>

			<button type="button" className={styles.submitButton} onClick={handleNextStep}>
				Continue
			</button>
		</>
	);

	const renderStep2 = () => (
		<>
			<div className={styles.stepIndicator}>

				<div className={styles.stepCompleted}>
					<FaCheckCircle />
				</div>
				<div className={`${styles.stepLineAnimated}`}></div>
				<div className={styles.stepActive}>2</div>
			</div>

			<h2 className={styles.stepTitle}>Account Security</h2>

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

			{formData.password && (
				<div className={styles.passwordStrength}>
					<div className={styles.strengthBar}>
						<div
							className={styles.strengthFill}
							style={{
								width: `${passwordStrength.strength * 25}%`,
								backgroundColor:
									passwordStrength.strength === 1 ? '#ff4d4d' :
										passwordStrength.strength === 2 ? '#ffaa00' :
											passwordStrength.strength === 3 ? '#2ecc71' :
												passwordStrength.strength === 4 ? '#27ae60' : '#e0e0e0'
							}}
						></div>
					</div>
					{passwordStrength.label && (
						<span className={styles.strengthLabel}>{passwordStrength.label}</span>
					)}
				</div>
			)}

			<div className={styles.formField}>
				<div className={styles.inputWrapper}>

					<FaLock className={styles.icon} />
					<input
						type={showConfirmPassword ? "text" : "password"}
						name="confirmPassword"
						placeholder="Confirm Password"
						className={errors.confirmPassword ? `${styles.input} ${styles.inputError}` : styles.input}
						value={formData.confirmPassword}
						onChange={handleChange}
					/>
					<div
						className={styles.passwordToggle}
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}
					>
						{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
					</div>
				</div>
				{errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
			</div>

			<div className={styles.checkboxContainer}>
				<input
					type="checkbox"
					id=" termsAccepted"
					name=" termsAcceptedAccepted"
					className={styles.checkbox}
					checked={formData.termsAccepted}
					onChange={handleChange}
				/>
				<label htmlFor=" termsAccepted" className={styles.checkboxLabel}>
					I accept the <a href="#" className={styles.termsAccepted}> termsAccepted and Conditions</a>
				</label>
			</div>
			{errors.termsAccepted && <p className={styles.error}>{errors.termsAccepted}</p>}

			<div className={styles.formActions}>
				<button type="button" className={styles.backButton} onClick={handlePrevStep}>
					Back
				</button>
				<button
					type="submit"
					className={styles.submitButton}
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Creating Account...' : 'Create Account'}
				</button>

			</div>

			{errors.submit && <p className={styles.generalError}>{errors.submit}</p>}
		</>
	);

	return (
		<div className={styles.container}>
			<div className={styles.formSection}>
				<h1 className={styles.title}>Create your account</h1>
				<p className={styles.subtitle}>Join thousands of institutions already using our platform</p>

				<form onSubmit={handleSubmit}>
					{formStep === 1 && renderStep1()}
					{formStep === 2 && renderStep2()}
				</form>

				<div className={styles.loginLink}>
					<p>Already have an account? <Link href="/auth/login" className={styles.loginLinkText}>Log In</Link></p>
				</div>
			</div>

			<div className={styles.illustrationSection}>
				<div className={styles.illustrationContent}>

					<Image
						src="/signupImage.png"
						alt='Institution signup illustration'
						width={400}
						height={400}
						priority
						className={styles.illustrationImage}
					/>
					<div className={styles.testimonial}>
						<p className={styles.testimonialText}>
						&quot;This platform has transformed how we manage our educational resources. Highly recommended! &quot;
						</p>
						<p className={styles.testimonialAuthor}>— Sarah Johnson, Principal at Westlake Academy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
