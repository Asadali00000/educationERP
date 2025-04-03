import React from 'react';
import styles from '../styles/bottomBanner.module.css';

function BottomBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1>Ready to Transform Your School?</h1>
                <p>Transform your educational management effortlessly with our platform.</p>
				<div className={styles.authContainer}>

                <button type="button" className={styles.signupButton}>Get Started!</button>
				</div>
            </div>
        </div>
    );
}

export default BottomBanner;
