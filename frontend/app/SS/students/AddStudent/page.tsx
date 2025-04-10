// components/StudentForm.jsx
"use client"
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../../../styles/addStudent.module.css';
// import { FaTimes } from 'react-icons/fa';
type ParentInfo = {
	name: string;
	relationship?: string;
	occupation: string;
};

type StudentFormData = {
	firstName: string;
	middleName?: string;
	lastName: string;
	email: string;
	mobile: string;
	dateOfBirth: string;
	gender: 'MALE' | 'FEMALE' | 'OTHER';
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
	Father?: ParentInfo;
	Mother?: ParentInfo | null;
	Guardian?: ParentInfo;
	grade: string;
	section: string;
};

const StudentForm = () => {

		const [formData, setFormData] = useState<StudentFormData>({
			firstName: '',
			middleName: '',
			lastName: '',
			email: '',
			mobile: '',
			dateOfBirth: '',
			gender: 'MALE',
			street: '',
			city: '',
			state: '',
			postalCode: '',
			country: '',
			Father: { name: '', occupation: '' },
			Mother: null,
			Guardian: { name: '', relationship: '', occupation: '' },
			grade: '1',
			section: 'A'
		});

		const [hasMotherInfo, setHasMotherInfo] = useState(false);

		const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setFormData((prev) => ({
				...prev,
				[name]: value
			}));
		};

		const handleParentChange = (
			parentType: keyof StudentFormData,
			field: keyof ParentInfo,
			value: string
		) => {
			if (parentType === "Mother" && !hasMotherInfo && field === "name" && value.trim() !== "") {
				setHasMotherInfo(true);
				setFormData((prev) => ({
					...prev,
					Mother: {
						name: value,
						occupation: "", // required field
						relationship: "mother", // default value
					},
				}));
			} else if (parentType === "Mother" && hasMotherInfo) {
				setFormData((prev) => ({
					...prev,
					Mother: {
						...((prev.Mother ?? { name: "", occupation: "", relationship: "mother" }) as ParentInfo),
						[field]: value,
					},
				}));
			} else {
				setFormData((prev) => ({
					...prev,
					[parentType]: {
						...((prev[parentType] ?? {}) as ParentInfo),
						[field]: value,
					},
				}));
			}
		};




		// Toggle mother information
	// const toggleMotherInfo = () => {
	// 	if (hasMotherInfo) {
	// 		setFormData({
	// 			...formData,
	// 			Mother: null
	// 		});
	// 		setHasMotherInfo(false);
	// 	} else {
	// 		setFormData({
	// 			...formData,
	// 			Mother: { name: '', relationship: 'mother', occupation: '' }
	// 		});
	// 		setHasMotherInfo(true);
	// 	}
	// };


	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted with data:', formData);
	};

	return (
		<div className={`${styles.pageContainer}`}>
			<div className={styles.breadcrumb}>
				<a className={styles.breadcrumbLink}>HOME</a>
				<span className={styles.breadcrumbSeparator}>/</span>
				<a className={styles.breadcrumbLink}>Student</a>
				<span className={styles.breadcrumbSeparator}>/</span>
				<a className={styles.breadcrumbCurrent}>ADD STUDENT</a>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.headerContainer}>
					<h1 className={styles.pageTitle}>
						ADD STUDENT
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
										Street <span className={styles.requiredStar}>*</span>
									</label>
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
									<input
										type="text"
										name="state"
										required
										className={styles.formInput}
										value={formData.state}
										onChange={handleChange}
									/>
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
									<input
										type="text"
										name="country"
										required
										className={styles.formInput}
										value={formData.country}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>

						{/* Parent/Guardian Information Section */}
						<div className={styles.formSection}>
							<h2 className={styles.sectionTitle}>Parent/Guardian Information</h2>
							<div className={styles.formGrid}>
								{/* Father Information */}
								<div className={styles.formGroupFull}>
									<h3 className={styles.subSectionTitle}>Father's Information</h3>
									<div className={styles.parentInfoGrid}>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Name <span className={styles.requiredStar}>*</span>
											</label>
											<input
												type="text"
												required
												className={styles.formInput}
												value={formData.Father?.name || ''}
												onChange={(e) => handleParentChange('Father', 'name', e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Occupation <span className={styles.requiredStar}>*</span>
											</label>
											<input
												type="text"
												required
												className={styles.formInput}
												value={formData.Father?.occupation || ''}
												onChange={(e) => handleParentChange('Father', 'occupation', e.target.value)}
											/>
										</div>
									</div>
								</div>
								<div className={styles.formGroupFull}>
									<h3 className={styles.subSectionTitle}>Mother's Information</h3>
									<div className={styles.parentInfoGrid}>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Name <span className={styles.requiredStar}>*</span>
											</label>
											<input
												type="text"
												required
												className={styles.formInput}
												value={formData.Mother?.name || ''}
												onChange={(e) => handleParentChange('Mother', 'name', e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Occupation <span className={styles.requiredStar}>*</span>
											</label>
											<input
												type="text"
												required
												className={styles.formInput}
												value={formData.Father?.occupation || ''}
												onChange={(e) => handleParentChange('Mother', 'occupation', e.target.value)}
											/>
										</div>
									</div>
								</div>



								{/* Guardian Information */}
								<div className={styles.formGroupFull}>
									<h3 className={styles.subSectionTitle}>Guardian Information (Optional)</h3>
									<div className={styles.parentInfoGrid}>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Name
											</label>
											<input
												type="text"
												className={styles.formInput}
												value={formData.Guardian?.name || ''}
												onChange={(e) => handleParentChange('Guardian', 'name', e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Relationship
											</label>
											<input
												type="text"
												className={styles.formInput}
												value={formData.Guardian?.relationship || ''}
												onChange={(e) => handleParentChange('Guardian', 'relationship', e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<label className={styles.formLabel}>
												Occupation
											</label>
											<input
												type="text"
												className={styles.formInput}
												value={formData.Guardian?.occupation || ''}
												onChange={(e) => handleParentChange('Guardian', 'occupation', e.target.value)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Academic Information Section */}
						<div className={styles.formSection}>
							<h2 className={styles.sectionTitle}>Academic Information</h2>
							<div className={styles.formGrid}>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Grade/Class <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="grade"
										required
										className={styles.formSelect}
										value={formData.grade}
										onChange={handleChange}
									>
										<option value="1">Grade 1</option>
										<option value="2">Grade 2</option>
										<option value="3">Grade 3</option>
										<option value="4">Grade 4</option>
										<option value="5">Grade 5</option>
										<option value="6">Grade 6</option>
										<option value="7">Grade 7</option>
										<option value="8">Grade 8</option>
										<option value="9">Grade 9</option>
										<option value="10">Grade 10</option>
										<option value="11">Grade 11</option>
										<option value="12">Grade 12</option>
									</select>
								</div>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>
										Section <span className={styles.requiredStar}>*</span>
									</label>
									<select
										name="section"
										required
										className={styles.formSelect}
										value={formData.section}
										onChange={handleChange}
									>
										<option value="A">Section A</option>
										<option value="B">Section B</option>
										<option value="C">Section C</option>
										<option value="D">Section D</option>
									</select>
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
								<i className="fas fa-save"></i> Save Student
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default StudentForm;
