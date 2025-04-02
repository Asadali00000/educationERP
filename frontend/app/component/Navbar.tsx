import Image from 'next/image'
import React from 'react'
import styles from '../styles/navbar.module.css'
function Navbar() {
	return (
		<div className={`${styles.container}`}>
			<div className={styles.firstContainer}>
				smart
				<span>

				ERP
				</span>
			</div>
			<div className={`${styles.secondContainer}`}>
				<div className={`${styles.productsContainer}`}>

					<span>

						Products
					</span>
					<span className={styles.dropDownLogo}>
						<Image src="/dropDownLogo.png" alt='dropdownLogo' width={20} height={10} />

					</span>
				<div>
					help
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
