import React from 'react'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.column}>
				<h3 className={styles.title}>smartERP</h3>
				<p className={styles.description}>
					Transforming education management for the digital age.
				</p>
				<div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
			</div>

			<div className={styles.column}>
				<h3 className={styles.title}>Quick Links</h3>
				<ul className={styles.linksList}>
					<li><a href="#" className={styles.link}>About Us</a></li>
					<li><a href="#" className={styles.link}>Features</a></li>
					<li><a href="#" className={styles.link}>Pricing</a></li>
					<li><a href="#" className={styles.link}>Contact</a></li>
				</ul>
			</div>

			<div className={styles.column}>
				<h3 className={styles.title}>Support</h3>
				<ul className={styles.linksList}>
					<li><a href="#" className={styles.link}>Help Center</a></li>
					<li><a href="#" className={styles.link}>Documentation</a></li>
					<li><a href="#" className={styles.link}>API Reference</a></li>
					<li><a href="#" className={styles.link}>Status</a></li>
				</ul>
			</div>

			<div className={styles.column}>
				<h3 className={styles.title}>Newsletter</h3>
				<p className={styles.description}>
					Stay updated with our latest features and releases.
				</p>
				<div className={styles.newsletter}>
					<input type="email" placeholder="Enter your email" className={styles.emailInput} />
					<button className={styles.subscribeButton}>Subscribe</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
