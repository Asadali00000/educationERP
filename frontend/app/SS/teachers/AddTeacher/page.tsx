// components/TeacherForm.jsx
"use client"
import { useState } from 'react';
import styles from '../../../styles/addTeacher.module.css';
import {  FaTimes } from 'react-icons/fa';

const TeacherForm = () => {
	interface TeacherFormData {
		firstName: string;
		middleName: string;
		lastName: string;
		email: string;
		mobile: string;
		dateOfBirth: string; // Use Date if you convert it, but string is fine for now
		gender: 'MALE' | 'FEMALE' | string;
		street: string;
		city: string;
		state: string;
		postalCode: string;
		country: string;
		role: string;
		joiningDate: string;
		experience: string;
		qualification: string;
		specialization: string;
		subjects: string[];
	}

	const [formData, setFormData] = useState<TeacherFormData>({
		firstName: 'Asad',
		middleName: '',
		lastName: 'Bsjsh',
		email: 'acaaaaa@gmail.com',
		mobile: '9340333379',
		dateOfBirth: '2018-01-15',
		gender: 'MALE',
		street: 'Shshh',
		city: 'Hhh',
		state: 'Andhra Pradesh',
		postalCode: '643845',
		country: 'Algeria',
		role: 'Teacher',
		joiningDate: '2024-12-17',
		experience: '1',
		qualification: 'Sjsjj',
		specialization: 'Djdj',
		subjects: ['MATH101', 'PHYS101']
	});

	const [newSubject, setNewSubject] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleAddSubject = () => {
		if (newSubject.trim()) {
			setFormData({
				...formData,
				subjects: [...formData.subjects, newSubject.trim()]
			});
			setNewSubject('');
		}
	};

	const handleRemoveSubject = (index : number) => {
		const updatedSubjects = [...formData.subjects];
		updatedSubjects.splice(index, 1);
		setFormData({
			...formData,
			subjects: updatedSubjects
		});
	};
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAddSubject();
		}
	};


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
		e.preventDefault();
		console.log('Form submitted with data:', formData);
		// Add your form submission logic here
	};


	return (
		<div className={styles.pageContainer}>
			<div className={styles.breadcrumb}>
				<a className={styles.breadcrumbLink}>HOME</a>
				<span className={styles.breadcrumbSeparator}>/</span>
				<a className={styles.breadcrumbLink}>Teacher</a>
				<span className={styles.breadcrumbSeparator}>/</span>
				<a className={styles.breadcrumbCurrent}>ADD TEACHER</a>

			</div>
			<div className={styles.contentContainer}>

				<div className={styles.headerContainer}>
					<h1 className={styles.pageTitle}>
						ADD TEACHER

					</h1>



				</div>
				<div className={styles.formCard}>
					<div className={styles.requiredText}>
						<span className={styles.requiredStar}>*</span> indicates required field
					</div>

					<form onSubmit={handleSubmit}>

						<div className={styles.formSection}>
							<h2 className={styles.sectionTitle}>Personal Information</h2>

							<div className={styles.formGrid}>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										First Name <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="firstName"
										required
										className={styles.formInput}
										value={formData.firstName}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Middle Name
									</label>
									<input
										type="text"
										name="middleName"
										className={styles.formInput}
										value={formData.middleName}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Last Name <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="lastName"
										required
										className={styles.formInput}
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Email <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="email"
										name="email"
										required
										className={styles.formInput}
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Mobile <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="tel"
										name="mobile"
										required
										className={styles.formInput}
										value={formData.mobile}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Date of Birth <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="date"
										name="dateOfBirth"
										required
										className={styles.formInput}
										value={formData.dateOfBirth}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Gender <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="gender"
										required
										className={styles.formSelect}
										value={formData.gender}
										onChange={handleChange}
									>
										<option value="MALE">Male</option>
										<option value="FEMALE">Female</option>
										<option value="OTHER">Other</option>
									</select>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Profile Image
									</label>
									<div className={styles.profileImageContainer}>
										<div className={styles.profileImagePlaceholder}>
											<i className="fas fa-user"></i>
										</div>
										<button type="button" className={styles.uploadButton}>
											Upload
										</button>
									</div>
								</div>

							</div>

						</div>


						<div className={styles.formSection}>
							<h2 className={styles.sectionTitle}>Address</h2>
							<div className={styles.formGrid}>
								<div className={styles.formGroup}>
								<label className={styles.formLabel}>
										Street
									</label> <span className={styles.requiredStar}>*</span>
									<input
										type="text"
										name="street"
										required
										className={styles.formInput}
										value={formData.street}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										City <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="city"
										required
										className={styles.formInput}
										value={formData.city}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										State <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="state"
										required
										className={styles.formSelect}
										value={formData.state}
										onChange={handleChange}
									>
										<option value="Andhra Pradesh">Andhra Pradesh</option>
										<option value="Arunachal Pradesh">Arunachal Pradesh</option>
										<option value="Assam">Assam</option>
										<option value="Bihar">Bihar</option>
										<option value="Chhattisgarh">Chhattisgarh</option>
										{/* More states */}
									</select>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Postal Code <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="postalCode"
										required
										className={styles.formInput}
										value={formData.postalCode}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Country <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="country"
										required
										className={styles.formSelect}
										value={formData.country}
										onChange={handleChange}
									>
										<option value="Algeria">Algeria</option>
										<option value="India">India</option>
										<option value="USA">USA</option>
										<option value="UK">UK</option>
										{/* More countries */}
									</select>
								</div>
							</div>
						</div>

						{/* Professional Information Section */}
						<div className={styles.formSection}>
							<h2 className={styles.sectionTitle}>Professional Information</h2>
							<div className={styles.formGrid}>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Role <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="role"
										required
										className={styles.formSelect}
										value={formData.role}
										onChange={handleChange}
									>
										<option value="Teacher">Teacher</option>
										<option value="HOD">Head of Department</option>
										<option value="Assistant">Teaching Assistant</option>
									</select>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Joining Date <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="date"
										name="joiningDate"
										required
										className={styles.formInput}
										value={formData.joiningDate}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Experience (Years) <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="number"
										name="experience"
										required
										className={styles.formInput}
										value={formData.experience}
										onChange={handleChange}
										min="0"
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Qualification <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="qualification"
										required
										className={styles.formInput}
										value={formData.qualification}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Specialization <span className={styles.requiredStar}>*</span>
									</label>
									<input
										type="text"
										name="specialization"
										required
										className={styles.formInput}
										value={formData.specialization}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Subjects <span className={styles.requiredStar}>*</span>
									</label>
									<div className={styles.subjectsContainer}>
										<div className={styles.subjectTags}>
											{formData.subjects.map((subject, index) => (
												<div key={index} className={styles.subjectTag}>
													{subject}
													<FaTimes
														type="button"
														className={styles.removeSubjectButton}
														onClick={() => handleRemoveSubject(index as number)}
													/>
												</div>
											))}
											<div className={styles.addSubjectInput}>
												<input
													type="text"
													placeholder="Add subject"
													value={newSubject}
													onChange={(e) => setNewSubject(e.target.value)}
													onKeyPress={handleKeyPress}
													className={styles.subjectInput}
													onBlur={handleAddSubject}
												/>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className={styles.formActions}>
							<button type="button" className={styles.cancelButton}>
								Cancel
							</button>
							<button type="button" className={styles.draftButton}>
								Save as Draft
							</button>
							<button type="submit" className={styles.submitButton}>
								<i className="fas fa-save"></i> Save Teacher
							</button>             </div>











					</form>
				</div>
			</div>
		</div>
	)
}
export default TeacherForm;

