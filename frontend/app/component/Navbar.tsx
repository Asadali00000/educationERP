"use client"
import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple, faLinux, faAndroid, faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faVideo, faGraduationCap, faCrown, faBars, faTimes  } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function Navbar() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<div className={`${styles.container}`}>
			<div className={styles.firstContainer}>
				smart
				<span>
					ERP
				</span>
			</div>
			<button
				className={styles.menuButton}
				onClick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
			</button>
			<div className={`${styles.navContainer} ${showMobileMenu ? styles.navContainerMobile : ''}`}>
				<div className={`${styles.productsContainer}`}
					onMouseEnter={() => setShowDropdown(true)}
					onMouseLeave={() => setShowDropdown(false)}
					onClick={()=>setShowDropdown(!showDropdown)}
					 >
					<span className='flex'>
						Products
						<span className={styles.dropDownLogo}>
							<Image src="/dropDownLogo.png" alt='dropdownLogo' width={20} height={10} />
						</span>
					</span>
					{showDropdown && (
						<div className={styles.dropDown} >
							<div className={styles.dropdownSection}>
								<h3 className={styles.sectionTitle}>Desktop</h3>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faWindows} />
									</div>
									<div className={styles.itemContent}>
										<div>Windows</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faApple} />
									</div>
									<div className={styles.itemContent}>
										<div>MacOS</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faLinux} />
									</div>
									<div className={styles.itemContent}>
										<div>Linux</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
							</div>

							<div className={styles.dropdownSection}>
								<h3 className={styles.sectionTitle}>Mobile Apps</h3>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faAndroid} />
									</div>
									<div className={styles.itemContent}>
										<div>Android</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faAppStore} />
									</div>
									<div className={styles.itemContent}>
										<div>iOS</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
							</div>

							<div className={styles.dropdownSection}>
								<h3 className={styles.sectionTitle}>More</h3>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faVideo} />
									</div>
									<div className={styles.itemContent}>
										<div>Live Class</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faCrown} />
									</div>
									<div className={styles.itemContent}>
										<div>smartERP Pro</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
								<div className={styles.dropDownItem}>
									<div className={styles.iconWrapper}>
										<FontAwesomeIcon icon={faGraduationCap} />
									</div>
									<div className={styles.itemContent}>
										<div>smartERP LMS</div>
										<div className={styles.downloadLink}>Coming Soon</div>
									</div>
								</div>
							</div>
						</div>
					)}
					<div>
						Help
					</div>
				</div>
				<div className={styles.authContainer}>
					<div>
						<button type="button" className={styles.signupButton}>Signup</button>
					</div>
					<div>
						<button type="button" className={styles.loginButton}>Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
